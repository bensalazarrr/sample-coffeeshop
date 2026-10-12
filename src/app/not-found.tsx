import Link from "next/link";
import { Coffee } from "lucide-react";

export default function NotFound() {
  return <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "7rem 1rem 3rem", textAlign: "center" }}><div><Coffee size={44} style={{ margin: "0 auto 1.5rem", color: "var(--accent)" }} /><span className="eyebrow">404 · Cup not found</span><h1 className="title" style={{ marginBottom: "1rem" }}>This table is empty.</h1><p className="lead" style={{ marginInline: "auto" }}>The page you were looking for has moved, or perhaps it was only here for one slow morning.</p><div className="button-row" style={{ justifyContent: "center" }}><Link className="btn btn-primary" href="/">Return home</Link><Link className="btn btn-secondary" href="/menu">Browse the menu</Link></div></div></main>;
}
