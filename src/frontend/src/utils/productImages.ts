import type { Product } from "../backend.d";

// Category to image mappings — multiple images per category for variety
const categoryImages: Record<string, string[]> = {
  "Bridal Heritage": [
    "/assets/generated/product-bridal-necklace.dim_800x800.jpg",
    "/assets/generated/product-bridal-set-heavy.dim_800x800.jpg",
    "/assets/generated/product-maang-tikka.dim_800x800.jpg",
    "/assets/generated/product-kundan-choker.dim_800x800.jpg",
    "/assets/generated/collection-bridal-heritage.dim_800x600.jpg",
    "/assets/generated/product-polki-choker.dim_800x800.jpg",
    "/assets/generated/product-polki-earrings.dim_800x800.jpg",
  ],
  "Diamond Collection": [
    "/assets/generated/product-diamond-ring.dim_800x800.jpg",
    "/assets/generated/product-diamond-studs.dim_800x800.jpg",
    "/assets/generated/product-diamond-pendant.dim_800x800.jpg",
    "/assets/generated/product-engagement-ring.dim_800x800.jpg",
    "/assets/generated/collection-diamond.dim_800x600.jpg",
    "/assets/generated/product-cocktail-ring.dim_800x800.jpg",
    "/assets/generated/collection-diamond-rings.dim_800x600.jpg",
  ],
  "Contemporary Gold": [
    "/assets/generated/product-contemporary-necklace.dim_800x800.jpg",
    "/assets/generated/product-gold-chain.dim_800x800.jpg",
    "/assets/generated/product-gold-bangles.dim_800x800.jpg",
    "/assets/generated/product-mangalsutra.dim_800x800.jpg",
    "/assets/generated/collection-contemporary-gold.dim_800x600.jpg",
    "/assets/generated/product-enamel-bangles.dim_800x800.jpg",
    "/assets/generated/product-rope-chain.dim_800x800.jpg",
  ],
  "Polki & Kundan": [
    "/assets/generated/product-polki-choker.dim_800x800.jpg",
    "/assets/generated/product-kundan-choker.dim_800x800.jpg",
    "/assets/generated/product-polki-set.dim_800x800.jpg",
    "/assets/generated/product-kundan-set.dim_800x800.jpg",
    "/assets/generated/product-polki-earrings.dim_800x800.jpg",
    "/assets/generated/collection-polki-kundan.dim_800x600.jpg",
  ],
  "Everyday Fine Jewellery": [
    "/assets/generated/product-gold-jhumka.dim_800x800.jpg",
    "/assets/generated/product-gold-bangles.dim_800x800.jpg",
    "/assets/generated/product-mangalsutra.dim_800x800.jpg",
    "/assets/generated/product-diamond-studs.dim_800x800.jpg",
    "/assets/generated/product-diamond-pendant.dim_800x800.jpg",
    "/assets/generated/collection-everyday.dim_800x600.jpg",
    "/assets/generated/product-enamel-bangles.dim_800x800.jpg",
  ],
  "Custom Creations": [
    "/assets/generated/collection-custom.dim_800x600.jpg",
    "/assets/generated/product-bridal-necklace.dim_800x800.jpg",
    "/assets/generated/product-diamond-ring.dim_800x800.jpg",
    "/assets/generated/product-kundan-choker.dim_800x800.jpg",
    "/assets/generated/product-gold-bangles.dim_800x800.jpg",
  ],
  "Bridal Sets": [
    "/assets/generated/product-bridal-set-heavy.dim_800x800.jpg",
    "/assets/generated/product-bridal-necklace.dim_800x800.jpg",
    "/assets/generated/product-kundan-choker.dim_800x800.jpg",
    "/assets/generated/product-polki-set.dim_800x800.jpg",
    "/assets/generated/product-maang-tikka.dim_800x800.jpg",
    "/assets/generated/collection-bridal-sets.dim_800x600.jpg",
    "/assets/generated/product-polki-earrings.dim_800x800.jpg",
  ],
  "Statement Necklaces": [
    "/assets/generated/product-statement-necklace.dim_800x800.jpg",
    "/assets/generated/product-contemporary-necklace.dim_800x800.jpg",
    "/assets/generated/product-kundan-choker.dim_800x800.jpg",
    "/assets/generated/product-polki-choker.dim_800x800.jpg",
    "/assets/generated/product-bridal-necklace.dim_800x800.jpg",
    "/assets/generated/collection-statement-necklaces.dim_800x600.jpg",
  ],
  "Temple Jewellery": [
    "/assets/generated/product-temple-jewellery.dim_800x800.jpg",
    "/assets/generated/product-temple-necklace.dim_800x800.jpg",
    "/assets/generated/product-gold-jhumka.dim_800x800.jpg",
    "/assets/generated/product-bridal-necklace.dim_800x800.jpg",
    "/assets/generated/collection-temple-jewellery.dim_800x600.jpg",
    "/assets/generated/product-polki-earrings.dim_800x800.jpg",
  ],
  "Diamond Rings": [
    "/assets/generated/product-diamond-ring.dim_800x800.jpg",
    "/assets/generated/product-engagement-ring.dim_800x800.jpg",
    "/assets/generated/product-cocktail-ring.dim_800x800.jpg",
    "/assets/generated/collection-diamond-rings.dim_800x600.jpg",
    "/assets/generated/product-diamond-studs.dim_800x800.jpg",
    "/assets/generated/product-diamond-pendant.dim_800x800.jpg",
  ],
  "Engagement Rings": [
    "/assets/generated/product-engagement-ring.dim_800x800.jpg",
    "/assets/generated/product-diamond-ring.dim_800x800.jpg",
    "/assets/generated/product-cocktail-ring.dim_800x800.jpg",
    "/assets/generated/collection-diamond-rings.dim_800x600.jpg",
    "/assets/generated/product-diamond-pendant.dim_800x800.jpg",
    "/assets/generated/product-diamond-studs.dim_800x800.jpg",
  ],
  "Cocktail Rings": [
    "/assets/generated/product-cocktail-ring.dim_800x800.jpg",
    "/assets/generated/product-diamond-ring.dim_800x800.jpg",
    "/assets/generated/product-polki-choker.dim_800x800.jpg",
    "/assets/generated/product-engagement-ring.dim_800x800.jpg",
    "/assets/generated/collection-diamond-rings.dim_800x600.jpg",
  ],
  "Polki Collection": [
    "/assets/generated/product-polki-set.dim_800x800.jpg",
    "/assets/generated/product-polki-choker.dim_800x800.jpg",
    "/assets/generated/product-polki-earrings.dim_800x800.jpg",
    "/assets/generated/product-maang-tikka.dim_800x800.jpg",
    "/assets/generated/product-bridal-necklace.dim_800x800.jpg",
    "/assets/generated/collection-polki.dim_800x600.jpg",
  ],
  "Kundan Collection": [
    "/assets/generated/product-kundan-set.dim_800x800.jpg",
    "/assets/generated/product-kundan-choker.dim_800x800.jpg",
    "/assets/generated/product-polki-choker.dim_800x800.jpg",
    "/assets/generated/product-gold-jhumka.dim_800x800.jpg",
    "/assets/generated/collection-kundan.dim_800x600.jpg",
    "/assets/generated/product-enamel-bangles.dim_800x800.jpg",
  ],
  "Heritage Bangles": [
    "/assets/generated/product-heritage-bangles.dim_800x800.jpg",
    "/assets/generated/product-gold-bangles.dim_800x800.jpg",
    "/assets/generated/product-enamel-bangles.dim_800x800.jpg",
    "/assets/generated/collection-heirloom.dim_800x600.jpg",
    "/assets/generated/product-polki-set.dim_800x800.jpg",
  ],
  "Gold Chains": [
    "/assets/generated/product-gold-chain.dim_800x800.jpg",
    "/assets/generated/product-rope-chain.dim_800x800.jpg",
    "/assets/generated/product-contemporary-necklace.dim_800x800.jpg",
    "/assets/generated/collection-contemporary-gold.dim_800x600.jpg",
    "/assets/generated/product-mangalsutra.dim_800x800.jpg",
  ],
  "Pendant Sets": [
    "/assets/generated/product-pendant-set.dim_800x800.jpg",
    "/assets/generated/product-diamond-pendant.dim_800x800.jpg",
    "/assets/generated/product-diamond-studs.dim_800x800.jpg",
    "/assets/generated/product-temple-necklace.dim_800x800.jpg",
    "/assets/generated/collection-diamond.dim_800x600.jpg",
  ],
  "Luxury Earrings": [
    "/assets/generated/product-luxury-earrings.dim_800x800.jpg",
    "/assets/generated/product-gold-jhumka.dim_800x800.jpg",
    "/assets/generated/product-polki-earrings.dim_800x800.jpg",
    "/assets/generated/product-diamond-studs.dim_800x800.jpg",
    "/assets/generated/product-temple-jewellery.dim_800x800.jpg",
    "/assets/generated/collection-everyday.dim_800x600.jpg",
  ],
  "Limited Edition Collection": [
    "/assets/generated/product-limited-edition.dim_800x800.jpg",
    "/assets/generated/product-heirloom-piece.dim_800x800.jpg",
    "/assets/generated/product-polki-set.dim_800x800.jpg",
    "/assets/generated/product-diamond-ring.dim_800x800.jpg",
    "/assets/generated/collection-limited-edition.dim_800x600.jpg",
  ],
  "Heirloom Collection": [
    "/assets/generated/product-heirloom-piece.dim_800x800.jpg",
    "/assets/generated/product-heirloom-necklace.dim_800x800.jpg",
    "/assets/generated/product-kundan-choker.dim_800x800.jpg",
    "/assets/generated/product-polki-choker.dim_800x800.jpg",
    "/assets/generated/product-bridal-necklace.dim_800x800.jpg",
    "/assets/generated/collection-heirloom.dim_800x600.jpg",
  ],
  "Festive Collection": [
    "/assets/generated/product-festive-set.dim_800x800.jpg",
    "/assets/generated/product-festive-necklace.dim_800x800.jpg",
    "/assets/generated/product-gold-jhumka.dim_800x800.jpg",
    "/assets/generated/product-enamel-bangles.dim_800x800.jpg",
    "/assets/generated/product-polki-earrings.dim_800x800.jpg",
    "/assets/generated/collection-festive.dim_800x600.jpg",
  ],
};

