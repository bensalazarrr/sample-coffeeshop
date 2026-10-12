import type { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  { id: "pour", src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88", alt: "Barista pouring a slow filter coffee into a glass server", category: "Behind the Scenes", orientation: "portrait" },
  { id: "interior-one", src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=88", alt: "Warm café counter lit by amber pendant lights", category: "Interior", orientation: "landscape" },
  { id: "latte-art", src: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1200&q=88", alt: "Close-up of precise rosetta latte art", category: "Coffee", orientation: "square" },
  { id: "beans", src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=88", alt: "Roasted coffee beans spread across a wooden surface", category: "Behind the Scenes", orientation: "landscape" },
  { id: "croissant", src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=88", alt: "Freshly baked golden croissants on a cooling rack", category: "Food", orientation: "portrait" },
  { id: "espresso", src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1200&q=88", alt: "Fresh espresso in a small ceramic cup", category: "Coffee", orientation: "square" },
  { id: "seating", src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=88", alt: "Quiet modern café seating with plants and natural light", category: "Interior", orientation: "landscape" },
  { id: "cold-coffee", src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=88", alt: "Iced milk coffee with layered espresso", category: "Coffee", orientation: "portrait" },
  { id: "barista", src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=88", alt: "Barista preparing coffee behind the espresso bar", category: "Behind the Scenes", orientation: "portrait" },
  { id: "cake", src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=88", alt: "Celebration cake with cream frosting on a café table", category: "Food", orientation: "square" },
  { id: "coffee-table", src: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1400&q=88", alt: "Two handcrafted coffee drinks shared across a wooden table", category: "Coffee", orientation: "landscape" },
  { id: "details", src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=1400&q=88", alt: "Minimal café table details in soft window light", category: "Interior", orientation: "portrait" },
];

export const galleryCategories = ["All", "Coffee", "Food", "Interior", "Behind the Scenes"] as const;
