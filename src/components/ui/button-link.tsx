import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ButtonLink({ href, children, variant = "primary", external = false }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; external?: boolean }) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return <Link className={`btn btn-${variant}`} href={href} {...props}>{children}<ArrowUpRight size={16} aria-hidden /></Link>;
}
