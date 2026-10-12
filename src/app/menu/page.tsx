import type { Metadata } from "next";
import { MenuBrowser } from "@/components/menu/menu-browser";
import { PageShell } from "@/components/layout/page-shell";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = { title: "Menu", description: "Browse the fictional SAMPLE CAFÉ menu of espresso, iced coffee, non-coffee drinks, pastries, and café food." };

export default function MenuPage() {
  return <PageShell><header className="page-hero"><div className="container page-hero-grid"><Reveal><span className="eyebrow">The menu</span><h1 className="title">Good coffee.<br />No shortcuts.</h1></Reveal><Reveal delay={.1}><p className="lead">A focused collection of café staples and house signatures. Prices and offerings are fictional samples for this portfolio demo.</p></Reveal></div></header><section className="section"><div className="container"><MenuBrowser /></div></section></PageShell>;
}