const collectionImages: Record<string, string> = {
  "Bridal Heritage":
    "/assets/generated/collection-bridal-heritage.dim_800x600.jpg",
  "Diamond Collection": "/assets/generated/collection-diamond.dim_800x600.jpg",
  "Contemporary Gold":
    "/assets/generated/collection-contemporary-gold.dim_800x600.jpg",
  "Polki & Kundan": "/assets/generated/collection-polki-kundan.dim_800x600.jpg",
  "Everyday Fine Jewellery":
    "/assets/generated/collection-everyday.dim_800x600.jpg",
  "Custom Creations": "/assets/generated/collection-custom.dim_800x600.jpg",
  "Bridal Sets": "/assets/generated/collection-bridal-sets.dim_800x600.jpg",
  "Statement Necklaces":
    "/assets/generated/collection-statement-necklaces.dim_800x600.jpg",
  "Temple Jewellery":
    "/assets/generated/collection-temple-jewellery.dim_800x600.jpg",
  "Diamond Rings": "/assets/generated/collection-diamond-rings.dim_800x600.jpg",
  "Engagement Rings":
    "/assets/generated/collection-diamond-rings.dim_800x600.jpg",
  "Cocktail Rings":
    "/assets/generated/collection-diamond-rings.dim_800x600.jpg",
  "Polki Collection": "/assets/generated/collection-polki.dim_800x600.jpg",
  "Kundan Collection": "/assets/generated/collection-kundan.dim_800x600.jpg",
  "Heritage Bangles": "/assets/generated/collection-heirloom.dim_800x600.jpg",
  "Gold Chains":
    "/assets/generated/collection-contemporary-gold.dim_800x600.jpg",
  "Pendant Sets": "/assets/generated/collection-diamond.dim_800x600.jpg",
  "Luxury Earrings": "/assets/generated/collection-everyday.dim_800x600.jpg",
  "Limited Edition Collection":
    "/assets/generated/collection-limited-edition.dim_800x600.jpg",
  "Heirloom Collection":
    "/assets/generated/collection-heirloom.dim_800x600.jpg",
  "Festive Collection": "/assets/generated/collection-festive.dim_800x600.jpg",
};

