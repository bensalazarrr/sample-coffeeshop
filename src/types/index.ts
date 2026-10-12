export type MenuCategory = "Hot Coffee" | "Iced Coffee" | "Non-Coffee" | "Pastries" | "Food";
export type MenuBadge = "Bestseller" | "New" | "Signature";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  badge?: MenuBadge;
  dietary?: string[];
  allergens?: string[];
}

export type GalleryCategory = "Coffee" | "Food" | "Interior" | "Behind the Scenes";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  orientation: "portrait" | "landscape" | "square";
}
