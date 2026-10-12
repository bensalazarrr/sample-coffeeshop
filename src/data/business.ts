export const business = {
  name: "SAMPLE CAFÉ",
  tagline: "Slow Mornings. Bold Coffee.",
  description: "A fictional specialty coffee concept created as a portfolio demonstration for NinjaTech Guys.",
  address: "Sample address, Tomas Morato Avenue, Quezon City, Philippines",
  addressNote: "Demo location — replace with a verified business address before launch.",
  phoneDisplay: "+63 917 000 0000",
  phoneHref: "tel:+639170000000",
  email: "hello@samplecafe.example",
  messengerUrl: "https://m.me/samplecafe.demo",
  instagramUrl: "https://www.instagram.com/",
  facebookUrl: "https://www.facebook.com/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tomas+Morato+Quezon+City",
  developer: {
    name: "NinjaTech Guys",
    url: "https://example.com/ninjatech-guys",
    placeholder: true,
  },
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 9:00 PM" },
    { days: "Saturday – Sunday", time: "8:00 AM – 10:00 PM" },
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/our-story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
