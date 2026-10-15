export const services = [
  // ==========================================
  // PAGE 1: Full House Deep Cleaning (Housekeeping) - Furnished
  // Note: 500-600 Sq Feet base per BHK
  // ==========================================
  {
    id: "full-house-deep-cleaning",
    slug: "full-house-deep-cleaning",
    category: "Full House",
    clientPage: 1,
    clientNote: "Note: 500-600 Sq Feet base • Note - Furnished",
    areaBadge: "500–600 Sq Ft (Base 1 BHK)",
    name: "Full House Deep Cleaning (Housekeeping)",
    shortDescription:
      "Complete furnished flat housekeeping deep clean with rotary machine scrubbing & sanitization.",
    description:
      "Complete top-to-bottom housekeeping deep cleaning for furnished apartments in Jaipur. Includes bedroom, living room, kitchen, bathroom, windows, balcony, floor scrubbing, and dust-proofing.",
    image: "/images/fullhouse-cleaning.jpg",
    price: 3915,
    originalPrice: 4499,
    discountPercent: 13,
    duration: "4–6 hours",
    bestFor:
      "Furnished 1 to 4 BHK apartments requiring end-to-end housekeeping deep cleaning",
    variants: [
      {
        id: "1bhk-express",
        name: "1 BHK Express",
        tier: "Express",
        sqft: "500–600 Sq Feet",
        originalPrice: 4499,
        price: 3915,
        discount: 13,
        duration: "3–4 hours",
        specs: "500–600 Sq Feet (Furnished)",
      },
      {
        id: "1bhk-elite",
        name: "1 BHK Elite",
        tier: "Elite",
        sqft: "500–600 Sq Feet",
        originalPrice: 4999,
        price: 4450,
        discount: 11,
        duration: "4–5 hours",
        specs: "500–600 Sq Feet (Furnished)",
      },
      {
        id: "1bhk-exclusive",
        name: "1 BHK Exclusive",
        tier: "Exclusive",
        sqft: "500–600 Sq Feet",
        originalPrice: 5999,
        price: 5400,
        discount: 10,
        duration: "5–6 hours",
        specs: "500–600 Sq Feet (Furnished)",
      },
      {
        id: "2bhk-express",
        name: "2 BHK Express",
        tier: "Express",
        sqft: "800–900 Sq Feet",
        originalPrice: 4999,
        price: 4450,
        discount: 11,
        duration: "4–5 hours",
        specs: "800–900 Sq Feet (Furnished)",
      },
      {
        id: "2bhk-elite",
        name: "2 BHK Elite",
        tier: "Elite",
        sqft: "800–900 Sq Feet",
        originalPrice: 5499,
        price: 4785,
        discount: 13,
        duration: "5–6 hours",
        specs: "800–900 Sq Feet (Furnished)",
      },
      {
        id: "2bhk-exclusive",
        name: "2 BHK Exclusive",
        tier: "Exclusive",
        sqft: "800–900 Sq Feet",
        originalPrice: 6499,
        price: 5655,
        discount: 13,
        duration: "6–7 hours",
        specs: "800–900 Sq Feet (Furnished)",
      },
      {
        id: "3bhk-express",
        name: "3 BHK Express",
        tier: "Express",
        sqft: "1200–1300 Sq Feet",
        originalPrice: 5499,
        price: 4950,
        discount: 10,
        duration: "5–6 hours",
        specs: "1200–1300 Sq Feet (Furnished)",
      },
      {
        id: "3bhk-elite",
        name: "3 BHK Elite",
        tier: "Elite",
        sqft: "1200–1300 Sq Feet",
        originalPrice: 5999,
        price: 5340,
        discount: 11,
        duration: "6–7 hours",
        specs: "1200–1300 Sq Feet (Furnished)",
      },
      {
        id: "3bhk-exclusive",
        name: "3 BHK Exclusive",
        tier: "Exclusive",
        sqft: "1200–1300 Sq Feet",
        originalPrice: 6999,
        price: 6230,
        discount: 11,
        duration: "7–8 hours",
        specs: "1200–1300 Sq Feet (Furnished)",
      },
      {
        id: "4bhk-express",
        name: "4 BHK Express",
        tier: "Express",
        sqft: "2000+ Sq Feet",
        originalPrice: 7999,
        price: 7200,
        discount: 10,
        duration: "6–8 hours",
        specs: "2000+ Sq Feet (Furnished)",
      },
      {
        id: "4bhk-elite",
        name: "4 BHK Elite",
        tier: "Elite",
        sqft: "2000+ Sq Feet",
        originalPrice: 8499,
        price: 7565,
        discount: 11,
        duration: "7–9 hours",
        specs: "2000+ Sq Feet (Furnished)",
      },
      {
        id: "4bhk-exclusive",
        name: "4 BHK Exclusive",
        tier: "Exclusive",
        sqft: "2000+ Sq Feet",
        originalPrice: 9499,
        price: 8365,
        discount: 12,
        duration: "8–10 hours",
        specs: "2000+ Sq Feet (Furnished)",
      },
    ],
    included: [
      "All bedrooms, living room & dining hall deep cleaning",
      "Full bathroom descaling, tile scrubbing & fixture polishing",
      "Kitchen exterior cabinets, slab, sink & wall tiles degreasing",
      "Rotary machine scrubbing on marble, tile or granite floors",
      "Ceiling fan blades, light fixtures & switchboard dusting",
      "Window channels, glass panes & balcony floor wash",
    ],
    excluded: [
      "Inside occupied wardrobes & personal storage drawers",
      "Appliance interiors (refrigerator/oven available as add-on)",
      "Terrace deep wash (available as separate service)",
      "Paint removal, wall putty repairs or wall repaint",
    ],
    addOns: [
      { id: "ha1", name: "Single Door Refrigerator Interior", price: 349 },
      { id: "ha2", name: "Double Door Refrigerator Interior", price: 499 },
      { id: "ha3", name: "Kitchen Chimney Degreasing", price: 350 },
      { id: "ha4", name: "Sofa 3-Seater Shampoo Extraction", price: 669 },
    ],
    limitations: [
      "Power and running water supply must be provided by customer",
      "Permanent rust or aged marble chemical stains may not fully vanish",
    ],
    preparation: [
      "Keep personal cash, jewelry and delicate documents safely locked",
      "Clear bathroom toiletries and kitchen open edibles beforehand",
    ],
    faq: [
      {
        q: "What is the difference between Express, Elite, and Exclusive?",
        a: "Express focuses on high-speed dust removal and wet mopping; Elite includes mechanized single-disc scrubbing and chemical wash; Exclusive offers exhaustive detailing, steam sanitization, and upholstery vacuuming.",
      },
      {
        q: "Do you bring your own machines and chemicals?",
        a: "Yes, our team carries industrial wet/dry vacuum cleaners, single disc scrubbers, microfibers, and certified non-toxic chemicals.",
      },
    ],
  },

  // ==========================================
  // PAGE 2: Vacant Home Deep Cleaning (Empty Flat)
  // 1 BHK (600-650 Sq Ft), 2 BHK (800-850 Sq Ft),
  // 3 BHK (1200-1250 Sq Ft), 4 BHK (2000-2050 Sq Ft)
  // ==========================================
  {
    id: "vacant-home-deep-cleaning",
    slug: "vacant-home-deep-cleaning",
    category: "Full House",
    clientPage: 2,
    clientNote: "Vacant Home Deep Cleaning • Empty Flat (600–2050 Sq Feet)",
    areaBadge: "600–2,050 Sq Feet",
    name: "Vacant Home Deep Cleaning (Empty Flat)",
    shortDescription:
      "Move-in / move-out empty apartment deep clean for unfurnished and furnished flats (600 to 2,050 Sq Feet).",
    description:
      "Specialized vacant flat deep cleaning before moving in or after shifting out. Thorough descaling of bathrooms, empty kitchen cabinets inside & out, floor scrubbing, window channels, and spiderweb clearance across 600 to 2,050 Sq Feet flats.",
    image: "/images/before-after-clean-house.png",
    price: 3599,
    originalPrice: 3999,
    discountPercent: 10,
    duration: "4–6 hours",
    bestFor:
      "Vacant flats before moving in or after handover in residential societies",
    variants: [
      {
        id: "1bhk-unfurnished",
        name: "1 BHK Unfurnished Empty",
        sqft: "600–650 Sq Feet",
        tier: "Unfurnished Empty",
        originalPrice: 3999,
        price: 3599,
        discount: 10,
        duration: "3–4 hours",
        specs: "600–650 Sq Feet Empty Flat",
      },
      {
        id: "1bhk-furnished",
        name: "1 BHK Furnished Empty",
        sqft: "600–650 Sq Feet",
        tier: "Furnished Empty",
        originalPrice: 5499,
        price: 4895,
        discount: 11,
        duration: "4–5 hours",
        specs: "600–650 Sq Feet Furnished Flat",
      },
      {
        id: "2bhk-unfurnished",
        name: "2 BHK Unfurnished Empty",
        sqft: "800–850 Sq Feet",
        tier: "Unfurnished Empty",
        originalPrice: 4999,
        price: 4499,
        discount: 10,
        duration: "4–5 hours",
        specs: "800–850 Sq Feet Empty Flat",
      },
      {
        id: "2bhk-furnished",
        name: "2 BHK Furnished Empty",
        sqft: "800–850 Sq Feet",
        tier: "Furnished Empty",
        originalPrice: 5999,
        price: 5280,
        discount: 11,
        duration: "5–6 hours",
        specs: "800–850 Sq Feet Furnished Flat",
      },
      {
        id: "3bhk-unfurnished",
        name: "3 BHK Unfurnished Empty",
        sqft: "1200–1250 Sq Feet",
        tier: "Unfurnished Empty",
        originalPrice: 5999,
        price: 5400,
        discount: 10,
        duration: "5–6 hours",
        specs: "1200–1250 Sq Feet Empty Flat",
      },
      {
        id: "3bhk-furnished",
        name: "3 BHK Furnished Empty",
        sqft: "1200–1250 Sq Feet",
        tier: "Furnished Empty",
        originalPrice: 6999,
        price: 6230,
        discount: 11,
        duration: "6–7 hours",
        specs: "1200–1250 Sq Feet Furnished Flat",
      },
      {
        id: "4bhk-unfurnished",
        name: "4 BHK Unfurnished Empty",
        sqft: "2000–2050 Sq Feet",
        tier: "Unfurnished Empty",
        originalPrice: 6999,
        price: 6300,
        discount: 10,
        duration: "6–8 hours",
        specs: "2000–2050 Sq Feet Empty Flat",
      },
      {
        id: "4bhk-furnished",
        name: "4 BHK Furnished Empty",
        sqft: "2000–2050 Sq Feet",
        tier: "Furnished Empty",
        originalPrice: 7999,
        price: 7120,
        discount: 11,
        duration: "7–9 hours",
        specs: "2000–2050 Sq Feet Furnished Flat",
      },
    ],
    included: [
      "Empty wardrobes, drawers & cabinets internal & external wiping",
      "Full kitchen inside-out sanitization & tile degreasing",
      "Rotary machine scrubbing on all floor surfaces",
      "Complete bathroom acid-free chemical wash & descaling",
      "Window slider channels, grills & glass squeegee clean",
      "Balcony wash and cobweb removal from ceilings and corners",
    ],
    excluded: [
      "Civil debris removal, cement chunks, or painting touchups",
      "Pest control treatment",
      "Electrical wiring and plumbing repairs",
    ],
    addOns: [
      { id: "va1", name: "Balcony Pressure Wash Add-on", price: 489 },
      { id: "va2", name: "Kitchen Exhaust Fan Deep Clean", price: 89 },
    ],
    limitations: [
      "Continuous water and electricity must be turned on in the vacant flat",
    ],
    preparation: [
      "Ensure keys and building society entry permissions are arranged",
    ],
    faq: [
      {
        q: "Is inside cabinet cleaning included?",
        a: "Yes! Since the flat is vacant, all empty cabinets, wardrobes, and kitchen shelves are cleaned both inside and outside.",
      },
    ],
  },

  // ==========================================
  // PAGE 3: Bungalow / Villa
  // 1: 2000 - 3500 Sq Feet
  // 2: 3500 - 5000 Sq Feet
  // 3: 5000 - 8000 Sq Feet
  // ==========================================
  {
    id: "villa-bungalow-deep-cleaning",
    slug: "villa-bungalow-deep-cleaning",
    category: "Full House",
    clientPage: 3,
    clientNote: "Bungalow / Villa (2000 to 8000 Sq Feet)",
    areaBadge: "2,000–8,000 Sq Feet",
    name: "Bungalow / Villa Deep Cleaning",
    shortDescription:
      "Heavy-duty residential villa & duplex deep cleaning across 2,000 to 8,000 Sq Feet.",
    description:
      "Multi-story independent bungalow and luxury villa deep cleaning with multi-member team, high-pressure washers, rotary floor scrubbers, glass squeegees, and terrace cleaning across 2,000 to 8,000 Sq Feet.",
    image: "/images/3d-residential-home.jpg",
    price: 9999,
    originalPrice: 11999,
    discountPercent: 17,
    duration: "6–10 hours",
    bestFor:
      "Independent villas, duplex homes, kothis and bungalows in Jaipur",
    variants: [
      {
        id: "villa-small",
        name: "2000 – 3500 Sq Feet Villa",
        sqft: "2000–3500 Sq Feet",
        tier: "2000–3500 Sq Ft",
        originalPrice: 11999,
        price: 9999,
        discount: 17,
        duration: "6–7 hours",
        specs: "2,000 to 3,500 Sq Feet built-up area",
      },
      {
        id: "villa-medium",
        name: "3500 – 5000 Sq Feet Villa",
        sqft: "3500–5000 Sq Feet",
        tier: "3500–5000 Sq Ft",
        originalPrice: 17999,
        price: 14999,
        discount: 17,
        duration: "7–9 hours",
        specs: "3,500 to 5,000 Sq Feet built-up area",
      },
      {
        id: "villa-large",
        name: "5000 – 8000 Sq Feet Villa",
        sqft: "5000–8000 Sq Feet",
        tier: "5000–8000 Sq Ft",
        originalPrice: 23999,
        price: 19999,
        discount: 17,
        duration: "9–12 hours",
        specs: "5,000 to 8,000 Sq Feet built-up area",
      },
    ],
    included: [
      "Complete multi-floor bedrooms, halls, staircase & railings",
      "All attached and common bathrooms chemical descaling",
      "Modular kitchen degreasing & exterior cabinet wiping",
      "High-pressure wash for porch, driveway and balconies",
      "Full machine floor buffing and scrubbing across all rooms",
      "Rooftop parapet wall dusting & spiderweb eradication",
    ],
    excluded: [
      "Garden lawn mowing or tree trimming",
      "Overhead water tank interior cleaning",
      "Chandelier dismantling requiring master electricians",
    ],
    addOns: [
      { id: "vb1", name: "Terrace High Pressure Wash (Up to 500 sq ft)", price: 3499 },
      { id: "vb2", name: "Sofa 5 Seater Shampooing", price: 949 },
    ],
    limitations: [
      "Requires team access for 6 to 10 hours depending on square footage",
    ],
    preparation: [
      "Please designate a safe space for pets during the service",
    ],
    faq: [
      {
        q: "How many cleaners come for a villa deep clean?",
        a: "A dedicated crew of 4 to 8 trained cleaners with a dedicated supervisor arrives with professional equipment.",
      },
    ],
  },

  // ==========================================
  // PAGE 4: Customized Cleaning Package
  // 1. Living Room Deep Cleaning (Express: 1099->999, Exclusive: 1599->1299)
  // 2. Kitchen Deep Cleaning (Full Occupied with Chimney: 2346->2199, without Chimney: 1947->1749, Empty: 1249->1099, Trolley: 1549->1299)
  // 3. Bathroom Deep Cleaning (Chemical Wash Manual: 499, Machine Scrubbing: 549)
  // 4. Bedroom Deep Cleaning (only for Flats) (Single Express: 949->799, Exclusive: 1499->1249)
  // ==========================================
  {
    id: "living-room-deep-cleaning",
    slug: "living-room-deep-cleaning",
    category: "Bedroom & Living",
    clientPage: 4,
    clientNote: "Customized Cleaning Package • Item 1",
    areaBadge: "Living Room (Express / Exclusive)",
    name: "Living Room Deep Cleaning",
    shortDescription:
      "Living room deep clean with furniture dusting, glass wipedown & floor buffing.",
    description:
      "Complete living area and drawing hall deep cleaning. Dusting intricate display units, sofas, windows, chandeliers, light fittings, and floor sanitization.",
    image: "/images/hero-cleaner-mascot.jpg",
    price: 999,
    originalPrice: 1099,
    discountPercent: 10,
    duration: "1.5–2.5 hours",
    bestFor: "Living halls, drawing rooms and family lounges",
    variants: [
      {
        id: "living-express",
        name: "Living Room Deep Cleaning (Express)",
        sqft: "Standard Living Hall",
        tier: "Express",
        originalPrice: 1099,
        price: 999,
        discount: 10,
        duration: "1.5–2 hours",
        specs: "10% Discount • Dry dusting, fans, glass wiping & floor mopping",
      },
      {
        id: "living-exclusive",
        name: "Living Room Deep Cleaning (Exclusive)",
        sqft: "Standard Living Hall",
        tier: "Exclusive",
        originalPrice: 1599,
        price: 1299,
        discount: 19,
        duration: "2.5–3 hours",
        specs: "19% Discount • Deep motorized scrub, upholstery vacuum & doors",
      },
    ],
    included: [
      "TV cabinet, center table, console and shelf dusting",
      "Ceiling fan, false ceiling cove and chandelier wiping",
      "Window slider channels, glass squeegeeing and curtains dusting",
      "Floor scrubbing and baseboard dust removal",
    ],
    excluded: [
      "Sofa wet shampoo extraction (available as add-on)",
      "Carpet shampoo (available as add-on)",
    ],
    addOns: [
      { id: "la1", name: "Sofa 3 Seater Shampooing", price: 669 },
      { id: "la2", name: "Carpet Cleaning (Small)", price: 499 },
    ],
    limitations: [],
    preparation: [
      "Remove loose valuables or fragile showpieces from low consoles",
    ],
    faq: [
      {
        q: "Does this include the dining space?",
        a: "If the dining area is integrated within the hall, general dusting and floor scrubbing is included.",
      },
    ],
  },
  {
    id: "kitchen-deep-cleaning",
    slug: "kitchen-deep-cleaning",
    category: "Kitchen",
    clientPage: 4,
    clientNote: "Customized Cleaning Package • Item 2 (With/Without Chimney & Empty Flat)",
    areaBadge: "Occupied & Empty Kitchen Options",
    name: "Kitchen Deep Cleaning",
    shortDescription:
      "Oil degreasing, chimney exterior/interior, modular trolleys & tile scrubbing.",
    description:
      "Intensive kitchen sanitation service removing heavy oil deposits, carbon build-up, and grime from slab, gas stove, tiles, sink, and modular cabinets. Includes occupied with/without chimney and empty kitchen packages.",
    image: "/images/Cleaner-Kitchen.png",
    price: 1099,
    originalPrice: 1249,
    discountPercent: 12,
    duration: "2–3 hours",
    bestFor: "Homes needing grease-free, food-safe and spotless kitchens",
    variants: [
      {
        id: "empty-kitchen",
        name: "Empty Kitchen Cleaning (only for 1, 2, 3 Flats)",
        sqft: "1, 2, 3 BHK Flats",
        tier: "Empty Kitchen",
        originalPrice: 1249,
        price: 1099,
        discount: 12,
        duration: "1.5–2 hours",
        specs: "Only for 1, 2, 3 Flats (Unoccupied)",
      },
      {
        id: "trolley-cabinets-only",
        name: "Only Trolley & Cabinets Cleaning",
        sqft: "Modular Kitchen Storage",
        tier: "Trolley & Cabinets",
        originalPrice: 1549,
        price: 1299,
        discount: 16,
        duration: "2 hours",
        specs: "Inside & outside modular trolley drawers & racks",
      },
      {
        id: "occupied-no-chimney",
        name: "Full Occupied Kitchen Deep Cleaning Without Chimney",
        sqft: "Standard Kitchen",
        tier: "Occupied without Chimney",
        originalPrice: 1947,
        price: 1749,
        discount: 10,
        duration: "2.5–3 hours",
        specs: "Complete occupied kitchen surface & storage degreasing",
      },
      {
        id: "occupied-with-chimney",
        name: "Full Occupied Kitchen Deep Cleaning With Chimney",
        sqft: "Standard Kitchen",
        tier: "Occupied with Chimney",
        originalPrice: 2346,
        price: 2199,
        discount: 6,
        duration: "3–4 hours",
        specs: "Complete occupied kitchen + complete chimney deep cleaning",
      },
    ],
    included: [
      "Gas stove, burners, and backsplash tile degreasing",
      "Sink and chrome tap limescale removal & polish",
      "Countertop and granite slab oil stain scrubbing",
      "Cabinet exteriors wiping and handle disinfection",
      "Exhaust fan outer casing and floor mopping",
    ],
    excluded: [
      "Utensil washing and grocery sorting",
      "Appliance internal cleaning unless chosen as variant or add-on",
    ],
    addOns: [
      { id: "kc1", name: "Kitchen Exhaust Fan Deep Scrub", price: 89 },
      { id: "kc2", name: "Single Door Refrigerator Deep Clean", price: 349 },
      { id: "kc3", name: "Double Door Refrigerator Deep Clean", price: 499 },
    ],
    limitations: [
      "Very old turmeric or oil burn stains may leave mild shadows",
    ],
    preparation: [
      "Please remove expensive crockery or sharp cutlery from counters",
    ],
    faq: [
      {
        q: "Are the chemicals safe for food prep areas?",
        a: "Yes, we use certified food-safe, non-caustic degreasers and rinse all prep surfaces with warm water.",
      },
    ],
  },
  {
    id: "bathroom-deep-cleaning",
    slug: "bathroom-deep-cleaning",
    category: "Bathroom",
    clientPage: 4,
    clientNote: "Customized Cleaning Package • Item 3 (Manual / Machine Scrubbing)",
    areaBadge: "Manual & Machine Options",
    name: "Bathroom Deep Cleaning",
    shortDescription:
      "Chemical wash (manual) & rotary machine-based deep descaling.",
    description:
      "Restore shine and hygienic freshness with specialized chemical wash and mechanized scrubbing that eliminates limescale, soap scum, and yellow water stains.",
    image: "/images/bathroom-cleaning.png",
    price: 499,
    originalPrice: 499,
    discountPercent: 0,
    duration: "1–2 hours",
    bestFor: "Bathrooms plagued by hard water deposits and dull ceramic tiles",
    variants: [
      {
        id: "manual-wash",
        name: "Chemical Wash (Manual Cleaning)",
        sqft: "Standard Bathroom",
        tier: "Manual Wash",
        originalPrice: 499,
        price: 499,
        discount: 0,
        duration: "1–1.5 hours",
        specs: "Manual chemical descaling for tiles, fittings & WC",
      },
      {
        id: "machine-scrubbing",
        name: "Scrubbing Machine-Based Cleaning",
        sqft: "Standard Bathroom",
        tier: "Machine-Based",
        originalPrice: 549,
        price: 549,
        discount: 0,
        duration: "1.5–2 hours",
        specs: "Rotary motorized machine scrubbing for tiles & grout",
      },
    ],
    included: [
      "Wall tile scrubbing and hard water scale removal",
      "Toilet pot, seat, rim and cistern sanitization",
      "Washbasin, vanity mirror and glass partition descaling",
      "Shower head, taps and chrome fixtures buffing",
      "Floor scrubbing and drain grill sanitizing",
    ],
    excluded: [
      "Grout replacement or re-siliconing seams",
      "Plumbing leakage repairs",
    ],
    addOns: [
      { id: "ba1", name: "Bathroom Exhaust Fan Cleaning", price: 59 },
      { id: "ba2", name: "Shower Glass Acid Stain Buffing", price: 149 },
    ],
    limitations: [
      "Permanent etching on aged glass cannot be completely reversed",
    ],
    preparation: [
      "Remove toothbrushes, towels, and clothing before team arrives",
    ],
    faq: [
      {
        q: "Can you remove stubborn yellow water stains?",
        a: "Yes, our specialized descaling agents dissolve tough mineral deposits from tiles and ceramicware.",
      },
    ],
  },
  {
    id: "bedroom-deep-cleaning",
    slug: "bedroom-deep-cleaning",
    category: "Bedroom & Living",
    clientPage: 4,
    clientNote: "Customized Cleaning Package • Item 4 (only for Flats)",
    areaBadge: "Only for Flats (Express / Exclusive)",
    name: "Bedroom Deep Cleaning (only for Flats)",
    shortDescription:
      "Dedicated single bedroom deep cleaning for flats (Express & Exclusive options).",
    description:
      "Dedicated deep cleaning for residential bedrooms in flats. Includes under-bed vacuuming, wardrobe exterior wipe-down, mirror polishing, and cobweb removal.",
    image: "/images/bedroom-cleaning.png",
    price: 799,
    originalPrice: 949,
    discountPercent: 16,
    duration: "1–2 hours",
    bestFor: "Master, kids, or guest bedrooms in flats needing thorough hygiene",
    variants: [
      {
        id: "bedroom-express",
        name: "Single Bedroom Express (only for Flats)",
        sqft: "1 Bedroom in Flat",
        tier: "Express",
        originalPrice: 949,
        price: 799,
        discount: 16,
        duration: "1–1.5 hours",
        specs: "Only for Flats • Quick dust removal, fan, mirror & floor sanitation",
      },
      {
        id: "bedroom-exclusive",
        name: "Single Bedroom Exclusive (only for Flats)",
        sqft: "1 Bedroom in Flat",
        tier: "Exclusive",
        originalPrice: 1499,
        price: 1249,
        discount: 17,
        duration: "2–2.5 hours",
        specs: "Only for Flats • Deep scrub, wardrobe detailing, window tracks & buffing",
      },
    ],
    included: [
      "Wardrobe exterior cleaning and handle sanitization",
      "Ceiling fan, AC vents exterior and switchboard dusting",
      "Dressing table mirror and vanity shelf wipe-down",
      "Under-bed vacuuming and tile floor scrubbing",
    ],
    excluded: [
      "Mattress shampooing (available as add-on)",
      "Rearranging clothes inside private wardrobes",
    ],
    addOns: [
      { id: "bda1", name: "Ceiling Fan Deep Clean", price: 59 },
      { id: "bda2", name: "Mattress Sanitizing & Vacuum", price: 499 },
    ],
    limitations: [],
    preparation: [
      "Strip bed linens beforehand if mattress vacuuming is requested",
    ],
    faq: [
      {
        q: "Do you clean behind heavy wooden beds?",
        a: "Yes, our team moves movable furniture carefully to vacuum and mop behind and underneath.",
      },
    ],
  },

  // ==========================================
  // PAGE 5:
  // 5. Balcony Cleaning Service: Small (25 Sq Ft: 489), Medium (50 Sq Ft: 639), Large (150 Sq Ft: 899)
  // 6. Terrace Cleaning Services: Small (200 Sq Ft: 1999->1799), Medium (500 Sq Ft: 3499), Large (1000 Sq Ft: 5499)
  // 7. Sofa Shampooing & Upholstery: 3 Seater (669), 4(799), 5(949), 6(999), 7(1099), 8(1249), 9(1349), 10(1449), 11(1699), 12(1799)
  // 8. Carpet Cleaning Services: Small (50 Sq Ft: 499), Medium (50-100 Sq Ft: 649), Large (100-150 Sq Ft: 799), Extra Large (150-200 Sq Ft: 949)
  // 9. Chimney Cleaning Services: Standard Chimney (350)
  // ==========================================
  {
    id: "balcony-cleaning",
    slug: "balcony-cleaning",
    category: "Balcony & Terrace",
    clientPage: 5,
    clientNote: "Item 5: Balcony Cleaning Service (25, 50, 150 Sq Feet)",
    areaBadge: "25 / 50 / 150 Sq Feet",
    name: "Balcony Cleaning Service",
    shortDescription:
      "Balcony cleaning service for Small (25 Sq Ft), Medium (50 Sq Ft), and Large (150 Sq Ft).",
    description:
      "Wash away outdoor dust, bird droppings, and dried rain spots from balcony floors, railings, glass panels, and drainage outlets. Exact rates for 25, 50, and 150 Sq Feet.",
    image: "/images/balcony-cleaning.jpg",
    price: 489,
    originalPrice: 489,
    discountPercent: 0,
    duration: "45–90 min",
    bestFor: "Balconies exposed to dust, pigeon droppings, and weather grime",
    variants: [
      {
        id: "balcony-small",
        name: "Small Balcony",
        sqft: "25 Sq Feet",
        tier: "Small",
        originalPrice: 489,
        price: 489,
        discount: 0,
        duration: "45 min",
        specs: "25 Sq Feet Area",
      },
      {
        id: "balcony-medium",
        name: "Medium Balcony",
        sqft: "50 Sq Feet",
        tier: "Medium",
        originalPrice: 639,
        price: 639,
        discount: 0,
        duration: "60 min",
        specs: "50 Sq Feet Area",
      },
      {
        id: "balcony-large",
        name: "Large Balcony",
        sqft: "150 Sq Feet",
        tier: "Large",
        originalPrice: 899,
        price: 899,
        discount: 0,
        duration: "90 min",
        specs: "150 Sq Feet Area",
      },
    ],
    included: [
      "Railing dust, rust spots and paint wipe-down",
      "Balcony floor scrubbing and high-pressure water wash",
      "Pigeon dropping sanitization with disinfectant",
      "Drain trap clearance and glass partition cleaning",
    ],
    excluded: [
      "Plant repotting or trimming",
      "Pigeon net installation",
    ],
    addOns: [
      { id: "bla1", name: "Adjacent Balcony Cleaning", price: 399 },
    ],
    limitations: [],
    preparation: [
      "Move potted plants to one corner to facilitate deep floor washing",
    ],
    faq: [
      {
        q: "Can you safely clean pigeon mess?",
        a: "Yes, we use antiviral and antibacterial disinfectants to safely dissolve bird droppings.",
      },
    ],
  },
  {
    id: "terrace-cleaning",
    slug: "terrace-cleaning",
    category: "Balcony & Terrace",
    clientPage: 5,
    clientNote: "Item 6: Terrace Cleaning Services (200, 500, 1000 Sq Feet)",
    areaBadge: "200 / 500 / 1,000 Sq Feet",
    name: "Terrace Cleaning Services",
    shortDescription:
      "Open rooftop terrace pressure washing for Small (200 Sq Ft), Medium (500 Sq Ft) & Large (1000 Sq Ft).",
    description:
      "Heavy-duty rooftop and terrace pressure washing. Removes embedded dirt, moss, dried sludge, and unclogs water drain openings across 200, 500, and 1,000 Sq Feet terraces.",
    image: "/images/other-cleaning.jpg",
    price: 1799,
    originalPrice: 1999,
    discountPercent: 10,
    duration: "2–4 hours",
    bestFor: "Open terraces, penthouses and rooftop floors in residential properties",
    variants: [
      {
        id: "terrace-small",
        name: "Small Terrace",
        sqft: "200 Sq Feet",
        tier: "Small",
        originalPrice: 1999,
        price: 1799,
        discount: 10,
        duration: "2 hours",
        specs: "200 Sq Feet (MRP ₹1,999 ➔ ₹1,799)",
      },
      {
        id: "terrace-medium",
        name: "Medium Terrace",
        sqft: "500 Sq Feet",
        tier: "Medium",
        originalPrice: 3499,
        price: 3499,
        discount: 0,
        duration: "3 hours",
        specs: "500 Sq Feet Area",
      },
      {
        id: "terrace-large",
        name: "Large Terrace",
        sqft: "1000 Sq Feet",
        tier: "Large",
        originalPrice: 5499,
        price: 5499,
        discount: 0,
        duration: "4–5 hours",
        specs: "1000 Sq Feet Area",
      },
    ],
    included: [
      "High-pressure jet wash across entire terrace floor",
      "Parapet wall inner face cleaning and cobweb clearance",
      "Drain pipes and rainwater channels clearing",
      "Moss, algae and dirt stain removal",
    ],
    excluded: [
      "Waterproofing coatings or epoxy crack sealing",
      "Water tank internal wash",
    ],
    addOns: [
      { id: "ta1", name: "Balcony Wash Add-on", price: 489 },
    ],
    limitations: [
      "Adequate water pressure/tap connection must be available on terrace",
    ],
    preparation: [
      "Ensure rooftop access is unlocked for the cleaning crew",
    ],
    faq: [
      {
        q: "Does pressure washing damage the terrace tiles?",
        a: "No, our nozzles are calibrated to effectively lift moss and grime without harming grout or waterproofing.",
      },
    ],
  },
  {
    id: "sofa-shampooing",
    slug: "sofa-shampooing",
    category: "Sofa & Upholstery",
    clientPage: 5,
    clientNote: "Item 7: Sofa Shampooing & Upholstery Cleaning (3 to 12 Seater)",
    areaBadge: "3 to 12 Seater",
    name: "Sofa Shampooing & Upholstery Cleaning",
    shortDescription:
      "Sofa shampoo wash from 3-seater to 12-seater with wet moisture extraction.",
    description:
      "Professional 3-stage injection-extraction shampooing that lifts deep dust, food spills, skin oils, and allergens without soaking your furniture. Full rates from 3 seater up to 12 seater.",
    image: "/images/sofa-cleaning.png",
    price: 669,
    originalPrice: 669,
    discountPercent: 0,
    duration: "1–3.5 hours",
    bestFor: "Fabric, suede, and upholstered sofas needing thorough stain extraction",
    variants: [
      { id: "sofa-3", name: "Sofa Shampoo Wash (3 Seater)", sqft: "3 Seater", tier: "3 Seater", originalPrice: 669, price: 669, discount: 0, duration: "1 hour", specs: "3 Seater Sofa" },
      { id: "sofa-4", name: "Sofa Shampoo Wash (4 Seater)", sqft: "4 Seater", tier: "4 Seater", originalPrice: 799, price: 799, discount: 0, duration: "1.25 hours", specs: "4 Seater Sofa" },
      { id: "sofa-5", name: "Sofa Shampoo Wash (5 Seater)", sqft: "5 Seater", tier: "5 Seater", originalPrice: 949, price: 949, discount: 0, duration: "1.5 hours", specs: "5 Seater Sofa" },
      { id: "sofa-6", name: "Sofa Shampoo Wash (6 Seater)", sqft: "6 Seater", tier: "6 Seater", originalPrice: 999, price: 999, discount: 0, duration: "1.75 hours", specs: "6 Seater Sofa" },
      { id: "sofa-7", name: "Sofa Shampoo Wash (7 Seater)", sqft: "7 Seater", tier: "7 Seater", originalPrice: 1099, price: 1099, discount: 0, duration: "2 hours", specs: "7 Seater Sofa" },
      { id: "sofa-8", name: "Sofa Shampoo Wash (8 Seater)", sqft: "8 Seater", tier: "8 Seater", originalPrice: 1249, price: 1249, discount: 0, duration: "2.25 hours", specs: "8 Seater Sofa" },
      { id: "sofa-9", name: "Sofa Shampoo Wash (9 Seater)", sqft: "9 Seater", tier: "9 Seater", originalPrice: 1349, price: 1349, discount: 0, duration: "2.5 hours", specs: "9 Seater Sofa" },
      { id: "sofa-10", name: "Sofa Shampoo Wash (10 Seater)", sqft: "10 Seater", tier: "10 Seater", originalPrice: 1449, price: 1449, discount: 0, duration: "2.75 hours", specs: "10 Seater Sofa" },
      { id: "sofa-11", name: "Sofa Shampoo Wash (11 Seater)", sqft: "11 Seater", tier: "11 Seater", originalPrice: 1699, price: 1699, discount: 0, duration: "3 hours", specs: "11 Seater Sofa" },
      { id: "sofa-12", name: "Sofa Shampoo Wash (12 Seater)", sqft: "12 Seater", tier: "12 Seater", originalPrice: 1799, price: 1799, discount: 0, duration: "3.5 hours", specs: "12 Seater Sofa" },
    ],
    included: [
      "Dry vacuuming to extract deep dust mites and crumbs",
      "Specialized foam shampoo application and gentle scrubbing",
      "High-power wet extraction removing 90% of moisture",
      "Deodorization and anti-bacterial hygiene misting",
    ],
    excluded: [
      "Cushion re-stuffing or fabric re-stitching",
      "Removal of permanent ink or acid chemical stains",
    ],
    addOns: [
      { id: "sa1", name: "Dining Chair Shampoo (Per Chair)", price: 49 },
      { id: "sa2", name: "Carpet Small Shampoo", price: 499 },
    ],
    limitations: [
      "Sofa requires 2 to 3 hours under ceiling fan to dry completely",
    ],
    preparation: [
      "Keep loose items, remotes, and throw pillows off the sofa",
    ],
    faq: [
      {
        q: "How long does the sofa take to dry?",
        a: "Our industrial wet vacuum extracts almost all water. With fans on, the sofa is ready to use in about 2 to 3 hours.",
      },
    ],
  },
  {
    id: "carpet-cleaning",
    slug: "carpet-cleaning",
    category: "Carpet",
    clientPage: 5,
    clientNote: "Item 8: Carpet Cleaning Services (50 to 200 Sq Feet)",
    areaBadge: "50 to 200 Sq Feet",
    name: "Carpet Cleaning Services",
    shortDescription:
      "Carpet cleaning services: Small (50 Sq Ft), Medium (50–100 Sq Ft), Large (100–150 Sq Ft), Extra Large (150–200 Sq Ft).",
    description:
      "Restore soft texture and vibrant colors to your floor carpets and rugs. High-grade foam shampoo loosens ground-in soil, followed by powerful moisture suction. Exact square foot tiers from 50 to 200 Sq Feet.",
    image: "/images/carpet-cleaning.jpg",
    price: 499,
    originalPrice: 499,
    discountPercent: 0,
    duration: "45–90 min",
    bestFor: "Living room centerpieces, bedroom rugs and wall-to-wall carpets",
    variants: [
      { id: "carpet-small", name: "Small Carpet", sqft: "50 Sq Feet", tier: "Small", originalPrice: 499, price: 499, discount: 0, duration: "45 min", specs: "50 Sq Feet Area" },
      { id: "carpet-medium", name: "Medium Carpet", sqft: "50–100 Sq Feet", tier: "Medium", originalPrice: 649, price: 649, discount: 0, duration: "60 min", specs: "50–100 Sq Feet Area" },
      { id: "carpet-large", name: "Large Carpet", sqft: "100–150 Sq Feet", tier: "Large", originalPrice: 799, price: 799, discount: 0, duration: "75 min", specs: "100–150 Sq Feet Area" },
      { id: "carpet-xl", name: "Extra Large Carpet", sqft: "150–200 Sq Feet", tier: "Extra Large", originalPrice: 949, price: 949, discount: 0, duration: "90 min", specs: "150–200 Sq Feet Area" },
    ],
    included: [
      "High suction dry vacuuming to lift trapped dust particles",
      "Fabric-safe detergent agitation to loosen beverage and foot stains",
      "Wet extraction vacuum to suck out dirty water and soap",
      "Fiber conditioning and deodorizing mist",
    ],
    excluded: [
      "Carpet edge re-weaving or burn mark repair",
      "Removal of permanent chemical dyes",
    ],
    addOns: [
      { id: "ca1", name: "Anti-Bacterial Sanitizing Spray", price: 99 },
    ],
    limitations: [
      "Carpets need 2 to 3 hours under ambient airflow to dry fully",
    ],
    preparation: [
      "Please remove delicate glass items from nearby tables",
    ],
    faq: [
      {
        q: "Do you clean the carpet on-site?",
        a: "Yes, our team performs the entire shampooing and extraction process directly in your home.",
      },
    ],
  },
  {
    id: "chimney-cleaning",
    slug: "chimney-cleaning",
    category: "Kitchen",
    clientPage: 5,
    clientNote: "Item 9: Chimney Cleaning Services (Standard Chimney: ₹350)",
    areaBadge: "Standard Chimney",
    name: "Chimney Cleaning Services",
    shortDescription:
      "Standard chimney caustic degreasing, motor wipe & stainless steel buffing (₹350).",
    description:
      "Targeted kitchen chimney cleaning. Disassembles baffle/mesh filters, soaks them in heavy-duty degreaser, wipes internal blower blades, and polishes the outer hood.",
    image: "/images/Cleaner-Kitchen.png",
    price: 350,
    originalPrice: 350,
    discountPercent: 0,
    duration: "45–60 min",
    bestFor: "Kitchen chimneys with choked filters, oil dripping and low suction",
    variants: [
      { id: "chimney-standard", name: "Standard Chimney", sqft: "Standard Kitchen Chimney", tier: "Standard", originalPrice: 350, price: 350, discount: 0, duration: "45–60 min", specs: "Standard Chimney Deep Clean" },
    ],
    included: [
      "Baffle/cassette filter removal and chemical degreasing bath",
      "Outer hood, control panel and stainless steel body polish",
      "Oil collector cup cleaning and internal chamber wipe",
      "Suction re-testing after filter reassembly",
    ],
    excluded: [
      "Motor winding repairs or electrical circuit board fixing",
      "Duct pipe replacement outside the kitchen",
    ],
    addOns: [
      { id: "ch1", name: "Kitchen Exhaust Fan Deep Clean", price: 89 },
      { id: "ch2", name: "Gas Stove Burner Cleaning", price: 149 },
    ],
    limitations: [],
    preparation: [
      "Ensure the chimney switch point is accessible",
    ],
    faq: [
      {
        q: "How often should chimney filters be cleaned?",
        a: "For Indian cooking with oil and spices, filters should be deep cleaned every 2 to 3 months.",
      },
    ],
  },

  // ==========================================
  // PAGE 6:
  // 10. Fridge Cleaning Service: Side by Side (Triple door: 599), Single Door (349), Double Door (499)
  // 11. Exhaust Fan Cleaning: Express (89), Elite (149), Exclusive (249)
  // 12. Mini Services: Kitchen Ceiling Fan (79), Living/Bedroom Ceiling Fan (59), Bathroom Exhaust Fan (59), Kitchen Exhaust Fan (89), Appliance + Single Door (799), Double Door (999), Side by Side Door (1299)
  // 13. Dining Table & Chair Cleaning: 4S(199), 5S(249), 6S(299), 7S(309), 8S(399), 9S(410), 10S(499), Dining + Sofa 3S(799), Dining + Sofa 5S(899)
  // ==========================================
  {
    id: "refrigerator-cleaning",
    slug: "refrigerator-cleaning",
    category: "Appliances & Mini",
    clientPage: 6,
    clientNote: "Item 10: Fridge Cleaning Service (Single, Double, Side by Side Triple Door)",
    areaBadge: "Single / Double / Triple Door",
    name: "Fridge Cleaning Service",
    shortDescription:
      "Antibacterial sanitization for Single Door (₹349), Double Door (₹499) & Side by Side Triple Door (₹599).",
    description:
      "Hygienic refrigerator deep cleaning. Removable shelves are washed, gasket mold sanitized, food-safe deodorizer applied, and condenser coils vacuumed.",
    image: "/images/3d-eco-chemicals.jpg",
    price: 349,
    originalPrice: 349,
    discountPercent: 0,
    duration: "45–75 min",
    bestFor: "Eliminating food odors, sticky shelf spills and door gasket fungus",
    variants: [
      { id: "fridge-single", name: "Single Door Fridge", sqft: "Direct-Cool / Single Door", tier: "Single Door", originalPrice: 349, price: 349, discount: 0, duration: "45 min", specs: "Single Door Refrigerator" },
      { id: "fridge-double", name: "Double Door Fridge", sqft: "Frost-Free / Double Door", tier: "Double Door", originalPrice: 499, price: 499, discount: 0, duration: "60 min", specs: "Double Door Refrigerator" },
      { id: "fridge-side-by-side", name: "Side By Side (Triple Door) Fridge", sqft: "Triple Door / Side By Side", tier: "Triple Door", originalPrice: 599, price: 599, discount: 0, duration: "75 min", specs: "Side By Side (Triple Door)" },
    ],
    included: [
      "All shelves, racks and vegetable trays removed and sanitized",
      "Rubber door gasket degerming to kill black mold",
      "Internal walls antibacterial wash and food-safe wipe",
      "Exterior door wipe-down and handle disinfection",
    ],
    excluded: [
      "Gas charging, compressor repairs or electrical troubleshooting",
    ],
    addOns: [
      { id: "fra1", name: "Kitchen Microwave Deep Clean", price: 149 },
    ],
    limitations: [],
    preparation: [
      "Please empty perishable foods into temporary containers before arrival",
    ],
    faq: [
      {
        q: "Are the cleaning agents safe inside the fridge?",
        a: "Yes, we use food-safe, non-hazardous cleaning solutions followed by a sterile hot wipe.",
      },
    ],
  },
  {
    id: "exhaust-fan-cleaning",
    slug: "exhaust-fan-cleaning",
    category: "Appliances & Mini",
    clientPage: 6,
    clientNote: "Item 11: Exhaust Fan Cleaning (Express: ₹89, Elite: ₹149, Exclusive: ₹249)",
    areaBadge: "Express / Elite / Exclusive",
    name: "Exhaust Fan Cleaning",
    shortDescription:
      "Heavy grease removal & blade scrubbing: Express (₹89), Elite (₹149), Exclusive (₹249).",
    description:
      "Clear sticky oil and greasy dirt from exhaust fans in kitchens and bathrooms. Restores proper suction power and air circulation.",
    image: "/images/3d-machine-scrubber.jpg",
    price: 89,
    originalPrice: 89,
    discountPercent: 0,
    duration: "20–45 min",
    bestFor: "Sticky, noisy or choked exhaust fans in kitchens and washrooms",
    variants: [
      { id: "exhaust-express", name: "Exhaust Fan (Express)", sqft: "1 Fan", tier: "Express", originalPrice: 89, price: 89, discount: 0, duration: "20 min", specs: "Standard blade & grill degreasing" },
      { id: "exhaust-elite", name: "Exhaust Fan (Elite)", sqft: "1 Fan", tier: "Elite", originalPrice: 149, price: 149, discount: 0, duration: "35 min", specs: "Deep chemical soak, blade detailing & casing clean" },
      { id: "exhaust-exclusive", name: "Exhaust Fan (Exclusive)", sqft: "1 Fan", tier: "Exclusive", originalPrice: 249, price: 249, discount: 0, duration: "45 min", specs: "Full dismounting, motor casing & duct clean" },
    ],
    included: [
      "Fan blade chemical degreasing and grime removal",
      "Outer cover louvers and grill scrubbing",
      "Motor body external wiping and bracket cleaning",
    ],
    excluded: [
      "Motor capacitor or internal coil electrical repair",
    ],
    addOns: [
      { id: "efa1", name: "Ceiling Fan Cleaning Add-on", price: 59 },
    ],
    limitations: [],
    preparation: [
      "Ensure electric power switch is accessible",
    ],
    faq: [
      {
        q: "Can you clean kitchen exhaust fans covered in heavy grease?",
        a: "Yes, our technicians use specialized industrial degreasers that break down hardened sticky oil instantly.",
      },
    ],
  },
  {
    id: "mini-services",
    slug: "mini-services",
    category: "Appliances & Mini",
    clientPage: 6,
    clientNote: "Item 12: Mini Services (Ceiling Fans ₹59-₹79, Exhaust Fans ₹59-₹89, Appliance Combos ₹799-₹1299)",
    areaBadge: "Fans & Appliance Combos",
    name: "Mini Services",
    shortDescription:
      "Ceiling fan cleaning (₹59-₹79), exhaust fans (₹59-₹89) & kitchen appliance combos (₹799-₹1,299).",
    description:
      "Quick individual mini cleaning services or combined appliance packages. Pick ceiling fan blades, exhaust fans, or full kitchen appliance bundles with fridge.",
    image: "/images/cleaner-cutout.jpg",
    price: 59,
    originalPrice: 59,
    discountPercent: 0,
    duration: "20–90 min",
    bestFor: "Quick add-ons, individual appliance sanitizing or ceiling fan refresh",
    variants: [
      { id: "mini-fan-kitchen", name: "Kitchen Ceiling Fan Cleaning", sqft: "1 Fan", tier: "Ceiling Fan", originalPrice: 79, price: 79, discount: 0, duration: "25 min", specs: "Degreasing sticky kitchen grease & dirt on fan" },
      { id: "mini-fan-living", name: "Living / Bedroom Ceiling Fan Cleaning", sqft: "1 Fan", tier: "Ceiling Fan", originalPrice: 59, price: 59, discount: 0, duration: "20 min", specs: "Per fan blade, motor cap & rod dusting and wet wipe" },
      { id: "mini-exhaust-bathroom", name: "Bathroom Exhaust Fan", sqft: "1 Exhaust", tier: "Exhaust Fan", originalPrice: 59, price: 59, discount: 0, duration: "20 min", specs: "Descaling bathroom exhaust louvers & blades" },
      { id: "mini-exhaust-kitchen", name: "Kitchen Exhaust Fan", sqft: "1 Exhaust", tier: "Exhaust Fan", originalPrice: 89, price: 89, discount: 0, duration: "30 min", specs: "Heavy oil degreasing on kitchen exhaust" },
      { id: "appliance-single-fridge", name: "Kitchen Appliance Cleaning with Single Door Fridge", sqft: "Kitchen Appliances Combo", tier: "Appliance Combo", originalPrice: 799, price: 799, discount: 0, duration: "60 min", specs: "Microwave + Single Door Fridge + Gas Stove exterior" },
      { id: "appliance-double-fridge", name: "Kitchen Appliance Cleaning with Double Door Fridge", sqft: "Kitchen Appliances Combo", tier: "Appliance Combo", originalPrice: 999, price: 999, discount: 0, duration: "75 min", specs: "Microwave + Double Door Fridge + Gas Stove exterior" },
      { id: "appliance-side-fridge", name: "Kitchen Appliance Cleaning with Side By Side Door", sqft: "Kitchen Appliances Combo", tier: "Appliance Combo", originalPrice: 1299, price: 1299, discount: 0, duration: "90 min", specs: "Microwave + Side By Side Fridge + Gas Stove exterior" },
    ],
    included: [
      "Thorough degreasing, scrubbing, wiping and deodorization of selected items",
      "Trained technicians using microfiber and non-abrasive chemicals",
    ],
    excluded: [
      "Internal electronic repairs or spare parts",
    ],
    addOns: [],
    limitations: [],
    preparation: [
      "Keep ladder or floor space clear beneath ceiling fans",
    ],
    faq: [
      {
        q: "Can I combine multiple mini services?",
        a: "Yes! You can add multiple mini services and variants to your cart to reach the minimum booking value.",
      },
    ],
  },
  {
    id: "dining-table-chair-cleaning",
    slug: "dining-table-chair-cleaning",
    category: "Sofa & Upholstery",
    clientPage: 6,
    clientNote: "Item 13: Dining Table & Chair Cleaning (4 to 10 Seater & Sofa Combos)",
    areaBadge: "4 to 10 Seater + Combos",
    name: "Dining Table & Chair Cleaning",
    shortDescription:
      "Dining table & chairs (4 to 10 seater: ₹199-₹499) and Dining + Sofa combos (₹799-₹899).",
    description:
      "Complete dining set rejuvenation. Fabric chair shampoo extraction, wooden/metal frame wipe-down, glass tabletop descaling, and combo packages with living room sofas.",
    image: "/images/sofa-cleaning.jpg",
    price: 199,
    originalPrice: 199,
    discountPercent: 0,
    duration: "45–120 min",
    bestFor: "Dining rooms, upholstered dining chairs and family eating spaces",
    variants: [
      { id: "dining-4", name: "4 Seater Dining Table & Chair", sqft: "4 Seater", tier: "4 Seater", originalPrice: 199, price: 199, discount: 0, duration: "45 min", specs: "4 upholstered chairs + dining table" },
      { id: "dining-5", name: "5 Seater Dining Table & Chair", sqft: "5 Seater", tier: "5 Seater", originalPrice: 249, price: 249, discount: 0, duration: "50 min", specs: "5 upholstered chairs + dining table" },
      { id: "dining-6", name: "6 Seater Dining Table & Chair", sqft: "6 Seater", tier: "6 Seater", originalPrice: 299, price: 299, discount: 0, duration: "60 min", specs: "6 upholstered chairs + dining table" },
      { id: "dining-7", name: "7 Seater Dining Table & Chair", sqft: "7 Seater", tier: "7 Seater", originalPrice: 309, price: 309, discount: 0, duration: "70 min", specs: "7 upholstered chairs + dining table" },
      { id: "dining-8", name: "8 Seater Dining Table & Chair", sqft: "8 Seater", tier: "8 Seater", originalPrice: 399, price: 399, discount: 0, duration: "80 min", specs: "8 upholstered chairs + dining table" },
      { id: "dining-9", name: "9 Seater Dining Table & Chair", sqft: "9 Seater", tier: "9 Seater", originalPrice: 410, price: 410, discount: 0, duration: "90 min", specs: "9 upholstered chairs + dining table" },
      { id: "dining-10", name: "10 Seater Dining Table & Chair", sqft: "10 Seater", tier: "10 Seater", originalPrice: 499, price: 499, discount: 0, duration: "100 min", specs: "10 upholstered chairs + dining table" },
      { id: "combo-dining-sofa-3", name: "Dining Table + Sofa 3 Seater", sqft: "Dining + 3S Sofa", tier: "Combo", originalPrice: 799, price: 799, discount: 0, duration: "2 hours", specs: "Dining Table Set + 3 Seater Sofa Shampoo Combo" },
      { id: "combo-dining-sofa-5", name: "Dining Table + Sofa 5 Seater", sqft: "Dining + 5S Sofa", tier: "Combo", originalPrice: 899, price: 899, discount: 0, duration: "2.5 hours", specs: "Dining Table Set + 5 Seater Sofa Shampoo Combo" },
    ],
    included: [
      "Dining chair cushioned seat foam scrubbing & moisture vacuuming",
      "Wooden or metal chair legs & frame polishing",
      "Glass/wood dining tabletop buffing and stain removal",
      "Combos include complete sofa shampooing as selected",
    ],
    excluded: [
      "Table runner laundering",
      "Wood carpentry repairs",
    ],
    addOns: [
      { id: "da1", name: "Ceiling Fan Cleaning Above Dining Table", price: 59 },
    ],
    limitations: [],
    preparation: [
      "Please remove center mats and cutlery from the table",
    ],
    faq: [
      {
        q: "What is included in the Dining + Sofa combo?",
        a: "The combo includes deep cleaning and polishing of your entire dining table set plus complete shampooing and wet vacuum extraction for your 3 or 5-seater sofa.",
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
