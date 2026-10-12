"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryCategories, galleryImages } from "@/data/gallery";
import type { GalleryImage } from "@/types";

export function GalleryBrowser() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const images = category === "All" ? galleryImages : galleryImages.filter((item) => item.category === category);
  const currentIndex = selected ? images.findIndex((item) => item.id === selected.id) : -1;
  const move = useCallback((direction: number) => {
    if (!selected || images.length < 2) return;
    setSelected(images[(currentIndex + direction + images.length) % images.length]);
  }, [currentIndex, images, selected]);

  useEffect(() => {
    if (!selected) return;
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [move, selected]);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter gallery" style={{ marginBottom: "2.5rem" }}>
        {galleryCategories.map((item) => <button key={item} className={`filter-btn ${category === item ? "active" : ""}`} onClick={() => { setCategory(item); setSelected(null); }} aria-pressed={category === item}>{item}</button>)}
      </div>
      <motion.div className="gallery-grid" layout>
        <AnimatePresence mode="popLayout">
          {images.map((item) => (
            <motion.button className="gallery-item" key={item.id} layout initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0 }} onClick={() => setSelected(item)} aria-label={`Open image: ${item.alt}`}>
              <div className={`image-frame ${item.orientation}`}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} /><span className="gallery-caption"><span className="label">{item.category}</span></span></div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selected && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
            <button ref={closeRef} className="icon-button lightbox-close" onClick={() => setSelected(null)} aria-label="Close lightbox"><X size={20} /></button>
            <button className="icon-button lightbox-nav prev" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button>
            <motion.figure className="lightbox-figure" key={selected.id} initial={reduced ? false : { opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }}>
              <Image src={selected.src} alt={selected.alt} fill sizes="95vw" style={{ objectFit: "contain" }} priority />
              <figcaption>{selected.alt} · {currentIndex + 1} of {images.length}</figcaption>
            </motion.figure>
            <button className="icon-button lightbox-nav next" onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
