/* =========================================================
   MEA catalogue (sample data)
   Product names, photos and descriptions are borrowed from the
   reference stores for this demo. Replace before launch.

   HOW TO EDIT OPTIONS
   Each product has an "options" list. Every entry is one selector
   on the product page, shown in this order. Leave the list empty []
   for a product with no choices.

     { "name": "Shirt size", "type": "size",   "guide": "shirt", "values": ["S", "M", "L"] }
     { "name": "Pants size", "type": "size",   "guide": "pants", "values": ["XS", "S", "M"] }
     { "name": "Fabric",     "type": "fabric", "values": ["Karandi", { "label": "Raw Silk", "add": 4000 }] }
     { "name": "Dupatta",    "type": "choice", "values": ["Without dupatta", { "label": "With dupatta", "add": 7000 }] }
     { "name": "Shirt length", "type": "length", "values": ["42", "44", { "label": "48", "note": "Standard", "default": true }] }

   - "type": "size" shows small size boxes, "fabric" and "choice" show wider buttons.
   - "guide" adds a Size guide link that opens the shirt or pants chart.
   - "type": "length" shows length boxes; lengths are in inches.
   - A value can be plain text, or { "label": ..., "add": extra price in Rs.,
     "note": small text under the button, "default": true to pre-select it }.
   ========================================================= */