export function getProductImage(product: Product, index?: number): string {
  const images = categoryImages[product.category] || [
    "/assets/generated/collection-everyday.dim_800x600.jpg",
  ];
  // Use product ID for stable, well-distributed image selection
  const idHash = Number(product.id % BigInt(images.length));
  const idx = index !== undefined ? index : idHash;
  return images[Math.abs(idx) % images.length];
}

export function getCollectionImage(category: string): string {
  return (
    collectionImages[category] ||
    "/assets/generated/collection-everyday.dim_800x600.jpg"
  );
}

export function formatINR(paise: bigint): string {
  const rupees = Number(paise) / 100;
  // Indian number formatting: X,XX,XXX
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(rupees);
  return formatted;
}

export function formatINRNumber(paise: bigint): string {
  const rupees = Number(paise) / 100;
  return new Intl.NumberFormat("en-IN").format(rupees);
}

// Premium tag derivation — purely from product name & category (no tag field on Product)
const tagRules: Array<{ keywords: string[]; tag: string }> = [
  {
    keywords: ["royal", "maharani", "emperor", "imperial", "mughal"],
    tag: "Signature Piece",
  },
  {
    keywords: [
      "bridal",
      "bride",
      "wedding",
      "trousseau",
      "chooda",
      "saubhagya",
    ],
    tag: "Bridal Favourite",
  },
  {
    keywords: ["limited", "rare", "exclusive", "one-of-a-kind", "bespoke"],
    tag: "Limited Edition",
  },
  {
    keywords: ["new", "debut", "introducing", "launch"],
    tag: "New Arrival",
  },
];

const categoryTagMap: Record<string, string> = {
  "Limited Edition Collection": "Limited Edition",
  "Heirloom Collection": "Signature Piece",
  "Bridal Sets": "Bridal Favourite",
  "Bridal Heritage": "Bridal Favourite",
};

export function getProductTag(product: Product): string {
  // Category-level default
  if (categoryTagMap[product.category]) return categoryTagMap[product.category];

  const nameLower = product.name.toLowerCase();
  for (const rule of tagRules) {
    if (rule.keywords.some((kw) => nameLower.includes(kw))) return rule.tag;
  }

  // For featured products in premium categories, mark Bestseller
  if (
    product.featured &&
    (product.category === "Diamond Collection" ||
      product.category === "Polki Collection" ||
      product.category === "Polki & Kundan")
  ) {
    return "Bestseller";
  }

  return "";
}
