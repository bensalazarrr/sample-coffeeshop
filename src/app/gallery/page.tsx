import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/gallery/gallery-browser";
import { PageShell } from "@/components/layout/page-shell";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = { title: "Gallery", description: "Explore a cinematic café lookbook of coffee, food, interiors, and behind-the-scenes craft." };

export default function GalleryPage() {
  return <PageShell><header className="page-hero"><div className="container page-hero-grid"><Reveal><span className="eyebrow">The lookbook</span><h1 className="title">Details worth<br />noticing.</h1></Reveal><Reveal delay={.1}><p className="lead">From the first pour to the late-afternoon light—a visual study of café life, made for lingering.</p></Reveal></div></header><section className="section"><div className="container"><GalleryBrowser /></div></section></PageShell>;
}
