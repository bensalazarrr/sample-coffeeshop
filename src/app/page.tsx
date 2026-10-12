import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bean, Coffee, Heart, MapPin } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { business } from "@/data/business";
import { galleryImages } from "@/data/gallery";
import { menuItems } from "@/data/menu";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = { title: "Slow Mornings. Bold Coffee.", description: "Discover SAMPLE CAFÉ, a fictional specialty coffee concept with handcrafted drinks, warm interiors, and an unhurried spirit." };

const featuredIds = ["spanish-latte", "cold-brew", "matcha-latte", "breakfast-croissant"];

export default function HomePage() {
  const featured = featuredIds.map((id) => menuItems.find((item) => item.id === id)!);
  return (
    <PageShell>
      <section className="hero">
        <div className="hero-media grain"><Image src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2200&q=90" alt="Warmly lit specialty coffee bar with wooden details" fill priority sizes="100vw" style={{ objectFit: "cover" }} /></div>
        <div className="container hero-content">
          <Reveal><span className="eyebrow" style={{ color: "#d6a878" }}>Specialty coffee · Quezon City</span><h1 className="display">Slow Mornings.<br />Bold Coffee.</h1></Reveal>
          <Reveal delay={.18} className="hero-copy"><p>Considered coffee for unhurried days—a warm, modern neighborhood café concept shaped around craft, conversation, and a genuinely good cup.</p><div className="button-row"><ButtonLink href="/menu">Explore our menu</ButtonLink><ButtonLink href="/contact" variant="secondary">Visit our café</ButtonLink></div></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal><div className="image-frame editorial-image"><Image src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1400&q=88" alt="Barista carefully preparing espresso behind the bar" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} /></div></Reveal>
          <Reveal delay={.1}><span className="eyebrow">A slower kind of café</span><h2 className="section-title">Coffee is the ritual. The room is yours.</h2><p className="lead">SAMPLE CAFÉ is an imagined neighborhood space for people who care about what is in the cup—and how a place makes them feel.</p><p className="muted">Our approach is simple: brew with attention, welcome without fuss, and leave enough room in the day for good things to unfold.</p><div className="stats"><div className="stat"><strong>01</strong><span className="label">Thoughtful sourcing</span></div><div className="stat"><strong>02</strong><span className="label">Careful brewing</span></div><div className="stat"><strong>03</strong><span className="label">Warm service</span></div></div></Reveal>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <Reveal><span className="eyebrow">From the bar</span><h2 className="section-title">Signature favorites</h2><p className="lead">Familiar café comforts, made with a little more intention.</p></Reveal>
          <div className="cards-grid" style={{ marginTop: "3rem" }}>
            {featured.map((item, index) => <Reveal key={item.id} delay={index * .06}><article className="drink-card"><div className="image-frame"><Image src={item.image} alt={`${item.name}, a featured Sample Café item`} fill sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 25vw" style={{ objectFit: "cover" }} /></div><div className="drink-card-body">{item.badge && <span className="badge">{item.badge}</span>}<div className="drink-card-heading"><h3>{item.name}</h3><span className="price">₱{item.price}</span></div><p className="muted" style={{ fontSize: ".88rem", margin: 0 }}>{item.description}</p></div></article></Reveal>)}
          </div>
          <div className="button-row" style={{ justifyContent: "center" }}><ButtonLink href="/menu" variant="secondary">View the full menu</ButtonLink></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow">The experience</span><h2 className="section-title" style={{ maxWidth: "12ch" }}>Made carefully. Served warmly.</h2></Reveal>
          <div className="experience-grid">
            <Reveal><div className="experience-card"><Coffee className="experience-icon" /><h3>Craft in every cup</h3><p className="muted">Recipes built for balance, dialed in with care, and finished by hand.</p></div></Reveal>
            <Reveal delay={.08}><div className="experience-card"><Bean className="experience-icon" /><h3>Coffee with character</h3><p className="muted">Beans chosen for clarity, sweetness, and a flavor profile worth slowing down for.</p></div></Reveal>
            <Reveal delay={.16}><div className="experience-card"><Heart className="experience-icon" /><h3>A place to stay</h3><p className="muted">Warm light, comfortable corners, and hospitality that never feels rehearsed.</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container split">
          <Reveal><span className="eyebrow">Our story</span><h2 className="section-title">Built around the space between sips.</h2><p className="lead">We imagined a café that feels composed but never precious—a place where craft is visible and comfort is instinctive.</p><div className="button-row"><ButtonLink href="/our-story" variant="secondary">Read our story</ButtonLink></div></Reveal>
          <Reveal delay={.1}><div style={{ position: "relative", paddingBottom: "3rem" }}><div className="image-frame editorial-image"><Image src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=88" alt="Welcoming café interior with warm wood and greenery" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} /></div><div className="image-frame offset-image"><Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=88" alt="Pour-over coffee being brewed by hand" fill sizes="35vw" style={{ objectFit: "cover" }} /></div></div></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container"><Reveal><span className="eyebrow">Kind words</span><p className="quote">“Come for the coffee. Stay for how the room makes time feel.”</p></Reveal><div className="testimonial-grid" style={{ marginTop: "3rem" }}>{testimonials.map((item, index) => <Reveal key={item.name} delay={index * .08}><figure className="testimonial"><blockquote>“{item.quote}”</blockquote><figcaption><cite>{item.name}</cite><br /><span className="muted label">{item.detail}</span></figcaption></figure></Reveal>)}</div></div>
      </section>

      <section className="section surface">
        <div className="container"><Reveal><span className="eyebrow">A look inside</span><div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "1rem", marginBottom: "2.5rem" }}><h2 className="section-title" style={{ margin: 0 }}>In the café</h2><Link className="details-btn" href="/gallery">View gallery →</Link></div></Reveal><div className="preview-grid">{galleryImages.slice(0, 5).map((item, i) => <Reveal key={item.id} className={i === 0 ? "wide" : i === 1 ? "tall" : ""}><div className="image-frame" style={{ minHeight: i === 0 ? "31rem" : "15rem" }}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 680px) 50vw, 33vw" style={{ objectFit: "cover" }} /></div></Reveal>)}</div></div>
      </section>

      <section className="section">
        <div className="container split"><Reveal><div><span className="eyebrow">Visit us</span><h2 className="section-title">Your table is waiting.</h2><p className="lead">Find our fictional sample location in Quezon City and imagine your next slow morning with us.</p><p className="muted"><MapPin size={18} style={{ display: "inline", marginRight: ".5rem" }} />{business.address}</p><div className="button-row"><ButtonLink href="/contact">Plan your visit</ButtonLink></div></div></Reveal><Reveal><div className="surface" style={{ padding: "clamp(2rem, 5vw, 4rem)" }}><p className="label">Opening hours</p>{business.hours.map((entry) => <div key={entry.days} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid var(--border)" }}><span>{entry.days}</span><strong>{entry.time}</strong></div>)}<p className="muted" style={{ marginTop: "1.2rem", fontSize: ".78rem" }}>{business.addressNote}</p></div></Reveal></div>
      </section>
    </PageShell>
  );
}
