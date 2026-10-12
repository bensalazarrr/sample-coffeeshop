import type { MenuItem } from "@/types";

const coffee = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85";
const espresso = "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1000&q=85";
const latte = "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1000&q=85";
const iced = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85";
const matcha = "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1000&q=85";
const pastry = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85";
const cake = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85";
const sandwich = "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85";

export const menuItems: MenuItem[] = [
  { id: "espresso", name: "Espresso", category: "Hot Coffee", price: 100, description: "A focused double shot with dark chocolate sweetness and a lingering caramel finish.", image: espresso, dietary: ["Vegan"], badge: "Signature" },
  { id: "americano", name: "Americano", category: "Hot Coffee", price: 120, description: "Espresso opened with hot water for a clean, aromatic and quietly complex cup.", image: coffee, dietary: ["Vegan"] },
  { id: "cappuccino", name: "Cappuccino", category: "Hot Coffee", price: 150, description: "Equal parts espresso, steamed milk and cloud-like foam, finished with cacao.", image: latte, allergens: ["Milk"] },
  { id: "cafe-latte", name: "Café Latte", category: "Hot Coffee", price: 155, description: "Silky steamed milk folded through espresso with a soft, mellow finish.", image: latte, allergens: ["Milk"] },
  { id: "spanish-latte", name: "Spanish Latte", category: "Hot Coffee", price: 165, description: "A rich house favorite with espresso, milk and just enough condensed sweetness.", image: coffee, allergens: ["Milk"], badge: "Bestseller" },
  { id: "iced-americano", name: "Iced Americano", category: "Iced Coffee", price: 130, description: "Bold espresso poured over cold filtered water and ice—bright, brisk and refreshing.", image: iced, dietary: ["Vegan"] },
  { id: "iced-latte", name: "Iced Latte", category: "Iced Coffee", price: 165, description: "Fresh espresso, cold milk and ice in an effortless everyday classic.", image: iced, allergens: ["Milk"] },
  { id: "iced-spanish-latte", name: "Iced Spanish Latte", category: "Iced Coffee", price: 175, description: "Creamy, gently sweet and built around a full-bodied double espresso.", image: iced, allergens: ["Milk"], badge: "Signature" },
  { id: "caramel-macchiato", name: "Iced Caramel Macchiato", category: "Iced Coffee", price: 185, description: "Layered espresso, vanilla milk and a measured ribbon of caramel.", image: iced, allergens: ["Milk"] },
  { id: "cold-brew", name: "Cold Brew", category: "Iced Coffee", price: 170, description: "Slow-steeped for eighteen hours for a rounded cup with cocoa depth.", image: coffee, dietary: ["Vegan"], badge: "New" },
  { id: "matcha-latte", name: "Matcha Latte", category: "Non-Coffee", price: 175, description: "Ceremonial-style matcha whisked smooth with your choice of milk.", image: matcha, allergens: ["Milk"] },
  { id: "iced-chocolate", name: "Iced Chocolate", category: "Non-Coffee", price: 160, description: "Deep cocoa, cold milk and a pinch of sea salt over ice.", image: iced, allergens: ["Milk"] },
  { id: "strawberry-milk", name: "Strawberry Milk", category: "Non-Coffee", price: 155, description: "House strawberry compote and chilled milk with real fruit pieces.", image: matcha, allergens: ["Milk"] },
  { id: "chai-latte", name: "Chai Latte", category: "Non-Coffee", price: 165, description: "Black tea and warming spices balanced with velvety steamed milk.", image: latte, allergens: ["Milk"] },
  { id: "butter-croissant", name: "Butter Croissant", category: "Pastries", price: 110, description: "Flaky, deeply golden layers with a tender buttery center.", image: pastry, allergens: ["Gluten", "Milk", "Egg"] },
  { id: "chocolate-croissant", name: "Chocolate Croissant", category: "Pastries", price: 135, description: "Laminated pastry wrapped around two batons of bittersweet chocolate.", image: pastry, allergens: ["Gluten", "Milk", "Egg"] },
  { id: "blueberry-cheesecake", name: "Blueberry Cheesecake", category: "Pastries", price: 185, description: "Creamy baked cheesecake, biscuit base and bright blueberry compote.", image: cake, allergens: ["Gluten", "Milk", "Egg"] },
  { id: "banana-bread", name: "Banana Bread", category: "Pastries", price: 120, description: "Moist banana loaf with toasted walnuts and muscovado sugar.", image: cake, allergens: ["Gluten", "Egg", "Tree nuts"] },
  { id: "ham-cheese", name: "Ham & Cheese Sandwich", category: "Food", price: 195, description: "Smoked ham, melted cheese and mustard butter on toasted sourdough.", image: sandwich, allergens: ["Gluten", "Milk"] },
  { id: "chicken-pesto", name: "Chicken Pesto Sandwich", category: "Food", price: 225, description: "Roasted chicken, basil pesto, tomato and greens on country bread.", image: sandwich, allergens: ["Gluten", "Milk", "Tree nuts"] },
  { id: "breakfast-croissant", name: "Breakfast Croissant", category: "Food", price: 210, description: "Soft egg, smoked ham and cheddar tucked into a warm croissant.", image: pastry, allergens: ["Gluten", "Milk", "Egg"], badge: "Bestseller" },
];

export const menuCategories = ["All", "Hot Coffee", "Iced Coffee", "Non-Coffee", "Pastries", "Food"] as const;
