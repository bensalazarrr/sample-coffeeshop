import Link from "next/link";
import { business, navItems } from "@/data/business";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div><div className="footer-wordmark">SAMPLE<br />CAFÉ</div><p className="muted" style={{ marginTop: "1.5rem" }}>{business.tagline}</p></div>
          <div><p className="label">Explore</p><div className="footer-links">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></div>
          <div><p className="label">Follow</p><div className="footer-links"><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a><a href={business.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a></div></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SAMPLE CAFÉ. All rights reserved. Fictional portfolio concept.</span>
          <span>Built by <a href={business.developer.url} target="_blank" rel="noopener noreferrer">{business.developer.name}{business.developer.placeholder ? " (portfolio placeholder)" : ""}</a></span>
        </div>
      </div>
    </footer>
  );
}
