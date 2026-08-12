// data/collectionData.js
//
// Single source of truth for the Collection pages.
// - app/collection/page.jsx            -> reads `categories` (preview cards)
// - app/collection/[category]/page.jsx -> reads one category's `products` (all mixed, no sub-tabs)
// - app/product/[slug]/page.jsx        -> looks a single product up by slug

export const categories = [
  {
    slug: "journals",
    tabLabel: "Journals",
    label: "Journals",
    description:
      "Handcrafted Leather-covered Journals With Handmade Cotton-rag Pages. Each Journal Is A Unique Piece Designed To Inspire Daily Writing And To Last Decades.",
    specifications: [
      { label: "Cover Materials", value: "Full-grain Leather, Embossed Leather, Suede Leather, MDF (Laser-engraved)" },
      { label: "Page Stock", value: "Handmade Cotton-rag With Deckled Edges - 120 GSM" },
      { label: "Sizes Available", value: "6×4\", 7×5\", 8×6\". Custom Sizes, Covers, Page Stock, And Branding On Request, MOQ 50 Units" },
    ],
    idealFor:
      "Retail Stationery | Corporate Gifting | Travel Journals | Artist Sketchbooks | Wedding Guest Books | Promotional Branded Journals",
    // Preview cards on the main /collection page.
    // NOTE: every card's "See All Products" button points to the SAME
    // category URL — there is no separate leather-journals / paper-journals page.
    previewCards: [
      { name: "Leather Journals", image: "/images/home/26.png" },
      { name: "Paper Journals", image: "/images/products/4.png" },
    ],
    // All products for this category — shown together, mixed, on one grid.
    products: [
      {
        slug: "swede-leather-journal-vintage-1",
        name: "Leather Laptop Bags",
        desc: "Bags for carrying laptops and other essentials, crafted from premium leather.",
        meta: ["Size 7 x 5\" 8 x 6\" | Item Code: COJL-012", "90 GSM | Acid-Free, Tree-Free | MOQ: 50 units"],
        image: "/images/products/1.png",
      },
      {
        slug: "swede-leather-journal-vintage-2",
        name: "Colleage Leather Bags ",
        desc: "Bags for carrying laptops and other essentials, crafted from premium leather.",
        meta: ["Size 7 x 5\" 8 x 6\" | Item Code: COJL-012", "90 GSM | Acid-Free, Tree-Free | MOQ: 50 units"],
        image: "/images/products/9.png",
      },
      {
        slug: "swede-leather-journal-vintage-3",
        name: "Side Leather Bag",
        desc: "Bags for carrying laptops and other essentials, crafted from premium leather.",
        meta: ["Size 7 x 5\" 8 x 6\" | Item Code: COJL-012", "90 GSM | Acid-Free, Tree-Free | MOQ: 50 units"],
        image: "/images/products/10.png",
      },
      {
        slug: "swede-leather-journal-vintage-4",
        name: "Papers Bags ",
        desc: "Bags for carrying laptops and other essentials, crafted from premium leather.",
        meta: ["Size 7 x 5\" 8 x 6\" | Item Code: COJL-012", "90 GSM | Acid-Free, Tree-Free | MOQ: 50 units"],
        image: "/images/products/11.png",
      },
    ],
  },

  {
    slug: "decoration",
    tabLabel: "Decoration",
    label: "Decoration",
    description:
      "Architectural Paper Sculpture Produced By Hand In 36 Distinct Shapes Across 9 Sizes. Used Extensively In Home Décor, Retail Window Display, Event Design, And Seasonal Product Ranges.",
    specifications: [
      { label: "Design", value: "36+ Designs Including Ornaments, Angels, Trees, Eggs, Bells, And Abstract Forms" },
      { label: "9 Sizes", value: "XS (8 cm) Through 5XL (30 cm)" },
      { label: "Available", value: "In A Full Range Of Colours" },
      { label: "Ships Flat", value: "Assembles In Seconds" },
      { label: "Suitable", value: "For Hanging, Tabletop, And Display Use" },
    ],
    idealFor:
      "Christmas And Seasonal Décor | Retail Display | Event Décor | Interior Styling | Product Photography | Gift Shop Retail",
    previewCards: [
      { name: "Honeycomb Decoration", image: "/images/products/12.png" },
      { name: "Garlands Decoration", image: "/images/products/2.png" },
    ],
    products: [
      {
        slug: "honeycomb-ornament-navy",
        name: "Honeycomb Hanging Ornament",
        desc: "Paper honeycomb ornament, folds flat and opens in seconds.",
        meta: ["Size: 12 cm | Item Code: CODC-004", "Kraft/Coloured Paper | MOQ: 100 units"],
        image: "/images/products/12.png",
      },
      {
        slug: "garland-snowflake",
        name: "Snowflake Garland",
        desc: "Die-cut paper garland strung on natural cotton thread.",
        meta: ["Length: 2 m | Item Code: CODC-011", "Kraft Paper | MOQ: 100 units"],
        image: "/images/products/2.png",
      },
      {
        slug: "honeycomb-ornament-set",
        name: "Honeycomb Ornament Set",
        desc: "Mixed-size honeycomb ornament set for tabletop or hanging display.",
        meta: ["Sizes: 8-20 cm | Item Code: CODC-006", "Coloured Paper | MOQ: 100 units"],
        image: "/images/products/13.png",
      },
      {
        slug: "garland-angel",
        name: "Angel Garland",
        desc: "Hand-punched angel motif garland for festive window displays.",
        meta: ["Length: 2 m | Item Code: CODC-014", "Kraft Paper | MOQ: 100 units"],
        image: "/images/products/14.png",
      },
    ],
  },

  {
    slug: "lightings",
    tabLabel: "Lightings",
    label: "Lightings",
    description:
      "Pendant Lampshades Crafted From MDF, Cord, And Paper, With Geometric String-art Patterns And Minimalist Aesthetic. Each Shade Creates A Warm, Patterned Glow That Transforms A Space.",
    specifications: [
      { label: "Materials", value: "MDF (Pine Mdf From Waste Wood Powder And Waste Paper), Cord, Paper" },
      { label: "Designs", value: "Geometric Frame With Interwoven Thread Patterns" },
      { label: "Available", value: "In MDF Pendant Lamp (Structural) And MDF Pendant Lamp With Cord (String-wrapped)" },
      { label: "Colour And Size", value: "Custom Colour And Size Available" },
      { label: "Suitable", value: "For Residential And Commercial Interiors" },
    ],
    idealFor:
      "Home Décor | Restaurant And Café Interiors | Boutique Retail Display | Hospitality Design | Gift Retail",
    previewCards: [
      { name: "Paper Lamps - Lightings", image: "/images/Products/5.png" },
      { name: "MDF Lamps - Lightings", image: "/images/Products/6.png" },
    ],
    products: [
      {
        slug: "paper-lamp-geometric-pink",
        name: "Geometric Paper Pendant Lamp",
        desc: "String-wrapped paper pendant lamp with geometric faceting.",
        meta: ["Size: 30 cm | Item Code: COLT-002", "Paper + Cord | MOQ: 20 units"],
        image: "/images/products/15.png",
      },
      {
        slug: "mdf-lamp-geometric-green",
        name: "Geometric MDF Pendant Lamp",
        desc: "Structural MDF pendant shade with interwoven thread pattern.",
        meta: ["Size: 28 cm | Item Code: COLT-005", "MDF + Thread | MOQ: 20 units"],
        image: "/images/products/16.png",
      },
      {
        slug: "paper-lamp-geometric-yellow",
        name: "Geometric Paper Pendant Lamp",
        desc: "String-wrapped paper pendant lamp, custom colourway.",
        meta: ["Size: 30 cm | Item Code: COLT-003", "Paper + Cord | MOQ: 20 units"],
        image: "/images/products/17.png",
      },
      {
        slug: "mdf-lamp-geometric-natural",
        name: "Geometric MDF Pendant Lamp",
        desc: "Structural MDF pendant shade, natural finish.",
        meta: ["Size: 28 cm | Item Code: COLT-006", "MDF + Thread | MOQ: 20 units"],
        image: "/images/products/18.png",
      },
    ],
  },

  {
    slug: "handmade-paper",
    tabLabel: "Handmade Paper",
    label: "Handmade Paper",
    description:
      "Born In A Vat Of Pure Cotton Fibre, Dried Under Rajasthan's Open Sky, Finished By A Craftsperson Who Has Spent A Lifetime Perfecting A Single Gesture. Every Sheet Is Unrepeatable. Every Deckle Edge Is A Signature.",
    specifications: [
      { label: "Material", value: "100% Recycled Cotton Rag, No Wood Pulp, No Trees" },
      { label: "Weight", value: "120 GSM To 250 GSM Custom Weights Available" },
      { label: "Sizes Available", value: "Up To 22\" × 30\" Custom Dimensions" },
      { label: "Edges", value: "Natural Deckle On All Four Sides" },
      { label: "Finish", value: "Soft, Uncoated, Richly Textured Acid-Free & Archival" },
      { label: "Colours", value: "Natural White, Soft Pastels, Floral Embedded & Custom-Dyed Shades" },
    ],
    idealFor:
      "Fine Art & Watercolour | Calligraphy & Letterpress | Wedding Invitations | Book Publishing | Luxury Packaging | Archival Documents | Artist Sketchbooks | Gift Wrapping",
    previewCards: [{ name: "Handmade Paper", image: "/images/products/7.png" }],
    products: [
      {
        slug: "cotton-rag-sheet-natural",
        name: "Cotton Rag Sheet - Natural White",
        desc: "Deckle-edged handmade cotton rag sheet, uncoated finish.",
        meta: ["Size: 22 x 30\" | Item Code: COHP-001", "150 GSM | MOQ: 500 sheets"],
        image: "/images/products/19.png",
      },
      {
        slug: "cotton-rag-sheet-pastel",
        name: "Cotton Rag Sheet - Soft Pastel",
        desc: "Deckle-edged cotton rag sheet in custom-dyed pastel shades.",
        meta: ["Size: 22 x 30\" | Item Code: COHP-004", "150 GSM | MOQ: 500 sheets"],
        image: "/images/products/20.png",
      },
      {
        slug: "cotton-rag-sheet-floral",
        name: "Cotton Rag Sheet - Floral Embedded",
        desc: "Handmade sheet embedded with dried floral petals.",
        meta: ["Size: 22 x 30\" | Item Code: COHP-007", "150 GSM | MOQ: 500 sheets"],
        image: "/images/products/21.png",
      },
    ],
  },

  {
    slug: "leather-bags",
    tabLabel: "Leather Bags",
    label: "Leather Bags",
    description:
      "Hand-stitched Bags In Vegetable-tanned Leather. Designed For Everyday Use And Built To Improve With Age.",
    specifications: [
      { label: "COLB-01", value: "Green Leather Laptop Backpack for Women, 14×15×5\"" },
      { label: "COLB-02", value: "Brown Leather Laptop Backpack for Women, 13×15×5\"" },
      { label: "COLB-03", value: "Brown Leather Women's Tote Bag, 16.5×12×6\"" },
      { label: "COLB-04", value: "Black Leather Women's Tote Bag, 16.75×12.5×4.5\"" },
      { label: "COLB-05", value: "Brown Leather Laptop Bag for Men, 15×14×5\"" },
      { label: "COLB-06", value: "Brown Leather Messenger / Satchel Bag, 16.75×12.5×4.5\"" },
      { label: "Custom", value: "Sizes And Colours On Request, MOQ 50 Units" },
    ],
    idealFor: "Fashion Retail | Gift Stores | Corporate Gifting | Branded Leather Goods",
    previewCards: [{ name: "Leather Bags", image: "/images/products/1.png" }],
    products: [
      {
        slug: "leather-backpack-women-green",
        name: "Green Leather Laptop Backpack",
        desc: "Vegetable-tanned leather backpack for women, brass hardware.",
        meta: ["Size: 14 x 15 x 5\" | Item Code: COLB-01", "MOQ: 50 units"],
        image: "/images/products/1.png",
      },
      {
        slug: "leather-tote-women-brown",
        name: "Brown Leather Women's Tote Bag",
        desc: "Hand-stitched tote in full-grain vegetable-tanned leather.",
        meta: ["Size: 16.5 x 12 x 6\" | Item Code: COLB-03", "MOQ: 50 units"],
        image: "/images/products/9.png",
      },
      {
        slug: "leather-messenger-brown",
        name: "Brown Leather Messenger Bag",
        desc: "Satchel-style messenger bag with adjustable strap.",
        meta: ["Size: 16.75 x 12.5 x 4.5\" | Item Code: COLB-06", "MOQ: 50 units"],
        image: "/images/products/10.png",
      },
    ],
  },

  {
    slug: "gifting-segment",
    tabLabel: "Gifting Segment",
    label: "Gifting Segment",
    description:
      "Hand-finished Gifting Essentials In Handmade Paper And Kraft Board. Designed To Package And Present Products Beautifully, From Retail Boxes To Plantable Seed-paper Cards.",
    specifications: [
      { label: "Materials", value: "Handmade Cotton Rag Paper, Kraft Board, Seed-embedded Paper" },
      { label: "Formats", value: "Nested Gift Boxes, Paper Bags, Envelopes, Greeting Cards, Seed-paper Stationery" },
      { label: "Print", value: "Plain Or Custom-printed On Request" },
      { label: "Custom", value: "Sizes, Colours, And Branding On Request, MOQ 100 Units" },
    ],
    idealFor:
      "Retail Packaging | Corporate Gifting | Wedding Favours | E-commerce Packaging | Seasonal Gift Sets",
    previewCards: [
      { name: "Boxes", image: "/images/collection/gifting-segment/boxes.jpg" },
      { name: "Paper Bags", image: "/images/collection/gifting-segment/paper-bags.jpg" },
      { name: "Envelopes", image: "/images/collection/gifting-segment/envelopes.jpg" },
      { name: "Greeting Cards", image: "/images/collection/gifting-segment/greeting-cards.jpg" },
      { name: "Seed Paper - Pencils, Pens & Cards", image: "/images/products/8.png" },
    ],
    products: [
      {
        slug: "nested-gift-box-set",
        name: "Nested Kraft Gift Box Set",
        desc: "Set of 3 nested boxes in printed kraft board with ribbon lid.",
        meta: ["Sizes: S/M/L | Item Code: COGS-001", "MOQ: 100 sets"],
        image: "/images/collection/gifting-segment/product-1.jpg",
      },
      {
        slug: "kraft-paper-bag-printed",
        name: "Printed Kraft Paper Bag",
        desc: "Handmade paper carry bag, custom-printed on request.",
        meta: ["Size: 8 x 10\" | Item Code: COGS-006", "MOQ: 100 units"],
        image: "/images/collection/gifting-segment/product-2.jpg",
      },
      {
        slug: "envelope-set-handmade",
        name: "Handmade Paper Envelope Set",
        desc: "Deckle-edged envelopes in natural cotton rag paper.",
        meta: ["Size: A5 | Item Code: COGS-009", "MOQ: 100 units"],
        image: "/images/collection/gifting-segment/product-3.jpg",
      },
      {
        slug: "greeting-card-seed-paper",
        name: "Seed Paper Greeting Card",
        desc: "Plantable greeting card embedded with wildflower seeds.",
        meta: ["Size: A6 | Item Code: COGS-012", "MOQ: 100 units"],
        image: "/images/collection/gifting-segment/product-4.jpg",
      },
      {
        slug: "seed-paper-pencil-set",
        name: "Seed Paper Pencils, Pens & Cards",
        desc: "Plantable seed-paper stationery set for corporate gifting.",
        meta: ["Item Code: COGS-015", "MOQ: 100 sets"],
        image: "/images/products/8.png",
      },
    ],
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null;
}

export function getAllProducts() {
  return categories.flatMap((c) =>
    c.products.map((p) => ({ ...p, categorySlug: c.slug, categoryLabel: c.label }))
  );
}

export function getProductBySlug(slug) {
  return getAllProducts().find((p) => p.slug === slug) || null;
}