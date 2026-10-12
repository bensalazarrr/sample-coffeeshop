import type { Metadata } from "next";
import { AtSign, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ContactForm } from "@/components/contact/contact-form";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { business } from "@/data/business";

export const metadata: Metadata = { title: "Visit & Contact", description: "View sample café details, fictional opening hours, contact links, and a frontend-only demo contact form." };

export default function ContactPage() {
  return (
    <PageShell>
      <header className="page-hero"><div className="container page-hero-grid"><Reveal><span className="eyebrow">Visit & contact</span><h1 className="title">Come as you are.<br />Stay awhile.</h1></Reveal><Reveal delay={.1}><p className="lead">Everything here is editable sample information for a fictional Quezon City café. Replace it with verified client details before launch.</p></Reveal></div></header>
      <section className="section"><div className="container contact-grid"><Reveal><div><span className="eyebrow">Find us</span><h2 className="section-title">A good cup is closer than you think.</h2><div className="contact-list"><div className="contact-row"><MapPin /><div><strong>Sample location</strong><span className="muted">{business.address}<br /><small>{business.addressNote}</small></span></div></div><div className="contact-row"><Clock3 /><div><strong>Opening hours</strong>{business.hours.map((entry) => <div className="muted" key={entry.days}>{entry.days}: {entry.time}</div>)}</div></div><div className="contact-row"><Phone /><div><strong>Phone</strong><a href={business.phoneHref}>{business.phoneDisplay}</a> <small className="muted">(demo)</small></div></div><div className="contact-row"><Mail /><div><strong>Email</strong><a href={`mailto:${business.email}`}>{business.email}</a> <small className="muted">(placeholder)</small></div></div><div className="contact-row"><MessageCircle /><div><strong>Messenger</strong><a href={business.messengerUrl} target="_blank" rel="noopener noreferrer">Open demo contact link</a></div></div><div className="contact-row"><AtSign /><div><strong>Social</strong><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a> · <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a></div></div></div></div></Reveal><Reveal delay={.1}><ContactForm /></Reveal></div></section>
      <section className="section-tight"><div className="container"><Reveal><div className="map-card"><div className="map-lines" aria-hidden /><div className="map-copy"><span className="eyebrow" style={{ color: "#d6a878" }}>Sample map area</span><h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", marginBottom: ".8rem" }}>Tomas Morato, Quezon City</h2><p style={{ color: "rgba(246,240,231,.75)" }}>No exact coordinates are used. Open a generic area search until a verified client address is configured.</p><ButtonLink href={business.mapsUrl} external>Open area in Google Maps</ButtonLink></div></div></Reveal></div></section>
      <section className="section"><div className="container" style={{ textAlign: "center" }}><Reveal><span className="eyebrow">Before you go</span><h2 className="section-title">Choose your first cup.</h2><p className="lead" style={{ marginInline: "auto" }}>Take a look at the full menu—from bold espresso to slow afternoon pastries.</p><div className="button-row" style={{ justifyContent: "center" }}><ButtonLink href="/menu">Browse the menu</ButtonLink></div></Reveal></div></section>
    </PageShell>
  );
}