window.MEA_PRODUCTS = [
 {
  "id": "olive-bronze-cowls-set",
  "title": "Olive Bronze Cowls Set",
  "price": 22000,
  "fabric": "Poly Lycra",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "bestseller",
   "everyday"
  ],
  "images": [
   "assets/products/olive-bronze-cowls-set-1.jpg",
   "assets/products/olive-bronze-cowls-set-2.jpg",
   "assets/products/olive-bronze-cowls-set-4.jpg"
  ],
  "details": [
   "Fabric: Poly Lycra",
   "Comes as a two piece set (shirt and culottes)",
   "Model: 5‘5” - wearing small shirt and medium",
   "culottes in standard lengths"
  ],
  "created": "2026-11-20"
 },
 {
  "id": "wine-red-cowls-set",
  "title": "Wine Red Cowls Set",
  "price": 22000,
  "compare": 26000,
  "fabric": "Poly Lycra",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "everyday"
  ],
  "images": [
   "assets/products/wine-red-cowls-set-1.jpg",
   "assets/products/wine-red-cowls-set-2.jpg",
   "assets/products/wine-red-cowls-set-4.jpg"
  ],
  "details": [
   "Fabric: Poly Lycra",
   "Comes as a two piece set (shirt and culottes)",
   "Model: 5‘5” - wearing size small in standard lengths"
  ],
  "created": "2026-11-20"
 },
 {
  "id": "kendall-set-in-cobalt",
  "title": "Kendall Set in Cobalt",
  "price": 22000,
  "fabric": "Poly Lycra",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "Poly Lycra",
     "Poly-blend"
    ]
   }
  ],
  "tags": [
   "everyday"
  ],
  "images": [
   "assets/products/kendall-set-in-cobalt-1.jpg",
   "assets/products/kendall-set-in-cobalt-2.jpg",
   "assets/products/kendall-set-in-cobalt-4.jpg"
  ],
  "details": [
   "Fabric: Poly Lycra",
   "Comes as a two piece set (asymmetric gown with press-studs at the shoulder and straight pants)",
   "Model: 5‘5” - wearing size small in standard lengths"
  ],
  "created": "2026-11-19"
 },
 {
  "id": "kendall-set-in-white",
  "title": "Kendall Set in White",
  "price": 22000,
  "fabric": "Polyblend",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "Poly-blend",
     "Poly Lycra"
    ]
   }
  ],
  "tags": [
   "bestseller",
   "everyday"
  ],
  "images": [
   "assets/products/kendall-set-in-white-1.jpg",
   "assets/products/kendall-set-in-white-2.jpg",
   "assets/products/kendall-set-in-white-4.jpg"
  ],
  "details": [
   "Fabric: Poly-blend",
   "Comes as a two piece set (asymmetric gown with press-studs at the shoulder and straight pants)",
   "Model: 5‘5” - wearing size small in standard lengths"
  ],
  "created": "2026-11-18"
 },
 {
  "id": "pink-tourmaline-french-velvet-scallop-set",
  "title": "Pink Tourmaline French Velvet Scallop Set",
  "price": 35000,
  "fabric": "Velvet",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "French Velvet",
     {
      "label": "Silk Velvet",
      "add": 6000
     }
    ]
   }
  ],
  "tags": [
   "bestseller",
   "evening"
  ],
  "images": [
   "assets/products/pink-tourmaline-french-velvet-scallop-set-1.jpg",
   "assets/products/pink-tourmaline-french-velvet-scallop-set-2.jpg",
   "assets/products/pink-tourmaline-french-velvet-scallop-set-4.jpg"
  ],
  "details": [
   "Fabric: French Velvet shirt / Matching Matte Grip pants",
   "Comes as a two piece set (shirt and straight pants)",
   "Model: 5‘4” - wearing small shirt and medium pants in standard lengths"
  ],
  "created": "2026-10-26"
 },
 {
  "id": "feroza-french-velvet-scallop-set",
  "title": "Feroza French Velvet Scallop Set",
  "price": 35000,
  "fabric": "Velvet",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "French Velvet",
     {
      "label": "Silk Velvet",
      "add": 6000
     }
    ]
   }
  ],
  "tags": [
   "evening"
  ],
  "images": [
   "assets/products/feroza-french-velvet-scallop-set-1.jpg",
   "assets/products/feroza-french-velvet-scallop-set-2.jpg",
   "assets/products/feroza-french-velvet-scallop-set-4.jpg"
  ],
  "details": [
   "Fabric: French Velvet shirt / Matching Matte Grip pants",
   "Comes as a two piece set (shirt and straight pants)",
   "Model: 5‘4” - wearing small shirt and medium pants in standard lengths"
  ],
  "created": "2026-10-26"
 },
 {
  "id": "aubergine-marlow-set",
  "title": "Aubergine Marlow Set",
  "price": 24000,
  "fabric": "Poly Lycra",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "bestseller",
   "evening"
  ],
  "images": [
   "assets/products/aubergine-marlow-set-1.jpg",
   "assets/products/aubergine-marlow-set-2.jpg",
   "assets/products/aubergine-marlow-set-4.jpg"
  ],
  "details": [
   "Fabric: Poly Lycra Set / French Velvet Shoulder Wrap",
   "Comes as a three piece set (asymmetrical shirt and bell bottom pants with a detachable wrap)",
   "Model: 5‘5” - wearing size small in standard lengths"
  ],
  "created": "2026-10-02"
 },
 {
  "id": "mock-neck-set",
  "title": "Mock Neck Set",
  "price": 22000,
  "fabric": "Polyblend",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "Poly-blend",
     "Crepe"
    ]
   }
  ],
  "tags": [
   "bestseller",
   "everyday"
  ],
  "images": [
   "assets/products/mock-neck-set-1.jpg",
   "assets/products/mock-neck-set-2.jpg",
   "assets/products/mock-neck-set-4.jpg"
  ],
  "details": [
   "Fabric: Poly-blend",
   "Comes as a two piece set (asymmetrical shirt with concealed zipper and bell bottom pants)",
   "Model: 5‘5” - wearing size small in standard lengths"
  ],
  "created": "2026-10-13"
 },
 {
  "id": "navy-kelly-kaftaan",
  "title": "Navy Kelly Kaftaan",
  "price": 34000,
  "fabric": "Velvet",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "Without pants",
     {
      "label": "XS",
      "add": 15000
     },
     {
      "label": "S",
      "add": 15000
     },
     {
      "label": "S/M",
      "add": 15000
     },
     {
      "label": "M",
      "add": 15000
     },
     {
      "label": "M/L",
      "add": 15000
     },
     {
      "label": "L",
      "add": 15000
     },
     {
      "label": "XL",
      "add": 15000
     }
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "bestseller",
   "evening"
  ],
  "images": [
   "assets/products/navy-kelly-kaftaan-1.jpg",
   "assets/products/navy-kelly-kaftaan-2.jpg",
   "assets/products/navy-kelly-kaftaan-4.jpg"
  ],
  "details": [
   "Fabric: Velvet",
   "Matching raw silk 80g straight pants can be added",
   "Model: 5‘3” - wearing small in standard lengths"
  ],
  "created": "2026-10-14"
 },
 {
  "id": "nude-mardana-kurta",
  "title": "Nude Mardana Kurta",
  "price": 22000,
  "fabric": "Pashmina",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Dupatta",
    "type": "choice",
    "values": [
     "Without dupatta",
     {
      "label": "With dupatta",
      "add": 11000
     }
    ]
   }
  ],
  "tags": [
   "bestseller",
   "everyday"
  ],
  "images": [
   "assets/products/nude-mardana-kurta-1.jpg",
   "assets/products/nude-mardana-kurta-2.jpg",
   "assets/products/nude-mardana-kurta-4.jpg"
  ],
  "details": [
   "Fabric: Pashmina blend",
   "Comes as a two piece set (shirt with pockets and straight pants)",
   "Matching malai chiffon dupatta can be added",
   "Model: 5‘8” - wearing small in standard lengths"
  ],
  "created": "2026-10-10"
 },
 {
  "id": "black-reina-set",
  "title": "Black Reina Set",
  "price": 29000,
  "fabric": "Organza",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Dupatta",
    "type": "choice",
    "values": [
     "Without dupatta",
     {
      "label": "With dupatta",
      "add": 7000
     }
    ]
   }
  ],
  "tags": [
   "evening"
  ],
  "images": [
   "assets/products/black-reina-set-1.jpg",
   "assets/products/black-reina-set-2.jpg",
   "assets/products/black-reina-set-4.jpg"
  ],
  "details": [
   "Fabric: Kataan Organza shirt / Matte Grip slip and shalwar",
   "Comes as a three piece set (shirt, slip and skinny shalwar)",
   "Sizing: The slip size/ length will automatically correspond to the shirt size/ length you select.",
   "Model: 5’5” - wearing size small with 30” shirt length and standard length shalwar",
   "Matching malai chiffon dupatta can be added"
  ],
  "created": "2026-10-26"
 },
 {
  "id": "ferozi-mindy-set",
  "title": "Ferozi Mindy Set",
  "price": 19000,
  "fabric": "Karandi",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "Karandi",
     {
      "label": "Raw Silk",
      "add": 4000
     }
    ]
   },
   {
    "name": "Dupatta",
    "type": "choice",
    "values": [
     "Without dupatta",
     {
      "label": "With dupatta",
      "add": 11000
     }
    ]
   }
  ],
  "tags": [
   "bestseller",
   "everyday"
  ],
  "images": [
   "assets/products/ferozi-mindy-set-1.jpg",
   "assets/products/ferozi-mindy-set-2.jpg",
   "assets/products/ferozi-mindy-set-4.jpg"
  ],
  "details": [
   "Fabric: Karandi",
   "Comes as a two piece set (shirt and skinny shalwar with concealed zip)",
   "Matching plain malai chiffon dupatta can be added",
   "Model: 5‘3” - wearing size small in standard lengths",
   "Care note: Dry clean only ⚠️"
  ],
  "created": "2026-10-09"
 },
 {
  "id": "gold-topaz-french-velvet-scallop-set",
  "title": "Gold Topaz French Velvet Scallop Set",
  "price": 35000,
  "fabric": "Velvet",
  "available": false,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "evening"
  ],
  "images": [
   "assets/products/gold-topaz-french-velvet-scallop-set-1.jpg",
   "assets/products/gold-topaz-french-velvet-scallop-set-2.jpg",
   "assets/products/gold-topaz-french-velvet-scallop-set-4.jpg"
  ],
  "details": [
   "Fabric: French Velvet shirt / Matching Matte Grip pants",
   "Comes as a two piece set (shirt and straight pants)",
   "Model: 5‘4” - wearing small shirt and medium pants in standard lengths"
  ],
  "created": "2026-10-26"
 },
 {
  "id": "espresso-mardana-kurta",
  "title": "Espresso Mardana Kurta",
  "price": 22000,
  "compare": 26000,
  "fabric": "Karandi",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "S/M",
     "M",
     "M/L",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Dupatta",
    "type": "choice",
    "values": [
     "Without dupatta",
     {
      "label": "With dupatta",
      "add": 11000
     }
    ]
   }
  ],
  "tags": [
   "everyday"
  ],
  "images": [
   "assets/products/espresso-mardana-kurta-1.jpg",
   "assets/products/espresso-mardana-kurta-2.jpg",
   "assets/products/espresso-mardana-kurta-4.jpg"
  ],
  "details": [
   "Fabric: Karandi",
   "Comes as a two piece set (shirt with pockets and straight pants)",
   "Matching plain malai chiffon dupatta can be added",
   "Model: 5‘8” - wearing small in standard lengths"
  ],
  "created": "2026-10-10"
 },
 {
  "id": "velvet-mandarin-blazer",
  "title": "Velvet Mandarin Blazer",
  "price": 28000,
  "fabric": "Velvet",
  "available": true,
  "options": [
   {
    "name": "Size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   }
  ],
  "tags": [
   "new",
   "evening"
  ],
  "images": [
   "assets/products/velvet-mandarin-blazer-1.jpg",
   "assets/products/velvet-mandarin-blazer-2.jpg",
   "assets/products/velvet-mandarin-blazer-3.jpg",
   "assets/products/velvet-mandarin-blazer-4.jpg"
  ],
  "details": [
   "Material: French Velvet",
   "Colour: Noir",
   "Durefishan is Wearing size Medium in Standard Length"
  ],
  "created": "2026-11-16"
 },
 {
  "id": "twill-reina-set",
  "title": "Twill Reina Set",
  "price": 23000,
  "fabric": "Twill",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/twill-reina-set-1.jpg",
   "assets/products/twill-reina-set-2.jpg",
   "assets/products/twill-reina-set-3.jpg",
   "assets/products/twill-reina-set-4.jpg"
  ],
  "details": [
   "Material: Twill",
   "Colour: Off-White",
   "Model is 5’6 and is wearing Size Small in Standard Lengths"
  ],
  "created": "2026-11-16"
 },
 {
  "id": "champagne-audrey-set",
  "title": "Champagne Audrey Set",
  "price": 17000,
  "fabric": "Crepe",
  "available": true,
  "options": [
   {
    "name": "Size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/champagne-audrey-set-1.jpg",
   "assets/products/champagne-audrey-set-2.jpg",
   "assets/products/champagne-audrey-set-3.jpg",
   "assets/products/champagne-audrey-set-4.jpg"
  ],
  "details": [
   "Material: Textured Flowy Crepe",
   "Colour: Champagne",
   "Model is 5’8 and is wearing Size Small in Standard Lengths"
  ],
  "created": "2026-11-16"
 },
 {
  "id": "burgundy-vesper-set",
  "title": "Burgundy Vesper Set",
  "price": 18800,
  "fabric": "Karandi",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/burgundy-vesper-set-1.jpg",
   "assets/products/burgundy-vesper-set-2.jpg",
   "assets/products/burgundy-vesper-set-3.jpg",
   "assets/products/burgundy-vesper-set-4.jpg"
  ],
  "details": [
   "Material: Silk Karandi with French Velvet",
   "Colour: Burgundy",
   "Model is 5’1 and is wearing Size Small in Standard Lengths"
  ],
  "created": "2026-11-16"
 },
 {
  "id": "olive-vesper-set",
  "title": "Olive Vesper Set",
  "price": 18800,
  "fabric": "Karandi",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/olive-vesper-set-1.jpg",
   "assets/products/olive-vesper-set-2.jpg"
  ],
  "details": [
   "Material: Silk Karandi with French Velvet",
   "Colour: Olive",
   "Model is 5’6 and is wearing Size Small in Standard Lengths"
  ],
  "created": "2026-11-16"
 },
 {
  "id": "cognac-sable-set",
  "title": "Cognac Sable Set",
  "price": 19000,
  "fabric": "Karandi",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "Karandi",
     {
      "label": "Raw Silk",
      "add": 4000
     }
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/cognac-sable-set-1.jpg",
   "assets/products/cognac-sable-set-2.jpg",
   "assets/products/cognac-sable-set-3.jpg",
   "assets/products/cognac-sable-set-4.jpg"
  ],
  "details": [
   "Material: Karandi (Soft and Flowy)",
   "Colour: Warm Cognac Brown",
   "Model is 5’9 and is wearing Size Small in Standard Lengths",
   "Comes as a 2 Pcs set (Shirt & Pant)"
  ],
  "created": "2026-10-26"
 },
 {
  "id": "oxblood-ruelle-set",
  "title": "Oxblood Ruelle Set",
  "price": 19600,
  "fabric": "Pashmina",
  "available": true,
  "options": [
   {
    "name": "Size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/oxblood-ruelle-set-1.jpg",
   "assets/products/oxblood-ruelle-set-2.jpg",
   "assets/products/oxblood-ruelle-set-3.jpg",
   "assets/products/oxblood-ruelle-set-4.jpg"
  ],
  "details": [
   "Material: Pure Pashmina",
   "Colour: Oxblood",
   "Model is 5’9 and is wearing Size Small in Standard Lengths",
   "Comes as a 2 Pcs set (Shirt & Pant)"
  ],
  "created": "2026-10-26"
 },
 {
  "id": "cloud-dancer-harper-set",
  "title": "Cloud Dancer Harper Set",
  "price": 17800,
  "compare": 21500,
  "fabric": "Crepe",
  "available": true,
  "options": [],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/cloud-dancer-harper-set-1.jpg",
   "assets/products/cloud-dancer-harper-set-2.jpg",
   "assets/products/cloud-dancer-harper-set-3.jpg",
   "assets/products/cloud-dancer-harper-set-4.jpg"
  ],
  "details": [
   "Material: Textured Flowy Crepe (Crease-Free)",
   "Colour: Cloud Dancer",
   "Model is 5’9 and is wearing Size Small in Standard Lengths",
   "Comes as a 2 Pcs set (Shirt & Pant)"
  ],
  "created": "2026-10-26"
 },
 {
  "id": "karandi-sable-set",
  "title": "Karandi Sable Set",
  "price": 19000,
  "fabric": "Karandi",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "Karandi",
     {
      "label": "Raw Silk",
      "add": 4000
     }
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/karandi-sable-set-1.jpg",
   "assets/products/karandi-sable-set-2.jpg",
   "assets/products/karandi-sable-set-3.jpg",
   "assets/products/karandi-sable-set-4.jpg"
  ],
  "details": [
   "Material: Karandi (Soft and Flowy)",
   "Colour: Off-white",
   "Model is 5’9 and is wearing Size Small in Standard Lengths",
   "Comes as a 2 Pcs set (Shirt & Pant)"
  ],
  "created": "2026-10-26"
 },
 {
  "id": "burgundy-kendall-set",
  "title": "Burgundy Kendall Set",
  "price": 18800,
  "fabric": "Twill",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/burgundy-kendall-set-1.jpg",
   "assets/products/burgundy-kendall-set-2.jpg",
   "assets/products/burgundy-kendall-set-3.jpg",
   "assets/products/burgundy-kendall-set-4.jpg"
  ],
  "details": [
   "Material: Matte Twill",
   "Colour: Burgundy",
   "Model is 5’6 and is wearing Size Small in Standard Lengths"
  ],
  "created": "2026-10-06"
 },
 {
  "id": "mallow-set",
  "title": "Mallow Set",
  "price": 17800,
  "fabric": "Karandi",
  "available": true,
  "options": [
   {
    "name": "Shirt size",
    "type": "size",
    "guide": "shirt",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Pants size",
    "type": "size",
    "guide": "pants",
    "values": [
     "XS",
     "S",
     "M",
     "L",
     "XL"
    ]
   },
   {
    "name": "Shirt length",
    "type": "length",
    "values": [
     "42",
     "44",
     "46",
     {
      "label": "48",
      "note": "Standard",
      "default": true
     }
    ]
   },
   {
    "name": "Pants length",
    "type": "length",
    "values": [
     "32",
     "34",
     {
      "label": "36",
      "note": "Standard",
      "default": true
     },
     "38"
    ]
   },
   {
    "name": "Fabric",
    "type": "fabric",
    "values": [
     "Silk Karandi",
     "Cotton Karandi"
    ]
   }
  ],
  "tags": [
   "new",
   "everyday"
  ],
  "images": [
   "assets/products/mallow-set-1.jpg",
   "assets/products/mallow-set-2.jpg",
   "assets/products/mallow-set-3.jpg",
   "assets/products/mallow-set-4.jpg"
  ],
  "details": [
   "Material: Silk Karandi (Soft and Flowy) with French Velvet Neckline",
   "Colour: Ivory",
   "Model is 5’9 and is wearing Size Small in Standard Lengths",
   "Comes as a 2 Pcs set (Shirt & Pant)"
  ],
  "created": "2026-10-26"
 }
];
