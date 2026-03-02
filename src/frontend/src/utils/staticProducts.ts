import type { Product } from "../backend.d";

// Frontend-only product catalogue — luxury pricing in paise (1 rupee = 100 paise)
// IDs start at 1000n to avoid conflicts with backend IDs (1–10)
export const staticProducts: Product[] = [
  // ────────────────────────────────────────────────
  // BRIDAL HERITAGE
  // ────────────────────────────────────────────────
  {
    id: 1200n,
    name: "Nayra Bridal Grand Haar Set",
    category: "Bridal Heritage",
    description:
      "Elaborate 22k gold bridal haar with Kundan centre pieces, ruby-emerald florals and matching jhumkas. The ultimate heirloom statement.",
    price: 78500000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Kundan, Rubies, Emeralds",
    weight: "175g",
  },
  {
    id: 1201n,
    name: "Mughal Maang Tikka & Passa Set",
    category: "Bridal Heritage",
    description:
      "Ornate gold maang tikka with large centre Polki diamond and matching passa. Traditional Mughal craftsmanship for the modern bride.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Pearls",
    weight: "60g",
  },
  {
    id: 1202n,
    name: "Heritage Choker & Jhumka Set",
    category: "Bridal Heritage",
    description:
      "Broad Kundan choker with seven stone rows and intricate meenakari reverse work. Paired with grand gold jhumkas.",
    price: 52000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Kundan, Meenakari",
    weight: "130g",
  },
  {
    id: 1203n,
    name: "Rajputana Bajuband Set",
    category: "Bridal Heritage",
    description:
      "Pair of handcrafted Rajputana armlets in 22k gold with Polki diamonds and red enamel work. An imperial bridal adornment.",
    price: 28000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Enamel",
    weight: "90g",
  },
  {
    id: 1204n,
    name: "Bridal Rani Haar Long Necklace",
    category: "Bridal Heritage",
    description:
      "Long 32-inch Rani haar in 22k gold with alternating ruby and emerald studded links. Timeless bridal magnificence.",
    price: 65000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Rubies, Emeralds",
    weight: "160g",
  },
  {
    id: 1205n,
    name: "Nath Bridal Nose Ring",
    category: "Bridal Heritage",
    description:
      "Traditional Rajasthani bridal nath in 22k gold with Polki diamonds and seed pearl drops. Worn by brides for centuries.",
    price: 18500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Pearls",
    weight: "25g",
  },
  {
    id: 1206n,
    name: "Heritage Gold Kamarbandh",
    category: "Bridal Heritage",
    description:
      "Ornate bridal waist belt in 22k gold with floral motifs, Kundan inlay and pearl drops. A rare bridal treasure.",
    price: 42000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Kundan, Pearls",
    weight: "120g",
  },

  // ────────────────────────────────────────────────
  // DIAMOND COLLECTION
  // ────────────────────────────────────────────────
  {
    id: 1210n,
    name: "Rivière Diamond Necklace",
    category: "Diamond Collection",
    description:
      "Seventeen brilliant-cut diamonds totalling 8.5 carats set in a seamless platinum line necklace. Pure, uninterrupted brilliance.",
    price: 52000000n,
    inStock: true,
    featured: true,
    material: "Platinum, 8.5ct Round Brilliant Diamonds",
    weight: "18g",
  },
  {
    id: 1211n,
    name: "Diamond Floral Choker",
    category: "Diamond Collection",
    description:
      "Intricate floral diamond choker in 18k white gold with pavé-set petals totalling 6.2 carat. Effortlessly magnificent.",
    price: 38500000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 6.2ct Diamonds",
    weight: "22g",
  },
  {
    id: 1212n,
    name: "IGI Diamond Tennis Bracelet",
    category: "Diamond Collection",
    description:
      "Classic four-prong diamond tennis bracelet with 42 IGI certified round brilliants totalling 5 carats in 18k white gold.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 5ct IGI Diamonds",
    weight: "12g",
  },
  {
    id: 1213n,
    name: "Diamond Drop Earrings",
    category: "Diamond Collection",
    description:
      "Elegant pear-shaped diamond drops of 1.2ct each in 18k white gold lever-back setting. Understated luxury for every occasion.",
    price: 18500000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 2.4ct Pear Diamonds",
    weight: "7g",
  },
  {
    id: 1214n,
    name: "Solitaire Diamond Pendant",
    category: "Diamond Collection",
    description:
      "Single 2-carat IGI certified round brilliant diamond suspended on a platinum chain. Perfection in simplicity.",
    price: 16500000n,
    inStock: true,
    featured: true,
    material: "Platinum, 2ct IGI Diamond",
    weight: "6g",
  },
  {
    id: 1215n,
    name: "Diamond Bangle Pair",
    category: "Diamond Collection",
    description:
      "Pair of 18k white gold bangles with channel-set round brilliant diamonds totalling 4 carats. Refined everyday luxury.",
    price: 28500000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 4ct Diamonds",
    weight: "35g",
  },
  {
    id: 1216n,
    name: "Fancy Yellow Diamond Ring",
    category: "Diamond Collection",
    description:
      "Rare 1.5ct fancy yellow cushion diamond in a halo of colourless diamonds set in 18k yellow gold.",
    price: 22500000n,
    inStock: true,
    featured: false,
    material: "18K Yellow Gold, Fancy Yellow & White Diamonds",
    weight: "6.5g",
  },

  // ────────────────────────────────────────────────
  // CONTEMPORARY GOLD
  // ────────────────────────────────────────────────
  {
    id: 1220n,
    name: "Geometric Gold Collar Necklace",
    category: "Contemporary Gold",
    description:
      "Architectural 22k gold collar necklace with clean geometric links. Modern Indian luxury meeting minimalist sensibility.",
    price: 22500000n,
    inStock: true,
    featured: true,
    material: "22K Gold",
    weight: "55g",
  },
  {
    id: 1221n,
    name: "Contemporary Hoop Earrings",
    category: "Contemporary Gold",
    description:
      "Large hammered 22k gold hoops with a subtle brushed finish. Effortlessly elegant for every modern occasion.",
    price: 8500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "18g",
  },
  {
    id: 1222n,
    name: "Modern Gold Cuff Bangle",
    category: "Contemporary Gold",
    description:
      "Bold open-ended 22k gold cuff with textured bark finish. A sculptural statement piece for the contemporary woman.",
    price: 15500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "42g",
  },
  {
    id: 1223n,
    name: "Layered Delicate Gold Chain Set",
    category: "Contemporary Gold",
    description:
      "Set of three 22k gold chain necklaces in graduating lengths — a sleek, modern layering ensemble.",
    price: 18500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "38g",
  },
  {
    id: 1224n,
    name: "Diamond-Tipped Gold Studs",
    category: "Contemporary Gold",
    description:
      "Minimalist 22k gold studs with a single diamond tip. The perfect understated luxury for every day.",
    price: 7500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, 0.4ct Diamond",
    weight: "4g",
  },
  {
    id: 1225n,
    name: "Contemporary Gold Mangalsutra",
    category: "Contemporary Gold",
    description:
      "Modern re-interpretation of the traditional mangalsutra — sleek 22k gold links with a diamond pendant.",
    price: 12500000n,
    inStock: true,
    featured: true,
    material: "22K Gold, 0.6ct Diamond",
    weight: "22g",
  },
  {
    id: 1226n,
    name: "Sculpted Gold Ring",
    category: "Contemporary Gold",
    description:
      "Wide-band sculptural 22k gold ring with a flowing free-form silhouette. Wearable art for the modern collector.",
    price: 9800000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "12g",
  },

  // ────────────────────────────────────────────────
  // POLKI & KUNDAN
  // ────────────────────────────────────────────────
  {
    id: 1230n,
    name: "Grand Polki Kundan Bridal Set",
    category: "Polki & Kundan",
    description:
      "Opulent combined Polki and Kundan bridal parure — necklace, earrings, maang tikka and bangles. Fit for royalty.",
    price: 145000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Polki Diamonds, Kundan, Pearls",
    weight: "300g",
  },
  {
    id: 1231n,
    name: "Polki Kundan Choker",
    category: "Polki & Kundan",
    description:
      "Four-row choker alternating Polki and Kundan work on a 22k gold base with meenakari reverse detailing.",
    price: 68000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Kundan, Meenakari",
    weight: "140g",
  },
  {
    id: 1232n,
    name: "Jadau Bali Earrings",
    category: "Polki & Kundan",
    description:
      "Traditional Jadau bali earrings with Polki diamonds, Kundan settings and hanging pearl drops. A Rajasthani classic.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki, Kundan, Pearls",
    weight: "40g",
  },
  {
    id: 1233n,
    name: "Polki Kundan Matha Patti",
    category: "Polki & Kundan",
    description:
      "Elaborate forehead ornament spanning temple to temple with Polki diamonds, Kundan panels and emerald drops.",
    price: 45000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Polki Diamonds, Kundan, Emeralds",
    weight: "85g",
  },
  {
    id: 1234n,
    name: "Kundan Polki Bangles Set",
    category: "Polki & Kundan",
    description:
      "Set of 6 alternating Kundan and Polki diamond bangles in 22k gold. A complete bridal kangan set.",
    price: 58000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Kundan",
    weight: "180g",
  },
  {
    id: 1235n,
    name: "Polki Kundan Necklace with Pearl Drops",
    category: "Polki & Kundan",
    description:
      "Classic rani haar with Polki and Kundan setting and delicate Basra pearl drops. The pinnacle of heritage artistry.",
    price: 82000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki, Kundan, Basra Pearls",
    weight: "155g",
  },

  // ────────────────────────────────────────────────
  // EVERYDAY FINE JEWELLERY
  // ────────────────────────────────────────────────
  {
    id: 1240n,
    name: "Everyday Diamond Solitaire Stud",
    category: "Everyday Fine Jewellery",
    description:
      "Simple, perfect 0.5ct IGI certified stud earrings in 18k white gold. The only studs you will ever need.",
    price: 5500000n,
    inStock: true,
    featured: true,
    material: "18K White Gold, 0.5ct Diamond",
    weight: "3g",
  },
  {
    id: 1241n,
    name: "Gold Mangalsutra Pendant Chain",
    category: "Everyday Fine Jewellery",
    description:
      "Modern double-strand black bead mangalsutra with 22k gold pendant. Elegant, wearable and meaningful.",
    price: 8500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Black Beads",
    weight: "18g",
  },
  {
    id: 1242n,
    name: "Delicate Diamond Bracelet",
    category: "Everyday Fine Jewellery",
    description:
      "Slim 18k gold bracelet with seven station-set round diamonds. Light on the wrist, forever on the heart.",
    price: 7800000n,
    inStock: true,
    featured: false,
    material: "18K Gold, 0.7ct Diamonds",
    weight: "7g",
  },
  {
    id: 1243n,
    name: "Gold Jhumka Studs",
    category: "Everyday Fine Jewellery",
    description:
      "Classic 22k gold small jhumka earrings with beaded base and a single emerald bead accent. Understated Indian elegance.",
    price: 4800000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Emerald",
    weight: "8g",
  },
  {
    id: 1244n,
    name: "Diamond Nose Pin",
    category: "Everyday Fine Jewellery",
    description:
      "Single 0.1ct brilliant diamond set in a 18k gold nose pin. Subtle, refined and distinctly Indian.",
    price: 2200000n,
    inStock: true,
    featured: false,
    material: "18K Gold, 0.1ct Diamond",
    weight: "1g",
  },
  {
    id: 1245n,
    name: "Everyday 22K Gold Bangle",
    category: "Everyday Fine Jewellery",
    description:
      "Plain high-polish 22k gold bangle — traditional, timeless, and pure. The foundation of every Indian jewellery wardrobe.",
    price: 9500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "25g",
  },
  {
    id: 1246n,
    name: "Everyday Sapphire Bracelet",
    category: "Everyday Fine Jewellery",
    description:
      "18k white gold bracelet channel-set with blue sapphires and diamonds alternating. A quiet luxury for everyday wear.",
    price: 11500000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, Sapphires, Diamonds",
    weight: "9g",
  },

  // ────────────────────────────────────────────────
  // CUSTOM CREATIONS
  // ────────────────────────────────────────────────
  {
    id: 1250n,
    name: "Bespoke Bridal Necklace Commission",
    category: "Custom Creations",
    description:
      "A fully bespoke bridal necklace crafted to your vision. From sketch to final piece — your story in gold.",
    price: 95000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Stones as Selected",
    weight: "Variable",
  },
  {
    id: 1251n,
    name: "Portrait Diamond Ring",
    category: "Custom Creations",
    description:
      "Commission your ideal solitaire engagement ring — choose your diamond, setting, metal and finish. Created only for you.",
    price: 30000000n,
    inStock: true,
    featured: false,
    material: "Platinum or 18K Gold, Diamond of Choice",
    weight: "Variable",
  },
  {
    id: 1252n,
    name: "Heirloom Redesign Service",
    category: "Custom Creations",
    description:
      "Transform inherited jewellery into a new masterpiece. Our artisans reimagine your heirlooms while preserving their soul.",
    price: 25000000n,
    inStock: true,
    featured: false,
    material: "Your Family Gold, New Design",
    weight: "Variable",
  },
  {
    id: 1253n,
    name: "Custom Gold Bangles Set",
    category: "Custom Creations",
    description:
      "Design your own bangle set — choose motifs, weight, stones and finish. Each pair a personal signature.",
    price: 42000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Stones as Selected",
    weight: "Variable",
  },
  {
    id: 1254n,
    name: "Bespoke Earring Pair",
    category: "Custom Creations",
    description:
      "From chandelier jhumkas to delicate drops — describe your dream earrings and our craftsmen will create them.",
    price: 18000000n,
    inStock: true,
    featured: false,
    material: "22K or 18K Gold, Stones as Selected",
    weight: "Variable",
  },

  // ────────────────────────────────────────────────
  // BRIDAL SETS
  // ────────────────────────────────────────────────
  {
    id: 1001n,
    name: "Maharani Bridal Grand Set",
    category: "Bridal Sets",
    description:
      "Complete 22k gold bridal ensemble with Kundan necklace, maang tikka, jhumkas, bangles and matha patti. The ultimate bridal treasure.",
    price: 85000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Kundan, Emeralds",
    weight: "180g",
  },
  {
    id: 1002n,
    name: "Rajputana Heritage Bridal Set",
    category: "Bridal Sets",
    description:
      "Majestic Rajasthani bridal set with Polki diamonds, meenakari enamel work and traditional temple motifs.",
    price: 125000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Meenakari",
    weight: "220g",
  },
  {
    id: 1003n,
    name: "Mughal Rose Bridal Collection",
    category: "Bridal Sets",
    description:
      "Inspired by Mughal court jewels — layered necklace, passa, jhumkas and matching bangles in uncut diamonds.",
    price: 65000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Uncut Diamonds, Rubies",
    weight: "150g",
  },
  {
    id: 1004n,
    name: "South Indian Bridal Temple Set",
    category: "Bridal Sets",
    description:
      "Complete South Indian bridal set with layered temple necklace, vanki, jhumkas and matching bangles in 22k gold.",
    price: 78000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Rubies, Emeralds",
    weight: "195g",
  },
  {
    id: 1005n,
    name: "Hyderabadi Nizam Bridal Parure",
    category: "Bridal Sets",
    description:
      "Inspired by the Nizam's treasury — layered pearl and uncut diamond set with matching earrings and bangles.",
    price: 195000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Uncut Diamonds, Basra Pearls",
    weight: "250g",
  },
  {
    id: 1006n,
    name: "Champagne Diamond Bridal Set",
    category: "Bridal Sets",
    description:
      "Contemporary bridal set in 18k rose gold with champagne and white diamond combination. Modern luxury bridal.",
    price: 52000000n,
    inStock: true,
    featured: false,
    material: "18K Rose Gold, Champagne & White Diamonds",
    weight: "120g",
  },
  {
    id: 1007n,
    name: "Bengal Jadau Bridal Set",
    category: "Bridal Sets",
    description:
      "Exquisite Bengal-style Jadau bridal set with emerald and ruby clusters in traditional 22k gold filigree work.",
    price: 88000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Jadau, Rubies, Emeralds",
    weight: "185g",
  },

  // ────────────────────────────────────────────────
  // STATEMENT NECKLACES
  // ────────────────────────────────────────────────
  {
    id: 1010n,
    name: "Celestial Polki Statement Necklace",
    category: "Statement Necklaces",
    description:
      "Dramatic multi-strand necklace with large Polki diamond pendants and emerald drops. A showstopper for grand occasions.",
    price: 38500000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Polki Diamonds, Emeralds",
    weight: "95g",
  },
  {
    id: 1011n,
    name: "Empress Layered Gold Necklace",
    category: "Statement Necklaces",
    description:
      "Elaborate five-strand 22k gold necklace with ruby clusters and intricate granulation work.",
    price: 24500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Rubies",
    weight: "110g",
  },
  {
    id: 1012n,
    name: "Satlada Pearl and Diamond Necklace",
    category: "Statement Necklaces",
    description:
      "Seven-strand natural Basra pearl necklace with diamond clasps — an heirloom of extraordinary rarity.",
    price: 55000000n,
    inStock: true,
    featured: false,
    material: "18K Gold, Natural Pearls, Diamonds",
    weight: "80g",
  },
  {
    id: 1013n,
    name: "Emerald Tapestry Necklace",
    category: "Statement Necklaces",
    description:
      "Hand-set Zambian emerald cabochon necklace with diamond trim on 22k gold. A verdant jewel for state occasions.",
    price: 68000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Zambian Emeralds, Diamonds",
    weight: "125g",
  },
  {
    id: 1014n,
    name: "Ruby Collar Statement Necklace",
    category: "Statement Necklaces",
    description:
      "Wide collar necklace densely set with Burmese rubies and rose-cut diamond spacers. Regal and unforgettable.",
    price: 85000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Burma Rubies, Rose-Cut Diamonds",
    weight: "140g",
  },
  {
    id: 1015n,
    name: "Sapphire Lotus Necklace",
    category: "Statement Necklaces",
    description:
      "Statement necklace with lotus motif centres in blue sapphires and diamond petals. Heritage motif, couture execution.",
    price: 48000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Blue Sapphires, Diamonds",
    weight: "105g",
  },

  // ────────────────────────────────────────────────
  // TEMPLE JEWELLERY
  // ────────────────────────────────────────────────
  {
    id: 1020n,
    name: "Lakshmi Devi Temple Necklace",
    category: "Temple Jewellery",
    description:
      "Antique gold temple jewellery necklace with Goddess Lakshmi motif, ruby beads and intricate filigree pendant work.",
    price: 18500000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Rubies, Coral",
    weight: "75g",
  },
  {
    id: 1021n,
    name: "Kanchipuram Gold Temple Set",
    category: "Temple Jewellery",
    description:
      "Complete South Indian temple jewellery set — necklace, jhumkas and vanki — crafted in traditional Kanchipuram style.",
    price: 28000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Rubies",
    weight: "130g",
  },
  {
    id: 1022n,
    name: "Panchalogam Heritage Necklace",
    category: "Temple Jewellery",
    description:
      "Sacred five-metal alloy necklace following ancient Agama Shastra craftsmanship traditions from Tamil Nadu.",
    price: 12500000n,
    inStock: true,
    featured: false,
    material: "Panchalogam (5 Metals)",
    weight: "65g",
  },
  {
    id: 1023n,
    name: "Saraswati Veena Temple Earrings",
    category: "Temple Jewellery",
    description:
      "Antique gold jhumkas with Goddess Saraswati motif and ruby-coral inlay work. Deeply sacred, deeply beautiful.",
    price: 9500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Rubies, Coral",
    weight: "30g",
  },
  {
    id: 1024n,
    name: "Temple Gold Vanki Armlet",
    category: "Temple Jewellery",
    description:
      "Traditional South Indian vanki armlet in 22k gold with Lakshmi motifs and stone inlay. An auspicious bridal ornament.",
    price: 15500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Rubies, Emeralds",
    weight: "55g",
  },
  {
    id: 1025n,
    name: "Temple Haar with Ruby Drops",
    category: "Temple Jewellery",
    description:
      "Long antique gold haar with temple coin pendants and natural ruby drops. Worn during sacred ceremonies.",
    price: 22000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Ruby Drops",
    weight: "95g",
  },

  // ────────────────────────────────────────────────
  // DIAMOND RINGS
  // ────────────────────────────────────────────────
  {
    id: 1030n,
    name: "Empress Solitaire Diamond Ring",
    category: "Diamond Rings",
    description:
      "3.5 carat IGI certified F-VS1 brilliant cut diamond in 18k white gold six-prong crown setting.",
    price: 28500000n,
    inStock: true,
    featured: true,
    material: "18K White Gold, 3.5ct F-VS1 Diamond",
    weight: "6g",
  },
  {
    id: 1031n,
    name: "Eternity Diamond Pavé Band",
    category: "Diamond Rings",
    description:
      "Full eternity band with 2.8 carat total weight channel-set round brilliant diamonds in platinum.",
    price: 16500000n,
    inStock: true,
    featured: false,
    material: "Platinum, 2.8ct Diamond",
    weight: "5g",
  },
  {
    id: 1032n,
    name: "Halo Diamond Cluster Ring",
    category: "Diamond Rings",
    description:
      "Cushion halo diamond ring with 1.5ct centre stone surrounded by 0.8ct brilliant pavé halo in 18k gold.",
    price: 11500000n,
    inStock: true,
    featured: false,
    material: "18K Gold, 2.3ct Total Diamond",
    weight: "5.5g",
  },
  {
    id: 1033n,
    name: "Marquise Diamond Statement Ring",
    category: "Diamond Rings",
    description:
      "2.2ct marquise diamond in an East-West setting flanked by baguette diamonds. Bold, directional, unforgettable.",
    price: 18500000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 2.8ct Diamonds",
    weight: "6g",
  },
  {
    id: 1034n,
    name: "Princess Cut Platinum Ring",
    category: "Diamond Rings",
    description:
      "3ct princess cut IGI certified diamond in a four-corner prong platinum setting. The pinnacle of precision.",
    price: 24500000n,
    inStock: true,
    featured: false,
    material: "Platinum, 3ct Princess Diamond",
    weight: "6.5g",
  },
  {
    id: 1035n,
    name: "Pear Diamond Rose Gold Ring",
    category: "Diamond Rings",
    description:
      "Graceful pear diamond of 1.8ct in a delicate rose gold bezel with pavé band. Feminine and timeless.",
    price: 14500000n,
    inStock: true,
    featured: false,
    material: "18K Rose Gold, 1.8ct Pear Diamond",
    weight: "5g",
  },

  // ────────────────────────────────────────────────
  // ENGAGEMENT RINGS
  // ────────────────────────────────────────────────
  {
    id: 1040n,
    name: "Radiant Solitaire Engagement Ring",
    category: "Engagement Rings",
    description:
      "Elegant 2.2 carat oval IGI certified diamond in delicate 18k rose gold tapered band. Timeless and modern.",
    price: 21500000n,
    inStock: true,
    featured: true,
    material: "18K Rose Gold, 2.2ct IGI Diamond",
    weight: "5g",
  },
  {
    id: 1041n,
    name: "Three-Stone Legacy Ring",
    category: "Engagement Rings",
    description:
      "Three-stone diamond ring representing past, present and future — 0.75ct centre with two 0.3ct side diamonds.",
    price: 9800000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 1.35ct Diamond",
    weight: "5.5g",
  },
  {
    id: 1042n,
    name: "Vintage Filigree Diamond Ring",
    category: "Engagement Rings",
    description:
      "Art Deco inspired platinum ring with 1.8ct pear diamond and hand-engraved filigree gallery work.",
    price: 17500000n,
    inStock: true,
    featured: false,
    material: "Platinum, 1.8ct Diamond",
    weight: "5.2g",
  },
  {
    id: 1043n,
    name: "Sapphire & Diamond Halo Ring",
    category: "Engagement Rings",
    description:
      "Royal blue Ceylon sapphire of 2.5ct ringed by brilliant-cut diamonds in 18k white gold. A royal choice.",
    price: 22000000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 2.5ct Sapphire, 1.2ct Diamonds",
    weight: "6g",
  },
  {
    id: 1044n,
    name: "Emerald Cut Solitaire",
    category: "Engagement Rings",
    description:
      "2.5ct emerald-cut diamond with step-cut pavilion in a four-prong platinum setting with a polished shank.",
    price: 28500000n,
    inStock: true,
    featured: false,
    material: "Platinum, 2.5ct Emerald-Cut Diamond",
    weight: "5.5g",
  },
  {
    id: 1045n,
    name: "Double Halo Engagement Ring",
    category: "Engagement Rings",
    description:
      "Cushion diamond with double diamond halo — inner and outer — for maximum brilliance. 2ct centre, 1.8ct total halo.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 3.8ct Diamonds",
    weight: "6.5g",
  },

  // ────────────────────────────────────────────────
  // COCKTAIL RINGS
  // ────────────────────────────────────────────────
  {
    id: 1050n,
    name: "Emerald Cocktail Ring",
    category: "Cocktail Rings",
    description:
      "Bold 8-carat Zambian emerald set in 22k gold with Polki diamond surround. Made for evenings that are never forgotten.",
    price: 35000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, 8ct Zambian Emerald, Polki Diamonds",
    weight: "18g",
  },
  {
    id: 1051n,
    name: "Ruby Maharani Cocktail Ring",
    category: "Cocktail Rings",
    description:
      "Dramatic oval Burma ruby of 6.5 carats in a Mughal-style rosecut diamond surround setting.",
    price: 42000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, 6.5ct Burma Ruby, Diamonds",
    weight: "16g",
  },
  {
    id: 1052n,
    name: "Blue Sapphire Statement Ring",
    category: "Cocktail Rings",
    description:
      "Ceylon blue sapphire of exceptional cornflower hue set in pavé diamond frame in platinum.",
    price: 28000000n,
    inStock: true,
    featured: false,
    material: "Platinum, Ceylon Sapphire, Diamonds",
    weight: "14g",
  },
  {
    id: 1053n,
    name: "Tanzanite & Diamond Ring",
    category: "Cocktail Rings",
    description:
      "Rare 7ct Tanzanite in a double pavé diamond ring — deep violet-blue that commands every room.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 7ct Tanzanite, 1.5ct Diamonds",
    weight: "15g",
  },
  {
    id: 1054n,
    name: "Multi-Stone Floral Cocktail Ring",
    category: "Cocktail Rings",
    description:
      "Floral burst cocktail ring with sapphire, ruby and emerald petals around a centre diamond. Colour, drama, luxury.",
    price: 25000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Sapphire, Ruby, Emerald, Diamond",
    weight: "20g",
  },

  // ────────────────────────────────────────────────
  // POLKI COLLECTION
  // ────────────────────────────────────────────────
  {
    id: 1060n,
    name: "Royal Polki Grand Haar",
    category: "Polki Collection",
    description:
      "Magnificent seven-row Polki diamond haar with ruby drops and real Basra pearls. Bridal centrepiece of rare magnificence.",
    price: 95000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Polki Diamonds, Pearls, Rubies",
    weight: "200g",
  },
  {
    id: 1061n,
    name: "Polki Rani Haar Necklace",
    category: "Polki Collection",
    description:
      "Three-layer Polki diamond necklace with blue sapphire drops and meenakari reverse. A masterpiece of heritage craft.",
    price: 68000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Sapphires",
    weight: "145g",
  },
  {
    id: 1062n,
    name: "Polki Passa Maang Tikka",
    category: "Polki Collection",
    description:
      "Traditional bridal passa with large central Polki diamond and side chains in gold. Complete with matching maang tikka.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds",
    weight: "55g",
  },
  {
    id: 1063n,
    name: "Polki Champakali Necklace",
    category: "Polki Collection",
    description:
      "Champakali (jasmine-bud motif) necklace densely set with Polki diamonds and emerald accents. A Hyderabadi classic.",
    price: 48000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Emeralds",
    weight: "110g",
  },
  {
    id: 1064n,
    name: "Polki Diamond Earrings",
    category: "Polki Collection",
    description:
      "Large chandelier Polki diamond earrings with ruby bead drops and pearl fringes. Grand enough for any stage.",
    price: 22000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Rubies, Pearls",
    weight: "45g",
  },
  {
    id: 1065n,
    name: "Polki Sarpech Turban Ornament",
    category: "Polki Collection",
    description:
      "Rare Polki diamond sarpech with emerald plume and ruby base — a collector's jewel of museum-level rarity.",
    price: 125000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Emeralds, Rubies",
    weight: "85g",
  },

  // ────────────────────────────────────────────────
  // KUNDAN COLLECTION
  // ────────────────────────────────────────────────
  {
    id: 1070n,
    name: "Mewar Kundan Bridal Necklace",
    category: "Kundan Collection",
    description:
      "Classical Mewar-style Kundan necklace with large white stones, pink sapphire accents and pearl drops.",
    price: 48000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Kundan, Pink Sapphires, Pearls",
    weight: "120g",
  },
  {
    id: 1071n,
    name: "Kundan Chand Haar",
    category: "Kundan Collection",
    description:
      "Traditional crescent-motif Kundan necklace with blue lapis and emerald inlay work on 22k gold base.",
    price: 34000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Kundan, Lapis, Emeralds",
    weight: "95g",
  },
  {
    id: 1072n,
    name: "Kundan Tikka Earring Set",
    category: "Kundan Collection",
    description:
      "Matching maang tikka and jhumka set in Kundan work with pearl drops and meenakari reverse detailing.",
    price: 22000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Kundan, Pearls, Meenakari",
    weight: "60g",
  },
  {
    id: 1073n,
    name: "Rajasthani Kundan Choker",
    category: "Kundan Collection",
    description:
      "Broad five-row Kundan choker in the classic Rajasthani tradition with hand-cut glass and meenakari reverse.",
    price: 38000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Kundan, Meenakari",
    weight: "110g",
  },
  {
    id: 1074n,
    name: "Kundan Bangles Set of 4",
    category: "Kundan Collection",
    description:
      "Set of four Kundan bangles in alternating blue and green stone panels on 22k gold. A festive bridal set.",
    price: 28000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Kundan",
    weight: "80g",
  },
  {
    id: 1075n,
    name: "Mughal Kundan Jodha Necklace",
    category: "Kundan Collection",
    description:
      "Inspired by the great Mughal empress — a grand Kundan necklace with intricate gold filigree and pearl drops.",
    price: 58000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Kundan, Pearls",
    weight: "135g",
  },

  // ────────────────────────────────────────────────
  // HERITAGE BANGLES
  // ────────────────────────────────────────────────
  {
    id: 1080n,
    name: "Antique Gold Kara Bangles",
    category: "Heritage Bangles",
    description:
      "Set of 6 solid 22k gold kara bangles with hand-engraved floral motifs and granulation borders.",
    price: 38500000n,
    inStock: true,
    featured: true,
    material: "22K Gold",
    weight: "120g",
  },
  {
    id: 1081n,
    name: "Peacock Bangle Pair",
    category: "Heritage Bangles",
    description:
      "A matched pair of broad gold bangles with intricate peacock motif in enamel and diamond accents.",
    price: 25000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Enamel, Diamonds",
    weight: "80g",
  },
  {
    id: 1082n,
    name: "Ruby Studded Gold Bangles",
    category: "Heritage Bangles",
    description:
      "Set of 4 carved gold bangles with channel-set natural Burmese rubies throughout.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Burma Rubies",
    weight: "100g",
  },
  {
    id: 1083n,
    name: "Filigree Kangan Pair",
    category: "Heritage Bangles",
    description:
      "Intricate open-filigree 22k gold bangles from the Karimnagar tradition. Delicate as lace, strong as heritage.",
    price: 18500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "52g",
  },
  {
    id: 1084n,
    name: "Diamond-Set Broad Bangle",
    category: "Heritage Bangles",
    description:
      "Wide 22k gold bangle with a central row of brilliant-cut diamonds on a hand-hammered surface.",
    price: 28500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, 1.8ct Diamonds",
    weight: "65g",
  },
  {
    id: 1085n,
    name: "Meenakari Enamel Bangle Set",
    category: "Heritage Bangles",
    description:
      "Set of 6 Jaipur meenakari enamel bangles in 22k gold with floral motifs in red, green and blue enamel.",
    price: 22000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Meenakari Enamel",
    weight: "75g",
  },

  // ────────────────────────────────────────────────
  // GOLD CHAINS
  // ────────────────────────────────────────────────
  {
    id: 1090n,
    name: "Venetian Box Chain 22K",
    category: "Gold Chains",
    description:
      "Heavy 22k gold Venetian box chain, 24 inches. Classic craftsmanship for the discerning collector.",
    price: 18500000n,
    inStock: true,
    featured: true,
    material: "22K Gold",
    weight: "40g",
  },
  {
    id: 1091n,
    name: "Royal Rope Chain Necklace",
    category: "Gold Chains",
    description:
      "Traditional twisted rope chain in 22k gold, 28 inches. Substantial weight and heritage feel.",
    price: 25000000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "55g",
  },
  {
    id: 1092n,
    name: "Figaro Heritage Gold Chain",
    category: "Gold Chains",
    description:
      "Italian-inspired Figaro chain in 22k gold with alternating link pattern. A timeless wardrobe staple.",
    price: 14500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "32g",
  },
  {
    id: 1093n,
    name: "Curb Link Heavy Chain",
    category: "Gold Chains",
    description:
      "Bold Cuban curb-link chain in 22k gold, 22 inches. Substantial, refined and timelessly masculine.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "72g",
  },
  {
    id: 1094n,
    name: "Herringbone Flat Gold Chain",
    category: "Gold Chains",
    description:
      "Sleek herringbone flat chain in 22k gold, 20 inches. Lies flat against the skin for a liquid gold effect.",
    price: 16500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "36g",
  },
  {
    id: 1095n,
    name: "Singapore Twist Chain",
    category: "Gold Chains",
    description:
      "Delicate 22k gold Singapore chain with twisted diamond-cut links. Refined, light and eternally elegant.",
    price: 8500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "18g",
  },

  // ────────────────────────────────────────────────
  // PENDANT SETS
  // ────────────────────────────────────────────────
  {
    id: 1100n,
    name: "Diamond Solitaire Pendant Set",
    category: "Pendant Sets",
    description:
      "0.8 carat IGI certified solitaire pendant in 18k white gold with matching diamond drop earrings.",
    price: 8500000n,
    inStock: true,
    featured: true,
    material: "18K White Gold, 0.8ct Diamond",
    weight: "8g",
  },
  {
    id: 1101n,
    name: "Emerald Pear Drop Pendant",
    category: "Pendant Sets",
    description:
      "Pear-shaped Colombian emerald pendant with diamond halo on a Venetian chain. Elegant and refined.",
    price: 12500000n,
    inStock: true,
    featured: false,
    material: "18K Gold, Colombian Emerald, Diamonds",
    weight: "9g",
  },
  {
    id: 1102n,
    name: "Ruby Heart Pendant Set",
    category: "Pendant Sets",
    description:
      "Heart-shaped Burmese ruby pendant with pavé diamond surround and matching ruby stud earrings.",
    price: 9800000n,
    inStock: true,
    featured: false,
    material: "18K Rose Gold, Burma Ruby, Diamonds",
    weight: "7g",
  },
  {
    id: 1103n,
    name: "Ganesh Heritage Gold Pendant",
    category: "Pendant Sets",
    description:
      "Deeply auspicious 22k gold Ganesh pendant in three-dimensional casting with ruby eyes and diamond crown.",
    price: 14500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Rubies, Diamonds",
    weight: "15g",
  },
  {
    id: 1104n,
    name: "Sapphire Drop Pendant Set",
    category: "Pendant Sets",
    description:
      "Oval blue sapphire pendant with a diamond halo and matching sapphire earrings. A complete ensemble of quiet luxury.",
    price: 18500000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, Ceylon Sapphire, Diamonds",
    weight: "10g",
  },
  {
    id: 1105n,
    name: "Om Diamond Pendant",
    category: "Pendant Sets",
    description:
      "Sacred Om symbol in 22k gold pavé-set with brilliant-cut diamonds. Spiritual significance meets couture jewellery.",
    price: 11500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, 0.9ct Diamonds",
    weight: "12g",
  },

  // ────────────────────────────────────────────────
  // LUXURY EARRINGS
  // ────────────────────────────────────────────────
  {
    id: 1110n,
    name: "Chandelier Ruby Jhumkas",
    category: "Luxury Earrings",
    description:
      "Grand chandelier jhumka earrings with three tiers of Burmese rubies, diamond accents and seed pearl drops.",
    price: 22000000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Burma Rubies, Diamonds, Pearls",
    weight: "35g",
  },
  {
    id: 1111n,
    name: "Diamond Drops Stud Earrings",
    category: "Luxury Earrings",
    description:
      "Brilliant-cut diamond stud earrings, 2.4ct total weight in 18k white gold four-prong setting.",
    price: 14500000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, 2.4ct Diamonds",
    weight: "5g",
  },
  {
    id: 1112n,
    name: "Polki Baali Earrings",
    category: "Luxury Earrings",
    description:
      "Traditional gold baali loop earrings studded with Polki diamonds and pearl fringes.",
    price: 18000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Polki Diamonds, Pearls",
    weight: "28g",
  },
  {
    id: 1113n,
    name: "Emerald Tassel Ear Drops",
    category: "Luxury Earrings",
    description:
      "Long Zambian emerald bead tassel earrings with 22k gold caps and diamond accents. Drama in motion.",
    price: 28500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Zambian Emeralds, Diamonds",
    weight: "22g",
  },
  {
    id: 1114n,
    name: "Sapphire Halo Drop Earrings",
    category: "Luxury Earrings",
    description:
      "Oval blue sapphire earrings each with a double diamond halo in 18k white gold. Classic, brilliant, statement-worthy.",
    price: 24500000n,
    inStock: true,
    featured: false,
    material: "18K White Gold, Blue Sapphires, Diamonds",
    weight: "9g",
  },
  {
    id: 1115n,
    name: "Temple Jhumka with Ruby Drops",
    category: "Luxury Earrings",
    description:
      "Grand temple-style jhumka in 22k gold with rubies, coral beads and pearl drop fringe. Heritage at its finest.",
    price: 16500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Rubies, Coral, Pearls",
    weight: "32g",
  },

  // ────────────────────────────────────────────────
  // LIMITED EDITION COLLECTION
  // ────────────────────────────────────────────────
  {
    id: 1120n,
    name: "Nayra Signature Opus Necklace",
    category: "Limited Edition Collection",
    description:
      "Numbered edition of 10. Inspired by Mughal court treasures — Burma ruby of 12ct surrounded by Colombian emeralds and old-mine diamonds.",
    price: 145000000n,
    inStock: true,
    featured: true,
    material: "24K Gold, 12ct Burma Ruby, Emeralds, Old-Mine Diamonds",
    weight: "160g",
  },
  {
    id: 1121n,
    name: "Peacock Heritage Limited Parure",
    category: "Limited Edition Collection",
    description:
      "One-of-a-kind peacock design parure — necklace, earrings and maang tikka in natural sapphires and diamonds.",
    price: 85000000n,
    inStock: false,
    featured: false,
    material: "22K Gold, Sapphires, Diamonds, Enamel",
    weight: "200g",
  },
  {
    id: 1122n,
    name: "Maharana Pratap Sword Pendant",
    category: "Limited Edition Collection",
    description:
      "Limited to 5 pieces. A commemorative 22k gold sword pendant set with rubies and diamonds. Museum-worthy heritage jewel.",
    price: 52000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Rubies, Diamonds",
    weight: "35g",
  },
  {
    id: 1123n,
    name: "Blue Moon Diamond Ring",
    category: "Limited Edition Collection",
    description:
      "One of a kind 4ct rare blue diamond ring in platinum pavé setting. The rarest colour in the rarest form.",
    price: 295000000n,
    inStock: true,
    featured: false,
    material: "Platinum, 4ct Blue Diamond",
    weight: "8g",
  },
  {
    id: 1124n,
    name: "Celestial Star Set",
    category: "Limited Edition Collection",
    description:
      "Edition of 7. Star-motif parure with diamond-set celestial bodies in 22k gold — necklace and earring set.",
    price: 72000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Diamonds, Sapphires",
    weight: "110g",
  },

  // ────────────────────────────────────────────────
  // HEIRLOOM COLLECTION
  // ────────────────────────────────────────────────
  {
    id: 1130n,
    name: "Tara Antique Gold Haar",
    category: "Heirloom Collection",
    description:
      "Crafted in the tradition of pre-Independence Indian jewellery. Heavy antique gold necklace with temple motifs and kundan inlay.",
    price: 115000000n,
    inStock: true,
    featured: true,
    material: "22K Antique Gold, Kundan, Rubies",
    weight: "190g",
  },
  {
    id: 1131n,
    name: "Zardozi Heritage Bangle Set",
    category: "Heirloom Collection",
    description:
      "Set of rare handmade Zardozi enamelled gold bangles inspired by the Nawabs of Lucknow.",
    price: 78000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Zardozi Enamel",
    weight: "140g",
  },
  {
    id: 1132n,
    name: "Nizam's Pearl & Diamond Choker",
    category: "Heirloom Collection",
    description:
      "Inspired by the jewels of the Nizam of Hyderabad — four rows of natural pearls with diamond clasp and spacers.",
    price: 95000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Natural Pearls, Diamonds",
    weight: "75g",
  },
  {
    id: 1133n,
    name: "Vintage Uncut Diamond Haar",
    category: "Heirloom Collection",
    description:
      "Pre-modern style uncut diamond necklace in 22k gold — handcrafted in the manner of old bazaars. Timeless and rare.",
    price: 88000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Uncut Diamonds",
    weight: "165g",
  },
  {
    id: 1134n,
    name: "Agra Heritage Signet Ring",
    category: "Heirloom Collection",
    description:
      "Broad signet ring in 22k gold engraved with a family crest motif and set with a single large table-cut ruby.",
    price: 32000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Table-Cut Ruby",
    weight: "20g",
  },
  {
    id: 1135n,
    name: "Mughal Jharoka Pendant",
    category: "Heirloom Collection",
    description:
      "Miniature architectural jharoka pendant in 22k gold with enamel painting and diamond border. A museum-worthy keepsake.",
    price: 45000000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Enamel, Diamonds",
    weight: "28g",
  },

  // ────────────────────────────────────────────────
  // FESTIVE COLLECTION
  // ────────────────────────────────────────────────
  {
    id: 1140n,
    name: "Diwali Lakshmi Gold Necklace",
    category: "Festive Collection",
    description:
      "Auspicious 22k gold Lakshmi necklace with ruby and emerald floral motifs. Perfect for Diwali and prosperity ceremonies.",
    price: 22500000n,
    inStock: true,
    featured: true,
    material: "22K Gold, Rubies, Emeralds",
    weight: "65g",
  },
  {
    id: 1141n,
    name: "Navratri Celebration Earring Set",
    category: "Festive Collection",
    description:
      "Vibrant festive jhumka and tikka set with multicolour precious stones — ruby, emerald and sapphire.",
    price: 18500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Ruby, Emerald, Sapphire",
    weight: "40g",
  },
  {
    id: 1142n,
    name: "Teej Bridal Bangles Set",
    category: "Festive Collection",
    description:
      "Complete set of 21 hand-painted enamel bangles in traditional Teej celebration colours with gold detailing.",
    price: 12500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Enamel",
    weight: "85g",
  },
  {
    id: 1143n,
    name: "Karwa Chauth Gold Thali Set",
    category: "Festive Collection",
    description:
      "Ceremonial gold thali set with Karwa Chauth motifs — gold bangles, ring and earrings for the sacred vrat.",
    price: 15500000n,
    inStock: true,
    featured: false,
    material: "22K Gold",
    weight: "55g",
  },
  {
    id: 1144n,
    name: "Eid Crescent Moon Necklace",
    category: "Festive Collection",
    description:
      "Elegant crescent moon and star necklace in 22k gold with sapphire and diamond accents for Eid celebrations.",
    price: 19500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Sapphires, Diamonds",
    weight: "42g",
  },
  {
    id: 1145n,
    name: "Sankranti Tilhari Necklace",
    category: "Festive Collection",
    description:
      "Traditional North Indian tilhari necklace in 22k gold with black bead strand and gold pendant. Auspicious and refined.",
    price: 8500000n,
    inStock: true,
    featured: false,
    material: "22K Gold, Black Beads",
    weight: "28g",
  },
];
