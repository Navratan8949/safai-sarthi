export const services = [
  {
    id: "kitchen-deep-cleaning",
    slug: "kitchen-deep-cleaning",
    category: "Kitchen",
    name: "Kitchen Deep Cleaning",
    shortDescription:
      "Professional deep clean for countertops, sink, stove, cabinets and floor.",
    description:
      "A thorough deep cleaning service for your kitchen that covers all visible surfaces, appliances exteriors, and hard-to-reach areas. Our trained professionals use safe, food-grade cleaning agents to degrease, sanitize, and refresh your cooking space.",
    image: "/images/Cleaner-Kitchen.png",
    price: 999,
    duration: "2–3 hours",
    bestFor: "Homes and apartments needing a thorough kitchen refresh",
    included: [
      "Countertops and backsplash cleaning",
      "Sink and tap scrubbing",
      "Stove exterior degreasing",
      "Cabinet exterior wiping",
      "Approved wall tile cleaning",
      "Floor mopping and sanitizing",
    ],
    excluded: [
      "Cabinet interiors",
      "Chimney interior deep clean",
      "Oven interior cleaning",
      "Refrigerator interior cleaning",
      "Utensil washing",
      "Plumbing or electrical repairs",
    ],
    addOns: [
      { id: "ka1", name: "Chimney Interior Deep Clean", price: 299 },
      { id: "ka2", name: "Oven Interior Cleaning", price: 199 },
      { id: "ka3", name: "Refrigerator Interior Cleaning", price: 199 },
    ],
    limitations: [
      "Service does not include dishwashing or cookware cleaning",
      "Stubborn stains older than 6 months may not be fully removable",
      "Customer should clear countertops of items before service",
    ],
    preparation: [
      "Remove items from countertops where possible",
      "Ensure water and electricity are available",
      "Inform the team of any delicate surfaces",
    ],
    faq: [
      {
        q: "Do you bring your own cleaning supplies?",
        a: "Yes, our team arrives with all necessary cleaning agents, tools, and equipment.",
      },
      {
        q: "Are the cleaning products safe for food areas?",
        a: "We use food-safe, non-toxic cleaning agents that are suitable for kitchen surfaces.",
      },
    ],
  },
  {
    id: "bathroom-deep-cleaning",
    slug: "bathroom-deep-cleaning",
    category: "Bathroom",
    name: "Bathroom Deep Cleaning",
    shortDescription:
      "Sanitized tiles, fixtures, shower, and floor for a fresh washroom.",
    description:
      "A comprehensive bathroom cleaning service that targets tiles, grout, fixtures, shower area, and floor. We remove hard water stains, soap scum, and sanitize all surfaces for a hygienic washroom.",
    image: "/images/bathroom-cleaning.png",
    price: 599,
    duration: "1–2 hours",
    bestFor: "Bathrooms with hard water stains, soap scum, or general grime",
    included: [
      "Tile and grout scrubbing",
      "Sink and tap descaling",
      "Toilet bowl sanitizing",
      "Shower area cleaning",
      "Mirror and glass wiping",
      "Floor mopping and sanitizing",
    ],
    excluded: [
      "Sealing or re-grouting of tiles",
      "Plumbing repairs or fixture replacement",
      "Exhaust fan internal cleaning",
      "Wall painting or touch-ups",
    ],
    addOns: [
      { id: "ba1", name: "Exhaust Fan Cleaning", price: 99 },
      { id: "ba2", name: "Glass Shower Enclosure Polish", price: 149 },
    ],
    limitations: [
      "Very old or permanently etched glass may not be fully restored",
      "Deep grout stains may require multiple sessions",
    ],
    preparation: [
      "Remove personal toiletries from surfaces",
      "Ensure water supply is available",
      "Inform the team about any sensitive fixtures",
    ],
    faq: [
      {
        q: "Can you remove hard water stains completely?",
        a: "We significantly reduce hard water stains. Very old deposits may require repeat sessions for complete removal.",
      },
    ],
  },
  {
    id: "bedroom-cleaning",
    slug: "bedroom-cleaning",
    category: "Bedroom",
    name: "Bedroom Cleaning",
    shortDescription:
      "Dusting, vacuuming, and surface cleaning for a restful space.",
    description:
      "A detailed bedroom cleaning that covers dusting of all surfaces, vacuuming, floor mopping, mirror cleaning, and general tidying to create a clean and comfortable sleeping environment.",
    image: "/images/bedroom-cleaning.png",
    price: 499,
    duration: "1–2 hours",
    bestFor: "Regular maintenance cleaning for bedrooms",
    included: [
      "Surface dusting (furniture, shelves, ledges)",
      "Floor vacuuming and mopping",
      "Mirror and glass cleaning",
      "Window sill wiping",
      "Cobweb removal",
      "Light switch and door handle sanitizing",
    ],
    excluded: [
      "Wardrobe interior organizing",
      "Laundry or clothes folding",
      "Mattress deep cleaning (available as add-on)",
      "Wall painting or repairs",
    ],
    addOns: [
      { id: "be1", name: "Wardrobe Interior Cleaning", price: 199 },
      { id: "be2", name: "Window Glass Cleaning", price: 149 },
    ],
    limitations: [
      "Heavy furniture will not be moved; cleaning around them",
      "Delicate items will not be touched unless instructed",
    ],
    preparation: [
      "Pick up clothes and personal items from floor and surfaces",
      "Clear bedside tables if possible",
    ],
    faq: [
      {
        q: "Do you make the bed?",
        a: "Yes, we can make the bed with existing linens as part of the service.",
      },
    ],
  },
  {
    id: "sofa-cleaning",
    slug: "sofa-cleaning",
    category: "Sofa & Upholstery",
    name: "Sofa Cleaning",
    shortDescription:
      "Deep vacuum, shampoo, and stain treatment for your sofa.",
    description:
      "Professional sofa cleaning that includes deep vacuuming, shampoo treatment, stain removal, and fabric conditioning. Suitable for fabric, leather, and mixed upholstery sofas.",
    image: "/images/sofa-cleaning.png",
    price: 699,
    duration: "1–2 hours",
    bestFor: "Sofas with stains, dust, pet hair, or general wear",
    included: [
      "Deep vacuum of sofa and cushions",
      "Shampoo treatment of fabric",
      "Stain spot treatment",
      "Cushion and armrest cleaning",
      "Fabric deodorizing",
    ],
    excluded: [
      "Tear or rip repair",
      "Re-stitching of cushions",
      "Leather conditioning (available as add-on)",
      "Removal of permanent ink or dye stains",
    ],
    addOns: [
      { id: "so1", name: "Leather Conditioning", price: 199 },
      { id: "so2", name: "Additional Cushion Set", price: 99 },
    ],
    limitations: [
      "Permanent stains (ink, bleach, dye) may not be removable",
      "Drying time of 3-4 hours is expected after shampoo treatment",
    ],
    preparation: [
      "Remove loose cushions and covers if applicable",
      "Clear the area around the sofa for easy access",
    ],
    faq: [
      {
        q: "How long does the sofa take to dry?",
        a: "Typically 3-4 hours with proper ventilation. We recommend keeping windows open.",
      },
    ],
  },
  {
    id: "full-house-deep-cleaning",
    slug: "full-house-deep-cleaning",
    category: "Full House",
    name: "Full House Deep Cleaning",
    shortDescription:
      "Complete deep cleaning for your entire home, top to bottom.",
    description:
      "Our most comprehensive residential cleaning service covering all rooms including kitchen, bathrooms, bedrooms, living area, balcony, and common spaces. A complete refresh for your home.",
    image: "/images/fullhouse-cleaning.jpg",
    price: 2999,
    duration: "5–7 hours",
    bestFor:
      "Complete home refresh, move-in/move-out cleaning, post-construction",
    included: [
      "Kitchen deep cleaning",
      "Bathroom deep cleaning (up to 2)",
      "Bedroom dusting and vacuuming",
      "Living area cleaning",
      "Floor mopping and sanitizing",
      "Window sill and cobweb cleaning",
      "Dusting of all accessible surfaces",
    ],
    excluded: [
      "Sofa shampoo cleaning (available as add-on)",
      "Carpet shampoo (available as add-on)",
      "Mattress deep cleaning (available as add-on)",
      "Exterior window cleaning at height",
      "Interior of closed wardrobes",
    ],
    addOns: [
      { id: "fh1", name: "Sofa Shampoo Cleaning", price: 699 },
      { id: "fh2", name: "Carpet Shampoo", price: 499 },
      { id: "fh3", name: "Mattress Cleaning", price: 399 },
      { id: "fh4", name: "Extra Bathroom", price: 299 },
    ],
    limitations: [
      "Service covers up to 3 BHK; larger homes may need custom quote",
      "Heavy furniture will not be moved",
      "Service duration may vary with home size",
    ],
    preparation: [
      "Declutter surfaces and floors where possible",
      "Ensure water and electricity are available",
      "Secure valuables and fragile items",
      "Inform team of any specific areas of concern",
    ],
    faq: [
      {
        q: "How many professionals come for a full house clean?",
        a: "Typically 2-3 trained professionals, depending on the size of your home.",
      },
      {
        q: "Do I need to be home during the service?",
        a: "We recommend someone be present at the start and end, but it is not mandatory throughout.",
      },
    ],
  },
  {
    id: "carpet-cleaning",
    slug: "carpet-cleaning",
    category: "Carpet",
    name: "Carpet Cleaning",
    shortDescription:
      "Deep shampoo and vacuum to remove dirt, dust, and stains.",
    description:
      "Professional carpet cleaning using deep vacuuming, shampoo treatment, and stain removal techniques. Suitable for area rugs, wall-to-wall carpets, and carpets of various materials.",
    image: "/images/carpet-cleaning.jpg",
    price: 599,
    duration: "1–2 hours",
    bestFor: "Carpets with dust, stains, pet hair, or odors",
    included: [
      "Deep vacuum of carpet",
      "Shampoo treatment",
      "Stain spot treatment",
      "Deodorizing",
      "Grooming and finishing",
    ],
    excluded: [
      "Carpet repair or re-binding",
      "Removal of permanent stains (ink, bleach)",
      "Carpet lifting or re-installation",
      "Padding replacement",
    ],
    addOns: [
      { id: "ca1", name: "Pet Odor Treatment", price: 149 },
      { id: "ca2", name: "Scotchgard Protection", price: 199 },
    ],
    limitations: [
      "Drying time of 4-6 hours expected",
      "Very old or set-in stains may not be fully removed",
    ],
    preparation: [
      "Move light furniture off the carpet",
      "Vacuum carpet lightly before the team arrives (optional)",
    ],
    faq: [
      {
        q: "How soon can I walk on the carpet after cleaning?",
        a: "We recommend waiting 4-6 hours for proper drying before regular use.",
      },
    ],
  },
  {
    id: "balcony-cleaning",
    slug: "balcony-cleaning",
    category: "Balcony",
    name: "Balcony Cleaning",
    shortDescription:
      "Sweep, wash, and degrease your balcony floor and railings.",
    description:
      "A focused cleaning service for balconies that includes sweeping, washing, railing wiping, and removal of dust and debris. Great for maintaining outdoor extension spaces.",
    image: "/images/balcony-cleaning.jpg",
    price: 399,
    duration: "45–60 min",
    bestFor: "Balconies with dust, bird droppings, or weather grime",
    included: [
      "Floor sweeping and washing",
      "Railing wiping",
      "Dust and debris removal",
      "Plant pot area tidying",
      "Wall ledge cleaning",
    ],
    excluded: [
      "Plant maintenance or pruning",
      "Furniture shampoo (available separately)",
      "Glass enclosure cleaning (available as add-on)",
      "Waterproofing or repairs",
    ],
    addOns: [
      { id: "bl1", name: "Glass Enclosure Cleaning", price: 199 },
      { id: "bl2", name: "Balcony Furniture Wipe", price: 99 },
    ],
    limitations: [
      "Water drainage should be available; otherwise, water will be contained",
    ],
    preparation: [
      "Remove loose items and planters if possible",
      "Inform team of any water drainage issues",
    ],
    faq: [
      {
        q: "Will you clean the balcony plants?",
        a: "We tidy the area around plants but do not maintain or prune plants as part of the service.",
      },
    ],
  },
  {
    id: "mattress-cleaning",
    slug: "mattress-cleaning",
    category: "Mattress",
    name: "Mattress Cleaning",
    shortDescription:
      "Vacuum, sanitize, and deodorize your mattress for better hygiene.",
    description:
      "A hygienic mattress cleaning service that includes deep vacuuming, sanitizing treatment, stain spot cleaning, and deodorizing to remove dust mites, allergens, and odors.",
    image: "/images/mattress-cleaning.jpg",
    price: 499,
    duration: "45–60 min",
    bestFor:
      "Mattresses needing hygiene refresh, dust mite removal, or odor treatment",
    included: [
      "Deep vacuum of mattress surface",
      "Sanitizing treatment",
      "Stain spot cleaning",
      "Deodorizing",
      "Both sides cleaning (if accessible)",
    ],
    excluded: [
      "Removal of permanent stains (blood, ink)",
      "Mattress repair or restitching",
      "Bed frame cleaning (available as add-on)",
    ],
    addOns: [
      { id: "ma1", name: "Bed Frame Cleaning", price: 99 },
      { id: "ma2", name: "Anti-Allergen Treatment", price: 149 },
    ],
    limitations: [
      "Mattress should be allowed to air dry for 1-2 hours",
      "Very old stains may not be fully removed",
    ],
    preparation: [
      "Remove all bedding, sheets, and covers",
      "Ensure access to both sides if possible",
    ],
    faq: [
      {
        q: "Is the sanitizing treatment safe?",
        a: "Yes, we use safe, non-toxic sanitizing solutions suitable for mattresses.",
      },
    ],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export const getServicesByCategory = (category) => {
  if (!category || category === "All") return services;
  return services.filter((s) => s.category === category);
};

export const getRelatedServices = (slug, limit = 3) => {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return services
    .filter((s) => s.slug !== slug && s.category === service.category)
    .slice(0, limit)
    .concat(
      services
        .filter((s) => s.slug !== slug && s.category !== service.category)
        .slice(0, limit),
    )
    .slice(0, limit);
};
