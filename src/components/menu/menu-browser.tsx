"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { menuCategories, menuItems } from "@/data/menu";
import type { MenuItem } from "@/types";

export function MenuBrowser() {
  const [category, setCategory] = useState<(typeof menuCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return menuItems.filter((item) => (category === "All" || item.category === category) && (!needle || `${item.name} ${item.description}`.toLowerCase().includes(needle)));
  }, [category, query]);

  useEffect(() => {
    if (!selected) return;
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [selected]);

  return (
    <>
      <div className="menu-toolbar">
        <div className="filters" role="group" aria-label="Filter menu by category">
          {menuCategories.map((item) => <button key={item} className={`filter-btn ${category === item ? "active" : ""}`} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}
        </div>
        <label className="search-wrap">
          <span className="sr-only">Search menu</span><Search size={18} aria-hidden />
          <input className="search-input" type="search" placeholder="Search drinks and food…" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
      </div>
      <motion.div className="cards-grid" layout aria-live="polite">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.article className="drink-card" key={item.id} layout initial={reduced ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={reduced ? undefined : { opacity: 0, scale: .97 }} transition={{ duration: .25 }}>
              <div className="image-frame"><Image src={item.image} alt={`${item.name}, served at Sample Café`} fill sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 25vw" style={{ objectFit: "cover" }} /></div>
              <div className="drink-card-body">
                {item.badge && <span className="badge">{item.badge}</span>}
                <div className="drink-card-heading"><h2 style={{ fontSize: "1.8rem", marginBottom: ".55rem" }}>{item.name}</h2><span className="price">₱{item.price}</span></div>
                <p className="muted" style={{ fontSize: ".9rem", marginBottom: 0 }}>{item.description}</p>
                <button className="details-btn" onClick={() => setSelected(item)} aria-label={`View details for ${item.name}`}>View details</button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && <div className="empty-state"><Search size={30} aria-hidden style={{ margin: "0 auto 1rem", color: "var(--accent)" }} /><h2 style={{ fontSize: "2.2rem" }}>Nothing matched that search.</h2><p className="muted">Try a broader term or choose another category.</p><button className="btn btn-secondary" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></div>}
      </motion.div>
      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
            <motion.div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-title" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}>
              <div className="image-frame"><Image src={selected.image} alt={`${selected.name} product detail`} fill sizes="(max-width: 680px) 100vw, 45vw" style={{ objectFit: "cover" }} priority /></div>
              <div className="modal-copy">
                <button ref={closeRef} className="icon-button modal-close" onClick={() => setSelected(null)} aria-label="Close product details"><X size={18} /></button>
                <span className="eyebrow">{selected.category}</span>
                <h2 id="product-title">{selected.name}</h2>
                <p className="price" style={{ fontSize: "1.2rem" }}>₱{selected.price}</p>
                <p className="muted">{selected.description}</p>
                {(selected.dietary?.length || selected.allergens?.length) && <div className="tags">{selected.dietary?.map((tag) => <span className="tag" key={tag}>{tag}</span>)}{selected.allergens?.map((tag) => <span className="tag" key={tag}>Contains {tag}</span>)}</div>}
                <p className="muted" style={{ marginTop: "1.5rem", fontSize: ".75rem" }}>Menu information is part of a fictional portfolio demo. Ask staff about ingredients when adapting this project for a real café.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
