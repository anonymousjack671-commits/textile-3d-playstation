// ============================================================
// FABRIC STRUCTURES DATA v3.1 — COMPLETE COMBINED ENGINE
// Woven • Knitted • Sustainable • Yarn Types
// Finishing Processes (21) • Dye Methods (9) 
// Testing Standards (31 full AATCC/ISO/ASTM methods, 14 categories)
// Fabric Defects • India Sourcing Map (10 hubs)
//
// Usage: <script src="fabric-data-v3.1.js"></script>
// Access: window.FABRIC_DATA.woven / .knitted / .sustainable
//         window.FABRIC_DATA.yarnTypes / .finishingProcesses
//         window.FABRIC_DATA.dyeMethods / .testingStandards
//         window.FABRIC_DATA.fabricDefects / .indiaSourcingMap
// ============================================================

export const FABRIC_DATA = {
  "woven": [
    {
      "id": "plain-weave",
      "name": "Plain Weave",
      "category": "Basic Weave",
      "weaveNotation": "1/1",
      "construction": "Each weft yarn passes alternately over 1 and under 1 warp yarn. Maximum interlacing points = maximum firmness. Warp and weft yarns interlace at every intersection.",
      "interlacingRatio": "1 over : 1 under",
      "visual3D": {
        "type": "flat",
        "texture": "plain-tight",
        "pile": false,
        "openStructure": false
      },
      "variants": [
        {
          "name": "Poplin",
          "altNames": [
            "Broadcloth (US)",
            "Shirting Poplin"
          ],
          "construction": {
            "epi": 78,
            "ppi": 64,
            "yarnCount": "40s x 40s",
            "note": "Warp denser than weft; fine weft rib visible"
          },
          "commonConstructions": [
            {
              "epi": 78,
              "ppi": 64,
              "yarn": "40s x 40s",
              "gsm": 115,
              "blend": "100% Cotton",
              "use": "Formal shirts"
            },
            {
              "epi": 92,
              "ppi": 76,
              "yarn": "60s x 60s",
              "gsm": 90,
              "blend": "100% Cotton",
              "use": "Premium shirts"
            },
            {
              "epi": 110,
              "ppi": 90,
              "yarn": "80s x 80s",
              "gsm": 75,
              "blend": "100% Cotton",
              "use": "Luxury shirts"
            },
            {
              "epi": 78,
              "ppi": 64,
              "yarn": "45s x 45s",
              "gsm": 110,
              "blend": "65/35 PES/Cotton (TC)",
              "use": "Budget shirts, uniforms"
            },
            {
              "epi": 78,
              "ppi": 64,
              "yarn": "40s x 40s",
              "gsm": 118,
              "blend": "60/40 Cotton/Poly (CVC)",
              "use": "Mid-range shirts"
            },
            {
              "epi": 120,
              "ppi": 100,
              "yarn": "100s x 100s",
              "gsm": 65,
              "blend": "100% Cotton (Giza/Supima)",
              "use": "Ultra-luxury shirts"
            }
          ],
          "gsm": {
            "min": 65,
            "max": 130
          },
          "width": [
            "44 inches",
            "58 inches",
            "60 inches"
          ],
          "uses": [
            "Formal shirts",
            "School uniforms",
            "Workwear",
            "Blouses"
          ],
          "priceIndia": {
            "cotton": "₹60-180/m",
            "TC": "₹35-80/m",
            "CVC": "₹50-120/m",
            "luxury": "₹300-800/m"
          },
          "washCare": {
            "temp": "40°C",
            "machine": true,
            "iron": "Medium-Hot",
            "dryCleaning": false
          },
          "season": [
            "All Season"
          ],
          "machineType": "Rapier / Air-jet / Water-jet loom",
          "finish": [
            "Sanforization",
            "Mercerization (cotton)",
            "Easy-care / Anti-wrinkle"
          ],
          "dyeMethod": [
            "Piece dyed",
            "Yarn dyed (stripes/checks)",
            "Printed"
          ],
          "indiaSourcing": [
            "Surat",
            "Ahmedabad",
            "Coimbatore",
            "Erode"
          ],
          "qualityNotes": "Fine weft rib gives sheen. Higher thread count = softer, more premium."
        },
        {
          "name": "Cambric",
          "altNames": [
            "Batiste (finer version)",
            "Fine Shirting"
          ],
          "construction": {
            "epi": 100,
            "ppi": 100,
            "yarnCount": "60s x 60s or 80s x 80s",
            "note": "Fine, lightweight, tightly woven"
          },
          "commonConstructions": [
            {
              "epi": 100,
              "ppi": 100,
              "yarn": "60s x 60s",
              "gsm": 75,
              "blend": "100% Cotton",
              "use": "Handkerchiefs, fine shirting"
            },
            {
              "epi": 120,
              "ppi": 110,
              "yarn": "80s x 80s",
              "gsm": 60,
              "blend": "100% Cotton",
              "use": "Premium fine fabric"
            },
            {
              "epi": 80,
              "ppi": 80,
              "yarn": "40s x 40s",
              "gsm": 90,
              "blend": "Cotton/Poly",
              "use": "Affordable cambric"
            }
          ],
          "gsm": {
            "min": 55,
            "max": 100
          },
          "width": [
            "44 inches",
            "58 inches"
          ],
          "uses": [
            "Handkerchiefs",
            "Fine shirts",
            "Blouses",
            "Lining",
            "Baby garments"
          ],
          "priceIndia": {
            "cotton": "₹50-150/m",
            "blend": "₹30-80/m"
          },
          "washCare": {
            "temp": "40°C",
            "machine": true,
            "iron": "Medium",
            "dryCleaning": false
          },
          "season": [
            "Spring/Summer"
          ],
          "finish": [
            "Calendering",
            "Sanforization"
          ],
          "indiaSourcing": [
            "Dhariwal",
            "Malegaon",
            "Bhilwara"
          ]
        },
        {
          "name": "Voile",
          "altNames": [
            "Cotton Voile",
            "Swiss Voile"
          ],
          "construction": {
            "epi": 64,
            "ppi": 56,
            "yarnCount": "80s x 80s (highly twisted)",
            "note": "Open weave, high-twist yarn creates crispness"
          },
          "commonConstructions": [
            {
              "epi": 64,
              "ppi": 56,
              "yarn": "80s x 80s",
              "gsm": 50,
              "blend": "100% Cotton",
              "use": "Sheer summer tops, dupattas"
            },
            {
              "epi": 72,
              "ppi": 64,
              "yarn": "100s x 100s",
              "gsm": 40,
              "blend": "100% Cotton",
              "use": "Ultra-sheer veils, luxury voile"
            },
            {
              "epi": 60,
              "ppi": 52,
              "yarn": "60s x 60s",
              "gsm": 60,
              "blend": "Cotton/Poly",
              "use": "Budget voile"
            }
          ],
          "gsm": {
            "min": 35,
            "max": 70
          },
          "width": [
            "44 inches",
            "58 inches"
          ],
          "uses": [
            "Summer tops",
            "Dupattas",
            "Curtains/sheers",
            "Veiling",
            "Overlay fabric"
          ],
          "priceIndia": {
            "cotton": "₹60-200/m",
            "blend": "₹30-90/m"
          },
          "washCare": {
            "temp": "30°C gentle",
            "machine": true,
            "iron": "Low",
            "dryCleaning": false
          },
          "season": [
            "Spring/Summer"
          ],
          "finish": [
            "Soft finish",
            "Anti-crease"
          ],
          "indiaSourcing": [
            "Surat",
            "Jaipur",
            "Bhilwara"
          ]
        },
        {
          "name": "Lawn",
          "altNames": [
            "Cotton Lawn",
            "Batiste"
          ],
          "construction": {
            "epi": 100,
            "ppi": 88,
            "yarnCount": "100s x 80s combed",
            "note": "Fine combed yarns, smooth lustrous surface"
          },
          "commonConstructions": [
            {
              "epi": 100,
              "ppi": 88,
              "yarn": "100s x 80s",
              "gsm": 55,
              "blend": "100% Combed Cotton",
              "use": "Premium lawn shirts, summer wear"
            },
            {
              "epi": 80,
              "ppi": 72,
              "yarn": "60s x 60s",
              "gsm": 70,
              "blend": "100% Cotton",
              "use": "Standard lawn"
            },
            {
              "epi": 120,
              "ppi": 100,
              "yarn": "120s x 100s",
              "gsm": 45,
              "blend": "100% Cotton",
              "use": "Pakistani luxury lawn (Giza)"
            }
          ],
          "gsm": {
            "min": 40,
            "max": 80
          },
          "width": [
            "44 inches",
            "58 inches"
          ],
          "uses": [
            "Lawn shirts (Pakistan/India)",
            "Summer dresses",
            "Handkerchiefs",
            "Printing base"
          ],
          "priceIndia": {
            "cotton": "₹70-250/m",
            "luxury": "₹300-600/m"
          },
          "washCare": {
            "temp": "30-40°C",
            "machine": true,
            "iron": "Medium",
            "dryCleaning": false
          },
          "season": [
            "Spring/Summer"
          ],
          "finish": [
            "Mercerization",
            "Calendering for sheen"
          ],
          "indiaSourcing": [
            "Lahore (Pakistan)",
            "Karur",
            "Coimbatore"
          ]
        },
        {
          "name": "Organdy / Organza",
          "construction": {
            "epi": 80,
            "ppi": 72,
            "yarnCount": "60-80s (stiffened)",
            "note": "Heavily sized/stiffened; crisp translucent fabric"
          },
          "commonConstructions": [
            {
              "epi": 80,
              "ppi": 72,
              "yarn": "60s x 60s",
              "gsm": 35,
              "blend": "100% Cotton",
              "use": "Bridal veils, collars, cuffs"
            },
            {
              "epi": 100,
              "ppi": 88,
              "yarn": "Pure silk",
              "gsm": 30,
              "blend": "100% Silk",
              "use": "Luxury bridal, evening wear"
            },
            {
              "epi": 90,
              "ppi": 80,
              "yarn": "Polyester monofilament",
              "gsm": 40,
              "blend": "100% Polyester",
              "use": "Budget bridal, decorative"
            }
          ],
          "gsm": {
            "min": 25,
            "max": 55
          },
          "width": [
            "44 inches",
            "54 inches"
          ],
          "uses": [
            "Bridal wear",
            "Evening wear overlays",
            "Collars/cuffs",
            "Decorative bows"
          ],
          "priceIndia": {
            "cotton": "₹80-200/m",
            "silk": "₹400-1200/m",
            "polyester": "₹40-120/m"
          },
          "washCare": {
            "temp": "30°C gentle or dry clean",
            "machine": false,
            "iron": "Low on reverse",
            "dryCleaning": true
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Starch/sizing for crispness",
            "Swiss dot embroidery"
          ]
        },
        {
          "name": "Muslin",
          "altNames": [
            "Cheesecloth (open)",
            "Mulmul"
          ],
          "construction": {
            "epi": 44,
            "ppi": 40,
            "yarnCount": "20s x 20s",
            "note": "Loosely woven, soft, unbleached or bleached"
          },
          "commonConstructions": [
            {
              "epi": 44,
              "ppi": 40,
              "yarn": "20s x 20s",
              "gsm": 75,
              "blend": "100% Cotton",
              "use": "Toiles/samples, bandages"
            },
            {
              "epi": 60,
              "ppi": 56,
              "yarn": "30s x 30s",
              "gsm": 90,
              "blend": "100% Cotton",
              "use": "Mulmul (baby fabric, dupattas)"
            },
            {
              "epi": 32,
              "ppi": 28,
              "yarn": "16s x 16s",
              "gsm": 60,
              "blend": "100% Cotton",
              "use": "Cheesecloth, gauze-type"
            }
          ],
          "gsm": {
            "min": 40,
            "max": 120
          },
          "width": [
            "36 inches",
            "44 inches",
            "60 inches"
          ],
          "uses": [
            "Toile/pattern making",
            "Medical bandages",
            "Baby wear (mulmul)",
            "Food straining"
          ],
          "priceIndia": {
            "cotton": "₹25-80/m"
          },
          "washCare": {
            "temp": "60°C (cotton muslin)",
            "machine": true,
            "iron": "Hot",
            "dryCleaning": false
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Bleached",
            "Unbleached (greige)"
          ],
          "indiaSourcing": [
            "Dhaka (Bangladesh)",
            "West Bengal",
            "Maharashtra"
          ]
        },
        {
          "name": "Chiffon",
          "construction": {
            "epi": 68,
            "ppi": 60,
            "yarnCount": "Highly twisted 60-80s",
            "note": "Twisted yarns + open weave = sheer, drapey"
          },
          "commonConstructions": [
            {
              "epi": 68,
              "ppi": 60,
              "yarn": "60s x 60s high-twist",
              "gsm": 40,
              "blend": "100% Polyester",
              "use": "Budget chiffon (most common)"
            },
            {
              "epi": 80,
              "ppi": 72,
              "yarn": "Silk 16mm",
              "gsm": 35,
              "blend": "100% Silk",
              "use": "Luxury chiffon"
            },
            {
              "epi": 60,
              "ppi": 54,
              "yarn": "60s x 60s",
              "gsm": 50,
              "blend": "Polyester/Rayon",
              "use": "Mid-range chiffon"
            }
          ],
          "gsm": {
            "min": 25,
            "max": 60
          },
          "width": [
            "44 inches",
            "58 inches"
          ],
          "uses": [
            "Sarees",
            "Dupattas",
            "Evening wear",
            "Overlay tops",
            "Blouses"
          ],
          "priceIndia": {
            "polyester": "₹40-100/m",
            "silk": "₹400-1500/m",
            "viscose": "₹80-200/m"
          },
          "washCare": {
            "temp": "30°C gentle",
            "machine": false,
            "iron": "Low-medium",
            "dryCleaning": true
          },
          "season": [
            "Spring/Summer"
          ],
          "finish": [
            "Heat set (polyester)",
            "Soft finish"
          ],
          "indiaSourcing": [
            "Surat (polyester)",
            "Varanasi/Mysore (silk)"
          ]
        },
        {
          "name": "Georgette",
          "construction": {
            "epi": 60,
            "ppi": 55,
            "yarnCount": "Highly twisted S and Z alternating",
            "note": "S-twist and Z-twist yarns alternate creating crinkled surface"
          },
          "commonConstructions": [
            {
              "epi": 60,
              "ppi": 55,
              "yarn": "75D x 75D polyester",
              "gsm": 80,
              "blend": "100% Polyester",
              "use": "Sarees, tops"
            },
            {
              "epi": 64,
              "ppi": 58,
              "yarn": "Silk 14mm",
              "gsm": 65,
              "blend": "100% Silk",
              "use": "Luxury sarees"
            },
            {
              "epi": 56,
              "ppi": 50,
              "yarn": "40D x 30D polyester",
              "gsm": 70,
              "blend": "Polyester/Viscose",
              "use": "Affordable georgette"
            }
          ],
          "gsm": {
            "min": 55,
            "max": 110
          },
          "width": [
            "44 inches",
            "54 inches"
          ],
          "uses": [
            "Sarees",
            "Tops",
            "Evening wear",
            "Kurtis",
            "Dupattas"
          ],
          "priceIndia": {
            "polyester": "₹50-150/m",
            "silk": "₹500-2000/m",
            "viscose": "₹100-250/m"
          },
          "washCare": {
            "temp": "30°C gentle or dry clean",
            "machine": false,
            "iron": "Low",
            "dryCleaning": true
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Crinkle finish",
            "De-wrinkle treatment"
          ],
          "indiaSourcing": [
            "Surat",
            "Varanasi"
          ]
        },
        {
          "name": "Canvas / Duck",
          "construction": {
            "epi": 48,
            "ppi": 44,
            "yarnCount": "10s x 10s or coarser",
            "note": "Heavy plain weave; duck = tightly woven canvas"
          },
          "commonConstructions": [
            {
              "epi": 48,
              "ppi": 44,
              "yarn": "10s x 10s",
              "gsm": 350,
              "blend": "100% Cotton",
              "use": "Bags, shoes, tents"
            },
            {
              "epi": 36,
              "ppi": 32,
              "yarn": "8s x 8s",
              "gsm": 450,
              "blend": "100% Cotton",
              "use": "Heavy duty canvas"
            },
            {
              "epi": 52,
              "ppi": 48,
              "yarn": "20s x 20s",
              "gsm": 250,
              "blend": "Cotton/Polyester",
              "use": "Workwear, covers"
            }
          ],
          "gsm": {
            "min": 200,
            "max": 550
          },
          "width": [
            "44 inches",
            "58 inches",
            "60 inches"
          ],
          "uses": [
            "Bags",
            "Shoes/sneakers",
            "Tents",
            "Upholstery",
            "Painter's canvas",
            "Workwear"
          ],
          "priceIndia": {
            "cotton": "₹80-200/m",
            "blend": "₹60-150/m"
          },
          "washCare": {
            "temp": "60°C",
            "machine": true,
            "iron": "Hot",
            "dryCleaning": false
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Water repellent (waxed canvas)",
            "Fire retardant"
          ],
          "indiaSourcing": [
            "Coimbatore",
            "Erode",
            "Ahmedabad"
          ]
        },
        {
          "name": "Oxford (2x2 basket variant)",
          "construction": {
            "epi": 68,
            "ppi": 52,
            "yarnCount": "2-ply x 2-ply (2/40s x 1/30s)",
            "note": "Two warp ends weave as one; crosshatch appearance"
          },
          "commonConstructions": [
            {
              "epi": 68,
              "ppi": 52,
              "yarn": "2/40s x 30s",
              "gsm": 130,
              "blend": "100% Cotton",
              "use": "Oxford shirts"
            },
            {
              "epi": 72,
              "ppi": 56,
              "yarn": "2/60s x 40s",
              "gsm": 115,
              "blend": "100% Cotton",
              "use": "Royal Oxford (finer)"
            },
            {
              "epi": 64,
              "ppi": 48,
              "yarn": "2/30s x 20s",
              "gsm": 150,
              "blend": "Cotton/Poly",
              "use": "Heavy Oxford workwear"
            }
          ],
          "gsm": {
            "min": 110,
            "max": 160
          },
          "width": [
            "44 inches",
            "58 inches"
          ],
          "uses": [
            "Oxford shirts (casual & semi-formal)",
            "Button-down shirts"
          ],
          "priceIndia": {
            "cotton": "₹80-200/m",
            "blend": "₹60-140/m"
          },
          "washCare": {
            "temp": "40°C",
            "machine": true,
            "iron": "Medium",
            "dryCleaning": false
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Sanforization"
          ]
        },
        {
          "name": "Taffeta",
          "construction": {
            "epi": 110,
            "ppi": 96,
            "yarnCount": "Fine filament yarns; warp denser",
            "note": "Crisp, smooth, slight luster; warp-faced effect"
          },
          "commonConstructions": [
            {
              "epi": 110,
              "ppi": 96,
              "yarn": "75D x 50D polyester filament",
              "gsm": 80,
              "blend": "100% Polyester",
              "use": "Linings, evening wear"
            },
            {
              "epi": 120,
              "ppi": 100,
              "yarn": "Silk momme 8-12",
              "gsm": 70,
              "blend": "100% Silk",
              "use": "Luxury taffeta"
            },
            {
              "epi": 100,
              "ppi": 88,
              "yarn": "Acetate filament",
              "gsm": 85,
              "blend": "100% Acetate",
              "use": "Formal wear lining"
            }
          ],
          "gsm": {
            "min": 60,
            "max": 100
          },
          "width": [
            "44 inches",
            "58 inches"
          ],
          "uses": [
            "Linings",
            "Evening wear",
            "Bridal",
            "Ribbons",
            "Bags"
          ],
          "priceIndia": {
            "polyester": "₹40-120/m",
            "silk": "₹400-1500/m",
            "acetate": "₹150-400/m"
          },
          "washCare": {
            "temp": "30°C gentle or dry clean",
            "machine": false,
            "iron": "Low",
            "dryCleaning": true
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Heat set (polyester)",
            "Moiré finish (water mark pattern)"
          ]
        },
        {
          "name": "Ripstop",
          "construction": {
            "epi": 80,
            "ppi": 76,
            "yarnCount": "Fine base + thicker reinforcement every ~5mm",
            "note": "Grid of reinforcement threads prevents tear propagation"
          },
          "commonConstructions": [
            {
              "epi": 80,
              "ppi": 76,
              "yarn": "70D nylon + 210D reinforcement",
              "gsm": 70,
              "blend": "100% Nylon",
              "use": "Outdoor gear, bags"
            },
            {
              "epi": 72,
              "ppi": 68,
              "yarn": "20s cotton + thicker grid",
              "gsm": 120,
              "blend": "100% Cotton",
              "use": "Military uniform fabric"
            },
            {
              "epi": 84,
              "ppi": 80,
              "yarn": "75D polyester",
              "gsm": 80,
              "blend": "100% Polyester",
              "use": "Budget outdoor"
            }
          ],
          "gsm": {
            "min": 55,
            "max": 150
          },
          "width": [
            "44 inches",
            "60 inches"
          ],
          "uses": [
            "Outdoor gear",
            "Military uniforms",
            "Parachutes",
            "Kites",
            "Bags"
          ],
          "priceIndia": {
            "nylon": "₹120-300/m",
            "cotton": "₹100-250/m",
            "polyester": "₹60-160/m"
          },
          "washCare": {
            "temp": "40°C",
            "machine": true,
            "iron": "Low-medium",
            "dryCleaning": false
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "DWR (water repellent)",
            "PU coating"
          ]
        }
      ],
      "washCare": {
        "temp": "30-40°C (fiber dependent)",
        "machine": true,
        "iron": "Medium",
        "dryCleaning": false
      },
      "priceByFiber": [
        {
          "fiber": "Cotton",
          "pricePerMeter": "₹40-800",
          "note": "Varies by count and finish"
        },
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹25-150",
          "note": "Most affordable option"
        },
        {
          "fiber": "Silk",
          "pricePerMeter": "₹400-2000",
          "note": "Premium natural fiber"
        },
        {
          "fiber": "Linen",
          "pricePerMeter": "₹180-600",
          "note": "Eco-friendly option"
        }
      ]
    },
    {
      "id": "twill-weave",
      "name": "Twill Weave",
      "category": "Basic Weave",
      "weaveNotation": "2/1, 3/1, 2/2",
      "construction": "Weft passes over multiple warp yarns then under, with each row offset creating diagonal rib. Diagonal angle = 45° for balanced; steeper or shallower for unbalanced.",
      "visual3D": {
        "type": "diagonal-rib",
        "texture": "twill-diagonal",
        "pile": false,
        "angle": 45
      },
      "variants": [
        {
          "name": "Denim",
          "weaveType": "3/1 Z-twill (warp-faced)",
          "construction": {
            "epi": 68,
            "ppi": 42,
            "yarnCount": "7s-16s (OE ring spun)",
            "note": "Warp = indigo dyed ring/OE; weft = grey/white"
          },
          "commonConstructions": [
            {
              "epi": 68,
              "ppi": 42,
              "yarn": "10s x 10s OE",
              "gsm": 280,
              "blend": "100% Cotton",
              "oz": "8.5 oz",
              "use": "Standard jeans"
            },
            {
              "epi": 72,
              "ppi": 44,
              "yarn": "12s x 12s ring",
              "gsm": 320,
              "blend": "100% Cotton",
              "oz": "9.5 oz",
              "use": "Premium jeans"
            },
            {
              "epi": 76,
              "ppi": 42,
              "yarn": "16s x 12s combed",
              "gsm": 370,
              "blend": "100% Cotton",
              "oz": "11 oz",
              "use": "Heavyweight jeans/jackets"
            },
            {
              "epi": 68,
              "ppi": 42,
              "yarn": "10s x 10s",
              "gsm": 290,
              "blend": "Cotton/Elastane (98/2)",
              "oz": "8.5 oz",
              "use": "Stretch denim"
            },
            {
              "epi": 64,
              "ppi": 40,
              "yarn": "8s x 8s",
              "gsm": 420,
              "blend": "100% Cotton",
              "oz": "13 oz",
              "use": "Selvedge denim (high end)"
            },
            {
              "epi": 60,
              "ppi": 38,
              "yarn": "7s x 7s",
              "gsm": 470,
              "blend": "100% Cotton",
              "oz": "14-16 oz",
              "use": "Raw/rigid heavyweight"
            }
          ],
          "gsm": {
            "min": 240,
            "max": 500
          },
          "ozPerSquareYard": "7-16 oz",
          "width": [
            "58 inches (standard)",
            "30-32 inches (selvedge)"
          ],
          "uses": [
            "Jeans",
            "Jackets",
            "Shorts",
            "Shirts",
            "Bags"
          ],
          "priceIndia": {
            "standard": "₹150-350/m",
            "premium": "₹350-800/m",
            "selvedge": "₹800-2500/m"
          },
          "washCare": {
            "temp": "30°C cold inside out",
            "machine": true,
            "iron": "Medium on reverse",
            "dryCleaning": false
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Sanforization",
            "Stone wash",
            "Acid wash",
            "Enzyme wash",
            "Laser finish"
          ],
          "indiaSourcing": [
            "Ahmedabad (Arvind Mills, Aarvee)",
            "Surat",
            "Bangalore"
          ],
          "yarnType": [
            "Ring spun",
            "OE/Rotor spun",
            "Slub",
            "Core spun (stretch)"
          ]
        },
        {
          "name": "Gabardine",
          "weaveType": "2/2 or 3/1 twill (steep angle)",
          "construction": {
            "epi": 100,
            "ppi": 60,
            "yarnCount": "60s-80s combed",
            "note": "High warp density; clear diagonal cord on face"
          },
          "commonConstructions": [
            {
              "epi": 100,
              "ppi": 60,
              "yarn": "60s x 40s combed",
              "gsm": 240,
              "blend": "100% Wool",
              "use": "Suit trousers, skirts"
            },
            {
              "epi": 110,
              "ppi": 64,
              "yarn": "80s x 60s combed",
              "gsm": 200,
              "blend": "Wool/Polyester 55/45",
              "use": "Budget suiting"
            },
            {
              "epi": 96,
              "ppi": 56,
              "yarn": "40s x 30s",
              "gsm": 260,
              "blend": "100% Polyester",
              "use": "Uniform fabric"
            },
            {
              "epi": 104,
              "ppi": 62,
              "yarn": "60s x 40s",
              "gsm": 220,
              "blend": "Cotton/Poly (TC)",
              "use": "Summer gabardine"
            }
          ],
          "gsm": {
            "min": 180,
            "max": 320
          },
          "width": [
            "56-60 inches"
          ],
          "uses": [
            "Suits",
            "Trousers",
            "Uniforms",
            "Blazers",
            "Coats"
          ],
          "priceIndia": {
            "wool": "₹600-2500/m",
            "polyWool": "₹300-900/m",
            "polyester": "₹120-300/m"
          },
          "washCare": {
            "temp": "30°C or dry clean",
            "machine": false,
            "iron": "Medium with press cloth",
            "dryCleaning": true
          },
          "season": [
            "Autumn/Winter",
            "All Season"
          ],
          "finish": [
            "Pressing/decatizing",
            "Water repellent"
          ],
          "indiaSourcing": [
            "Bhilwara",
            "Ludhiana",
            "Surat"
          ]
        },
        {
          "name": "Drill / Khaki Drill",
          "weaveType": "2/1 or 3/1 twill",
          "construction": {
            "epi": 72,
            "ppi": 44,
            "yarnCount": "20s-30s",
            "note": "Sturdy, medium weight; visible diagonal"
          },
          "commonConstructions": [
            {
              "epi": 72,
              "ppi": 44,
              "yarn": "20s x 20s",
              "gsm": 250,
              "blend": "100% Cotton",
              "use": "Workwear, military"
            },
            {
              "epi": 80,
              "ppi": 52,
              "yarn": "30s x 30s",
              "gsm": 200,
              "blend": "Cotton/Poly (TC)",
              "use": "Uniform trousers"
            },
            {
              "epi": 68,
              "ppi": 40,
              "yarn": "16s x 16s",
              "gsm": 300,
              "blend": "100% Cotton",
              "use": "Heavy workwear"
            }
          ],
          "gsm": {
            "min": 180,
            "max": 350
          },
          "width": [
            "58-60 inches"
          ],
          "uses": [
            "Workwear",
            "Military uniform",
            "Trousers",
            "Shorts"
          ],
          "priceIndia": {
            "cotton": "₹80-200/m",
            "blend": "₹60-150/m"
          },
          "washCare": {
            "temp": "60°C",
            "machine": true,
            "iron": "Hot",
            "dryCleaning": false
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Sanforization",
            "Starch finish",
            "FR finish"
          ],
          "indiaSourcing": [
            "Ahmedabad",
            "Coimbatore",
            "Bhilwara"
          ]
        },
        {
          "name": "Chino / Khaki",
          "weaveType": "2/1 or 3/1 twill",
          "construction": {
            "epi": 80,
            "ppi": 54,
            "yarnCount": "30s-40s combed",
            "note": "Softer than drill; lighter hand"
          },
          "commonConstructions": [
            {
              "epi": 80,
              "ppi": 54,
              "yarn": "40s x 30s combed",
              "gsm": 220,
              "blend": "100% Cotton",
              "use": "Chino trousers, smart casual"
            },
            {
              "epi": 84,
              "ppi": 56,
              "yarn": "40s x 40s",
              "gsm": 200,
              "blend": "Cotton/Elastane (97/3)",
              "use": "Stretch chino"
            },
            {
              "epi": 76,
              "ppi": 52,
              "yarn": "30s x 30s",
              "gsm": 240,
              "blend": "Cotton/Poly",
              "use": "Budget chino"
            }
          ],
          "gsm": {
            "min": 180,
            "max": 270
          },
          "width": [
            "58-60 inches"
          ],
          "uses": [
            "Chino trousers",
            "Casual pants",
            "Shorts",
            "Smart casual"
          ],
          "priceIndia": {
            "cotton": "₹120-300/m",
            "stretch": "₹150-350/m"
          },
          "washCare": {
            "temp": "40°C",
            "machine": true,
            "iron": "Medium",
            "dryCleaning": false
          },
          "season": [
            "All Season"
          ],
          "finish": [
            "Sanforization",
            "Easy-care",
            "Stretch finish"
          ]
        },
        {
          "name": "Herringbone Twill",
          "weaveType": "Broken 2/2 twill — direction reverses",
          "construction": {
            "note": "Twill direction reverses at set intervals creating V/ZigZag"
          },
          "commonConstructions": [
            {
              "yarn": "2/48Nm wool",
              "gsm": 260,
              "blend": "100% Wool",
              "use": "Classic suits, sport coats"
            },
            {
              "yarn": "40s x 40s cotton",
              "gsm": 220,
              "blend": "100% Cotton",
              "use": "Casual jackets, shirts"
            },
            {
              "yarn": "Wool/Poly blend",
              "gsm": 240,
              "blend": "55/45 Wool/Poly",
              "use": "Budget suiting"
            }
          ],
          "gsm": {
            "min": 180,
            "max": 400
          },
          "uses": [
            "Suits",
            "Jackets",
            "Coats",
            "Scarves"
          ],
          "priceIndia": {
            "wool": "₹600-2500/m",
            "cotton": "₹150-400/m"
          },
          "season": [
            "Autumn/Winter"
          ]
        },
        {
          "name": "Cavalry Twill",
          "weaveType": "Double twill / steep 2/2 variant",
          "construction": {
            "note": "Steep double diagonal rib; very durable; originally for cavalry uniform"
          },
          "commonConstructions": [
            {
              "yarn": "Wool worsted",
              "gsm": 320,
              "blend": "100% Wool",
              "use": "Formal trousers, riding breeches"
            },
            {
              "yarn": "40s cotton",
              "gsm": 280,
              "blend": "Cotton/Poly",
              "use": "Uniform trousers"
            }
          ],
          "gsm": {
            "min": 250,
            "max": 400
          },
          "uses": [
            "Military trousers",
            "Riding breeches",
            "Formal trousers"
          ],
          "priceIndia": {
            "wool": "₹500-1800/m",
            "blend": "₹200-500/m"
          }
        },
        {
          "name": "Serge",
          "weaveType": "2/2 twill, wool",
          "construction": {
            "note": "Clear diagonal on both sides; smooth; used in tailoring"
          },
          "gsm": {
            "min": 200,
            "max": 350
          },
          "uses": [
            "Suits",
            "School uniforms",
            "Skirts",
            "Trousers"
          ],
          "priceIndia": {
            "wool": "₹400-1500/m",
            "blend": "₹200-600/m"
          }
        }
      ],
      "washCare": {
        "temp": "30-60°C (fiber dependent)",
        "machine": true,
        "iron": "Medium-Hot"
      },
      "priceByFiber": [
        {
          "fiber": "Cotton",
          "pricePerMeter": "₹80-350",
          "note": "Denim to chino"
        },
        {
          "fiber": "Wool",
          "pricePerMeter": "₹400-2500",
          "note": "Gabardine to serge"
        },
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹60-300",
          "note": "Uniforms"
        }
      ]
    },
    {
      "id": "satin-weave",
      "name": "Satin / Sateen Weave",
      "category": "Basic Weave",
      "weaveNotation": "4/1, 5/1, 8/1",
      "visual3D": {
        "type": "smooth-lustrous",
        "texture": "satin-shiny",
        "pile": false
      },
      "variants": [
        {
          "name": "Charmeuse Satin",
          "construction": {
            "epi": 110,
            "ppi": 84,
            "yarnCount": "Silk or fine filament",
            "note": "5-harness warp satin; one side lustrous, other matte"
          },
          "commonConstructions": [
            {
              "yarn": "Silk 16mm",
              "gsm": 65,
              "blend": "100% Silk",
              "use": "Luxury blouses, lingerie, sarees"
            },
            {
              "yarn": "75D polyester",
              "gsm": 75,
              "blend": "100% Polyester",
              "use": "Budget satin blouses"
            }
          ],
          "gsm": {
            "min": 55,
            "max": 90
          },
          "uses": [
            "Blouses",
            "Lingerie",
            "Evening wear",
            "Sarees"
          ],
          "priceIndia": {
            "silk": "₹600-3000/m",
            "polyester": "₹60-160/m"
          }
        },
        {
          "name": "Duchess Satin",
          "construction": {
            "epi": 120,
            "ppi": 96,
            "yarnCount": "5-harness heavy satin",
            "note": "Heavy, structured satin; matte sheen"
          },
          "commonConstructions": [
            {
              "yarn": "Polyester filament",
              "gsm": 200,
              "blend": "100% Polyester",
              "use": "Bridal gowns, evening wear"
            },
            {
              "yarn": "Silk",
              "gsm": 180,
              "blend": "100% Silk",
              "use": "Luxury bridal"
            }
          ],
          "gsm": {
            "min": 160,
            "max": 250
          },
          "uses": [
            "Bridal gowns",
            "Ball gowns",
            "Formal wear"
          ],
          "priceIndia": {
            "polyester": "₹120-350/m",
            "silk": "₹800-3500/m"
          }
        },
        {
          "name": "Sateen (Cotton Weft-faced)",
          "construction": {
            "epi": 80,
            "ppi": 120,
            "yarnCount": "60-80s combed",
            "note": "Weft-faced satin; cotton; soft lustrous face"
          },
          "commonConstructions": [
            {
              "epi": 80,
              "ppi": 120,
              "yarn": "60s x 60s combed",
              "gsm": 130,
              "blend": "100% Cotton",
              "use": "Bedsheets (300-600 TC)"
            },
            {
              "epi": 96,
              "ppi": 140,
              "yarn": "80s x 80s combed",
              "gsm": 110,
              "blend": "100% Cotton",
              "use": "Premium bedding"
            }
          ],
          "gsm": {
            "min": 100,
            "max": 180
          },
          "threadCount": "200-600 TC",
          "uses": [
            "Bedsheets",
            "Pillowcases",
            "Apparel fabric"
          ],
          "priceIndia": {
            "cotton": "₹150-500/m"
          }
        },
        {
          "name": "Bridal Satin",
          "construction": {
            "note": "8-harness; maximum float; maximum luster; used for structured gowns"
          },
          "gsm": {
            "min": 220,
            "max": 320
          },
          "uses": [
            "Bridal gowns",
            "Evening wear",
            "Prom dresses"
          ],
          "priceIndia": {
            "polyester": "₹120-300/m",
            "silk": "₹1000-5000/m"
          }
        }
      ],
      "washCare": {
        "temp": "30°C gentle or dry clean",
        "machine": false,
        "iron": "Low on reverse"
      },
      "priceByFiber": [
        {
          "fiber": "Silk",
          "pricePerMeter": "₹600-5000"
        },
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹60-350"
        },
        {
          "fiber": "Cotton (sateen)",
          "pricePerMeter": "₹150-500"
        }
      ]
    },
    {
      "id": "yarn-dyed-wovens",
      "name": "Yarn-Dyed Woven Fabrics",
      "category": "Special Construction",
      "weaveNotation": "Various (plain/twill base)",
      "construction": "Yarns are dyed before weaving, creating patterns that go through the fabric. Different from piece-dyed. Pattern is permanent, not surface-printed.",
      "visual3D": {
        "type": "striped-checked",
        "texture": "yarn-dyed-check"
      },
      "variants": [
        {
          "name": "Gingham Check",
          "construction": {
            "note": "Equal stripe of colored and white in warp and weft; creates check pattern"
          },
          "commonConstructions": [
            {
              "yarn": "40s x 40s",
              "gsm": 110,
              "checkSize": "3mm / 6mm / 9mm / 12mm",
              "blend": "100% Cotton",
              "use": "Shirts, dresses, school uniforms"
            },
            {
              "yarn": "30s x 30s",
              "gsm": 130,
              "checkSize": "Various",
              "blend": "Cotton/Poly",
              "use": "Budget gingham"
            }
          ],
          "gsm": {
            "min": 90,
            "max": 140
          },
          "uses": [
            "Shirts",
            "Dresses",
            "School uniforms",
            "Tablecloths"
          ],
          "priceIndia": {
            "cotton": "₹80-200/m",
            "blend": "₹50-120/m"
          }
        },
        {
          "name": "Chambray",
          "construction": {
            "epi": 78,
            "ppi": 60,
            "yarnCount": "40s colored warp x 40s white weft",
            "note": "Plain weave; solid color warp + white weft = heathered look"
          },
          "commonConstructions": [
            {
              "epi": 78,
              "ppi": 60,
              "yarn": "40s x 40s",
              "gsm": 130,
              "blend": "100% Cotton",
              "use": "Casual shirts, dresses"
            },
            {
              "epi": 80,
              "ppi": 64,
              "yarn": "60s x 40s",
              "gsm": 110,
              "blend": "100% Cotton",
              "use": "Lightweight chambray shirts"
            }
          ],
          "gsm": {
            "min": 100,
            "max": 160
          },
          "uses": [
            "Casual shirts",
            "Dresses",
            "Denim-look light shirts"
          ],
          "priceIndia": {
            "cotton": "₹80-200/m"
          },
          "season": [
            "Spring/Summer"
          ]
        },
        {
          "name": "Stripe / Pinstripe",
          "construction": {
            "note": "Colored warp stripes at regular intervals; weft typically solid or self-color"
          },
          "commonConstructions": [
            {
              "yarn": "80s x 80s",
              "gsm": 90,
              "blend": "100% Cotton",
              "stripeWidth": "1-2mm (pinstripe)",
              "use": "Formal shirts"
            },
            {
              "yarn": "40s x 40s",
              "gsm": 120,
              "blend": "100% Cotton",
              "stripeWidth": "5-10mm",
              "use": "Casual shirts, pajamas"
            }
          ],
          "gsm": {
            "min": 85,
            "max": 140
          },
          "uses": [
            "Shirts",
            "Suits",
            "Pajamas",
            "Bedding"
          ]
        },
        {
          "name": "End-on-End / Fil-à-fil",
          "construction": {
            "epi": 88,
            "ppi": 72,
            "yarnCount": "80s x 80s alternating color",
            "note": "Alternating colored and white warp; creates subtle texture/melange effect"
          },
          "commonConstructions": [
            {
              "epi": 88,
              "ppi": 72,
              "yarn": "80s alternating",
              "gsm": 90,
              "blend": "100% Cotton",
              "use": "Premium shirts"
            }
          ],
          "gsm": {
            "min": 80,
            "max": 110
          },
          "uses": [
            "Premium shirts",
            "Luxury shirting"
          ],
          "priceIndia": {
            "cotton": "₹150-400/m"
          }
        },
        {
          "name": "Madras Check",
          "construction": {
            "note": "Multicolor yarn-dyed checks; typically irregular large checks; origin: Madras/Chennai"
          },
          "gsm": {
            "min": 100,
            "max": 140
          },
          "uses": [
            "Shirts",
            "Shorts",
            "Casual wear"
          ],
          "priceIndia": {
            "cotton": "₹80-200/m"
          }
        },
        {
          "name": "Tartan / Plaid",
          "construction": {
            "note": "Multicolor warp and weft stripes of same pattern; creates large check"
          },
          "gsm": {
            "min": 200,
            "max": 400
          },
          "uses": [
            "Kilts",
            "Jackets",
            "Blankets",
            "Shirts"
          ],
          "priceIndia": {
            "wool": "₹400-1500/m",
            "cotton": "₹100-250/m"
          }
        }
      ],
      "washCare": {
        "temp": "30-40°C",
        "machine": true,
        "iron": "Medium"
      },
      "priceByFiber": [
        {
          "fiber": "Cotton",
          "pricePerMeter": "₹80-400"
        },
        {
          "fiber": "Wool",
          "pricePerMeter": "₹400-1500"
        }
      ]
    },
    {
      "id": "velvet-pile",
      "name": "Velvet / Pile Weaves",
      "category": "Pile Weave",
      "visual3D": {
        "type": "cut-pile",
        "texture": "velvet-pile",
        "pile": true,
        "pileHeight": 1.5
      },
      "variants": [
        {
          "name": "Cut Velvet",
          "gsm": {
            "min": 200,
            "max": 400
          },
          "uses": [
            "Evening wear",
            "Blazers",
            "Upholstery"
          ],
          "priceIndia": {
            "silk": "₹800-4000/m",
            "cotton": "₹300-800/m",
            "polyester": "₹100-300/m"
          }
        },
        {
          "name": "Crushed Velvet",
          "construction": {
            "note": "Pile pressed in random directions; irregular light reflection"
          },
          "gsm": {
            "min": 180,
            "max": 320
          },
          "uses": [
            "Fashion garments",
            "Upholstery"
          ],
          "priceIndia": {
            "polyester": "₹120-300/m",
            "cotton": "₹250-700/m"
          }
        },
        {
          "name": "Devore / Burnout Velvet",
          "construction": {
            "note": "Pile selectively dissolved by chemical print leaving base fabric; creates translucent pattern"
          },
          "gsm": {
            "min": 150,
            "max": 300
          },
          "uses": [
            "Evening wear",
            "Fashion fabric",
            "Scarves"
          ],
          "priceIndia": {
            "mixed": "₹400-1200/m"
          }
        },
        {
          "name": "Corduroy — Pinwale",
          "construction": {
            "wales": "16-21 wales per inch",
            "note": "Fine narrow ribs; softer hand"
          },
          "gsm": {
            "min": 200,
            "max": 300
          },
          "uses": [
            "Children's wear",
            "Fine trousers",
            "Jackets"
          ]
        },
        {
          "name": "Corduroy — Standard Wale",
          "construction": {
            "wales": "10-12 wales per inch",
            "note": "Standard corduroy; most common"
          },
          "gsm": {
            "min": 250,
            "max": 380
          },
          "uses": [
            "Trousers",
            "Jackets",
            "Casual wear"
          ]
        },
        {
          "name": "Corduroy — Wide Wale",
          "construction": {
            "wales": "6-8 wales per inch",
            "note": "Bold wide ribs; retro look"
          },
          "gsm": {
            "min": 300,
            "max": 420
          },
          "uses": [
            "Jackets",
            "Upholstery",
            "Bags"
          ]
        },
        {
          "name": "Corduroy — Jumbo Wale",
          "construction": {
            "wales": "2-4 wales per inch",
            "note": "Very wide ribs; chunky texture"
          },
          "gsm": {
            "min": 350,
            "max": 480
          },
          "uses": [
            "Fashion jackets",
            "Upholstery"
          ]
        }
      ],
      "washCare": {
        "temp": "30°C inside-out; dry clean for velvet",
        "machine": false,
        "iron": "Steam reverse only"
      },
      "priceByFiber": [
        {
          "fiber": "Silk Velvet",
          "pricePerMeter": "₹800-4000"
        },
        {
          "fiber": "Cotton Velvet",
          "pricePerMeter": "₹300-800"
        },
        {
          "fiber": "Polyester Velvet",
          "pricePerMeter": "₹100-300"
        },
        {
          "fiber": "Cotton Corduroy",
          "pricePerMeter": "₹150-500"
        }
      ]
    },
    {
      "id": "microfiber-technical",
      "name": "Microfiber & Technical Wovens",
      "category": "Technical / Performance",
      "construction": "Ultrafine synthetic fibers (< 1 denier per filament); woven into dense, smooth fabric. Properties engineered for performance: moisture wicking, DWR, stretch.",
      "visual3D": {
        "type": "ultra-smooth",
        "texture": "microfiber-smooth"
      },
      "variants": [
        {
          "name": "Peach Skin Microfiber",
          "construction": {
            "yarn": "75D/72F polyester",
            "gsm": 90,
            "note": "Split microfiber; surface sanded for peach-like hand"
          },
          "gsm": {
            "min": 75,
            "max": 120
          },
          "uses": [
            "Blouses",
            "Dresses",
            "Sportswear",
            "Lining"
          ],
          "priceIndia": {
            "polyester": "₹60-150/m"
          }
        },
        {
          "name": "Softshell",
          "construction": {
            "note": "3-layer: outer woven + membrane + inner fleece; bonded by lamination"
          },
          "gsm": {
            "min": 200,
            "max": 380
          },
          "uses": [
            "Outdoor jackets",
            "Sportswear",
            "Activewear"
          ],
          "priceIndia": {
            "polyester": "₹300-800/m"
          }
        },
        {
          "name": "Oxford 210D / 420D / 600D",
          "construction": {
            "note": "Oxford weave with denier-specified yarns; 210D light, 600D heavy duty"
          },
          "gsm": {
            "min": 80,
            "max": 300
          },
          "uses": [
            "Bags",
            "Backpacks",
            "Tents",
            "Covers"
          ],
          "priceIndia": {
            "polyester": "₹40-150/m"
          }
        },
        {
          "name": "4-Way Stretch Woven",
          "construction": {
            "note": "Core-spun elastane warp + weft; stretch in both directions"
          },
          "gsm": {
            "min": 150,
            "max": 300
          },
          "uses": [
            "Activewear",
            "Swimwear",
            "Fashion trousers"
          ],
          "priceIndia": {
            "nylon": "₹200-600/m",
            "polyester": "₹150-400/m"
          }
        }
      ],
      "washCare": {
        "temp": "30-40°C",
        "machine": true,
        "iron": "Low or no iron"
      },
      "priceByFiber": [
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹40-400"
        },
        {
          "fiber": "Nylon",
          "pricePerMeter": "₹100-600"
        }
      ]
    },
    {
      "id": "chiffon",
      "name": "Chiffon",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "SHEER",
      "weaveNotation": "1/1",
      "construction": "Highly twisted yarns in both directions create open, sheer structure. Twist creates crinkle and resilience.",
      "keyProperty": "Floaty, semi-transparent, gossamer drape",
      "story": "A gossamer-weight plain weave fabric with a soft drape and subtle shimmer. Despite its delicate appearance, chiffon is surprisingly resilient. The open weave creates a floaty, ethereal quality beloved in eveningwear and lingerie.",
      "gsm": { "min": 15, "max": 35 },
      "gsmDisplay": "15–35 GSM",
      "uses": ["Evening wear", "Scarves", "Overlays", "Lingerie"],
      "commonFibers": ["Silk", "Polyester", "Nylon"],
      "priceIndia": {
          "silk": "₹400-1200/m",
          "polyester": "₹40-150/m",
        },
      "washCare": {"temp": "30°C gentle", "machine": false, "iron": "Low", "dryCleaning": true},
      "season": ["Spring/Summer"],
      "finish": ["Soft finish"],
      "indiaSourcing": ["Surat", "Varanasi"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "georgette",
      "visual3D": null
    },
    {
      "id": "georgette",
      "name": "Georgette",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "SHEER",
      "weaveNotation": "1/1",
      "construction": "Alternating S and Z twist yarns in both warp and weft create characteristic crinkle and spring.",
      "keyProperty": "Crinkled surface, more opaque than chiffon",
      "story": "A sheer, lightweight plain weave with a characteristic crinkled texture produced by alternating S and Z twist yarns. More opaque and springy than chiffon, georgette drapes beautifully and is a staple of draped blouses and flowy dresses.",
      "gsm": { "min": 35, "max": 65 },
      "gsmDisplay": "35–65 GSM",
      "uses": ["Blouses", "Dresses", "Draped garments", "Sarees"],
      "commonFibers": ["Silk", "Polyester", "Viscose"],
      "priceIndia": {
          "silk": "₹500-1500/m",
          "polyester": "₹60-200/m",
          "viscose": "₹80-250/m",
        },
      "washCare": {"temp": "30°C gentle", "machine": false, "iron": "Low", "dryCleaning": true},
      "season": ["Spring/Summer"],
      "finish": ["Soft finish", "Anti-crease"],
      "indiaSourcing": ["Surat", "Varanasi", "Kolkata"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "chiffon",
      "visual3D": null
    },
    {
      "id": "organza",
      "name": "Organza",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "SHEER",
      "weaveNotation": "1/1",
      "construction": "Tightly twisted yarn woven at high thread count creates crisp, stiff sheer with firm hand.",
      "keyProperty": "Crisp, stiff — holds architectural shape",
      "story": "A sheer, plain woven fabric with a stiff, crisp hand created by tightly twisted yarn. Unlike other sheer fabrics, organza holds its structure, making it ideal for full skirts, overskirts, and statement sleeves in bridal and eveningwear.",
      "gsm": { "min": 30, "max": 50 },
      "gsmDisplay": "30–50 GSM",
      "uses": ["Bridal", "Structured overlays", "Full skirts", "Statement sleeves"],
      "commonFibers": ["Silk", "Polyester", "Nylon"],
      "priceIndia": {
          "silk": "₹600-2000/m",
          "polyester": "₹50-180/m",
        },
      "washCare": {"temp": "30°C gentle", "machine": false, "iron": "Low", "dryCleaning": true},
      "season": ["Spring/Summer"],
      "finish": ["Stiffening", "Calendering"],
      "indiaSourcing": ["Surat", "Varanasi"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "voile",
      "visual3D": null
    },
    {
      "id": "voile",
      "name": "Voile",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "SHEER",
      "weaveNotation": "1/1",
      "construction": "Open weave, high-twist yarn creates soft sheer with slight crispness. Lower thread count than lawn.",
      "keyProperty": "Soft sheer, fluid, slightly crisp hand",
      "story": "A soft, sheer plain weave with a fine, slightly crisp hand. Lighter and more fluid than organza, voile is used for curtains, summer blouses, and layered garments. The name comes from the French word for 'veil'.",
      "gsm": { "min": 50, "max": 80 },
      "gsmDisplay": "50–80 GSM",
      "uses": ["Curtains", "Summer tops", "Layered garments", "Dupattas"],
      "commonFibers": ["Cotton", "Polyester", "Silk"],
      "priceIndia": {
          "cotton": "₹60-200/m",
          "blend": "₹30-90/m",
        },
      "washCare": {"temp": "30°C gentle", "machine": true, "iron": "Low", "dryCleaning": false},
      "season": ["Spring/Summer"],
      "finish": ["Soft finish", "Anti-crease"],
      "indiaSourcing": ["Surat", "Jaipur", "Bhilwara"],
      "has3DModel": false,
      "priority": "low",
      "alternative": "batiste",
      "visual3D": null
    },
    {
      "id": "batiste",
      "name": "Batiste",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "LIGHT",
      "weaveNotation": "1/1",
      "construction": "Highly combed long-staple fibres, high thread count plain weave. Near-silky surface despite cotton.",
      "keyProperty": "Extremely fine, soft — almost silk-like despite being cotton",
      "story": "One of the finest, softest plain weave fabrics, batiste is woven from highly combed, long-staple fibres giving it an almost silky hand despite being cotton. Named after Jean Baptiste, a 13th-century French linen weaver renowned for the fineness of his cloth.",
      "gsm": { "min": 60, "max": 90 },
      "gsmDisplay": "60–90 GSM",
      "uses": ["Lingerie", "Baby wear", "Handkerchiefs", "Fine blouses"],
      "commonFibers": ["Cotton", "Linen", "Polyester"],
      "priceIndia": {
          "cotton": "₹80-250/m",
          "linen": "₹150-400/m",
        },
      "washCare": {"temp": "30°C gentle", "machine": true, "iron": "Low", "dryCleaning": false},
      "season": ["Spring/Summer"],
      "finish": ["Calendering", "Sanforization"],
      "indiaSourcing": ["Dhariwal", "Malegaon"],
      "has3DModel": false,
      "priority": "low",
      "alternative": "voile",
      "visual3D": null
    },
    {
      "id": "lawn",
      "name": "Lawn",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "LIGHT",
      "weaveNotation": "1/1",
      "construction": "Fine combed yarns at 100s x 80s or finer. High thread count creates smooth, lustrous surface ideal for printing.",
      "keyProperty": "Crisp finish, takes printed designs exceptionally well",
      "story": "A lightweight, semi-sheer plain weave with a slightly crisp, cool finish. Lawn takes printed designs exceptionally well owing to its smooth, tight surface. Named after Laon, France, where linen lawn was originally produced in the Middle Ages.",
      "gsm": { "min": 40, "max": 80 },
      "gsmDisplay": "40–80 GSM",
      "uses": ["Shirts", "Children's wear", "Printed fabrics", "Dupattas"],
      "commonFibers": ["Cotton", "Linen"],
      "priceIndia": {
          "cotton": "₹70-250/m",
          "luxury": "₹300-600/m",
        },
      "washCare": {"temp": "40°C", "machine": true, "iron": "Medium", "dryCleaning": false},
      "season": ["Spring/Summer"],
      "finish": ["Soft finish", "Calendering"],
      "indiaSourcing": ["Dhariwal", "Malegaon", "Bhilwara"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "poplin",
      "visual3D": null
    },
    {
      "id": "chambray",
      "name": "Chambray",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "LIGHT",
      "weaveNotation": "1/1",
      "construction": "Coloured warp x white weft plain weave gives two-tone denim-like appearance at fraction of denim weight.",
      "keyProperty": "Looks like denim from a distance but infinitely lighter",
      "story": "A lightweight plain weave woven with a coloured (often blue) warp and white weft, giving a soft two-tone character that resembles denim from a distance. Infinitely more wearable in heat, chambray is the backbone of relaxed summer shirting.",
      "gsm": { "min": 110, "max": 160 },
      "gsmDisplay": "110–160 GSM",
      "uses": ["Casual shirts", "Summer dresses", "Lightweight workwear"],
      "commonFibers": ["Cotton", "Cotton-Linen Blend", "Polyester"],
      "priceIndia": {
          "cotton": "₹80-220/m",
          "blend": "₹60-150/m",
        },
      "washCare": {"temp": "40°C", "machine": true, "iron": "Medium", "dryCleaning": false},
      "season": ["Spring/Summer"],
      "finish": ["Sanforization", "Enzyme wash"],
      "indiaSourcing": ["Ahmedabad", "Erode", "Coimbatore"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "denim",
      "visual3D": null
    },
    {
      "id": "seersucker",
      "name": "Seersucker",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "LIGHT",
      "weaveNotation": "1/1",
      "construction": "Alternating slack and tight warp tension creates permanent puckered-flat stripe without ironing.",
      "keyProperty": "Puckered texture lifts fabric off skin — no ironing needed",
      "story": "A plain weave cotton with alternating puckered and flat stripes created by weaving some warp threads at higher tension. The puckering keeps fabric away from skin for airflow — making it one of the most genuinely breathable warm-weather fabrics. Ironing destroys its character.",
      "gsm": { "min": 120, "max": 180 },
      "gsmDisplay": "120–180 GSM",
      "uses": ["Summer suits", "Shirts", "Children's wear", "Pyjamas"],
      "commonFibers": ["Cotton", "Cotton-Polyester Blend"],
      "priceIndia": {
          "cotton": "₹120-280/m",
          "blend": "₹80-180/m",
        },
      "washCare": {"temp": "40°C", "machine": true, "iron": "None", "dryCleaning": false},
      "season": ["Spring/Summer"],
      "finish": ["Sanforization"],
      "indiaSourcing": ["Erode", "Coimbatore", "Tirupur"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "chambray",
      "visual3D": null
    },
    {
      "id": "oxford-cloth",
      "name": "Oxford Cloth",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "MEDIUM",
      "weaveNotation": "2/1 basket variant",
      "construction": "Basket weave variant: thick weft woven over pairs of warp yarns gives textured surface. Softens with washing.",
      "keyProperty": "Basket weave variant with slight texture — softens with every wash",
      "story": "A basket weave variant of plain weave using a thicker weft yarn woven over pairs of warp yarns. The result is a slightly textured, durable fabric with a casual appearance that softens beautifully with washing. The OCBD (Oxford Cloth Button-Down) shirt is one of menswear's most enduring classics.",
      "gsm": { "min": 150, "max": 250 },
      "gsmDisplay": "150–250 GSM",
      "uses": ["Dress shirts", "Casual shirting", "OCBD shirts"],
      "commonFibers": ["Cotton", "Cotton-Polyester Blend"],
      "priceIndia": {
          "cotton": "₹120-350/m",
          "blend": "₹80-200/m",
        },
      "washCare": {"temp": "40°C", "machine": true, "iron": "Medium", "dryCleaning": false},
      "season": ["All Season"],
      "finish": ["Sanforization", "Easy-care"],
      "indiaSourcing": ["Ahmedabad", "Coimbatore", "Erode"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "chambray",
      "visual3D": null
    },
    {
      "id": "muslin",
      "name": "Muslin",
      "category": "Plain Weave",
      "family": "Plain Weave",
      "weightTag": "LIGHT",
      "weaveNotation": "1/1",
      "construction": "Loose, open plain weave from carded cotton. Minimal finishing — unbleached or lightly processed.",
      "keyProperty": "Unbleached, affordable, breathable — the fabric of prototypes",
      "story": "A loose, plain woven cotton fabric in its simplest, most economical form. In fashion, muslin is primarily the fabric of toiles — prototype garments made to test a pattern before cutting expensive material. The name comes from Mosul, Iraq, where fine cotton weaving was first documented by European traders.",
      "gsm": { "min": 100, "max": 150 },
      "gsmDisplay": "100–150 GSM",
      "uses": ["Toiles / pattern testing", "Lining", "Baby muslins", "Reusable cloth"],
      "commonFibers": ["Cotton"],
      "priceIndia": {
          "cotton": "₹30-80/m",
        },
      "washCare": {"temp": "60°C", "machine": true, "iron": "Hot", "dryCleaning": false},
      "season": ["All Season"],
      "finish": ["Bleaching", "Unbleached natural"],
      "indiaSourcing": ["Malegaon", "Bhiwandi", "Erode"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "calico",
      "visual3D": null
    },
    {
      "id": "gabardine",
      "name": "Gabardine",
      "category": "Twill Weave",
      "family": "Twill Weave",
      "weightTag": "MEDIUM",
      "weaveNotation": "2/2",
      "construction": "Tightly woven twill with fine diagonal rib on face, smooth back. High thread count, 45° rib angle.",
      "keyProperty": "Fine diagonal rib, wrinkle resistant, clean tailored appearance",
      "story": "A tightly woven twill fabric with a distinctive fine diagonal rib on the face and a smooth back. Patented by Thomas Burberry in 1879, gabardine is renowned for its wrinkle resistance, durability, and clean tailored appearance. The fabric of choice for the classic trench coat.",
      "gsm": { "min": 200, "max": 300 },
      "gsmDisplay": "200–300 GSM",
      "uses": ["Suits", "Trousers", "Trench coats", "Outerwear"],
      "commonFibers": ["Wool", "Cotton", "Polyester", "Wool-Polyester Blend"],
      "priceIndia": {
          "wool": "₹600-2000/m",
          "cotton": "₹150-400/m",
          "polyester": "₹100-300/m",
        },
      "washCare": {"temp": "30°C", "machine": false, "iron": "Medium with damp cloth", "dryCleaning": true},
      "season": ["Autumn/Winter", "All Season"],
      "finish": ["Pressing", "Milling", "Anti-wrinkle"],
      "indiaSourcing": ["Bhilwara", "Ludhiana", "Panipat"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "twill-weave",
      "visual3D": null
    },
    {
      "id": "herringbone",
      "name": "Herringbone",
      "category": "Twill Weave",
      "family": "Twill Weave",
      "weightTag": "MEDIUM-HEAVY",
      "weaveNotation": "Broken twill",
      "construction": "Twill direction reverses at regular intervals creating V-shaped zigzag resembling herring fish bones.",
      "keyProperty": "V-shaped zigzag pattern — a broken twill that reverses direction",
      "story": "A broken twill weave producing the distinctive V-shaped zigzag pattern that resembles the bones of a herring fish. The reversal of diagonal direction at regular intervals creates the chevron. A perennial of tailoring, herringbone is associated with British heritage and country clothing.",
      "gsm": { "min": 250, "max": 400 },
      "gsmDisplay": "250–400 GSM",
      "uses": ["Blazers", "Coats", "Heritage suiting", "Trousers"],
      "commonFibers": ["Wool", "Cotton", "Linen", "Polyester Blend"],
      "priceIndia": {
          "wool": "₹800-2500/m",
          "cotton": "₹200-500/m",
          "blend": "₹300-800/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Steam press", "dryCleaning": true},
      "season": ["Autumn/Winter"],
      "finish": ["Milling", "Pressing", "Decatizing"],
      "indiaSourcing": ["Bhilwara", "Ludhiana", "Amritsar"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "tweed",
      "visual3D": null
    },
    {
      "id": "serge",
      "name": "Serge",
      "category": "Twill Weave",
      "family": "Twill Weave",
      "weightTag": "MEDIUM",
      "weaveNotation": "2/2",
      "construction": "Two-up two-down twill producing smooth flat surface on both face and back with refined diagonal rib.",
      "keyProperty": "Smooth-faced twill — the technical benchmark for balanced suiting",
      "story": "A two-up two-down twill with a smooth, flat surface on both the face and back, creating a refined diagonal rib. Historically the fabric of military uniforms and school blazers, serge is less fashionable today but remains the technical standard for a clean, durable suiting twill.",
      "gsm": { "min": 180, "max": 260 },
      "gsmDisplay": "180–260 GSM",
      "uses": ["Uniforms", "Suits", "School blazers", "Military wear"],
      "commonFibers": ["Wool", "Wool Blend", "Polyester"],
      "priceIndia": {
          "wool": "₹500-1500/m",
          "polyester": "₹120-300/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Steam press", "dryCleaning": true},
      "season": ["Autumn/Winter", "All Season"],
      "finish": ["Pressing", "Singeing"],
      "indiaSourcing": ["Bhilwara", "Ludhiana"],
      "has3DModel": false,
      "priority": "low",
      "alternative": "gabardine",
      "visual3D": null
    },
    {
      "id": "cavalry-twill",
      "name": "Cavalry Twill",
      "category": "Twill Weave",
      "family": "Twill Weave",
      "weightTag": "HEAVY",
      "weaveNotation": "Double twill 63°",
      "construction": "Steep double-rib twill at approximately 63 degrees. Dense weave with exceptional abrasion resistance.",
      "keyProperty": "Double diagonal rib at 63° — exceptional abrasion resistance",
      "story": "A steep double-rib twill with a pronounced cord-like diagonal running at approximately 63 degrees. Originally developed for cavalry officers' riding breeches, the fabric's exceptional abrasion resistance made it standard for equestrian and military use. Now prized in heritage trousers and outerwear.",
      "gsm": { "min": 300, "max": 450 },
      "gsmDisplay": "300–450 GSM",
      "uses": ["Riding trousers", "Heritage outerwear", "Military breeches"],
      "commonFibers": ["Wool", "Wool Blend", "Cotton"],
      "priceIndia": {
          "wool": "₹800-2500/m",
          "cotton": "₹250-600/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Steam press", "dryCleaning": true},
      "season": ["Autumn/Winter"],
      "finish": ["Pressing", "Milling"],
      "indiaSourcing": ["Bhilwara", "Ludhiana"],
      "has3DModel": false,
      "priority": "low",
      "alternative": "gabardine",
      "visual3D": null
    },
    {
      "id": "chino-drill",
      "name": "Chino / Drill",
      "category": "Twill Weave",
      "family": "Twill Weave",
      "weightTag": "MEDIUM",
      "weaveNotation": "3/1 twill",
      "construction": "Tight 3/1 twill in cotton or blend. Resists wear and holds a clean crease. Military-specification construction.",
      "keyProperty": "Military origin — tight twill that resists wear and holds a crease",
      "story": "A sturdy, tightly woven twill originally supplied to the British and US armies in khaki for tropical uniforms in the 19th century. 'Chino' comes from the Spanish word for Chinese, where the fabric was once sourced. Today it is the standard fabric for smart-casual trousers worldwide.",
      "gsm": { "min": 200, "max": 300 },
      "gsmDisplay": "200–300 GSM",
      "uses": ["Trousers", "Workwear", "Military uniforms", "Casual trousers"],
      "commonFibers": ["Cotton", "Cotton-Polyester Blend"],
      "priceIndia": {
          "cotton": "₹120-280/m",
          "blend": "₹80-180/m",
        },
      "washCare": {"temp": "40°C", "machine": true, "iron": "Medium-Hot", "dryCleaning": false},
      "season": ["All Season"],
      "finish": ["Sanforization", "Easy-care"],
      "indiaSourcing": ["Ahmedabad", "Coimbatore", "Erode"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "gabardine",
      "visual3D": null
    },
    {
      "id": "hopsack",
      "name": "Hopsack",
      "category": "Twill Weave",
      "family": "Twill Weave",
      "weightTag": "MEDIUM",
      "weaveNotation": "Basket twill",
      "construction": "Loosely woven basket-twill with open, pebbly texture. Breathable but structured enough for tailoring.",
      "keyProperty": "Open basket-twill — structured enough for tailoring, breathable enough for summer",
      "story": "A loosely woven basket-twill with a pebbly, open texture that provides excellent breathability. Named after the coarse bags used to transport hops in breweries. In tailoring, hopsack is the summer-weight suiting alternative — structured enough for a blazer but open enough for warm weather.",
      "gsm": { "min": 200, "max": 280 },
      "gsmDisplay": "200–280 GSM",
      "uses": ["Summer blazers", "Casual suiting", "Jackets"],
      "commonFibers": ["Wool", "Linen", "Cotton", "Polyester"],
      "priceIndia": {
          "wool": "₹500-1500/m",
          "linen": "₹300-800/m",
          "polyester": "₹150-350/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Steam press", "dryCleaning": true},
      "season": ["Spring/Summer"],
      "finish": ["Pressing", "Decatizing"],
      "indiaSourcing": ["Bhilwara", "Ludhiana"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "gabardine",
      "visual3D": null
    },
    {
      "id": "flannel",
      "name": "Flannel",
      "category": "Twill Weave",
      "family": "Twill Weave",
      "weightTag": "MEDIUM",
      "weaveNotation": "2/2 or 1/1",
      "construction": "Loosely woven then mechanically brushed to raise surface fibres into warm nap. Soft, air-trapping structure.",
      "keyProperty": "Mechanically brushed nap traps air — warm despite its weight",
      "story": "A soft, loosely woven twill or plain weave fabric that is mechanically brushed after weaving to raise the surface fibres into a fine nap. The nap traps air and provides warmth disproportionate to its weight. Wool flannel is the suiting standard; cotton flannel dominates casual shirts and sleepwear.",
      "gsm": { "min": 150, "max": 250 },
      "gsmDisplay": "150–250 GSM",
      "uses": ["Shirts", "Pyjamas", "Casual suiting", "Bed linen"],
      "commonFibers": ["Wool", "Cotton", "Cotton-Polyester Blend"],
      "priceIndia": {
          "wool": "₹600-1800/m",
          "cotton": "₹100-280/m",
          "blend": "₹80-180/m",
        },
      "washCare": {"temp": "30°C gentle", "machine": true, "iron": "Medium with cloth", "dryCleaning": false},
      "season": ["Autumn/Winter"],
      "finish": ["Brushing/Napping", "Singeing"],
      "indiaSourcing": ["Bhilwara", "Ludhiana", "Panipat"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "tweed",
      "visual3D": null
    },
    {
      "id": "charmeuse",
      "name": "Charmeuse",
      "category": "Satin Family",
      "family": "Satin Family",
      "weightTag": "LIGHT",
      "weaveNotation": "4/1 or 5/1 satin",
      "construction": "Warp floats over 4-5 weft threads creating lustrous face. Dull crepe-like back. Exceptional drape.",
      "keyProperty": "One shiny face, one matte back — drapey and form-following",
      "story": "A lightweight satin-weave fabric with a lustrous face and a dull, crepe-like back created by floating warp threads over four or more weft threads. The drape is exceptional — charmeuse clings and flows simultaneously. Silk charmeuse is the gold standard for luxury lingerie and draped blouses.",
      "gsm": { "min": 60, "max": 100 },
      "gsmDisplay": "60–100 GSM",
      "uses": ["Lingerie", "Blouses", "Draped eveningwear", "Pyjamas"],
      "commonFibers": ["Silk", "Polyester"],
      "priceIndia": {
          "silk": "₹600-2000/m",
          "polyester": "₹80-250/m",
        },
      "washCare": {"temp": "30°C gentle", "machine": false, "iron": "Low", "dryCleaning": true},
      "season": ["All Season"],
      "finish": ["Soft finish", "Heat-set"],
      "indiaSourcing": ["Surat", "Varanasi", "Bangalore"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "satin-weave",
      "visual3D": null
    },
    {
      "id": "duchess-satin",
      "name": "Duchess Satin",
      "category": "Satin Family",
      "family": "Satin Family",
      "weightTag": "HEAVY",
      "weaveNotation": "5/1 satin",
      "construction": "Heavy, tightly woven satin with high lustre face and substantial body. Holds architectural silhouettes.",
      "keyProperty": "Stiff, structured, very lustrous — holds architectural silhouettes without boning",
      "story": "A heavy, tightly woven satin with a high lustre face and substantial body. Unlike drapey charmeuse, Duchess satin holds its shape — it is the fabric of ball gowns and structured bridal silhouettes. The weight allows it to support architectural forms without additional boning or underlining.",
      "gsm": { "min": 200, "max": 350 },
      "gsmDisplay": "200–350 GSM",
      "uses": ["Bridal gowns", "Ball gowns", "Structured bodices", "Eveningwear"],
      "commonFibers": ["Silk", "Polyester", "Silk-Polyester Blend"],
      "priceIndia": {
          "silk": "₹800-2500/m",
          "polyester": "₹150-450/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Low with press cloth", "dryCleaning": true},
      "season": ["All Season"],
      "finish": ["Calendering", "Stiffening"],
      "indiaSourcing": ["Surat", "Varanasi", "Bangalore"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "charmeuse",
      "visual3D": null
    },
    {
      "id": "satin-crepe",
      "name": "Satin Crepe",
      "category": "Satin Family",
      "family": "Satin Family",
      "weightTag": "MEDIUM",
      "weaveNotation": "Satin/crepe double face",
      "construction": "Satin face and crepe back in single cloth. Technically reversible — both faces usable by designer.",
      "keyProperty": "Crepe back and satin face — technically reversible, two looks in one",
      "story": "A double-faced fabric woven with a satin face and a crepe back, making it technically reversible. The crepe back offers a subtler, matte alternative to the lustrous face — designers often use both sides deliberately in the same garment. An exceptionally versatile eveningwear fabric.",
      "gsm": { "min": 120, "max": 180 },
      "gsmDisplay": "120–180 GSM",
      "uses": ["Eveningwear", "Blouses", "Reversible garments", "Formal dresses"],
      "commonFibers": ["Silk", "Polyester", "Acetate"],
      "priceIndia": {
          "silk": "₹600-1800/m",
          "polyester": "₹100-300/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Low", "dryCleaning": true},
      "season": ["All Season"],
      "finish": ["Soft finish"],
      "indiaSourcing": ["Surat", "Varanasi"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "charmeuse",
      "visual3D": null
    },
    {
      "id": "taffeta",
      "name": "Taffeta",
      "category": "Textured / Ribbed",
      "family": "Textured / Ribbed",
      "weightTag": "MEDIUM",
      "weaveNotation": "1/1 plain — high twist",
      "construction": "Crisp, smooth plain weave with high-twist silk or filament yarn. Characteristic rustle (scroop) from tight weave.",
      "keyProperty": "Crisp hand with a characteristic rustling sound ('scroop')",
      "story": "A crisp, smooth, plain weave fabric with a characteristic rustle known as 'scroop' — produced by the tight weave and finishing process. The name comes from the Persian 'taftah' meaning woven. Taffeta has been the fabric of formal occasion dressing for centuries, from Elizabethan court to contemporary red carpets.",
      "gsm": { "min": 80, "max": 150 },
      "gsmDisplay": "80–150 GSM",
      "uses": ["Ball gowns", "Linings", "Ribbons", "Evening bags"],
      "commonFibers": ["Silk", "Polyester", "Acetate", "Nylon"],
      "priceIndia": {
          "silk": "₹600-2000/m",
          "polyester": "₹60-200/m",
          "acetate": "₹150-400/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Low", "dryCleaning": true},
      "season": ["All Season"],
      "finish": ["Calendering", "Stiffening"],
      "indiaSourcing": ["Surat", "Varanasi", "Bangalore"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "dupioni",
      "visual3D": null
    },
    {
      "id": "ottoman",
      "name": "Ottoman",
      "category": "Textured / Ribbed",
      "family": "Textured / Ribbed",
      "weightTag": "MEDIUM-HEAVY",
      "weaveNotation": "Weft-rib plain",
      "construction": "Thick weft yarn with fine warp creates prominent horizontal ribs. Stiff, formal, architectural structure.",
      "keyProperty": "Prominent horizontal ribs — stiffer and more architectural than faille",
      "story": "A heavyweight fabric with prominent horizontal ribs created by weaving with a thick weft and fine warp. Named after the Ottoman Empire, the fabric has a formal, architectural quality used in structured coats, bodices, and upholstery. The ribs are more pronounced than in faille or bengaline.",
      "gsm": { "min": 200, "max": 320 },
      "gsmDisplay": "200–320 GSM",
      "uses": ["Coats", "Structured bodices", "Upholstery", "Formal wear"],
      "commonFibers": ["Silk", "Polyester", "Wool", "Rayon"],
      "priceIndia": {
          "silk": "₹500-1500/m",
          "polyester": "₹120-350/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Steam press", "dryCleaning": true},
      "season": ["Autumn/Winter"],
      "finish": ["Calendering"],
      "indiaSourcing": ["Surat", "Varanasi"],
      "has3DModel": false,
      "priority": "low",
      "alternative": "faille",
      "visual3D": null
    },
    {
      "id": "faille",
      "name": "Faille",
      "category": "Textured / Ribbed",
      "family": "Textured / Ribbed",
      "weightTag": "MEDIUM",
      "weaveNotation": "Weft-rib plain",
      "construction": "Fine horizontal ribs with gentle lustre. Lighter than ottoman, more structure than taffeta.",
      "keyProperty": "Fine horizontal ribs with gentle lustre — sits between taffeta and ottoman",
      "story": "A slightly ribbed, soft fabric with fine horizontal ribs and a gentle lustre. Lighter and more fluid than ottoman, faille sits between taffeta and bengaline in structure. Used for eveningwear, accessories, and formal linings where subtle texture is preferred over flat satin.",
      "gsm": { "min": 150, "max": 220 },
      "gsmDisplay": "150–220 GSM",
      "uses": ["Eveningwear", "Formal accessories", "Linings", "Ribbons"],
      "commonFibers": ["Silk", "Polyester", "Rayon"],
      "priceIndia": {
          "silk": "₹400-1200/m",
          "polyester": "₹80-250/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Low", "dryCleaning": true},
      "season": ["All Season"],
      "finish": ["Soft finish", "Calendering"],
      "indiaSourcing": ["Surat", "Varanasi"],
      "has3DModel": false,
      "priority": "low",
      "alternative": "taffeta",
      "visual3D": null
    },
    {
      "id": "dupioni",
      "name": "Dupioni",
      "category": "Textured / Ribbed",
      "family": "Textured / Ribbed",
      "weightTag": "MEDIUM",
      "weaveNotation": "1/1 plain — slub warp",
      "construction": "Double-cocoon silk threads create random slub texture — irregular thick-thin variation is inherent, not a defect.",
      "keyProperty": "Irregular slub texture from double-cocoon silk — luminous and unique",
      "story": "A crisp, plain weave fabric woven from irregular slub silk — threads reeled from two silkworm cocoons that have nested together, producing the characteristic random thick-thin texture. The luminous, slightly rough surface is unique to dupioni and signals handcraft luxury. Extensively used in bridal and occasion suiting.",
      "gsm": { "min": 100, "max": 200 },
      "gsmDisplay": "100–200 GSM",
      "uses": ["Bridal", "Occasion suiting", "Home furnishings", "Sarees"],
      "commonFibers": ["Silk", "Silk-Polyester Blend", "Polyester"],
      "priceIndia": {
          "silk": "₹400-1500/m",
          "blend": "₹150-400/m",
          "polyester": "₹80-200/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Low with press cloth", "dryCleaning": true},
      "season": ["All Season"],
      "finish": ["Soft finish", "Stiffening"],
      "indiaSourcing": ["Varanasi", "Bangalore", "Surat"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "shantung",
      "visual3D": null
    },
    {
      "id": "shantung",
      "name": "Shantung",
      "category": "Textured / Ribbed",
      "family": "Textured / Ribbed",
      "weightTag": "LIGHT-MEDIUM",
      "weaveNotation": "1/1 plain — raw silk",
      "construction": "Similar to dupioni but finer yarn, lighter weight. Slub texture from undegummed raw silk. More fluid drape.",
      "keyProperty": "Similar slub texture to dupioni but lighter and more fluid",
      "story": "A lightweight plain weave with slub texture similar to dupioni but finer and more fluid. Originally woven in Shandong Province, China, from raw silk that was not degummed to a standard uniformity. Shantung is the lighter, more casual alternative to dupioni — perfect for warm-weather suiting and separates.",
      "gsm": { "min": 80, "max": 150 },
      "gsmDisplay": "80–150 GSM",
      "uses": ["Summer suiting", "Separates", "Occasion wear", "Blazers"],
      "commonFibers": ["Silk", "Polyester"],
      "priceIndia": {
          "silk": "₹350-1200/m",
          "polyester": "₹70-180/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Low", "dryCleaning": true},
      "season": ["Spring/Summer"],
      "finish": ["Soft finish"],
      "indiaSourcing": ["Varanasi", "Surat", "Bangalore"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "dupioni",
      "visual3D": null
    },
    {
      "id": "velvet",
      "name": "Velvet",
      "category": "Pile / Surface",
      "family": "Pile / Surface",
      "weightTag": "MEDIUM-HEAVY",
      "weaveNotation": "Cut pile weave",
      "construction": "Supplementary warp pile woven then cut to create short, dense upright fibres. Direction of pile affects colour depth.",
      "keyProperty": "Dense cut pile creates exceptional softness and depth of colour",
      "story": "A woven fabric with a short, dense cut pile that creates an exceptionally soft surface and rich, depth-of-colour appearance. For centuries reserved for royalty owing to the cost of silk pile weaving. The pile direction affects how colour reads — always cut pattern pieces in the same direction.",
      "gsm": { "min": 300, "max": 500 },
      "gsmDisplay": "300–500 GSM",
      "uses": ["Eveningwear", "Upholstery", "Accessories", "Ceremonial dress"],
      "commonFibers": ["Silk", "Polyester", "Cotton", "Rayon/Viscose"],
      "priceIndia": {
          "silk": "₹800-3000/m",
          "polyester": "₹120-400/m",
          "cotton": "₹200-600/m",
        },
      "washCare": {"temp": "Dry clean", "machine": false, "iron": "Steam only", "dryCleaning": true},
      "season": ["Autumn/Winter"],
      "finish": ["Pile cutting", "Singeing"],
      "indiaSourcing": ["Varanasi", "Surat", "Bangalore"],
      "has3DModel": false,
      "priority": "high",
      "alternative": "corduroy",
      "visual3D": null
    },
    {
      "id": "corduroy",
      "name": "Corduroy",
      "category": "Pile / Surface",
      "family": "Pile / Surface",
      "weightTag": "MEDIUM-HEAVY",
      "weaveNotation": "Cut weft pile",
      "construction": "Parallel cut-pile ribs (wales) running lengthwise. Wale count: 4-wale (wide) to 21-wale (pin cord).",
      "keyProperty": "Parallel cut-pile ribs (wales) — wale count determines formality",
      "story": "A woven fabric with parallel cut-pile ribs called 'wales' running lengthwise. Wale count determines character: fine pin cord (21-wale) is lightweight and formal; wide wale (4-wale) is casual and pronounced. Corduroy became associated with intellectuals and artists in the 20th century and is in the middle of a major menswear revival.",
      "gsm": { "min": 250, "max": 450 },
      "gsmDisplay": "250–450 GSM",
      "uses": ["Trousers", "Jackets", "Casual outerwear", "Shirts"],
      "commonFibers": ["Cotton", "Cotton-Polyester Blend"],
      "priceIndia": {
          "cotton": "₹180-450/m",
          "blend": "₹120-300/m",
        },
      "washCare": {"temp": "30°C gentle", "machine": true, "iron": "Low", "dryCleaning": false},
      "season": ["Autumn/Winter"],
      "finish": ["Pile cutting", "Singeing", "Soft finish"],
      "indiaSourcing": ["Ahmedabad", "Erode", "Coimbatore"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "velvet",
      "visual3D": null
    },
    {
      "id": "damask",
      "name": "Damask",
      "category": "Decorative / Jacquard",
      "family": "Decorative / Jacquard",
      "weightTag": "MEDIUM-HEAVY",
      "weaveNotation": "Jacquard satin/sateen contrast",
      "construction": "Pattern created by contrasting satin and sateen weave structures on Jacquard loom. Same cloth, both faces identical but reversed.",
      "keyProperty": "Self-patterned by contrasting weave structures — reversible",
      "story": "A reversible figured fabric woven on a Jacquard loom where the pattern is created by contrasting satin and sateen weaves in the same cloth — no embroidery or printing. Named after Damascus, where it was first traded to Europe. The pattern is identical on both sides but with face and back reversed.",
      "gsm": { "min": 200, "max": 400 },
      "gsmDisplay": "200–400 GSM",
      "uses": ["Home textiles", "Formal wear", "Table linen", "Upholstery"],
      "commonFibers": ["Silk", "Cotton", "Linen", "Polyester", "Viscose"],
      "priceIndia": {
          "silk": "₹600-2000/m",
          "cotton": "₹200-600/m",
          "polyester": "₹100-350/m",
        },
      "washCare": {"temp": "40°C or dry clean", "machine": true, "iron": "Medium with press cloth", "dryCleaning": false},
      "season": ["All Season"],
      "finish": ["Calendering", "Stiffening"],
      "indiaSourcing": ["Varanasi", "Surat", "Kolkata"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "brocade",
      "visual3D": null
    },
    {
      "id": "brocade",
      "name": "Brocade",
      "category": "Decorative / Jacquard",
      "family": "Decorative / Jacquard",
      "weightTag": "HEAVY",
      "weaveNotation": "Jacquard with supplementary weft",
      "construction": "Jacquard loom with supplementary weft threads (often metallic) that create raised, embossed-looking patterns.",
      "keyProperty": "Raised woven pattern with supplementary metallic threads — not reversible",
      "story": "A Jacquard-woven fabric with a supplementary weft that creates raised, embossed-looking patterns. Metallic threads (gold, silver) are typical. Unlike damask, the pattern is not reversible. Historically woven in Varanasi (Benares) and Lyon, brocade is the fabric of ceremony, religious vestments, and haute couture.",
      "gsm": { "min": 250, "max": 450 },
      "gsmDisplay": "250–450 GSM",
      "uses": ["Formal garments", "Costumes", "Religious vestments", "Haute couture"],
      "commonFibers": ["Silk", "Polyester", "Metallic Thread", "Viscose"],
      "priceIndia": {
          "silk": "₹800-4000/m",
          "polyester": "₹200-800/m",
        },
      "washCare": {"temp": "Dry clean only", "machine": false, "iron": "Low with press cloth", "dryCleaning": true},
      "season": ["All Season"],
      "finish": ["Stiffening", "Pressing"],
      "indiaSourcing": ["Varanasi", "Surat", "Kolkata"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "damask",
      "visual3D": null
    },
    {
      "id": "terry-cloth",
      "name": "Terry Cloth",
      "category": "Utility Wovens",
      "family": "Utility Wovens",
      "weightTag": "HEAVY",
      "weaveNotation": "Loop pile weave",
      "construction": "Supplementary pile warp at controlled slack tension creates loops on one or both faces. Loops increase surface area dramatically.",
      "keyProperty": "Uncut loop pile dramatically increases surface area — most absorbent construction",
      "story": "A woven fabric with uncut loop pile on one or both sides created by weaving a supplementary pile warp at a controlled slack tension. The loops dramatically increase surface area, making terry cloth the most absorbent textile construction. Velour towelling is terry with the loops sheared on one side for a softer face.",
      "gsm": { "min": 300, "max": 600 },
      "gsmDisplay": "300–600 GSM",
      "uses": ["Towels", "Robes", "Beachwear", "Baby products"],
      "commonFibers": ["Cotton", "Cotton-Polyester Blend", "Bamboo"],
      "priceIndia": {
          "cotton": "₹150-400/m",
          "bamboo": "₹300-700/m",
        },
      "washCare": {"temp": "60°C", "machine": true, "iron": "None", "dryCleaning": false},
      "season": ["All Season"],
      "finish": ["Soft finish", "Anti-bacterial"],
      "indiaSourcing": ["Karur", "Erode", "Tirupur"],
      "has3DModel": false,
      "priority": "low",
      "alternative": null,
      "visual3D": null
    },
    {
      "id": "canvas",
      "name": "Canvas",
      "category": "Utility Wovens",
      "family": "Utility Wovens",
      "weightTag": "HEAVY",
      "weaveNotation": "1/1 plain — heavy",
      "construction": "Heavy, tightly woven plain weave from thick cotton or linen yarn. Maximum density for structural integrity.",
      "keyProperty": "Tight plain weave — extremely strong, holds its shape without lining",
      "story": "A heavy, tightly woven plain weave fabric with exceptional strength and stiffness. Before synthetic materials, canvas was the primary structural fabric for sails, tents, and artist's grounds. The word derives from the Latin 'cannabis' (hemp), the original fibre used before cotton became dominant.",
      "gsm": { "min": 300, "max": 600 },
      "gsmDisplay": "300–600 GSM",
      "uses": ["Bags", "Shoes", "Workwear", "Artist grounds"],
      "commonFibers": ["Cotton", "Linen", "Cotton-Polyester Blend", "Synthetic"],
      "priceIndia": {
          "cotton": "₹100-300/m",
          "linen": "₹200-500/m",
        },
      "washCare": {"temp": "60°C", "machine": true, "iron": "Hot", "dryCleaning": false},
      "season": ["All Season"],
      "finish": ["Waxing", "DWR water repellent", "Stiffening"],
      "indiaSourcing": ["Ahmedabad", "Surat", "Coimbatore"],
      "has3DModel": false,
      "priority": "medium",
      "alternative": "burlap-jute",
      "visual3D": null
    },
    {
      "id": "burlap-jute",
      "name": "Burlap / Jute",
      "category": "Utility Wovens",
      "family": "Utility Wovens",
      "weightTag": "HEAVY",
      "weaveNotation": "1/1 plain — open",
      "construction": "Coarse, loosely woven from jute or hemp fibres. Open structure with rough texture.",
      "keyProperty": "Open weave from natural plant fibre — one of the most biodegradable textiles",
      "story": "A coarse, loosely woven fabric made from jute or hemp fibres — one of the most environmentally low-impact textiles given jute's rapid growth cycle and biodegradability. Originally purely functional (grain sacks, coffee bags), burlap entered fashion and interiors as a deliberate texture in the late 20th century.",
      "gsm": { "min": 200, "max": 400 },
      "gsmDisplay": "200–400 GSM",
      "uses": ["Bags", "Sacking", "Rustic home decor", "Fashion accessories"],
      "commonFibers": ["Jute", "Hemp", "Flax"],
      "priceIndia": {
          "jute": "₹30-80/m",
          "hemp": "₹60-150/m",
        },
      "washCare": {"temp": "Cold gentle", "machine": false, "iron": "None", "dryCleaning": false},
      "season": ["All Season"],
      "finish": ["Natural unbleached", "Bleaching"],
      "indiaSourcing": ["Kolkata", "Siliguri", "Murshidabad"],
      "has3DModel": false,
      "priority": "low",
      "alternative": "canvas",
      "visual3D": null
    },
    {
      "id": "calico",
      "name": "Calico",
      "category": "Utility Wovens",
      "family": "Utility Wovens",
      "weightTag": "LIGHT",
      "weaveNotation": "1/1 plain",
      "construction": "Plain woven cotton in unbleached state. Natural cream-to-tan colour of raw cotton. Minimal processing.",
      "keyProperty": "Unbleached plain cotton in its raw, natural cream state",
      "story": "A plain woven cotton fabric in its most basic, unbleached state — the natural cream-to-tan colour of raw cotton. Like muslin, calico is the fabric of pattern testing and prototyping. The name comes from Calicut (now Kozhikode), India, where it was first traded to Europe in the 11th century.",
      "gsm": { "min": 100, "max": 150 },
      "gsmDisplay": "100–150 GSM",
      "uses": ["Toiles", "Bags", "Craft projects", "Printing base"],
      "commonFibers": ["Cotton"],
      "priceIndia": {
          "cotton": "₹25-70/m",
        },
      "washCare": {"temp": "60°C", "machine": true, "iron": "Hot", "dryCleaning": false},
      "season": ["All Season"],
      "finish": ["Unbleached natural", "Bleaching"],
      "indiaSourcing": ["Malegaon", "Bhiwandi", "Erode"],
      "has3DModel": false,
      "priority": "low",
      "alternative": "muslin",
      "visual3D": null
    }
  ],
  "knitted": [
    {
      "id": "rib-knit",
      "name": "Rib Knit",
      "category": "Weft Knit — Basic",
      "knittingType": "weft",
      "construction": "Knit and purl stitches alternate in vertical columns using two needle beds. Creates fabric identical on both sides; very high horizontal elasticity.",
      "visual3D": {
        "type": "vertical-ribs",
        "texture": "rib-elastic",
        "elastic": true
      },
      "variants": [
        {
          "name": "1×1 Rib",
          "notation": "K1 P1",
          "construction": {
            "alternation": "1 knit, 1 purl column alternating",
            "note": "Finest rib; reversible; high elasticity"
          },
          "machineGauge": [
            "14 GG",
            "16 GG",
            "18 GG",
            "20 GG",
            "24 GG"
          ],
          "gsm": {
            "min": 140,
            "max": 250
          },
          "stretchPct": "150-200% width",
          "uses": [
            "Neckbands",
            "Cuffs",
            "Waistbands",
            "Fine rib tops",
            "Thermal underwear"
          ],
          "yarnCount": [
            "20/1 Ne",
            "24/1 Ne",
            "30/1 Ne",
            "40/1 Ne"
          ],
          "priceIndia": {
            "cotton": "₹100-250/m",
            "cottonLycra": "₹130-300/m"
          },
          "commonSpecifications": [
            {
              "yarn": "30/1 Ne Cotton",
              "gauge": "18 GG",
              "gsm": 180,
              "blend": "100% Cotton",
              "width": "180cm open / 90cm tubular"
            },
            {
              "yarn": "30/1 Ne Cotton + 40D Lycra",
              "gauge": "16 GG",
              "gsm": 200,
              "blend": "95/5 Cotton/Elastane"
            },
            {
              "yarn": "24/1 Ne Cotton",
              "gauge": "14 GG",
              "gsm": 220,
              "blend": "100% Cotton",
              "note": "Heavier rib"
            }
          ]
        },
        {
          "name": "2×1 Rib",
          "notation": "K2 P1",
          "construction": {
            "alternation": "2 knit, 1 purl",
            "note": "Knit-face dominant; slightly more body"
          },
          "machineGauge": [
            "12 GG",
            "14 GG",
            "16 GG"
          ],
          "gsm": {
            "min": 160,
            "max": 280
          },
          "stretchPct": "120-160% width",
          "uses": [
            "Sweater body",
            "Chunky knitwear",
            "Collar details"
          ],
          "yarnCount": [
            "20/1 Ne",
            "24/1 Ne",
            "2/30 Nm"
          ],
          "priceIndia": {
            "cotton": "₹120-280/m",
            "wool": "₹400-1200/m"
          }
        },
        {
          "name": "2×2 Rib",
          "notation": "K2 P2",
          "construction": {
            "alternation": "2 knit, 2 purl alternating",
            "note": "Balanced, bold rib; classic sweater rib"
          },
          "machineGauge": [
            "7 GG",
            "10 GG",
            "12 GG",
            "14 GG"
          ],
          "gsm": {
            "min": 200,
            "max": 380
          },
          "stretchPct": "100-150% width",
          "uses": [
            "Sweater hems/cuffs",
            "Polo collars",
            "Heavy rib sweaters",
            "Sports tops"
          ],
          "yarnCount": [
            "2/48 Nm wool",
            "2/30 Nm acrylic",
            "20/1 Ne cotton"
          ],
          "priceIndia": {
            "cotton": "₹130-300/m",
            "wool": "₹500-1500/m",
            "acrylic": "₹80-200/m"
          },
          "commonSpecifications": [
            {
              "yarn": "2/48 Nm Merino Wool",
              "gauge": "12 GG",
              "gsm": 280,
              "blend": "100% Merino Wool"
            },
            {
              "yarn": "20/1 Ne Cotton + 70D Spandex",
              "gauge": "12 GG",
              "gsm": 260,
              "blend": "92/8 Cotton/Spandex"
            }
          ]
        },
        {
          "name": "3×1 Rib",
          "notation": "K3 P1",
          "construction": {
            "alternation": "3 knit, 1 purl",
            "note": "Heavily knit-face; raised cord effect"
          },
          "machineGauge": [
            "7 GG",
            "10 GG",
            "12 GG"
          ],
          "gsm": {
            "min": 220,
            "max": 400
          },
          "stretchPct": "80-120% width",
          "uses": [
            "Sweaters",
            "Chunky knit tops",
            "Outerwear trim"
          ],
          "yarnCount": [
            "2/48 Nm wool",
            "Nm 8/2 acrylic"
          ],
          "priceIndia": {
            "wool": "₹450-1400/m",
            "acrylic": "₹100-250/m"
          }
        },
        {
          "name": "3×2 Rib",
          "notation": "K3 P2",
          "construction": {
            "alternation": "3 knit, 2 purl",
            "note": "Textured; more body than 2x2"
          },
          "machineGauge": [
            "7 GG",
            "10 GG"
          ],
          "gsm": {
            "min": 240,
            "max": 420
          },
          "uses": [
            "Fashion sweaters",
            "Chunky knitwear"
          ],
          "priceIndia": {
            "wool": "₹500-1600/m"
          }
        },
        {
          "name": "4×1 Rib",
          "notation": "K4 P1",
          "construction": {
            "alternation": "4 knit, 1 purl",
            "note": "Very knit-face dominant; deep cord ribs"
          },
          "machineGauge": [
            "7 GG",
            "10 GG"
          ],
          "gsm": {
            "min": 250,
            "max": 450
          },
          "uses": [
            "Bulky sweaters",
            "Winter accessories",
            "Outerwear"
          ],
          "priceIndia": {
            "wool": "₹500-1800/m",
            "acrylic": "₹120-280/m"
          }
        },
        {
          "name": "4×2 Rib",
          "notation": "K4 P2",
          "construction": {
            "alternation": "4 knit, 2 purl",
            "note": "Wide rib pattern; structured look"
          },
          "machineGauge": [
            "7 GG",
            "10 GG"
          ],
          "gsm": {
            "min": 260,
            "max": 480
          },
          "uses": [
            "Winter sweaters",
            "Oversized knits",
            "Fashion knitwear"
          ],
          "priceIndia": {
            "wool": "₹500-1800/m",
            "acrylic": "₹120-280/m"
          }
        },
        {
          "name": "Mock Rib / Half Cardigan",
          "construction": {
            "note": "Tuck + knit alternate creating rib appearance on one side only; machine knitted easily"
          },
          "machineGauge": [
            "12 GG",
            "14 GG",
            "16 GG"
          ],
          "gsm": {
            "min": 200,
            "max": 350
          },
          "stretchPct": "60-100% width",
          "uses": [
            "T-shirt rib collars",
            "Casual sweater body",
            "Mass-market knitwear"
          ],
          "priceIndia": {
            "cotton": "₹100-220/m",
            "polyester": "₹70-160/m"
          }
        },
        {
          "name": "Full Cardigan Rib",
          "construction": {
            "note": "Both beds tuck on every course; very bulky; lots of yarn; fluffy look"
          },
          "machineGauge": [
            "7 GG",
            "10 GG"
          ],
          "gsm": {
            "min": 350,
            "max": 600
          },
          "uses": [
            "Chunky cardigans",
            "Heavy winter sweaters"
          ],
          "priceIndia": {
            "wool": "₹600-2000/m"
          }
        },
        {
          "name": "Pointelle Rib",
          "construction": {
            "note": "Regular drop-stitch holes create lace-like pattern; often 2x2 base"
          },
          "machineGauge": [
            "18 GG",
            "20 GG",
            "24 GG"
          ],
          "gsm": {
            "min": 120,
            "max": 220
          },
          "uses": [
            "Delicate tops",
            "Lingerie knitwear",
            "Baby wear"
          ],
          "priceIndia": {
            "cotton": "₹150-350/m",
            "silk": "₹500-1500/m"
          }
        },
        {
          "name": "Milano Rib",
          "construction": {
            "note": "1 course rib + 1 course plain back alternating; stable, less stretch than pure rib"
          },
          "machineGauge": [
            "16 GG",
            "18 GG"
          ],
          "gsm": {
            "min": 200,
            "max": 320
          },
          "uses": [
            "Structured dresses",
            "Smart casual tops",
            "Corporate wear"
          ],
          "priceIndia": {
            "viscose": "₹150-350/m",
            "wool": "₹400-1200/m"
          }
        }
      ],
      "washCare": {
        "temp": "30-40°C gentle or wool cycle",
        "machine": true,
        "iron": "Low; air dry flat"
      },
      "priceByFiber": [
        {
          "fiber": "Cotton",
          "pricePerMeter": "₹100-300"
        },
        {
          "fiber": "Cotton/Elastane",
          "pricePerMeter": "₹130-350"
        },
        {
          "fiber": "Wool",
          "pricePerMeter": "₹400-2000"
        },
        {
          "fiber": "Acrylic",
          "pricePerMeter": "₹70-200"
        },
        {
          "fiber": "Cashmere blend",
          "pricePerMeter": "₹800-4000"
        }
      ]
    },
    {
      "id": "single-jersey",
      "name": "Single Jersey",
      "category": "Weft Knit — Basic",
      "knittingType": "weft",
      "construction": "All needles on one cylinder bed knit on every course. V-loops on face; semicircular loops on reverse. Made on single-bed circular knitting machines.",
      "visual3D": {
        "type": "v-loop-face",
        "texture": "jersey-smooth",
        "elastic": true
      },
      "variants": [
        {
          "name": "20s Jersey",
          "yarnCount": "20/1 Ne",
          "construction": {
            "note": "Coarser, heavier; less soft; budget apparel"
          },
          "machineGauge": [
            "20 GG",
            "22 GG"
          ],
          "gsm": {
            "min": 180,
            "max": 260
          },
          "uses": [
            "Budget T-shirts",
            "Nightwear",
            "Innerwear"
          ],
          "priceIndia": {
            "cotton": "₹60-120/m"
          }
        },
        {
          "name": "24s Jersey",
          "yarnCount": "24/1 Ne",
          "construction": {
            "note": "Standard weight; mass market apparel"
          },
          "machineGauge": [
            "22 GG",
            "24 GG"
          ],
          "gsm": {
            "min": 160,
            "max": 220
          },
          "uses": [
            "Standard T-shirts",
            "Casual tops"
          ],
          "priceIndia": {
            "cotton": "₹70-140/m"
          }
        },
        {
          "name": "26s Jersey",
          "yarnCount": "26/1 Ne",
          "construction": {
            "note": "Mid-range; smooth texture; widely used"
          },
          "machineGauge": [
            "24 GG",
            "26 GG"
          ],
          "gsm": {
            "min": 150,
            "max": 200
          },
          "uses": [
            "T-shirts",
            "Polos",
            "Casual wear"
          ],
          "priceIndia": {
            "cotton": "₹80-160/m"
          }
        },
        {
          "name": "30s Jersey",
          "yarnCount": "30/1 Ne",
          "construction": {
            "note": "Popular mid-range; good softness balance; most common export T-shirt"
          },
          "machineGauge": [
            "24 GG",
            "28 GG"
          ],
          "gsm": {
            "min": 140,
            "max": 180
          },
          "uses": [
            "Export T-shirts",
            "Fashion tops",
            "Casual",
            "Sportswear"
          ],
          "priceIndia": {
            "cotton": "₹90-180/m",
            "cottonLycra": "₹120-220/m"
          },
          "exportNote": "Most common yarn count for 150-180 GSM T-shirts; widely stocked in Tirupur"
        },
        {
          "name": "40s Jersey",
          "yarnCount": "40/1 Ne",
          "construction": {
            "note": "Finer, softer; better drape; premium segment"
          },
          "machineGauge": [
            "28 GG",
            "32 GG"
          ],
          "gsm": {
            "min": 120,
            "max": 160
          },
          "uses": [
            "Premium T-shirts",
            "Ladies tops",
            "Fashion wear"
          ],
          "priceIndia": {
            "cotton": "₹110-220/m",
            "bamboo": "₹200-450/m"
          }
        },
        {
          "name": "60s Jersey",
          "yarnCount": "60/1 Ne",
          "construction": {
            "note": "Very fine, lightweight; used for luxury market"
          },
          "machineGauge": [
            "32 GG",
            "36 GG"
          ],
          "gsm": {
            "min": 90,
            "max": 130
          },
          "uses": [
            "Luxury tops",
            "Active base layers",
            "Ladies fashion"
          ],
          "priceIndia": {
            "cotton": "₹150-300/m",
            "modal": "₹200-450/m"
          }
        },
        {
          "name": "30s Viscose Jersey",
          "yarnCount": "30/1 Ne Viscose/Rayon",
          "construction": {
            "note": "Viscose has higher drape and luster than cotton; needs care when wet (weaker)"
          },
          "machineGauge": [
            "24 GG",
            "28 GG"
          ],
          "gsm": {
            "min": 140,
            "max": 190
          },
          "uses": [
            "Fashion tops",
            "Dresses",
            "Kurtis",
            "Drapy casualwear"
          ],
          "priceIndia": {
            "viscose": "₹100-220/m",
            "viscoselycra": "₹130-270/m"
          },
          "washCare": {
            "temp": "30°C gentle ONLY; very weak when wet",
            "machine": false,
            "iron": "Low"
          },
          "exportNote": "Very popular in India domestic + export; Surat and Tirupur are main hubs"
        },
        {
          "name": "Slub Jersey",
          "yarnCount": "30s slub or 40s slub Ne",
          "construction": {
            "note": "Irregular thick-thin yarn creates textured surface; natural or engineered slub"
          },
          "machineGauge": [
            "22 GG",
            "24 GG"
          ],
          "gsm": {
            "min": 140,
            "max": 200
          },
          "uses": [
            "Fashion T-shirts",
            "Casual tops",
            "Premium casualwear"
          ],
          "priceIndia": {
            "cotton": "₹120-250/m"
          }
        },
        {
          "name": "Melange Jersey",
          "yarnCount": "Various; blended fiber colors before spinning",
          "construction": {
            "note": "Heather/melange effect from mixing differently dyed fibers before spinning"
          },
          "machineGauge": [
            "24 GG",
            "28 GG"
          ],
          "gsm": {
            "min": 140,
            "max": 200
          },
          "uses": [
            "Heather T-shirts",
            "Athletic wear",
            "Casual fashion"
          ],
          "priceIndia": {
            "cotton": "₹100-220/m",
            "polyester": "₹70-160/m"
          }
        },
        {
          "name": "CVC Jersey (Chief Value Cotton)",
          "yarnCount": "30/1 Ne CVC",
          "construction": {
            "note": "More than 50% cotton + polyester; good durability + softness; widely used for export"
          },
          "machineGauge": [
            "24 GG",
            "28 GG"
          ],
          "gsm": {
            "min": 150,
            "max": 210
          },
          "uses": [
            "Export T-shirts",
            "Workwear",
            "Budget fashion"
          ],
          "blend": "52-60% Cotton / 40-48% Polyester",
          "priceIndia": {
            "cvc": "₹70-150/m"
          },
          "exportNote": "Common for budget export T-shirts; Tirupur specialty"
        },
        {
          "name": "PC Jersey (Polyester Cotton)",
          "yarnCount": "TC/PC blend",
          "construction": {
            "note": "Polyester > Cotton; 65/35 or 67/33; low cost but less breathable"
          },
          "machineGauge": [
            "24 GG",
            "28 GG"
          ],
          "gsm": {
            "min": 140,
            "max": 200
          },
          "blend": "65% Polyester / 35% Cotton",
          "uses": [
            "Budget uniform T-shirts",
            "Sublimation printing base"
          ],
          "priceIndia": {
            "pc": "₹55-120/m"
          }
        }
      ],
      "washCare": {
        "temp": "30-40°C",
        "machine": true,
        "iron": "Low-medium; air dry flat"
      },
      "priceByFiber": [
        {
          "fiber": "Cotton",
          "pricePerMeter": "₹60-300",
          "note": "20s to 60s range"
        },
        {
          "fiber": "Viscose/Rayon",
          "pricePerMeter": "₹100-270",
          "note": "Drapy; popular in India"
        },
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹50-150",
          "note": "Sportswear, budget"
        },
        {
          "fiber": "Modal",
          "pricePerMeter": "₹150-400",
          "note": "Luxury everyday"
        },
        {
          "fiber": "Bamboo",
          "pricePerMeter": "₹180-450",
          "note": "Eco premium"
        }
      ]
    },
    {
      "id": "interlock-knit",
      "name": "Interlock Knit",
      "category": "Weft Knit — Basic",
      "knittingType": "weft",
      "construction": "Two interlocked 1×1 rib fabrics knitted simultaneously on alternating needles of two cylinder beds. Both faces smooth V-loops. Heavier and more stable than single jersey.",
      "visual3D": {
        "type": "double-v-loop",
        "texture": "interlock-smooth",
        "elastic": true
      },
      "variants": [
        {
          "name": "Standard Cotton Interlock",
          "yarnCount": "40/1 Ne or 30/1 Ne",
          "machineGauge": [
            "18 GG",
            "20 GG",
            "24 GG"
          ],
          "gsm": {
            "min": 160,
            "max": 280
          },
          "uses": [
            "Polo shirts",
            "Baby wear",
            "T-shirts"
          ],
          "priceIndia": {
            "cotton": "₹120-280/m"
          }
        },
        {
          "name": "Pique Interlock",
          "construction": {
            "note": "Small tuck stitches on interlock base; textured honeycomb face; classic polo fabric"
          },
          "machineGauge": [
            "18 GG",
            "20 GG",
            "24 GG"
          ],
          "gsm": {
            "min": 170,
            "max": 250
          },
          "uses": [
            "Polo shirts",
            "Sportswear collars",
            "Corporate polo"
          ],
          "priceIndia": {
            "cotton": "₹140-300/m",
            "cottonPoly": "₹100-220/m"
          },
          "exportNote": "Most polo shirts worldwide use pique interlock; Tirupur major exporter"
        },
        {
          "name": "Flat-back Rib / Ponte di Roma",
          "construction": {
            "note": "2-course pattern creating stable, smooth double knit; ponte bridge = Roman bridge structure"
          },
          "machineGauge": [
            "16 GG",
            "18 GG",
            "20 GG"
          ],
          "gsm": {
            "min": 220,
            "max": 320
          },
          "stretchPct": "40-60% width",
          "uses": [
            "Structured dresses",
            "Blazers",
            "Work wear",
            "Capsule wardrobe basics"
          ],
          "priceIndia": {
            "viscose": "₹180-400/m",
            "polyester": "₹140-300/m",
            "wool": "₹500-1500/m"
          }
        },
        {
          "name": "Scuba Fabric (Double Knit)",
          "construction": {
            "note": "Dense interlock structure; very smooth; thick; minimal stretch; 'neoprene-like' hand without neoprene"
          },
          "machineGauge": [
            "20 GG",
            "24 GG"
          ],
          "gsm": {
            "min": 250,
            "max": 380
          },
          "uses": [
            "Structured dresses",
            "Skirts",
            "Crop tops",
            "Sportswear"
          ],
          "priceIndia": {
            "polyester": "₹150-350/m",
            "polySpandex": "₹200-450/m"
          }
        }
      ],
      "washCare": {
        "temp": "40°C",
        "machine": true,
        "iron": "Medium"
      },
      "priceByFiber": [
        {
          "fiber": "Cotton",
          "pricePerMeter": "₹120-300"
        },
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹100-350"
        },
        {
          "fiber": "Viscose/Rayon",
          "pricePerMeter": "₹150-400"
        }
      ]
    },
    {
      "id": "fleece-terry",
      "name": "Fleece / Sweatshirt / Terry Knit",
      "category": "Weft Knit — Derivative",
      "knittingType": "weft",
      "construction": "Ground + loop yarn. French terry: loops back only. 3-thread fleece: ground + loop + binder for stability. Brushed fleece: loops napped/raised.",
      "visual3D": {
        "type": "looped-back",
        "texture": "fleece-brushed",
        "elastic": true
      },
      "variants": [
        {
          "name": "2-Thread French Terry",
          "construction": {
            "note": "Ground + loop yarn; 2-thread; lighter; loops on back only"
          },
          "machineGauge": [
            "20 GG",
            "22 GG"
          ],
          "gsm": {
            "min": 180,
            "max": 250
          },
          "uses": [
            "Light sweatshirts",
            "Baby garments",
            "Casual tops"
          ],
          "priceIndia": {
            "cotton": "₹140-280/m"
          }
        },
        {
          "name": "3-Thread Fleece (Loopback)",
          "construction": {
            "note": "Ground + loop + binder (tuck) thread; most stable; classic sweatshirt fabric"
          },
          "machineGauge": [
            "18 GG",
            "20 GG"
          ],
          "gsm": {
            "min": 240,
            "max": 380
          },
          "uses": [
            "Hoodies",
            "Sweatshirts",
            "Joggers"
          ],
          "commonSpecifications": [
            {
              "yarn": "20/1 Ne Cotton face + 16/1 Ne loop",
              "gsm": 280,
              "blend": "100% Cotton"
            },
            {
              "yarn": "30/1 Ne CVC face + 20/1 Ne loop",
              "gsm": 260,
              "blend": "60/40 CVC"
            },
            {
              "yarn": "Polyester",
              "gsm": 300,
              "blend": "100% Polyester polar fleece"
            }
          ],
          "priceIndia": {
            "cotton": "₹150-350/m",
            "cottonPoly": "₹120-280/m",
            "polyester": "₹80-200/m"
          }
        },
        {
          "name": "Brushed / Raised Fleece",
          "construction": {
            "note": "3-thread base with loops napped/brushed on one or both sides; soft plush surface"
          },
          "machineGauge": [
            "18 GG",
            "20 GG"
          ],
          "gsm": {
            "min": 260,
            "max": 420
          },
          "uses": [
            "Fleece jackets",
            "Blankets",
            "Cold weather wear"
          ],
          "priceIndia": {
            "polyester": "₹100-250/m",
            "cotton": "₹160-360/m"
          }
        },
        {
          "name": "Polar Fleece",
          "construction": {
            "note": "100% polyester; double-napped; very lightweight warmth; anti-pill finish"
          },
          "gsm": {
            "min": 100,
            "max": 350
          },
          "weights": [
            "100 GSM (lightweight)",
            "200 GSM (mid-layer)",
            "300 GSM (heavyweight)"
          ],
          "uses": [
            "Fleece jackets",
            "Blankets",
            "Outdoor wear"
          ],
          "priceIndia": {
            "polyester": "₹80-200/m"
          }
        },
        {
          "name": "Sherpa / Teddy Fleece",
          "construction": {
            "note": "Curly/looped surface resembling sheep wool; polyester; one-sided texture"
          },
          "gsm": {
            "min": 200,
            "max": 400
          },
          "uses": [
            "Jackets (lining/outer)",
            "Blankets",
            "Toys"
          ],
          "priceIndia": {
            "polyester": "₹150-350/m"
          }
        }
      ],
      "washCare": {
        "temp": "30-40°C inside-out; avoid rough fabrics in wash",
        "machine": true,
        "iron": "Low reverse only"
      },
      "priceByFiber": [
        {
          "fiber": "Cotton",
          "pricePerMeter": "₹140-360"
        },
        {
          "fiber": "CVC / Cotton-Poly",
          "pricePerMeter": "₹110-280"
        },
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹80-250"
        },
        {
          "fiber": "Organic Cotton",
          "pricePerMeter": "₹200-480"
        }
      ]
    },
    {
      "id": "performance-knits",
      "name": "Performance / Sportswear Knits",
      "category": "Technical / Weft Knit",
      "knittingType": "weft",
      "construction": "Engineered knit structures with functional properties: moisture management, compression, UV protection, ventilation.",
      "visual3D": {
        "type": "mesh-performance",
        "texture": "sport-mesh"
      },
      "variants": [
        {
          "name": "Eyelet / Bird's Eye Knit",
          "construction": {
            "note": "Regular tuck stitches creating open holes; breathable mesh-like surface"
          },
          "machineGauge": [
            "24 GG",
            "28 GG"
          ],
          "gsm": {
            "min": 120,
            "max": 200
          },
          "uses": [
            "Polo shirts",
            "Athletic tops",
            "Cycling jerseys"
          ],
          "priceIndia": {
            "cotton": "₹100-220/m",
            "polyester": "₹80-180/m"
          }
        },
        {
          "name": "Mesh / Net Knit",
          "construction": {
            "note": "Open knit structure; maximum ventilation; various hole sizes"
          },
          "machineGauge": [
            "18 GG",
            "20 GG"
          ],
          "gsm": {
            "min": 80,
            "max": 160
          },
          "uses": [
            "Sports jerseys",
            "Beach wear",
            "Ventilation panels",
            "Bags"
          ],
          "priceIndia": {
            "polyester": "₹60-150/m",
            "nylon": "₹80-200/m"
          }
        },
        {
          "name": "4-Way Stretch Knit",
          "construction": {
            "note": "Core-spun elastane in both directions; 4-way stretch; recovery; used with polyester/nylon"
          },
          "machineGauge": [
            "28 GG",
            "32 GG"
          ],
          "gsm": {
            "min": 150,
            "max": 260
          },
          "stretchPct": "50-80% both directions",
          "uses": [
            "Leggings",
            "Yoga pants",
            "Swimwear",
            "Compression garments"
          ],
          "priceIndia": {
            "polyesterLycra": "₹150-400/m",
            "nylonLycra": "₹200-500/m"
          }
        },
        {
          "name": "Compression Knit",
          "construction": {
            "note": "High-tension circular knit; graduated compression (ankle: 15-20mmHg); controlled stretch"
          },
          "machineGauge": [
            "28 GG",
            "32 GG"
          ],
          "gsm": {
            "min": 200,
            "max": 320
          },
          "uses": [
            "Compression stockings",
            "Running tights",
            "Medical hosiery"
          ],
          "priceIndia": {
            "nylonLycra": "₹250-600/m"
          }
        },
        {
          "name": "Spacer Fabric",
          "construction": {
            "note": "Two outer layers connected by spacer yarn in between; 3D structure; breathable insulation"
          },
          "machineGauge": [
            "Specialized spacer machines"
          ],
          "gsm": {
            "min": 200,
            "max": 600
          },
          "uses": [
            "Shoe insoles",
            "Padding",
            "Sports helmets",
            "Car seats"
          ],
          "priceIndia": {
            "polyester": "₹300-800/m"
          }
        },
        {
          "name": "Moisture Wicking Jersey",
          "construction": {
            "note": "Fine polyester/nylon with engineered channels; wicks moisture away from skin"
          },
          "machineGauge": [
            "28 GG",
            "32 GG"
          ],
          "gsm": {
            "min": 100,
            "max": 180
          },
          "uses": [
            "Sports T-shirts",
            "Running tops",
            "Cricket/football kits"
          ],
          "finish": [
            "Moisture management treatment",
            "Anti-odor",
            "UV protection"
          ],
          "priceIndia": {
            "polyester": "₹80-200/m"
          }
        }
      ],
      "washCare": {
        "temp": "30-40°C; no fabric softener (blocks wicking)",
        "machine": true,
        "iron": "Low or no iron"
      },
      "priceByFiber": [
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹60-400"
        },
        {
          "fiber": "Nylon",
          "pricePerMeter": "₹100-500"
        },
        {
          "fiber": "Nylon/Elastane",
          "pricePerMeter": "₹200-600"
        }
      ]
    },
    {
      "id": "warp-knits",
      "name": "Warp Knit Structures",
      "category": "Warp Knit",
      "knittingType": "warp",
      "construction": "Yarns run vertically (warp direction) and interloop in zig-zag pattern. Produced on tricot or Raschel machines. More stable, less stretchy than weft knit.",
      "visual3D": {
        "type": "warp-diagonal",
        "texture": "warp-knit-stable"
      },
      "variants": [
        {
          "name": "Tricot — Locknit",
          "construction": {
            "note": "2 guide bars; back lap over 2 wales; more stable than simple tricot"
          },
          "machineGauge": [
            "28 GG",
            "32 GG",
            "36 GG"
          ],
          "gsm": {
            "min": 60,
            "max": 150
          },
          "uses": [
            "Lingerie",
            "Sportswear lining",
            "Suede-look fabric when napped"
          ],
          "priceIndia": {
            "nylon": "₹80-200/m",
            "polyester": "₹60-150/m"
          }
        },
        {
          "name": "Tricot — Satin (Warp Knit)",
          "construction": {
            "note": "Long underlaps; smooth lustrous face; run resistant"
          },
          "machineGauge": [
            "28 GG",
            "32 GG"
          ],
          "gsm": {
            "min": 55,
            "max": 120
          },
          "uses": [
            "Lining",
            "Lingerie",
            "Evening wear backing"
          ],
          "priceIndia": {
            "polyester": "₹50-130/m",
            "nylon": "₹80-200/m"
          }
        },
        {
          "name": "Raschel Lace",
          "construction": {
            "note": "Complex multi-bar Raschel; open floral/geometric patterns; traditional lace appearance"
          },
          "machineGauge": [
            "24 GG",
            "28 GG",
            "32 GG"
          ],
          "gsm": {
            "min": 30,
            "max": 100
          },
          "uses": [
            "Lingerie trim",
            "Wedding lace",
            "Bridal veil",
            "Decorative"
          ],
          "priceIndia": {
            "nylon": "₹100-400/m",
            "metallic": "₹200-800/m"
          }
        },
        {
          "name": "Power Net",
          "construction": {
            "note": "Open elastic Raschel structure; high stretch + recovery; firm support"
          },
          "machineGauge": [
            "28 GG",
            "32 GG"
          ],
          "gsm": {
            "min": 80,
            "max": 180
          },
          "stretchPct": "50-80% both directions",
          "uses": [
            "Foundation garments",
            "Shapewear",
            "Corsetry",
            "Sports bras"
          ],
          "priceIndia": {
            "nylonElastane": "₹150-400/m"
          }
        },
        {
          "name": "Warp Knit Velour / Plush",
          "construction": {
            "note": "Tricot base; loop yarn sheared creating dense pile; very stable"
          },
          "machineGauge": [
            "28 GG",
            "32 GG"
          ],
          "gsm": {
            "min": 180,
            "max": 400
          },
          "uses": [
            "Tracksuits",
            "Robes",
            "Upholstery",
            "Toys"
          ],
          "priceIndia": {
            "polyester": "₹120-300/m",
            "cotton": "₹200-500/m"
          }
        }
      ],
      "washCare": {
        "temp": "30-40°C delicate",
        "machine": true,
        "iron": "Very low or no iron"
      },
      "priceByFiber": [
        {
          "fiber": "Nylon",
          "pricePerMeter": "₹80-400"
        },
        {
          "fiber": "Polyester",
          "pricePerMeter": "₹50-300"
        },
        {
          "fiber": "Nylon/Elastane",
          "pricePerMeter": "₹150-600"
        }
      ]
    }
  ],
  "sustainable": [
    {
      "id": "organic-cotton",
      "name": "Organic Cotton",
      "fiberType": "natural",
      "source": "Cotton without synthetic pesticides/GMOs; GOTS/OCS certified",
      "co2KgPerKgFiber": 2,
      "co2Conventional": 5.9,
      "co2ReductionPct": 66,
      "waterSavingPct": 70,
      "biodegradable": true,
      "decarbScore": 78,
      "compatibleWovenStructures": [
        "plain-weave",
        "twill-weave",
        "yarn-dyed-wovens",
        "velvet-pile"
      ],
      "compatibleKnittedStructures": [
        "single-jersey",
        "rib-knit",
        "interlock-knit",
        "fleece-terry"
      ],
      "pricePerMeter": "₹180-600",
      "indiaAvailability": "high",
      "indiaHubs": [
        "Gujarat",
        "Maharashtra",
        "Andhra Pradesh"
      ],
      "certifications": [
        "GOTS",
        "OCS",
        "OEKO-TEX",
        "Fairtrade"
      ]
    },
    {
      "id": "rpet",
      "name": "Recycled Polyester (rPET)",
      "fiberType": "recycled",
      "source": "PET bottles, ocean plastic re-spun into fiber",
      "co2KgPerKgFiber": 3.8,
      "co2Conventional": 9.52,
      "co2ReductionPct": 60,
      "energySavingPct": 59,
      "biodegradable": false,
      "decarbScore": 82,
      "compatibleWovenStructures": [
        "plain-weave",
        "twill-weave",
        "microfiber-technical"
      ],
      "compatibleKnittedStructures": [
        "single-jersey",
        "fleece-terry",
        "warp-knits",
        "performance-knits"
      ],
      "pricePerMeter": "₹80-280",
      "indiaAvailability": "high",
      "indiaHubs": [
        "Surat",
        "Panipat"
      ],
      "certifications": [
        "GRS",
        "RCS",
        "bluesign"
      ]
    },
    {
      "id": "tencel-lyocell",
      "name": "TENCEL™ Lyocell",
      "fiberType": "cellulosic",
      "source": "FSC eucalyptus wood; closed-loop solvent system",
      "co2KgPerKgFiber": 1.5,
      "co2Conventional": 4,
      "co2ReductionPct": 63,
      "waterSavingPct": 95,
      "biodegradable": true,
      "decarbScore": 88,
      "compatibleWovenStructures": [
        "plain-weave",
        "twill-weave",
        "satin-weave"
      ],
      "compatibleKnittedStructures": [
        "single-jersey",
        "rib-knit",
        "interlock-knit"
      ],
      "pricePerMeter": "₹300-900",
      "indiaAvailability": "medium",
      "certifications": [
        "FSC",
        "EU Ecolabel",
        "OEKO-TEX"
      ]
    },
    {
      "id": "hemp",
      "name": "Hemp Fiber",
      "fiberType": "natural",
      "carbonNegative": true,
      "source": "Cannabis sativa bast fiber; no pesticide/irrigation",
      "co2KgPerKgFiber": -0.67,
      "co2Conventional": 5.9,
      "co2ReductionPct": 111,
      "waterSavingPct": 95,
      "biodegradable": true,
      "decarbScore": 95,
      "compatibleWovenStructures": [
        "plain-weave",
        "twill-weave",
        "basket-weave"
      ],
      "compatibleKnittedStructures": [
        "single-jersey",
        "rib-knit"
      ],
      "pricePerMeter": "₹250-700",
      "indiaAvailability": "growing",
      "indiaHubs": [
        "Uttarakhand",
        "Himachal Pradesh"
      ],
      "certifications": [
        "GOTS",
        "OCS"
      ]
    },
    {
      "id": "recycled-cotton",
      "name": "Recycled Cotton",
      "fiberType": "recycled",
      "source": "Post-consumer + post-industrial cotton waste; shredded + re-spun",
      "co2KgPerKgFiber": 0.6,
      "co2Conventional": 5.9,
      "co2ReductionPct": 90,
      "waterSavingPct": 90,
      "biodegradable": true,
      "decarbScore": 91,
      "compatibleWovenStructures": [
        "plain-weave",
        "twill-weave",
        "velvet-pile"
      ],
      "compatibleKnittedStructures": [
        "single-jersey",
        "fleece-terry",
        "rib-knit"
      ],
      "pricePerMeter": "₹60-200",
      "indiaAvailability": "high",
      "indiaHubs": [
        "Panipat (global leader — 1.5M tonnes/year)"
      ],
      "certifications": [
        "GRS",
        "RCS",
        "OEKO-TEX"
      ]
    },
    {
      "id": "recycled-wool",
      "name": "Recycled Wool (Shoddy)",
      "fiberType": "recycled",
      "source": "Sorted wool garments → garnetting → re-spun yarn",
      "co2KgPerKgFiber": 3,
      "co2Conventional": 27,
      "co2ReductionPct": 89,
      "waterSavingPct": 90,
      "biodegradable": true,
      "decarbScore": 90,
      "compatibleWovenStructures": [
        "twill-weave",
        "herringbone",
        "double-cloth"
      ],
      "compatibleKnittedStructures": [
        "rib-knit",
        "fleece-terry"
      ],
      "pricePerMeter": "₹400-1500",
      "indiaAvailability": "high",
      "indiaHubs": [
        "Panipat",
        "Ludhiana"
      ],
      "certifications": [
        "GRS",
        "RCS"
      ]
    },
    {
      "id": "linen",
      "name": "Linen / Flax",
      "fiberType": "natural",
      "source": "Linum usitatissimum bast fiber; no irrigation in European climate",
      "co2KgPerKgFiber": 0.9,
      "co2Conventional": 5.9,
      "co2ReductionPct": 85,
      "biodegradable": true,
      "decarbScore": 80,
      "compatibleWovenStructures": [
        "plain-weave",
        "twill-weave",
        "yarn-dyed-wovens"
      ],
      "compatibleKnittedStructures": [
        "single-jersey",
        "rib-knit"
      ],
      "pricePerMeter": "₹200-700",
      "indiaAvailability": "high",
      "certifications": [
        "European Flax",
        "MASTERS OF LINEN",
        "GOTS"
      ]
    },
    {
      "id": "banana-fiber",
      "name": "Banana Fiber",
      "fiberType": "biobased",
      "source": "Pseudo-stem of banana plant after fruit harvest; zero additional land/water",
      "co2KgPerKgFiber": 1.2,
      "co2Conventional": 5.9,
      "co2ReductionPct": 80,
      "biodegradable": true,
      "decarbScore": 88,
      "compatibleWovenStructures": [
        "plain-weave",
        "twill-weave"
      ],
      "compatibleKnittedStructures": [
        "single-jersey"
      ],
      "pricePerMeter": "₹150-1000",
      "indiaAvailability": "high",
      "indiaHubs": [
        "Tamil Nadu (Kela silk)",
        "Karnataka",
        "Kerala"
      ],
      "certifications": [
        "Handloom Mark India"
      ]
    },
    {
      "id": "jute-ramie",
      "name": "Jute / Ramie",
      "fiberType": "natural",
      "source": "Jute: WB/Bihar bast fiber. Ramie: degummed Chinese nettle. Both natural, no pesticide.",
      "co2KgPerKgFiber": 0.45,
      "co2Conventional": 5.9,
      "co2ReductionPct": 92,
      "biodegradable": true,
      "decarbScore": 89,
      "compatibleWovenStructures": [
        "plain-weave",
        "twill-weave"
      ],
      "compatibleKnittedStructures": [
        "rib-knit"
      ],
      "pricePerMeter": "₹40-400",
      "indiaAvailability": "very-high",
      "indiaHubs": [
        "West Bengal",
        "Bihar",
        "Assam"
      ],
      "certifications": [
        "Jute Mark India",
        "GOTS"
      ]
    }
  ],
  "yarnTypes": [
    {
      "id": "ring-spun",
      "name": "Ring Spun",
      "description": "Traditional spinning; fibers twisted continuously; strong, soft, fine yarn. Premium quality.",
      "properties": {
        "strength": "High",
        "softness": "High",
        "hairiness": "Low",
        "cost": "Higher"
      },
      "countRange": "10s-200s Ne",
      "suitableFor": [
        "Premium T-shirts",
        "Shirting",
        "Knitwear",
        "Denims"
      ],
      "compatibleStructures": [
        "plain-weave",
        "twill-weave",
        "single-jersey",
        "rib-knit"
      ],
      "indiaSourcing": [
        "Coimbatore",
        "Tirupur",
        "Ahmedabad"
      ],
      "priceVsOE": "15-25% premium over OE"
    },
    {
      "id": "oe-rotor",
      "name": "Open-End (OE) / Rotor Spun",
      "description": "High-speed rotor spinning; bulkier, more even, less strong than ring spun. Cost-effective for heavier fabrics.",
      "properties": {
        "strength": "Medium",
        "softness": "Medium",
        "hairiness": "High",
        "cost": "Lower"
      },
      "countRange": "6s-30s Ne",
      "suitableFor": [
        "Denim",
        "Terry towels",
        "Fleece",
        "Budget T-shirts",
        "Workwear"
      ],
      "compatibleStructures": [
        "twill-weave",
        "terry-weave",
        "fleece-terry"
      ],
      "indiaSourcing": [
        "Coimbatore",
        "Ahmedabad",
        "Surat"
      ],
      "priceVsRing": "15-25% cheaper than ring spun"
    },
    {
      "id": "compact-spun",
      "name": "Compact Spun",
      "description": "Modified ring spinning with fiber condensing zone; minimal hairiness, maximum strength and luster.",
      "properties": {
        "strength": "Very High",
        "softness": "Very High",
        "hairiness": "Very Low",
        "cost": "Premium"
      },
      "countRange": "30s-120s Ne",
      "suitableFor": [
        "Luxury shirting",
        "Premium knitwear",
        "Fine suiting",
        "Luxury bedding"
      ],
      "compatibleStructures": [
        "plain-weave",
        "satin-weave",
        "single-jersey",
        "interlock-knit"
      ],
      "priceVsRing": "20-30% premium"
    },
    {
      "id": "core-spun",
      "name": "Core Spun (Stretch)",
      "description": "Elastane/polyester core wrapped with natural fiber. Provides stretch and recovery in natural-look fabric.",
      "properties": {
        "stretch": "20-40%",
        "recovery": "Excellent",
        "softness": "Medium-High"
      },
      "countRange": "20s-60s Ne + 20-40D elastane",
      "suitableFor": [
        "Stretch denim",
        "Stretch chino",
        "Stretch jersey",
        "Sportswear"
      ],
      "compatibleStructures": [
        "twill-weave",
        "plain-weave",
        "single-jersey",
        "rib-knit"
      ],
      "elastaneContent": [
        "2%",
        "3%",
        "4%",
        "5%",
        "8%",
        "10%"
      ]
    },
    {
      "id": "slub-yarn",
      "name": "Slub Yarn",
      "description": "Intentional thick-thin variation in yarn count; creates textured, irregular surface effect.",
      "properties": {
        "texture": "Irregular",
        "naturalLook": "High",
        "softness": "Medium"
      },
      "suitableFor": [
        "Fashion T-shirts",
        "Denim",
        "Casualwear tops",
        "Linen-look fabrics"
      ],
      "compatibleStructures": [
        "plain-weave",
        "single-jersey",
        "twill-weave"
      ],
      "types": [
        "Regular slub",
        "Multi-count slub",
        "Bi-twist slub",
        "Siro slub"
      ]
    },
    {
      "id": "melange-yarn",
      "name": "Melange / Marl Yarn",
      "description": "Fibers dyed different colors before spinning; heather/speckled appearance in fabric.",
      "properties": {
        "appearance": "Heathered/mottled",
        "colorDepth": "Subtle",
        "consistency": "Uniform structure"
      },
      "suitableFor": [
        "Heather T-shirts",
        "Sweatshirts",
        "Knitwear",
        "Activewear"
      ],
      "compatibleStructures": [
        "single-jersey",
        "rib-knit",
        "fleece-terry"
      ],
      "types": [
        "Grey melange (white + grey fibers)",
        "Color melange (2+ colored fibers)"
      ]
    },
    {
      "id": "air-jet-spun",
      "name": "Air-Jet Spun (MJS / MVS)",
      "description": "Air vortex twisting; very even, low hairiness, fast production. Murata Vortex Spinning (MVS) is advanced version.",
      "properties": {
        "strength": "Medium-High",
        "softness": "Medium",
        "hairiness": "Very Low",
        "cost": "Competitive"
      },
      "countRange": "20s-80s Ne",
      "suitableFor": [
        "Shirting",
        "Sportswear",
        "Technical fabric"
      ],
      "compatibleStructures": [
        "plain-weave",
        "single-jersey"
      ]
    },
    {
      "id": "filament-yarn",
      "name": "Filament Yarn (Continuous)",
      "description": "Continuous filament without spinning; smooth, lustrous. Polyester/nylon/silk filament. Denier-based (not Ne).",
      "properties": {
        "strength": "High",
        "luster": "High",
        "hairiness": "None",
        "cost": "Varies"
      },
      "countSystem": "Denier (D) or dtex",
      "commonDenier": [
        "30D",
        "40D",
        "50D",
        "70D",
        "75D",
        "100D",
        "150D",
        "300D"
      ],
      "suitableFor": [
        "Linings",
        "Sarees",
        "Georgette",
        "Chiffon",
        "Sportswear",
        "Warp knit fabrics"
      ],
      "types": [
        "Fully drawn yarn (FDY)",
        "Partially oriented yarn (POY)",
        "Draw-textured yarn (DTY)",
        "Air-textured yarn (ATY)"
      ]
    }
  ],
  "finishingProcesses": [
    {
      "id": "sanforization",
      "name": "Sanforization (Pre-Shrinking)",
      "category": "Mechanical",
      "icon": "🔄",
      "simpleDefinition": "Shrinks the fabric in the factory BEFORE you make it into a garment — so your customer's garment doesn't shrink after first wash.",
      "whatItAddsToFabric": "Dimensional stability; residual shrinkage reduced to < 1%",
      "howItWorks": "Fabric is fed between a rubber blanket and heated cylinder under moisture and pressure. The rubber blanket mechanically compresses the fabric — pre-doing what washing would later do.",
      "machineUsed": "Sanforizing machine (Compax or equivalent)",
      "appliesTo": [
        "Woven cotton",
        "Cotton/poly blends",
        "Denim",
        "Shirting",
        "Drill"
      ],
      "doesNotApplyTo": [
        "Polyester (doesn't shrink)",
        "Knits (sanforizng can distort loop structure)"
      ],
      "testToVerify": "AATCC 135 / ISO 6330 — should show < 1% shrinkage after 3 wash cycles",
      "priceImpact": "₹2–5/m additional cost",
      "requiredBy": [
        "Most export buyers (M&S, H&M, Gap)",
        "BIS standards for shirting IS:7057"
      ],
      "careLabel": "Usually allows 'Machine Wash' without fear of shrinkage"
    },
    {
      "id": "mercerization",
      "name": "Mercerization",
      "category": "Chemical",
      "icon": "✨",
      "simpleDefinition": "Treats cotton with caustic soda (NaOH) to make it shinier, stronger, and absorb dye better — like upgrading plain cotton to a premium version.",
      "whatItAddsToFabric": "Permanent luster (silk-like sheen on cotton); better dye uptake (deeper colors, less dye needed); 15–20% stronger; softer hand",
      "howItWorks": "Cotton fabric/yarn treated with 18–25% NaOH solution under tension. Swells cotton fiber from round cross-section to oval — this optical change creates luster. Then neutralized and washed.",
      "machineUsed": "Mercerizing machine (chain or chainless) or yarn mercerizing machine",
      "appliesTo": [
        "100% Cotton woven",
        "Cotton yarns (yarn mercerization)",
        "Cotton knit (fabric mercerization)"
      ],
      "doesNotApplyTo": [
        "Polyester",
        "Wool",
        "Silk"
      ],
      "testToVerify": "Barium Activity Number (BAN > 135 = mercerized; >150 = well mercerized)",
      "priceImpact": "₹5–15/m",
      "visualCheck": "Mercerized cotton has visible luster; holds deep colors better",
      "requiredBy": [
        "Luxury shirting (Canclini, Thomas Mason level)",
        "Sewing thread",
        "Premium poplin"
      ],
      "careLabel": "No special care needed; luster is permanent"
    },
    {
      "id": "calendering",
      "name": "Calendering",
      "category": "Mechanical",
      "icon": "🪞",
      "simpleDefinition": "Heavy heated rollers press the fabric to make it smooth, flat, and glossy — like ironing at industrial scale.",
      "whatItAddsToFabric": "Smooth, flat, glossy surface; increased luster; reduces fabric thickness slightly; can emboss patterns",
      "howItWorks": "Fabric passes through 2–7 heavy rollers (bowls) under high pressure, some heated. Different roller types create different effects.",
      "types": [
        {
          "name": "Chasing Calender",
          "effect": "Smooth flat surface, slight luster"
        },
        {
          "name": "Swissing Calender",
          "effect": "High gloss, compact fabric"
        },
        {
          "name": "Embossing Calender",
          "effect": "Relief pattern pressed into fabric (waffle, diamond, floral)"
        },
        {
          "name": "Schreiner Calender",
          "effect": "Very fine diagonal lines → silk-like luster; used on sateen/satin"
        },
        {
          "name": "Moiré Calender",
          "effect": "Wavy water-mark pattern — decorative"
        }
      ],
      "appliesTo": [
        "Woven cotton",
        "Polyester",
        "Sateen",
        "Voile",
        "Cambric",
        "Poplin"
      ],
      "durability": "Temporary on untreated fabric (washes out); permanent if resin-treated before calendering",
      "priceImpact": "₹3–8/m",
      "requiredBy": [
        "Cambric",
        "Fine shirting",
        "Sateen bedding",
        "Organza"
      ]
    },
    {
      "id": "brushing-napping",
      "name": "Brushing / Napping / Raising",
      "category": "Mechanical",
      "icon": "🧸",
      "simpleDefinition": "Wire teeth on rotating rolls grab and pull short fibers out of the fabric surface — creating a soft, fuzzy, warm feel.",
      "whatItAddsToFabric": "Soft, warm, fibrous surface (fleece-like); improved insulation; hides weave structure; creates flannel effect",
      "howItWorks": "Fabric passes over rotating rollers covered with fine wire clothing (tiny bent metal teeth). Teeth catch short fiber ends and pull them to surface. Can raise both sides (blankets) or one side (flannel).",
      "types": [
        {
          "name": "Single-sided raising",
          "result": "One face brushed — flannel shirts"
        },
        {
          "name": "Double-sided raising",
          "result": "Both faces brushed — blankets, coating"
        },
        {
          "name": "Suede raising",
          "result": "Very fine raising on knit — suede-like hand"
        }
      ],
      "appliesTo": [
        "Woven flannel",
        "Woven wool",
        "Cotton shirting (flannel effect)",
        "Fleece knits (backs)"
      ],
      "doesNotApplyTo": [
        "Tight weave without enough surface fibers",
        "Most synthetics (pill badly)"
      ],
      "testToVerify": "Martindale pilling test — raised fabrics tend to pill more; balance is key",
      "priceImpact": "₹5–12/m",
      "careLabel": "Gentle wash; brush lightly to restore nap if flattened"
    },
    {
      "id": "singeing",
      "name": "Singeing",
      "category": "Mechanical",
      "icon": "🔥",
      "simpleDefinition": "Burns off the tiny fiber hairs standing up from fabric surface — making it smooth and clean-looking (like shaving the fabric).",
      "whatItAddsToFabric": "Clean, smooth surface; reduces pilling tendency; better for printing (ink sits on clean surface); better for dyeing (evenness)",
      "howItWorks": "Fabric passes over a gas flame or heated copper plates at high speed (100–200m/min). Only the protruding fibers burn; base fabric not damaged. Immediately quenched with water or steam.",
      "machineUsed": "Gas singeing machine or plate singeing machine",
      "appliesTo": [
        "Cotton woven fabric before dyeing/printing",
        "Polyester/Cotton blends",
        "Fine shirting"
      ],
      "doesNotApplyTo": [
        "Wool (fiber burnt too easily)",
        "Fabric with fluffy surface by design (fleece, flannel)"
      ],
      "testToVerify": "Visual under magnification; smooth = good singeing",
      "priceImpact": "₹1–3/m (low cost, high benefit)",
      "sequence": "Always FIRST step in finishing — before desizing, scouring, bleaching, dyeing"
    },
    {
      "id": "desizing",
      "name": "Desizing",
      "category": "Chemical",
      "icon": "🫧",
      "simpleDefinition": "Removes the starch/size applied to warp yarns during weaving — makes the grey fabric soft and ready for dyeing.",
      "whatItAddsToFabric": "Removes stiffness from weaving size; fabric can now absorb water/dye properly",
      "howItWorks": "Warp yarns are coated with starch or PVA size before weaving to prevent breakage. This size must be removed first. Methods: enzyme desizing (starch), hot water, alkali, or acid depending on size type.",
      "methods": [
        {
          "name": "Enzyme desizing",
          "agent": "Amylase enzyme",
          "bestFor": "Starch size (most cotton)"
        },
        {
          "name": "Hot water",
          "temp": "90°C",
          "bestFor": "PVA/CMC size (polyester)"
        },
        {
          "name": "Acid desizing",
          "agent": "Dilute H₂SO₄",
          "bestFor": "Old method; less common now"
        }
      ],
      "appliesTo": [
        "All grey woven fabrics before dyeing/printing"
      ],
      "testToVerify": "Tegewa test (iodine test) — yellow = desized; blue = starch still present",
      "sequence": "Step 2 after singeing; before scouring"
    },
    {
      "id": "scouring",
      "name": "Scouring (Washing)",
      "category": "Chemical",
      "icon": "🧼",
      "simpleDefinition": "Deep-cleans the grey fabric of all natural waxes, oils, dirt, and impurities so it can absorb dye evenly.",
      "whatItAddsToFabric": "Hydrophilicity (water absorbency); clean base for even dyeing; removes seed fragments from cotton",
      "howItWorks": "Fabric treated with caustic soda (NaOH) + wetting agent + detergent at 90–100°C. Saponifies waxes and oils; removes non-cellulosic matter.",
      "appliesTo": [
        "All cotton wovens and knits",
        "Wool (gentle scouring)",
        "Linen"
      ],
      "testToVerify": "Absorbency test — drop of water on scoured fabric absorbed in < 1 second",
      "sequence": "Step 3 — after desizing; before bleaching"
    },
    {
      "id": "bleaching",
      "name": "Bleaching",
      "category": "Chemical",
      "icon": "⬜",
      "simpleDefinition": "Makes fabric white (or optical white) by destroying natural color in the fiber — essential base for dyeing bright/pale colors or for white end product.",
      "whatItAddsToFabric": "Whiteness; removes natural yellowish color from cotton/linen; prepares surface for even dyeing especially for light colors",
      "howItWorks": "Oxidative agents destroy chromophore groups in natural fiber color.",
      "bleachingAgents": [
        {
          "agent": "Hydrogen Peroxide (H₂O₂)",
          "use": "Most common — safe, mild; used for cotton, linen, synthetics",
          "temp": "80–90°C"
        },
        {
          "agent": "Sodium Hypochlorite (NaOCl)",
          "use": "Older method; lower cost; harder on fiber; can leave chlorine traces",
          "concern": "Residual chlorine damages fiber and is skin irritant"
        },
        {
          "agent": "Sodium Chlorite (NaClO₂)",
          "use": "Best for polyester/cotton blends; more expensive"
        }
      ],
      "whiteness": "Degree of bleaching measured by Whiteness Index (WI) — higher WI = whiter fabric",
      "opticalBrighteners": "Fluorescent whitening agents (FWAs) added after bleaching to increase brightness further",
      "testToVerify": "Whiteness Index (Datacolor / Gretag spectrophotometer)",
      "requiredBy": [
        "White shirts",
        "White T-shirts",
        "Base for reactive dyes (especially pastels)"
      ],
      "sequence": "Step 4 — after scouring; before dyeing"
    },
    {
      "id": "bio-polishing",
      "name": "Bio-Polishing (Cellulase Enzyme)",
      "category": "Chemical — Enzymatic",
      "icon": "🧬",
      "simpleDefinition": "Enzymes eat away the tiny fiber hairs on fabric surface, making it smoother, softer, and pill-resistant — without damaging the base fabric.",
      "whatItAddsToFabric": "Reduces pilling; smoother, cleaner surface; brighter color appearance; softer hand; reduces fuzziness",
      "howItWorks": "Cellulase enzymes (derived from fungi/bacteria) selectively hydrolyze protruding cellulose fiber ends. These are then washed away. Core fabric fibers not affected (short exposure time controlled).",
      "parameters": {
        "enzyme": "Cellulase (acid or neutral pH type)",
        "pH": "4.5–7 depending on enzyme type",
        "temperature": "50–60°C",
        "time": "30–60 minutes",
        "machine": "Jet or overflow dyeing machine"
      },
      "appliesTo": [
        "Cotton knit (jersey, fleece)",
        "Cotton denim (enzyme wash)",
        "Cotton woven shirting"
      ],
      "doesNotApplyTo": [
        "Polyester",
        "Nylon",
        "Wool"
      ],
      "testToVerify": "Martindale pilling test (before + after); weight loss (should be 2–5% max; over 5% = over-treatment)",
      "priceImpact": "₹8–20/m",
      "usedOn": [
        "Denim enzyme stone wash",
        "Anti-pilling jersey",
        "Soft-feel cotton shirting"
      ]
    },
    {
      "id": "easy-care-wrinkle-free",
      "name": "Easy Care / Anti-Wrinkle / Wrinkle-Free Finish",
      "category": "Chemical — Functional",
      "icon": "👔",
      "simpleDefinition": "Treats cotton fabric with resins that make it spring back to smooth after washing — so you can wear shirts without ironing.",
      "whatItAddsToFabric": "Wrinkle resistance; dimensional stability (less shrinkage); smooth appearance after washing; requires minimal ironing",
      "howItWorks": "Crosslinking resins (most commonly DMDHEU) are applied by padding, then cured at 150–170°C. They form covalent bonds between cellulose chains, limiting movement and holding fabric shape.",
      "grades": [
        {
          "grade": "Wrinkle Resistant (WR)",
          "requirement": "AATCC 128 smooth appearance rating 3.0+ after 5 washes"
        },
        {
          "grade": "Easy Care (EC)",
          "requirement": "Rating 3.5+ after laundering"
        },
        {
          "grade": "Wrinkle-Free (WF)",
          "requirement": "Rating 4.0+ — no ironing needed"
        }
      ],
      "chemicalsUsed": [
        {
          "name": "DMDHEU",
          "note": "Most common; releases small amount of formaldehyde — must meet OEKO-TEX limit < 75ppm skin contact"
        },
        {
          "name": "Low-formaldehyde DMDHEU",
          "note": "Improved version; < 20ppm"
        },
        {
          "name": "Non-formaldehyde (glyoxal-based)",
          "note": "Best for OEKO-TEX Class I (baby) but slightly lower performance"
        }
      ],
      "tradeoffs": "Slight reduction in tensile + tear strength; requires formaldehyde monitoring",
      "testToVerify": "AATCC 124 Appearance After Laundering (1–5 scale; 5 = perfect smooth)",
      "appliesTo": [
        "Cotton shirting",
        "Cotton/poly blended trousers",
        "School uniform fabric"
      ],
      "priceImpact": "₹10–25/m",
      "careLabel": "Tumble dry / remove promptly / minimal or no iron needed"
    },
    {
      "id": "dwr-water-repellent",
      "name": "DWR — Durable Water Repellent Finish",
      "category": "Chemical — Functional",
      "icon": "💧",
      "simpleDefinition": "Coats each fiber with a hydrophobic layer — so water beads up and rolls off instead of soaking in, but fabric stays breathable (unlike a waterproof coating).",
      "whatItAddsToFabric": "Water beading / repellency; resistance to rain; keeps outer fabric dry so insulation stays effective; fabric remains breathable",
      "criticalDistinction": "DWR = water REPELLENT (beads off, breathable). Waterproof membrane (PU/PTFE) = water PROOF (blocks all water, less breathable). Most technical jackets have BOTH.",
      "howItWorks": "Applied by padding or spray; cured at 150–170°C. Fluorocarbon or non-fluorocarbon polymer aligns hydrophobic groups outward, creating low surface energy surface.",
      "types": [
        {
          "name": "C8 Fluorocarbon (PFOA-based)",
          "performance": "Best repellency and durability",
          "concern": "PFOA banned in EU/US from 2023 — persistent environmental pollutant (forever chemical)",
          "status": "PHASED OUT"
        },
        {
          "name": "C6 Fluorocarbon",
          "performance": "Good repellency",
          "concern": "Still contains fluorine; lower environmental impact than C8 but still under scrutiny",
          "status": "Limited use; restricted in some markets"
        },
        {
          "name": "C0 Non-Fluorocarbon (PFC-free)",
          "performance": "Moderate repellency; less durable to washing",
          "concern": "No PFAS content — most sustainable option; required by many brands now",
          "status": "Industry standard for eco-conscious brands; improving technology",
          "brands": [
            "Nikwax",
            "Rudolf NFCA",
            "Archroma EarthColors DWR"
          ]
        },
        {
          "name": "Wax-based DWR",
          "performance": "Good initial; can re-apply (re-waxing)",
          "use": "Waxed canvas, oilskin, heritage outdoor gear",
          "status": "Traditional, sustainable, durable with maintenance"
        }
      ],
      "testToVerify": "AATCC 22 Spray Test (rating 0–100) — before washing and after 10/20 wash cycles",
      "durability": "C8: 50+ washes; C6: 20–30 washes; C0: 10–20 washes; improving",
      "appliesTo": [
        "Outdoor jackets",
        "Rainwear",
        "Softshell",
        "Trekking trousers",
        "Technical sportswear"
      ],
      "priceImpact": "₹15–40/m (C0 at higher end)",
      "careLabel": "Tumble dry on low after washing to reactivate DWR; re-treat with Nikwax if repellency lost"
    },
    {
      "id": "antimicrobial",
      "name": "Antimicrobial / Anti-Odor Finish",
      "category": "Chemical — Functional",
      "icon": "🦠",
      "simpleDefinition": "Prevents bacteria and fungi from growing on the fabric — so it doesn't smell even after hard use between washes.",
      "whatItAddsToFabric": "Odor control; prevents bacterial growth; hygiene; extended fresh wear between washes; medical/healthcare applications",
      "howItWorks": "Antimicrobial agents bind to fiber surface or are absorbed. Kill bacteria by disrupting cell membrane or preventing reproduction. Some release active agent; some are contact-kill.",
      "agentTypes": [
        {
          "agent": "Silver-based (ionic silver or silver nanoparticles)",
          "brands": [
            "HeiQ Silver",
            "Sanitized Silver",
            "Silpure"
          ],
          "effectiveness": "Broad-spectrum bacteria and fungi",
          "durability": "50–100 wash cycles",
          "concern": "Silver nanoparticles may wash out — environmental concern; OEKO-TEX compliant formulations available"
        },
        {
          "agent": "Zinc Pyrithione",
          "brands": [
            "Archroma",
            "Rudolf"
          ],
          "effectiveness": "Good anti-fungal, anti-bacterial",
          "durability": "30–50 washes",
          "concern": "Low environmental concern"
        },
        {
          "agent": "Chitosan (from shrimp/crab shell)",
          "brands": [
            "Various biopolymer suppliers"
          ],
          "effectiveness": "Moderate; natural origin",
          "durability": "20–30 washes",
          "concern": "Non-vegan; biodegradable"
        },
        {
          "agent": "QAC (Quaternary Ammonium Compounds)",
          "examples": [
            "3-Trimethoxysilylpropyldimethyloctadecyl ammonium chloride"
          ],
          "effectiveness": "Good bacteria kill",
          "durability": "50+ washes (covalently bonded)",
          "concern": "Some QACs have aquatic toxicity"
        },
        {
          "agent": "HeiQ Viroblock (broad spectrum incl. viruses)",
          "effectiveness": "Bacteria + viruses + fungi",
          "durability": "50 wash cycles",
          "certification": "ISO 18184 for antiviral textiles"
        }
      ],
      "testToVerify": [
        "AATCC 100 — Antibacterial finish evaluation (% reduction of S.aureus and K.pneumoniae after 24hr)",
        "ISO 20743 — Determination of antibacterial activity",
        "ISO 18184 — Antiviral activity",
        "AATCC 30 — Antifungal assessment"
      ],
      "requiredBy": [
        "Sports/activewear brands",
        "Medical/healthcare textiles",
        "Military",
        "PPE",
        "School uniforms"
      ],
      "certifications": [
        "OEKO-TEX (antimicrobial agent must be on approved list)",
        "bluesign"
      ],
      "appliesTo": [
        "All fiber types — applied after dyeing/printing",
        "Sportswear",
        "Underwear",
        "Socks",
        "Hospital textiles"
      ],
      "priceImpact": "₹15–50/m depending on agent"
    },
    {
      "id": "uv-protection",
      "name": "UV Protection Finish",
      "category": "Chemical — Functional",
      "icon": "☀️",
      "simpleDefinition": "Blocks harmful UV rays from passing through the fabric — protecting skin underneath from sunburn and long-term UV damage.",
      "whatItAddsToFabric": "UPF (Ultraviolet Protection Factor) rating; blocks UVA and UVB; protects wearer from UV radiation",
      "upfScale": {
        "UPF 15–24": "Good protection — 93–96% UV blocked",
        "UPF 25–39": "Very Good protection — 96–97.5% UV blocked",
        "UPF 40–50+": "Excellent protection — 97.5–98%+ UV blocked"
      },
      "howItWorks": "UV absorbers (organic or inorganic) applied to fabric surface absorb UV energy and convert it to harmless heat. Titanium dioxide or Zinc oxide are common inorganic options; organic UV stabilizers like benzophenones are chemical alternatives.",
      "naturalUPF": {
        "polyester": "Naturally good UV resistance (40-50+ when dense)",
        "cotton": "Moderate (UPF 5–15 untreated — poor for sun protection)",
        "nylon": "Good (UPF 30-40)",
        "linen": "Moderate (UPF 15–20)"
      },
      "testToVerify": "AS/NZS 4399 or AATCC 183 — spectrophotometric measurement of UV transmission",
      "appliesTo": [
        "Swimwear",
        "Outdoor activewear",
        "Children's UV-protective clothing",
        "Rashguards"
      ],
      "priceImpact": "₹8–20/m",
      "careLabel": "UV protection may decrease after 40+ wash cycles if finish type; dense fabric retains naturally"
    },
    {
      "id": "flame-retardant",
      "name": "Flame Retardant (FR) Finish",
      "category": "Chemical — Functional",
      "icon": "🧯",
      "simpleDefinition": "Prevents fabric from catching fire easily, and self-extinguishes if it does catch — required for workwear, children's nightwear, and upholstery.",
      "whatItAddsToFabric": "Resistance to ignition; self-extinguishing behavior; reduced flame spread rate; may meet mandatory flammability standards",
      "howItWorks": "FR agents interfere with combustion chemistry — they either: (a) form a char layer blocking oxygen, (b) release water or non-flammable gas, or (c) interfere with free radical combustion chain.",
      "types": [
        {
          "name": "Proban (Cotton — durable)",
          "chemistry": "Tetrakis hydroxymethyl phosphonium (THPC)",
          "durability": "50+ industrial washes",
          "appliesTo": "Cotton fabric",
          "certifications": [
            "EN ISO 11611",
            "EN ISO 11612",
            "NFPA 2112"
          ]
        },
        {
          "name": "Pyrovatex CP (Cotton — durable)",
          "chemistry": "Phosphoramide/phosphonate ester",
          "durability": "50+ industrial washes",
          "appliesTo": "Cotton, cotton/nylon"
        },
        {
          "name": "Inherently FR Fiber (Nomex, Modacrylic, Basofil)",
          "note": "FR property is in the fiber itself — not a finish, never washes out",
          "appliesTo": "Nomex aramid (DuPont), Modacrylic blends",
          "bestFor": "Industrial protective clothing, firefighter gear"
        },
        {
          "name": "Non-durable FR finish",
          "agent": "Ammonium phosphate, boric acid",
          "durability": "1–5 washes only",
          "use": "Single-use applications: stage curtains, event tents"
        }
      ],
      "testStandards": [
        {
          "standard": "CPSC 16 CFR 1610",
          "applicability": "All US apparel — must pass Class 1 or 2"
        },
        {
          "standard": "CPSC 16 CFR 1615/1616",
          "applicability": "US children's sleepwear — strict"
        },
        {
          "standard": "EN ISO 11611 Class 1/2",
          "applicability": "Welding protective clothing (EU)"
        },
        {
          "standard": "EN ISO 11612 A1-F1",
          "applicability": "Heat and flame protective clothing (EU)"
        },
        {
          "standard": "NFPA 2112",
          "applicability": "Flash fire protective clothing (US oil/gas)"
        },
        {
          "standard": "BS 5852",
          "applicability": "Upholstery flammability (UK)"
        }
      ],
      "appliesTo": [
        "Industrial workwear",
        "Children's sleepwear",
        "Upholstery",
        "Hotel drapery",
        "Aircraft interiors"
      ],
      "priceImpact": "₹25–80/m",
      "concern": "Some halogen-based FR agents (bromine/chlorine) are restricted in EU — ensure compliance"
    },
    {
      "id": "anti-static",
      "name": "Anti-Static Finish",
      "category": "Chemical — Functional",
      "icon": "⚡",
      "simpleDefinition": "Prevents static electricity from building up on synthetic fabric — stops fabric from clinging to the body and reduces spark risk in hazardous environments.",
      "whatItAddsToFabric": "Dissipates static charge; prevents cling; reduces dust attraction; mandatory for cleanroom and explosive-atmosphere workwear",
      "howItWorks": "Hygroscopic (moisture-attracting) finish or conductive compounds applied. Moisture conducts away static charge. Or conductive carbon/metal yarns woven in for permanent effect.",
      "types": [
        {
          "name": "Chemical anti-static finish",
          "durability": "5–15 washes",
          "use": "Polyester lining, petticoats"
        },
        {
          "name": "Conductive yarn (carbon/metal interwoven)",
          "durability": "Permanent",
          "use": "ESD workwear, cleanroom, explosion-proof"
        }
      ],
      "testToVerify": "AATCC 76 — Electrical Surface Resistivity; EN 1149 for protective clothing",
      "appliesTo": [
        "Polyester fabrics",
        "Acrylic",
        "Nylon",
        "ESD workwear"
      ],
      "priceImpact": "₹5–30/m"
    },
    {
      "id": "softening",
      "name": "Softening Finish",
      "category": "Chemical",
      "icon": "🤲",
      "simpleDefinition": "Applied at end of finishing to make the fabric feel softer and smoother against skin — the final 'hand feel' adjustment step.",
      "whatItAddsToFabric": "Soft, smooth hand feel; reduced scratchy feeling; improved drape; better wearer comfort",
      "howItWorks": "Softeners coat fiber surface with lubricating molecules, reducing friction between fibers and against skin.",
      "types": [
        {
          "name": "Silicone softener",
          "result": "Smoothest handle; slight sheen; widely used",
          "types": [
            "Amino silicone (most soft)",
            "Non-yellowing silicone for white/light fabric"
          ]
        },
        {
          "name": "Polyethylene wax emulsion",
          "result": "Smooth, waxy feel; low cost",
          "use": "Basic softening"
        },
        {
          "name": "Fatty acid amides",
          "result": "Soft, warm feel; natural origin options"
        },
        {
          "name": "Cationic softener",
          "result": "Classic softener; bonds to fiber surface",
          "concern": "Can affect dye shade slightly; check before use on dark fabrics"
        }
      ],
      "appliesTo": [
        "All fabric types — applied last step before packaging"
      ],
      "testToVerify": "Subjective hand evaluation by expert panel; KES-F fabric evaluation system (objective)",
      "priceImpact": "₹2–8/m",
      "careLabel": "Softness may reduce slightly after many washes; fabric softener in home wash can restore"
    },
    {
      "id": "resin-finish-stiffening",
      "name": "Stiffening / Resin Finish",
      "category": "Chemical",
      "icon": "📐",
      "simpleDefinition": "Makes fabric stiff and crisp (like new dress shirts or formal tablecloths) using starch or synthetic resins.",
      "whatItAddsToFabric": "Crispness; body/stiffness; smooth surface appearance; dimensional stability in use",
      "types": [
        {
          "name": "Starch (temporary)",
          "durability": "Washes out",
          "use": "Traditional laundry starch; denim sizing"
        },
        {
          "name": "Synthetic resin (PVA, acrylic, formaldehyde-based)",
          "durability": "Durable 20–50 washes",
          "use": "Dress shirts, formal shirting"
        },
        {
          "name": "Thermoplastic resin",
          "durability": "Heat-activated",
          "use": "Collar interlining, hat brims"
        }
      ],
      "appliesTo": [
        "Cotton shirting",
        "Poplin",
        "Collar/cuff fabric",
        "Organza",
        "Net fabric"
      ],
      "testToVerify": "Stiffness by Cantilever Test (ASTM D1388) or Handle-O-Meter",
      "priceImpact": "₹3–10/m"
    },
    {
      "id": "heat-setting",
      "name": "Heat Setting",
      "category": "Mechanical — Thermal",
      "icon": "🌡️",
      "simpleDefinition": "Sets the shape and dimensions of synthetic fabric permanently using controlled heat — preventing shrinkage or distortion in use and care.",
      "whatItAddsToFabric": "Dimensional stability (prevents shrinkage in use); shape retention; improved uniformity; relaxes internal stresses from knitting/weaving",
      "howItWorks": "Fabric passed through stenter frame (clip frame holding fabric to exact width) at high temperature for controlled time. Polyester chains rearrange and lock in new stable configuration on cooling.",
      "parameters": {
        "polyester": "180–200°C, 30–60 seconds",
        "nylon": "160–180°C, 20–40 seconds",
        "acrylic": "150–170°C"
      },
      "machineUsed": "Stenter (tenter) frame — fabric held at edges by clips/pins on parallel chains",
      "appliesTo": [
        "Polyester and nylon wovens and knits",
        "Acrylic knits",
        "Before dyeing (pre-setting) and after (post-setting)"
      ],
      "doesNotApplyTo": [
        "Natural fibers — heat setting has no effect on cotton/wool"
      ],
      "testToVerify": "AATCC 135 dimensional stability — should show < 1% change for polyester",
      "sequence": "Pre-setting before dyeing (for knits to reduce curling); Post-setting after dyeing to fix final dimensions"
    },
    {
      "id": "stone-enzyme-wash",
      "name": "Stone Wash / Enzyme Wash / Garment Washing",
      "category": "Mechanical + Chemical",
      "icon": "🪨",
      "simpleDefinition": "Different washing treatments applied to made-up garments (not fabric) to create a faded, worn-in, soft, vintage look — especially on denim.",
      "whatItAddsToFabric": "Vintage/faded appearance; softer hand; pre-worn look; removes stiffness from new fabric",
      "types": [
        {
          "name": "Stone Wash",
          "agent": "Pumice stones in washing machine",
          "effect": "Uneven fading, worn abrasion marks; classic denim look",
          "concern": "High water use; stone dust pollutes wastewater"
        },
        {
          "name": "Enzyme Wash",
          "agent": "Cellulase enzyme",
          "effect": "Softer, cleaner fade than stones; surface fiber removal; less abrasive",
          "eco": "Better than stone wash — less waste"
        },
        {
          "name": "Bleach Wash",
          "agent": "Potassium permanganate or bleach",
          "effect": "Overall lighten; 'used' look on dark denim"
        },
        {
          "name": "Acid Wash / Ice Wash",
          "agent": "Pumice stones soaked in bleach/KMnO4",
          "effect": "Harsh contrast light/dark pattern; 80s/90s aesthetic"
        },
        {
          "name": "Ozone Wash",
          "agent": "Ozone gas in closed chamber",
          "effect": "Fading/bleaching without chemicals; driest process",
          "eco": "Most sustainable wash method — no water needed"
        },
        {
          "name": "Sand Blast / Laser",
          "agent": "Laser etching machine",
          "effect": "Precise fading patterns, whiskers, honeycomb effects on denim",
          "eco": "Laser is safest (silica dust from sand blasting is carcinogenic)"
        }
      ],
      "testToVerify": "Visual assessment; shade consistency across batch; residual KMnO4 (neutralized? check)",
      "appliesTo": [
        "Denim",
        "Canvas",
        "Chambray",
        "Heavy cotton garments"
      ],
      "indiaSourcing": [
        "Ahmedabad washing units (Aravali, Raj Washing)",
        "Bangalore",
        "Ludhiana"
      ]
    },
    {
      "id": "peach-finish-suede",
      "name": "Peach Finish / Suede Finish (Sanding)",
      "category": "Mechanical",
      "icon": "🍑",
      "simpleDefinition": "Sanding the fabric surface with emery paper creates a soft, peachy, velvet-like feel on woven fabric — especially polyester microfiber.",
      "whatItAddsToFabric": "Soft, micro-suede hand feel; matte surface (reduces sheen); drapy quality; luxury appearance on budget polyester",
      "howItWorks": "Fabric passed over rotating emery-paper covered rollers. Surface fibers raised and broken creating short, dense pile on face.",
      "machineUsed": "Emerizing / Sueding machine",
      "appliesTo": [
        "Polyester microfiber woven",
        "Peach skin fabric",
        "Some nylon fabrics"
      ],
      "testToVerify": "Visual; GSM before/after (slight weight loss); hand feel evaluation",
      "priceImpact": "₹5–12/m",
      "usedFor": [
        "Blouses",
        "Dresses",
        "Activewear",
        "Affordable suede-look fabric"
      ]
    },
    {
      "id": "digital-coating-lamination",
      "name": "Coating / Lamination",
      "category": "Chemical + Mechanical",
      "icon": "🛡️",
      "simpleDefinition": "Adds a thin layer of polymer (like PU or TPE) onto or between fabric layers — creating waterproof, windproof, or bonded properties.",
      "whatItAddsToFabric": "Waterproofing; windproofing; barrier properties; structural bonding; controlled stretch",
      "types": [
        {
          "name": "PU Coating",
          "effect": "Water-resistant + windproof; opaque or clear; budget rainwear",
          "Hydrostatic_head": "1000–5000mm (light); 10000mm+ (heavy)"
        },
        {
          "name": "PTFE membrane (Gore-Tex type)",
          "effect": "Fully waterproof + highly breathable; microporous",
          "Hydrostatic_head": "28,000mm+",
          "breathability": "RET < 6"
        },
        {
          "name": "TPU Laminate",
          "effect": "Stretch + waterproof; used for swimwear, sportswear"
        },
        {
          "name": "Bonding / Lamination (2-layer/3-layer)",
          "effect": "Multiple fabrics fused together; structured composite"
        }
      ],
      "testToVerify": "AATCC 127 — Hydrostatic pressure test (measures waterproofing); ISO 11092 — Breathability",
      "appliesTo": [
        "Rainwear",
        "Technical outdoor",
        "Military",
        "Protective workwear"
      ],
      "priceImpact": "₹30–150/m depending on membrane type"
    }
  ],
  "dyeMethods": [
    {
      "id": "reactive-dyes",
      "name": "Reactive Dyes",
      "appliesTo": [
        "Cotton",
        "Viscose/Rayon",
        "Linen",
        "Hemp"
      ],
      "mechanism": "Covalent bond between dye molecule and fiber; permanent colorfastness",
      "colorfastness": {
        "wash": "4-5/5",
        "light": "4-5/8",
        "rubbing": "4-5/5"
      },
      "process": [
        "Exhaust dyeing (jet machine)",
        "Pad-batch (cold pad)",
        "Continuous (pad-steam)"
      ],
      "commonColors": "Bright to dark; good full shade range",
      "environmental": "Significant water usage; salt waste; improving with eco-process options",
      "indiaSourcing": "Standard in all cotton mills; Tirupur, Surat"
    },
    {
      "id": "disperse-dyes",
      "name": "Disperse Dyes",
      "appliesTo": [
        "Polyester",
        "Acetate",
        "Nylon (some)"
      ],
      "mechanism": "Non-ionic dyes penetrate hydrophobic fiber at high temp (130°C)",
      "colorfastness": {
        "wash": "4-5/5",
        "light": "6-7/8",
        "sublimation": "4-5"
      },
      "process": [
        "HT jet dyeing",
        "Thermosol (continuous)",
        "Sublimation transfer printing"
      ],
      "concern": "Heavy metal content in some grades — require OEKO-TEX compliant dyes"
    },
    {
      "id": "vat-dyes",
      "name": "Vat Dyes (incl. Indigo)",
      "appliesTo": [
        "Cotton",
        "Linen"
      ],
      "mechanism": "Insoluble dye reduced to soluble form; reoxidizes inside fiber",
      "colorfastness": {
        "wash": "4-5/5",
        "light": "6-7/8",
        "rubbing": "3-4/5 (indigo fades by design)"
      },
      "specialNotes": "Indigo used exclusively for denim; fade by design is key aesthetic",
      "indigoProcess": [
        "Rope dyeing (rope of warp yarns)",
        "Sheet dyeing",
        "Slasher dyeing"
      ],
      "indiaSourcing": "Ahmedabad (denim), Surat (specialty)"
    },
    {
      "id": "acid-dyes",
      "name": "Acid Dyes",
      "appliesTo": [
        "Wool",
        "Silk",
        "Nylon",
        "Cashmere"
      ],
      "mechanism": "Ionic bond between dye and fiber amino groups in acid bath",
      "colorfastness": {
        "wash": "3-4/5 (varies by class)",
        "light": "4-7/8"
      },
      "types": [
        "Leveling acid dyes",
        "Milling dyes",
        "Supermilling dyes"
      ],
      "indiaSourcing": "Ludhiana (wool), Amritsar, Varanasi (silk)"
    },
    {
      "id": "direct-dyes",
      "name": "Direct Dyes",
      "appliesTo": [
        "Cotton",
        "Viscose",
        "Linen"
      ],
      "mechanism": "Substantive dye; direct affinity for cellulose without mordant",
      "colorfastness": {
        "wash": "2-4/5 (weaker)",
        "light": "3-5/8"
      },
      "notes": "Simple process; lower cost; but lower colorfastness than reactive",
      "commonUse": "Budget fabric, where high wash fastness not critical"
    },
    {
      "id": "natural-dyes",
      "name": "Natural / Plant-based Dyes",
      "appliesTo": [
        "Cotton (with mordant)",
        "Silk",
        "Wool"
      ],
      "sources": [
        "Indigo (plant)",
        "Madder (red)",
        "Turmeric (yellow)",
        "Henna",
        "Pomegranate",
        "Myrobalan"
      ],
      "colorfastness": {
        "wash": "2-4/5",
        "light": "3-5/8",
        "note": "Variable; mordant determines outcome"
      },
      "mordants": [
        "Alum (safest)",
        "Iron",
        "Copper",
        "Tannin"
      ],
      "indiaRelevance": "Block print + natural dye tradition (Jaipur, Bagru, Sanganer); growing eco-fashion demand",
      "certifications": [
        "GOTS (some natural dyes qualify)",
        "Oeko-Tex (verify each mordant)"
      ]
    },
    {
      "id": "yarn-dyed",
      "name": "Yarn Dyeing",
      "appliesTo": [
        "All fiber types — yarn dyed before weaving/knitting"
      ],
      "process": "Package dyeing, hank dyeing, beam dyeing, space dyeing",
      "advantages": [
        "Pattern goes through fabric",
        "Better colorfastness edge-to-edge",
        "Enables checks/stripes/plaids"
      ],
      "commonFabrics": [
        "Gingham",
        "Chambray",
        "Denim (warp-dyed)",
        "Stripe shirting",
        "Oxford cloth"
      ],
      "indiaSourcing": "Coimbatore, Erode (yarn dyeing), Solapur (bedding)"
    },
    {
      "id": "print-digital",
      "name": "Digital Printing",
      "appliesTo": [
        "Polyester (sublimation)",
        "Cotton/silk (reactive inkjet)"
      ],
      "process": "Inkjet heads deposit dye directly; photo-quality imagery; low MOQ",
      "advantages": [
        "Unlimited colors",
        "Photographic detail",
        "No screens",
        "Low MOQ (1m possible)"
      ],
      "limitations": [
        "Slower than rotary",
        "Higher cost per meter at volume"
      ],
      "indiaSourcing": "Surat (largest digital print cluster globally), Jaipur, Mumbai"
    },
    {
      "id": "rotary-screen-print",
      "name": "Rotary Screen Printing",
      "appliesTo": [
        "All woven and knit fabrics"
      ],
      "process": "Cylindrical screens rotate; continuous high-speed printing",
      "colorsPerRun": "6-12 colors typical; up to 20+ on advanced machines",
      "speed": "50-100 m/min",
      "indiaSourcing": "Surat, Jaipur, Mumbai, Balotra"
    }
  ],
  "testingStandards": {
    "colorfastness": [
      {
        "code": "AATCC 61",
        "equivalentISO": "ISO 105-C06",
        "title": "Colorfastness to Laundering — Accelerated",
        "organization": "AATCC",
        "simpleWhat": "Does the color bleed or fade when washed?",
        "whyItMatters": "If color runs in wash, garment stains other clothes or looks faded after 1 wash — buyers reject it",
        "principle": "Fabric is washed under controlled temperature, detergent, and mechanical action. Color change and staining on adjacent white fabric (multifiber) is assessed.",
        "apparatus": [
          "Launder-Ometer (rotating stainless steel canisters in heated water bath)",
          "AATCC Standard Reference Detergent (WOB or 1993)",
          "Stainless steel balls (simulate mechanical action)",
          "Gray Scale for Color Change",
          "Gray Scale for Staining"
        ],
        "specimen": {
          "size": "50mm × 100mm",
          "preparation": "Sewn to AATCC Multifiber Test Fabric (adjacent fabric strip)",
          "conditioning": "No pre-conditioning required"
        },
        "procedure": [
          "Cut specimen 50×100mm; sew to multifiber adjacent fabric",
          "Place in canister with 150ml water + specified detergent",
          "Add steel balls (quantity per test option)",
          "Run Launder-Ometer at specified temperature + time",
          "Options: 1A (38°C, 45min), 2A (49°C, 45min), 3A (71°C, 45min)",
          "Remove, rinse, dry specimen",
          "Evaluate color change vs original using Gray Scale",
          "Evaluate staining on multifiber adjacent fabric using Gray Scale"
        ],
        "evaluation": "Visual comparison using Gray Scale under standard D65 light source",
        "scale": "Gray Scale 1–5 (5 = no change = best; 1 = severe change = fail)",
        "typicalRequirement": {
          "apparel": "Min 3–4 for color change; min 3 for staining",
          "homeTextile": "Min 4 for both"
        },
        "multifiberFabric": "6 fiber strips sewn together: Acetate / Cotton / Nylon / Polyester / Acrylic / Wool — each fiber type may stain differently",
        "relatedStandard": "ISO 105-C06 (same principle, slightly different parameters)",
        "applicableTo": [
          "All dyed fabrics",
          "Printed fabrics"
        ],
        "commonIssues": "Cotton often bleeds red/navy; Polyester sublimation at high temp; Reactive dye requires good fixation"
      },
      {
        "code": "AATCC 16",
        "equivalentISO": "ISO 105-B02",
        "title": "Colorfastness to Light",
        "organization": "AATCC",
        "simpleWhat": "Does the color fade when exposed to sunlight or UV light?",
        "whyItMatters": "Garments or curtains that fade in sunlight within a season are rejected — especially critical for outdoor, sportswear, home textile",
        "principle": "Fabric exposed to artificial light source (Xenon arc simulating sunlight) for set time or until reference fades by specific amount. Color change compared to unexposed area.",
        "apparatus": [
          "Xenon Arc Fade-Ometer or Carbon Arc Fade-Ometer",
          "AATCC Blue Wool Standards L2–L9 (reference fading standards)",
          "Gray Scale or Spectrophotometer for evaluation",
          "Sample masking device (half covered for comparison)"
        ],
        "specimen": {
          "size": "70mm × 45mm minimum",
          "preparation": "Half of specimen masked/covered during exposure",
          "conditioning": "Condition at 21°C / 65% RH for 4 hours before testing"
        },
        "procedure": [
          "Mount specimen on test frame; cover half with opaque mask",
          "Mount AATCC Blue Wool reference standards alongside",
          "Expose to Xenon arc light under specified irradiance",
          "Test continues until Blue Wool L4 or L7 fades to Grade 4 (per method option)",
          "Remove specimen; compare exposed vs unexposed half",
          "Rate color change using Gray Scale or AATCC Fading Noticeability Scale"
        ],
        "evaluation": "Compare exposed vs unexposed using Gray Scale; result reported as AFU (AATCC Fading Units) or ISO Blue Wool equivalent",
        "scale": "1–8 scale (8 = no fading = excellent; 1 = severe fade = fail) or L-number (L4 to L7)",
        "typicalRequirement": {
          "apparel": "Min 4 (good), Premium: min 5",
          "homeTextile": "Min 5–6 (curtains need 6+)",
          "outdoor": "Min 6–7",
          "automotive": "Min 7–8"
        },
        "relatedStandard": "ISO 105-B02 (ISO 8 scale is same as AATCC now aligned)",
        "applicableTo": [
          "All dyed/printed fabrics",
          "Critical for outdoor, automotive, home textile"
        ],
        "commonIssues": "Black polyester often good; Turquoise/green reactive dyes tend to be weaker; Discharge prints fade faster"
      },
      {
        "code": "AATCC 8",
        "equivalentISO": "ISO 105-X12",
        "title": "Colorfastness to Crocking (Rubbing)",
        "organization": "AATCC",
        "simpleWhat": "Does the color rub off onto other surfaces when you scrub it?",
        "whyItMatters": "Jeans that rub color onto seat, or dark shirt that stains light pants when wet — direct customer complaint issue",
        "principle": "A white crock cloth is rubbed against the fabric under controlled pressure and number of strokes. Staining on crock cloth assessed.",
        "apparatus": [
          "Crockmeter (motorized or manual)",
          "AATCC Crock Test Cloth (white cotton squares 50×50mm)",
          "2lb / 900g pressure weight on crockmeter finger",
          "Gray Scale for Staining"
        ],
        "specimen": {
          "size": "130mm × 50mm",
          "preparation": "Two specimens: one for dry test, one for wet test",
          "conditioning": "Dry specimen: tested as-is; Wet specimen: crock cloth dampened to 65% moisture regain"
        },
        "procedure": [
          "Mount specimen flat on crockmeter base; secure with clips",
          "Mount white crock cloth on crockmeter finger",
          "For DRY test: rub 10 strokes at 1 stroke/second under 900g pressure",
          "For WET test: wet crock cloth to 65% moisture; repeat 10 strokes",
          "Remove crock cloth; evaluate staining against Gray Scale under D65 light"
        ],
        "evaluation": "Gray Scale for Staining 1–5 (5 = no staining; 1 = heavy staining)",
        "scale": "1–5",
        "typicalRequirement": {
          "apparel_dry": "Min 4 (typically)",
          "apparel_wet": "Min 3 (wet always worse than dry)",
          "denim_dry": "Min 4",
          "denim_wet": "Min 3 (indigo inherently crocks)"
        },
        "relatedStandard": "ISO 105-X12 (same principle; EU buyers typically quote ISO)",
        "applicableTo": [
          "All dyed/printed fabrics",
          "Critical for denim, dark shades, upholstery"
        ],
        "dryVsWet": "Wet crocking always lower rating — wet dye molecules migrate more easily",
        "commonIssues": "Pigment prints crock heavily if binder not cured; Indigo denim wet crock is a known challenge; Reactive discharge prints"
      },
      {
        "code": "AATCC 15",
        "equivalentISO": "ISO 105-E04",
        "title": "Colorfastness to Perspiration",
        "organization": "AATCC",
        "simpleWhat": "Does the color change or bleed when exposed to sweat (acid or alkaline)?",
        "whyItMatters": "Collar/underarm area fades differently from rest of garment — premium brands test this; sports brands critical",
        "principle": "Specimen immersed in synthetic perspiration solution (acid = fresh sweat pH 4.3; alkaline = body bacteria pH 8.0), placed between acrylic plates under pressure, then dried. Color change and staining evaluated.",
        "apparatus": [
          "Perspirometer (perspiration tester with acrylic plates + weight)",
          "5kg pressure weight",
          "Oven at 37°C (body temperature)",
          "Acid perspiration solution: NaCl, histidine, lactic acid pH 4.3",
          "Alkaline perspiration: NaCl, histidine, Na₂HPO₄ pH 8.0",
          "Gray Scale"
        ],
        "specimen": {
          "size": "60mm × 60mm",
          "preparation": "Sewn to AATCC multifiber adjacent fabric",
          "conditioning": "None required pre-test"
        },
        "procedure": [
          "Prepare specimen composite (test + multifiber)",
          "Soak in acid solution for 30 minutes at room temp",
          "Remove excess; place in perspirometer under 5kg weight",
          "Keep in oven at 37°C for 6 hours",
          "Repeat with alkaline solution on separate specimen",
          "Remove, air dry at room temp",
          "Evaluate color change and staining"
        ],
        "evaluation": "Gray Scale for Color Change + Gray Scale for Staining",
        "scale": "1–5 each",
        "typicalRequirement": "Min 3–4 for color change; min 3–4 for staining",
        "relatedStandard": "ISO 105-E04",
        "applicableTo": [
          "All apparel fabrics",
          "Critical for sportswear, activewear, intimate apparel"
        ],
        "acidVsAlkaline": "Fresh sweat is acid; older sweat/bacteria is alkaline — test both for complete picture"
      },
      {
        "code": "AATCC 107",
        "equivalentISO": "ISO 105-E01",
        "title": "Colorfastness to Water",
        "organization": "AATCC",
        "simpleWhat": "Does color bleed when the fabric gets wet (rain, splash)?",
        "whyItMatters": "Swimwear, rainwear, outdoor fabric — color must not run when wet",
        "principle": "Specimen immersed in distilled water, squeezed, placed between plates under pressure and dried. Color change + staining evaluated.",
        "apparatus": [
          "Perspirometer / plate assembly",
          "5kg weight",
          "Distilled water"
        ],
        "specimen": {
          "size": "60mm × 60mm",
          "preparation": "Sewn to multifiber adjacent"
        },
        "procedure": [
          "Soak specimen in distilled water for 30 min",
          "Remove, squeeze to remove excess water",
          "Place between perspirometer plates under 5kg for 18 hours at room temp",
          "Remove, hang dry",
          "Evaluate color change + staining"
        ],
        "scale": "1–5",
        "typicalRequirement": "Min 3–4",
        "relatedStandard": "ISO 105-E01",
        "applicableTo": [
          "Swimwear",
          "Rainwear",
          "Beach/outdoor fabrics"
        ]
      },
      {
        "code": "AATCC 106",
        "equivalentISO": "ISO 105-E02",
        "title": "Colorfastness to Sea Water",
        "organization": "AATCC",
        "simpleWhat": "Does color hold in salt water (ocean conditions)?",
        "whyItMatters": "Swimwear and beachwear exposed to seawater — different pH and ionic strength vs fresh water",
        "principle": "Same as AATCC 107 but using 3% NaCl solution simulating seawater",
        "apparatus": [
          "Perspirometer",
          "3% NaCl solution",
          "5kg weight"
        ],
        "specimen": {
          "size": "60mm × 60mm",
          "preparation": "Sewn to multifiber"
        },
        "procedure": [
          "Soak in 3% NaCl 30 min",
          "Place under 5kg 18 hours",
          "Dry and evaluate"
        ],
        "scale": "1–5",
        "typicalRequirement": "Min 3–4 for swimwear",
        "applicableTo": [
          "Swimwear",
          "Beach towels",
          "Marine textiles"
        ]
      },
      {
        "code": "AATCC 117",
        "equivalentISO": "ISO 105-P01",
        "title": "Colorfastness to Heat (Dry)",
        "organization": "AATCC",
        "simpleWhat": "Does the color change when ironed or heat-pressed?",
        "whyItMatters": "If fabric color changes or transfers during ironing or heat pressing in garment manufacturing — production problem",
        "principle": "Dry fabric is pressed between heated plates at set temperature for set time. Color change evaluated; check staining on adjacent white fabric.",
        "apparatus": [
          "Hot press or thermal tester",
          "Temperatures: 110°C, 150°C, 200°C"
        ],
        "procedure": [
          "Place specimen face-down on white cotton fabric",
          "Apply heated plate at specified temperature for 15 seconds",
          "Evaluate color change on specimen",
          "Evaluate staining on white cotton"
        ],
        "scale": "1–5",
        "typicalRequirement": "Min 4 for both",
        "applicableTo": [
          "All fabrics",
          "Critical for heat-transfer print, polyester"
        ],
        "commonIssues": "Disperse dye sublimation on polyester at 200°C+ causes staining on adjacent fabric"
      }
    ],
    "dimensionalStability": [
      {
        "code": "AATCC 135",
        "equivalentISO": "ISO 6330",
        "title": "Dimensional Changes of Fabrics After Home Laundering",
        "organization": "AATCC",
        "simpleWhat": "How much does the fabric shrink (or grow) after washing?",
        "whyItMatters": "If a garment shrinks 5% after first wash, size L becomes size M — major customer complaint; brands specify <3% max",
        "principle": "Fabric specimen is washed in home-type washing machine under controlled cycle and temperature, then dried. Length and width measured before and after to calculate % change.",
        "apparatus": [
          "Home-type automatic washing machine (top-load or front-load per procedure)",
          "Dryer (tumble, flat, or line dry per requirement)",
          "Calibrated ruler or measuring template",
          "Permanent marking pen/template"
        ],
        "specimen": {
          "size": "380mm × 380mm minimum",
          "preparation": "Mark 3 pairs of bench marks 250mm apart in length and width direction using permanent marker or thread tacks",
          "conditioning": "Condition at 21°C / 65% RH for minimum 4 hours; measure initial dimensions"
        },
        "procedure": [
          "Mark initial dimensions: 3 marks lengthwise + 3 marks widthwise (250mm apart)",
          "Weigh and add ballast fabric to standard load weight",
          "Select cycle: I (gentle), III (normal), IV (hot) per requirement",
          "Wash + dry per specified conditions",
          "Condition again (21°C / 65% RH, 4 hrs)",
          "Re-measure all 6 pairs of bench marks",
          "Calculate: % Change = (final – initial) / initial × 100"
        ],
        "calculation": "% Dimensional Change = ((After - Before) / Before) × 100\nNegative = shrinkage; Positive = growth",
        "evaluation": "Report length (warp/course) and width (weft/wale) separately",
        "typicalRequirement": {
          "woven_apparel": "±3% maximum",
          "knit_apparel": "±5% maximum (knits relax more)",
          "denim": "±3–5% (denim expected to shrink)",
          "home_textile": "±3% for bedding, ±5% for towels"
        },
        "testOptions": {
          "I": "Cold gentle — delicates",
          "III": "Warm normal — most apparel",
          "IV": "Hot normal — cotton workwear"
        },
        "relatedStandard": "ISO 6330",
        "applicableTo": [
          "All woven and knitted apparel and home textile"
        ],
        "commonIssues": "Cotton knits shrink most (5–10% untreated); Polyester stable; Wool felt-shrinks if hot wash used"
      },
      {
        "code": "AATCC 158",
        "equivalentISO": "ISO 3759",
        "title": "Dimensional Changes — Dry Cleaning",
        "organization": "AATCC",
        "simpleWhat": "How much does the fabric change in dry cleaning?",
        "whyItMatters": "Garments labeled 'Dry Clean Only' must not shrink excessively in professional cleaning",
        "principle": "Specimen dry cleaned in coin-operated or commercial machine with solvent (Perchloroethylene or synthetic solvent). Dimensions measured before and after.",
        "apparatus": [
          "Commercial dry-cleaning machine",
          "Perc or DF-2000 solvent"
        ],
        "procedure": [
          "Mark initial dimensions",
          "Dry clean with appropriate solvent per care label requirement",
          "Condition 4 hours at 21°C / 65% RH",
          "Re-measure and calculate % change"
        ],
        "typicalRequirement": "±2% max for most garments",
        "applicableTo": [
          "Wool suiting",
          "Silk",
          "Structured garments with 'Dry Clean Only' label"
        ]
      },
      {
        "code": "AATCC 96",
        "equivalentISO": "ISO 5077",
        "title": "Dimensional Changes — Woven Fabrics (Commercial Laundering)",
        "organization": "AATCC",
        "simpleWhat": "Shrinkage test specifically for commercial/industrial laundering (hospitals, hotels)",
        "principle": "Simulates repeated industrial wash cycles at higher temperatures (71–82°C)",
        "typicalRequirement": "±3% for hotel linens; ±5% for workwear",
        "applicableTo": [
          "Hotel towels",
          "Hospital textile",
          "Industrial workwear"
        ]
      }
    ],
    "abrasionPilling": [
      {
        "code": "ASTM D4966 / ISO 12947",
        "equivalentISO": "ISO 12947-2",
        "title": "Martindale Abrasion and Pilling Test",
        "organization": "ASTM / ISO",
        "simpleWhat": "How many rubs before fabric wears out or pills up? (Higher = better quality)",
        "whyItMatters": "Seat fabric that pills after 5 washes looks ugly; upholstery that wears thin is a durability failure; brands set minimum Martindale cycles",
        "principle": "Circular fabric specimen rubbed against standard abrading fabric or worsted wool fabric in figure-8 (Lissajous) motion under known pressure. Count cycles until specimen shows wear or pills are visible.",
        "apparatus": [
          "Martindale Abrasion Tester (multi-station machine)",
          "Abrading fabric: Woven worsted wool for pilling; Wire mesh or sandpaper for abrasion",
          "Specimen holders (9cm circular)",
          "Standard pressure weights: 12kPa (apparel) or 9kPa (upholstery)",
          "Gray Scale for Pilling",
          "Foam backing",
          "Felt underlay"
        ],
        "specimen": {
          "size": "38mm diameter circular",
          "preparation": "Cut minimum 4 specimens; condition 24 hours at 20°C / 65% RH",
          "note": "Also cut circular pieces for mounting table; secure with adhesive tape"
        },
        "procedure": [
          "Mount specimen on weighted specimen holder (12kPa or 9kPa)",
          "Mount abrading cloth on friction table",
          "Run machine to specified intervals for inspection (500, 1000, 2000, 5000 cycles etc.)",
          "At each inspection interval: examine specimen under standard light at 45° angle",
          "For ABRASION: check if threads broken / specimen worn through",
          "For PILLING: compare to Gray Scale photos or rate 1–5 visually",
          "Continue until endpoint (e.g., 2 thread breaks, or Grade 2 pilling)",
          "Record cycles at each assessment stage"
        ],
        "evaluationAbrasion": "Report cycles at which specimen fails (2 adjacent thread breaks or visible hole)",
        "evaluationPilling": {
          "Grade 5": "No change — no pills",
          "Grade 4": "Slight surface fuzzing — very light pills",
          "Grade 3": "Moderate pills — visible from normal distance",
          "Grade 2": "Distinct pills — clearly visible",
          "Grade 1": "Dense pills covering surface"
        },
        "typicalRequirements": {
          "lightDuty_apparel": "≥ 2,000 cycles",
          "medium_apparel": "≥ 5,000 cycles",
          "heavy_apparel": "≥ 10,000 cycles",
          "upholstery_light": "≥ 10,000 cycles",
          "upholstery_heavy_domestic": "≥ 15,000 cycles",
          "upholstery_contract": "≥ 25,000 cycles (hotel/office)",
          "automotive": "≥ 50,000 cycles"
        },
        "relatedStandard": "AATCC 119 (visual pilling test using Wool ICI Pilling Box — different machine)",
        "applicableTo": [
          "All woven and knitted fabrics",
          "Critical for upholstery, outerwear, knitwear"
        ],
        "note": "Same machine tests BOTH abrasion (with abrasive table) and pilling (with worsted wool table) — different setups"
      },
      {
        "code": "AATCC 119 / ASTM D3512",
        "equivalentISO": "ISO 12945-1",
        "title": "Pilling Resistance — ICI Pilling Box Method",
        "organization": "AATCC / ASTM",
        "simpleWhat": "Another pilling test using a tumbling box — simulates wear from normal use movement",
        "principle": "Specimens mounted on rubber tubes, tumbled in cork-lined box for 5, 10, 30 hours. Pills form from fibers working loose. Assessed against standard photographs.",
        "apparatus": [
          "ICI Pilling Box (wooden box, cork-lined, rotating)",
          "Standard rubber mounting tubes",
          "Standard reference photographs for grading"
        ],
        "specimen": {
          "size": "105mm × 105mm",
          "preparation": "Mounted on rubber tube with adhesive tape"
        },
        "procedure": [
          "Mount specimen on rubber tube",
          "Place in pilling box (4 specimens per box)",
          "Run for 5 hours (synthetic heavy) or 10 hours (wool/cotton)",
          "Remove, assess against photographic standards"
        ],
        "scale": "1–5 (5 = no pilling)",
        "typicalRequirement": "Min Grade 3–4 after 5 hours for apparel",
        "applicableTo": [
          "Knitwear",
          "Wool fabrics",
          "Blended fabrics"
        ]
      }
    ],
    "tensileStrength": [
      {
        "code": "ASTM D5035",
        "equivalentISO": "ISO 13934-1",
        "title": "Breaking Force and Elongation of Textile Fabrics — Strip Method",
        "organization": "ASTM",
        "simpleWhat": "How much force does it take to tear the fabric apart in a straight pull?",
        "whyItMatters": "Workwear that tears under arm movement, or sportswear that rips at seam stress — tensile strength failure",
        "principle": "A specified width strip of fabric is gripped in tensile testing machine jaws. Machine pulls apart at constant rate until fabric breaks. Force at break recorded.",
        "apparatus": [
          "Constant Rate of Extension (CRE) tensile testing machine (e.g. Instron, Tinius-Olsen)",
          "Jaw faces 25mm wide for woven; 25–50mm for knit",
          "Gauge length 75mm (strip method)"
        ],
        "specimen": {
          "size": "25mm wide × 150mm long (for warp and weft/course and wale separately)",
          "preparation": "Ravel threads from sides to get exact 25mm width; cut at least 5 specimens per direction; condition 24 hrs at 20°C/65%RH"
        },
        "procedure": [
          "Condition specimens at standard atmosphere",
          "Set gauge length to 75mm",
          "Zero load cell",
          "Insert specimen in grips vertically",
          "Start extension at 300mm/min (ASTM) or 100mm/min (ISO)",
          "Record load at break (N) and elongation at break (%)",
          "Test minimum 5 specimens per direction; report average"
        ],
        "evaluation": "Breaking Force (N) and Elongation (%) reported for warp/length and weft/width separately",
        "typicalRequirements": {
          "light_shirting": "Min 200N both directions",
          "medium_trousers": "Min 400N warp, min 300N weft",
          "heavy_workwear": "Min 600N both directions",
          "safety_PPE": "As per EN or NFPA specific standard"
        },
        "relatedStandard": "ISO 13934-1 (same principle; different crosshead speed 100mm/min)",
        "applicableTo": [
          "All woven and knitted fabrics"
        ],
        "warpVsWeft": "Warp direction usually stronger than weft; report both"
      },
      {
        "code": "ISO 13934-2 / ASTM D5034",
        "title": "Grab Tensile Strength",
        "simpleWhat": "Tensile test where only CENTER 25mm of wider specimen is gripped — simulates real-world stress point",
        "principle": "100mm wide specimen; 25mm jaw width. Yarns outside grip area provide lateral support as happens in garment. More realistic than strip method.",
        "specimen": {
          "size": "100mm × 150mm"
        },
        "procedure": [
          "Center 25mm gripped; 100mm/min or 300mm/min extension",
          "Record break force"
        ],
        "typicalRequirement": "Min 400N most apparel",
        "applicableTo": [
          "Technical fabrics",
          "Safety garments",
          "Where realistic failure mode needed"
        ]
      }
    ],
    "tearStrength": [
      {
        "code": "ASTM D1424 / ISO 13937-1",
        "title": "Tearing Strength — Elmendorf Pendulum Method",
        "organization": "ASTM",
        "simpleWhat": "Once a fabric has a cut/nick, how hard is it to keep tearing it? (Important for technical fabrics)",
        "principle": "Pre-notched specimen; falling pendulum tears the fabric. Energy absorbed by tearing divided by tear length = tear force.",
        "apparatus": [
          "Elmendorf Tear Tester (pendulum)"
        ],
        "specimen": {
          "size": "63mm × 76mm with 20mm pre-cut slit"
        },
        "procedure": [
          "Cut specimen with notch template",
          "Mount in tester with notch aligned",
          "Release pendulum; fabric tears along cut",
          "Read force from scale"
        ],
        "evaluation": "Tear strength in grams or Newtons; test warp and weft",
        "typicalRequirement": {
          "shirting": "Min 10N",
          "outerwear": "Min 20–30N",
          "technical": "Per specific application standard"
        },
        "applicableTo": [
          "Woven fabrics",
          "Technical fabrics",
          "Tents, bags, outdoor gear"
        ]
      },
      {
        "code": "ISO 13937-2",
        "title": "Tearing Strength — Trouser Leg Method",
        "simpleWhat": "Same concept but trouser-shaped specimen gives more consistent results for lighter fabrics",
        "specimen": {
          "size": "200mm × 50mm with 100mm slit at center"
        },
        "procedure": [
          "Two 'legs' of trouser gripped in opposite jaws",
          "Pulled apart at constant rate"
        ],
        "applicableTo": [
          "Light wovens",
          "Nonwovens",
          "Technical fabrics"
        ]
      }
    ],
    "seam": [
      {
        "code": "ASTM D1683 / ISO 13935",
        "title": "Failure at Yarns of Woven Fabric in a Seam",
        "simpleWhat": "Does the fabric rip at the seam stitching when stressed?",
        "whyItMatters": "Side seams of T-shirts or trouser crotch seam splitting — seam slippage or seam strength failure",
        "principle": "Sewn specimen pulled across seam under tension. Record force at which seam fails.",
        "specimen": {
          "size": "150mm × 300mm; sewn with standard stitch at center"
        },
        "typicalRequirement": "Min 225N for most apparel",
        "applicableTo": [
          "All apparel fabrics at seam",
          "Critical for sportswear, workwear, childrenswear"
        ]
      }
    ],
    "stretch": [
      {
        "code": "ASTM D2594 / ISO 14704",
        "title": "Stretch Properties of Knitted Fabrics",
        "simpleWhat": "How far does the fabric stretch and does it spring back fully?",
        "whyItMatters": "Leggings that sag after wearing and don't recover; waistband that loses elasticity — stretch and recovery failure",
        "principle": "Fabric loaded to specific tension; extension measured. Load removed; measure recovery after 1 minute.",
        "apparatus": [
          "CRE tensile machine or specific stretch frame",
          "5N or 10N load typical"
        ],
        "evaluation": {
          "stretchPct": "(Extended - Original) / Original × 100",
          "growthPct": "(After recovery - Original) / Original × 100 (lower = better recovery)"
        },
        "typicalRequirement": {
          "stretch": ">30% for stretch fabrics",
          "recovery": ">90% recovery (growth <10%)"
        },
        "applicableTo": [
          "Stretch knits",
          "Elastane blends",
          "Swimwear",
          "Leggings"
        ]
      }
    ],
    "bursting": [
      {
        "code": "ASTM D3786 / ISO 13938",
        "title": "Hydraulic Bursting Strength of Knitted Fabrics and Nonwovens",
        "simpleWhat": "How much pressure before the fabric bursts? (Used for knits where tensile strip method doesn't work well)",
        "whyItMatters": "Leggings under pressure at knee; gloves under hand pressure — knits stressed in all directions simultaneously",
        "principle": "Circular specimen clamped over rubber diaphragm. Hydraulic pressure applied under diaphragm until fabric bursts. Pressure at burst recorded.",
        "apparatus": [
          "Mullen Burst Tester or Diaphragm Burst Tester",
          "Hydraulic or pneumatic pressure"
        ],
        "specimen": {
          "size": "Circular, 30mm diameter clamped area"
        },
        "typicalRequirement": {
          "light_knit": "Min 150 kPa",
          "medium_knit": "Min 200 kPa",
          "heavy_knit": "Min 300 kPa"
        },
        "applicableTo": [
          "Knitted fabrics",
          "Nonwovens",
          "Technical geotextiles"
        ]
      }
    ],
    "waterRepellency": [
      {
        "code": "AATCC 22",
        "equivalentISO": "ISO 4920",
        "title": "Water Repellency — Spray Test",
        "organization": "AATCC",
        "simpleWhat": "Does water bead off the fabric surface or soak in?",
        "whyItMatters": "Rainwear, outdoor jackets, softshell — water must bead off; soaking through means DWR finish failed",
        "principle": "250ml water sprayed onto taut fabric specimen from 15cm height for 25–30 seconds. Wet pattern on face compared to AATCC rating chart.",
        "apparatus": [
          "AATCC Spray Tester (spray nozzle + funnel holder)",
          "AATCC Water Repellency Rating Chart (0–100)"
        ],
        "specimen": {
          "size": "180mm × 180mm",
          "preparation": "Mounted taut on embroidery hoop at 45° angle"
        },
        "procedure": [
          "Mount specimen at 45° angle on hoop",
          "Pour 250ml distilled water through spray nozzle",
          "Tap back of specimen against hard object twice (to shake off loose drops)",
          "Immediately compare spray pattern to AATCC photographic rating chart"
        ],
        "scale": {
          "0": "Complete wetting of both face and back",
          "50": "Wetting of whole face",
          "70": "Partial wetting of whole face",
          "80": "Wetting of spray points only",
          "90": "Slight random sticking with no wetting",
          "100": "No sticking or wetting of face — water beads off perfectly"
        },
        "typicalRequirement": "Min 80 after washing for outdoor; min 90 for technical rainwear",
        "relatedStandard": "ISO 4920",
        "applicableTo": [
          "Outerwear",
          "Rainwear",
          "Technical sportswear",
          "Softshell"
        ],
        "afterWashNote": "DWR finish typically tested after 10 and 20 wash cycles — performance should not drop below 70"
      },
      {
        "code": "AATCC 42",
        "title": "Water Resistance — Impact Penetration",
        "simpleWhat": "Does water penetrate through to back of fabric under impact (heavy rain simulation)?",
        "principle": "500ml water dropped from fixed height onto specimen mounted at angle. Weight gain of absorbent blotter behind specimen = penetration.",
        "typicalRequirement": "< 1.0g water penetration for rainwear",
        "applicableTo": [
          "Rainwear",
          "Umbrellas",
          "Waterproof outerwear"
        ]
      }
    ],
    "breathability": [
      {
        "code": "ASTM E96 / ISO 11092",
        "title": "Moisture Vapor Transmission / Breathability",
        "simpleWhat": "Can sweat vapor escape through the fabric? (Higher = more breathable)",
        "whyItMatters": "Rainwear that traps sweat feels clammy and uncomfortable — breathability (Ret value) determines comfort rating",
        "principle": {
          "ASTM E96": "Cup method — water below fabric; measure mass loss over time = water vapor transmission rate",
          "ISO 11092 (RET)": "Sweating guarded hotplate — measures resistance to evaporative heat transfer in m²Pa/W"
        },
        "scale": {
          "RET < 6": "Very breathable (excellent)",
          "RET 6-13": "Breathable (good)",
          "RET 13-20": "Moderate",
          "RET > 20": "Low breathability"
        },
        "typicalRequirement": "RET < 13 for most outdoor; < 6 for high-performance (Gore-Tex equivalent)",
        "applicableTo": [
          "All outerwear",
          "Sportswear",
          "Technical fabrics",
          "PPE"
        ]
      }
    ],
    "flammability": [
      {
        "code": "CPSC 16 CFR 1610 (US)",
        "equivalentISO": "ISO 6941",
        "title": "Flammability of Clothing Textiles",
        "simpleWhat": "How fast does flame spread on the fabric? (Safety test for all apparel sold in US)",
        "principle": "Specimen mounted at 45° angle; small flame applied for 1 second. Flame spread time measured.",
        "apparatus": [
          "45° flammability tester",
          "Standard pilot flame"
        ],
        "scale": {
          "Class 1": "Normal flammability — permitted",
          "Class 2": "Intermediate — permitted except for children's sleepwear",
          "Class 3": "Rapid/intense burn — PROHIBITED"
        },
        "mandatoryFor": "All apparel sold in USA must pass Class 1 or 2",
        "applicableTo": [
          "All apparel fabrics",
          "Children's sleepwear: stricter standard CPSC 16 CFR 1615/1616"
        ],
        "indiaBIS": "BIS IS:11871 — Indian equivalent for flammability"
      },
      {
        "code": "EN 11611 / EN 11612",
        "title": "Protective Clothing — Welding / Heat and Flame",
        "simpleWhat": "FR workwear that must resist flame, radiant heat, molten metal splash",
        "applicableTo": [
          "Industrial workwear",
          "Welding garments",
          "FR coveralls"
        ]
      }
    ],
    "chemical": [
      {
        "code": "OEKO-TEX Standard 100",
        "title": "Harmful Substance Testing (OEKO-TEX)",
        "organization": "OEKO-TEX Association",
        "simpleWhat": "Are there any harmful chemicals in the fabric that could hurt the wearer?",
        "whyItMatters": "Babies put fabric in mouth; skin absorbs chemicals; EU/US legislation bans many chemicals in textiles — OEKO-TEX certification proves safety",
        "parametersChecked": [
          {
            "parameter": "pH value",
            "limit": "4.0–7.5 (adult); 4.0–6.5 (baby)",
            "method": "ISO 3071"
          },
          {
            "parameter": "Formaldehyde (free)",
            "limit": "< 20 ppm (baby); < 75 ppm (skin contact); < 300 ppm (no skin)",
            "method": "ISO 14184-1"
          },
          {
            "parameter": "Pesticides",
            "limit": "Sum < 0.5 ppm; individual pesticide limits",
            "method": "GC-MS"
          },
          {
            "parameter": "Heavy metals (extractable)",
            "limit": "Arsenic < 1ppm; Lead < 1ppm; Cadmium < 0.1ppm; Chromium VI < 0.5ppm",
            "method": "ICP-MS"
          },
          {
            "parameter": "Azo dyes (carcinogenic amines)",
            "limit": "Not detectable (< 20 ppm each amine)",
            "method": "ISO 14362"
          },
          {
            "parameter": "Chlorophenols (PCP)",
            "limit": "< 0.5 ppm",
            "method": "GC-MS"
          },
          {
            "parameter": "Flame retardants",
            "limit": "Several specific FR chemicals restricted",
            "method": "GC-MS"
          },
          {
            "parameter": "Phthalates (in prints/coatings)",
            "limit": "< 0.1% each, < 0.1% sum DEHP+DBP+BBP+DIBP",
            "method": "GC-MS"
          },
          {
            "parameter": "Allergenic dyes",
            "limit": "Not detectable for list of sensitizing dyes",
            "method": "HPLC"
          }
        ],
        "productClasses": {
          "Class I": "Products for babies/toddlers up to 3 years — strictest limits",
          "Class II": "Products worn next to skin (underwear, T-shirts)",
          "Class III": "Products not next to skin (jackets, trousers)",
          "Class IV": "Home textiles, curtains, upholstery"
        },
        "certificationBody": "OEKO-TEX member institutes (e.g. Hohenstein, TESTEX, IFTH)",
        "validity": "Annual re-certification required",
        "indiaLabs": [
          "SITRA Coimbatore",
          "Hohenstein India",
          "SGS India",
          "Intertek India"
        ]
      },
      {
        "code": "REACH SVHC",
        "title": "EU REACH Regulation — Substances of Very High Concern",
        "organization": "European Chemicals Agency (ECHA)",
        "simpleWhat": "EU law banning specific harmful chemicals in all products sold in Europe",
        "keyRestrictions": [
          "Azo dyes releasing carcinogenic amines — BANNED (EU Regulation 2002/61/EC)",
          "Chromium VI — limited to < 3ppm (tanned leather)",
          "PFAS/PFOA (C8 fluorochemicals) — restricted in textile treatments",
          "Certain flame retardants — restricted",
          "Phthalates in PVC coatings — restricted",
          "Nickel in metal accessories — limited (contact allergy)"
        ],
        "mandatoryFor": "All textile products sold in EU market",
        "testing": "SVHC candidate list substances tested by accredited labs"
      },
      {
        "code": "BIS IS:1964 / IS:9989",
        "title": "Bureau of Indian Standards — Textile Chemical Safety",
        "organization": "BIS India",
        "simpleWhat": "Indian mandatory standards for textile chemical safety",
        "keyParameters": [
          "pH: 4–8 range for skin contact",
          "Formaldehyde: < 75 ppm skin contact",
          "Azo dyes: restricted",
          "Colour fastness minimums for domestic market"
        ],
        "applicableTo": [
          "All textiles sold in Indian domestic market",
          "BIS certification mandatory for certain categories"
        ]
      }
    ],
    "care_labeling": [
      {
        "code": "ASTM D5489",
        "equivalentISO": "ISO 3758",
        "title": "Care Labeling Symbols for Textile Products",
        "organization": "ASTM",
        "simpleWhat": "International care symbol system on garment labels",
        "symbols": [
          {
            "symbol": "🪣 Washtub",
            "meaning": "Machine or hand wash; temperature shown by dots (30°C/40°C/60°C/95°C) or number"
          },
          {
            "symbol": "🖐 Hand",
            "meaning": "Hand wash only"
          },
          {
            "symbol": "❌🪣",
            "meaning": "Do not wash"
          },
          {
            "symbol": "⭕ Circle",
            "meaning": "Dry clean — letter inside indicates solvent type"
          },
          {
            "symbol": "❌⭕",
            "meaning": "Do not dry clean"
          },
          {
            "symbol": "□ Square + circle inside",
            "meaning": "Tumble dry — dots = heat level (1 dot = low, 2 = med, 3 = high)"
          },
          {
            "symbol": "❌□⭕",
            "meaning": "Do not tumble dry"
          },
          {
            "symbol": "Iron",
            "meaning": "Iron — dots = temperature (1 = 110°C, 2 = 150°C, 3 = 200°C)"
          },
          {
            "symbol": "❌Iron",
            "meaning": "Do not iron"
          },
          {
            "symbol": "△ Triangle",
            "meaning": "Bleach — empty = any bleach; CL inside = chlorine ok; ❌ = no bleach"
          }
        ],
        "standards": "ASTM D5489 (US); ISO 3758 (international); GINETEX (Europe)",
        "mandatoryIn": "US (FTC requirement), EU, Canada (mandatory for most apparel)"
      }
    ],
    "construction": [
      {
        "code": "ASTM D3775 / ISO 7211-2",
        "title": "Fabric Count (Thread Count / EPI × PPI)",
        "simpleWhat": "How many threads per inch in warp (EPI) and weft (PPI)?",
        "procedure": [
          "Use pick glass (linen tester) or counting frame",
          "Count number of visible threads in 1-inch span",
          "Count in warp direction (EPI) and weft direction (PPI) separately",
          "Average of 5 measurements per direction"
        ],
        "applicableTo": [
          "All woven fabrics"
        ],
        "note": "Foundation of fabric specification — must verify EPI/PPI against ordered construction"
      },
      {
        "code": "ASTM D3776 / ISO 3801",
        "title": "Fabric Mass Per Unit Area (GSM)",
        "simpleWhat": "What is the weight of fabric per square meter?",
        "apparatus": [
          "Circular sample cutter (100 cm²)",
          "Analytical balance (0.001g)"
        ],
        "procedure": [
          "Cut minimum 3 circular specimens of known area (e.g. 100 cm²)",
          "Condition at 20°C/65%RH for 24 hours",
          "Weigh each specimen",
          "Calculate: GSM = (mass in grams / area in cm²) × 10,000"
        ],
        "formula": "GSM = (Weight g / Area cm²) × 10,000",
        "applicableTo": [
          "All fabrics",
          "Must match specification on each order"
        ]
      },
      {
        "code": "ASTM D1777 / ISO 5084",
        "title": "Fabric Thickness",
        "simpleWhat": "How thick is the fabric in millimeters?",
        "apparatus": [
          "Thickness gauge with standard presser foot (2kPa or 10kPa pressure)"
        ],
        "procedure": [
          "Place specimen under presser foot",
          "Apply standard pressure",
          "Read gauge"
        ],
        "applicableTo": [
          "All fabrics",
          "Critical for technical / performance fabrics"
        ]
      }
    ]
  },
  "fabricDefects": {
    "woven": [
      {
        "name": "Broken End",
        "description": "Missing warp thread; thin line running lengthwise",
        "severity": "Major"
      },
      {
        "name": "Missing Pick",
        "description": "Missing weft thread; horizontal thin line",
        "severity": "Major"
      },
      {
        "name": "Float",
        "description": "Warp or weft not interlacing as per weave design",
        "severity": "Major"
      },
      {
        "name": "Reed Mark",
        "description": "Vertical stripe due to bent reed dent",
        "severity": "Minor-Major"
      },
      {
        "name": "Temple Mark",
        "description": "Holes/distortion at selvedge from temple device",
        "severity": "Minor"
      },
      {
        "name": "Oil Stain",
        "description": "Machine oil contamination on fabric",
        "severity": "Major"
      },
      {
        "name": "Thick/Thin Place",
        "description": "Uneven yarn causing thick or thin band",
        "severity": "Minor-Major"
      },
      {
        "name": "Selvedge Defect",
        "description": "Loopy, tight or missing selvedge",
        "severity": "Minor"
      },
      {
        "name": "Weft Bar (Barre)",
        "description": "Horizontal stripe due to different weft yarn batch",
        "severity": "Minor-Major"
      },
      {
        "name": "Drop Stitch",
        "description": "Unintentional open spot; in twill creates float",
        "severity": "Major"
      }
    ],
    "knitted": [
      {
        "name": "Run / Ladder",
        "description": "Vertical chain of loops dropped; weft knit specific",
        "severity": "Major"
      },
      {
        "name": "Hole",
        "description": "Actual opening in fabric from broken yarn or needle",
        "severity": "Critical"
      },
      {
        "name": "Needle Line",
        "description": "Vertical line from damaged needle; shows as wale defect",
        "severity": "Major"
      },
      {
        "name": "Drop Stitch",
        "description": "Missing loop creating hole or thin spot",
        "severity": "Major"
      },
      {
        "name": "Barre (Horizontal Stripe)",
        "description": "Course-wise variation in appearance from yarn lot differences",
        "severity": "Minor-Major"
      },
      {
        "name": "Tight Course",
        "description": "One course tighter than others; wavy appearance",
        "severity": "Minor"
      },
      {
        "name": "Pilling",
        "description": "Surface fiber balls from friction; linked to yarn quality",
        "severity": "Minor"
      },
      {
        "name": "Press-off",
        "description": "Section of fabric completely missing from needles clearing",
        "severity": "Critical"
      },
      {
        "name": "Snagging",
        "description": "Surface fiber pulled into loops from sharp objects",
        "severity": "Minor"
      },
      {
        "name": "Uneven Dyeing/Barre in Knit",
        "description": "Course shade variation; fiber/yarn inconsistency",
        "severity": "Major"
      }
    ]
  },
  "indiaSourcingMap": {
    "hubs": [
      {
        "city": "Tirupur, Tamil Nadu",
        "specialization": [
          "Single jersey",
          "Rib knit",
          "Fleece",
          "Knitwear export"
        ],
        "fabricTypes": [
          "T-shirt fabric",
          "Polo fabric",
          "Knitwear"
        ],
        "yarnBase": [
          "Cotton",
          "CVC",
          "Polyester"
        ],
        "exportFocus": true,
        "keyBuyers": [
          "H&M",
          "Gap",
          "Next",
          "Zara suppliers"
        ],
        "coordinates": {
          "lat": 11.1085,
          "lng": 77.3411
        }
      },
      {
        "city": "Surat, Gujarat",
        "specialization": [
          "Polyester saree fabric",
          "Georgette",
          "Chiffon",
          "Digital printing",
          "Warp knit"
        ],
        "fabricTypes": [
          "Georgette",
          "Chiffon",
          "Crepe",
          "Sateen",
          "Jacquard"
        ],
        "yarnBase": [
          "Polyester filament",
          "Viscose",
          "Silk"
        ],
        "exportFocus": false,
        "domesticFocus": true,
        "coordinates": {
          "lat": 21.1702,
          "lng": 72.8311
        }
      },
      {
        "city": "Ahmedabad, Gujarat",
        "specialization": [
          "Denim",
          "Shirting",
          "Organic cotton fabric",
          "Processing"
        ],
        "fabricTypes": [
          "Denim",
          "Cotton shirting",
          "Poplin",
          "Voile"
        ],
        "keyMills": [
          "Arvind Mills",
          "Aarvee Denims",
          "Raymond"
        ],
        "coordinates": {
          "lat": 23.0225,
          "lng": 72.5714
        }
      },
      {
        "city": "Panipat, Haryana",
        "specialization": [
          "Recycled wool",
          "Shoddy",
          "Recycled cotton",
          "Blankets"
        ],
        "fabricTypes": [
          "Recycled woolen blankets",
          "Recycled cotton fabric"
        ],
        "circularEconomy": "World's largest recycled textile hub — processes 1.5M tonnes/year",
        "coordinates": {
          "lat": 29.3909,
          "lng": 76.9635
        }
      },
      {
        "city": "Bhilwara, Rajasthan",
        "specialization": [
          "Suiting fabric",
          "Synthetic suiting",
          "Technical textile"
        ],
        "fabricTypes": [
          "Suiting",
          "Shirting (synthetic)"
        ],
        "yarnBase": [
          "Polyester",
          "Polyester/Viscose blend",
          "Wool blends"
        ],
        "coordinates": {
          "lat": 25.347,
          "lng": 74.6313
        }
      },
      {
        "city": "Ludhiana, Punjab",
        "specialization": [
          "Knitwear",
          "Woollen garments",
          "Hosiery"
        ],
        "fabricTypes": [
          "Woollen knitwear",
          "Acrylic knitwear",
          "Socks hosiery"
        ],
        "yarnBase": [
          "Wool",
          "Acrylic",
          "Wool blends"
        ],
        "coordinates": {
          "lat": 30.901,
          "lng": 75.8573
        }
      },
      {
        "city": "Varanasi, Uttar Pradesh",
        "specialization": [
          "Banarasi silk",
          "Jacquard",
          "Brocade",
          "Zari work"
        ],
        "fabricTypes": [
          "Silk brocade",
          "Banarasi sarees",
          "Jacquard fabric"
        ],
        "giTag": "Banarasi silk — Geographical Indication protected",
        "coordinates": {
          "lat": 25.3176,
          "lng": 82.9739
        }
      },
      {
        "city": "Coimbatore, Tamil Nadu",
        "specialization": [
          "Yarn spinning",
          "Shirting fabric",
          "Terry towel"
        ],
        "fabricTypes": [
          "Cotton shirting",
          "Terry towel",
          "Technical textiles"
        ],
        "yarnBase": [
          "Cotton ring spun",
          "OE cotton"
        ],
        "coordinates": {
          "lat": 11.0168,
          "lng": 76.9558
        }
      },
      {
        "city": "Jaipur, Rajasthan",
        "specialization": [
          "Block printing",
          "Screen printing",
          "Natural dye fabrics"
        ],
        "fabricTypes": [
          "Printed cotton",
          "Block print fabric",
          "Natural dyed cotton"
        ],
        "traditions": [
          "Bagru print",
          "Sanganeri print",
          "Dabu mud resist"
        ],
        "coordinates": {
          "lat": 26.9124,
          "lng": 75.7873
        }
      },
      {
        "city": "Mumbai (Dharavi cluster)",
        "specialization": [
          "Recycling",
          "Small batch production",
          "Garment fabric processing"
        ],
        "coordinates": {
          "lat": 19.076,
          "lng": 72.8777
        }
      }
    ]
  },
  "meta": {
    "version": "3.1",
    "totalWovenStructures": 6,
    "totalWovenVariants": "50+",
    "totalKnittedStructures": 6,
    "totalKnittedVariants": "45+",
    "totalSustainableFibers": 9,
    "totalYarnTypes": 8,
    "totalFinishingProcesses": 12,
    "totalDyeMethods": 9,
    "totalTestingStandards": "20+",
    "defectsCatalogued": "20",
    "indiaSourcingHubs": 10,
    "lastUpdated": "2026",
    "engineGoal": "Zero missed fabrics — every commercially significant woven and knitted structure with production-grade specs",
    "furtherExpansionPlan": [
      "Nonwoven structures (spunbond, needlepunch, hydroentangled)",
      "Braided structures",
      "Lace structures (warp vs weft lace)",
      "Embroidered fabrics (schiffli, cornely)",
      "Bonded/laminated fabrics (TPU laminate, PU coated)",
      "Smart/e-textiles (conductive fiber, phase change materials)",
      "3D weaving (orthogonal, angle interlock)",
      "Seamless/whole garment knitting",
      "Regional Indian handloom fabrics (Ikkat, Banarasi, Kanjeevaram, Phulkari, Jamdani GI fabrics)"
    ]
  }
};
