List of Services:

const services = [
    {
        "id":"1",
        "servicename" :  "bridal services",
    },
    {
        "id":"2",
        "servicename" :  "beauty services",
    },
    {
        "id":"3",
        "servicename" :  "nail services",
    },
    {
        "id":"4",
        "servicename" :  "hair services",
    },
    {
        "id":"5",
        "servicename" : "tattoo services",
    }
    
]

Each services with sub services

bridal services = [
    {
        "id" : "1",
        "service_1" : "bridal make-up",
        "details" : "Makeup + hair-style+ Saree-draping",
        "img" : " ",
    },
    {
        "id" : "2",
        "service_2" : "pre-bridal packages",
        "details" : "Threading, Waxing, Face & Body Bleach, Facial, Body Polishing, Hand & Foot Spa, Haircut, Hair Spa",
        "img" : " ",
    },
     
]

beauty services = [
    {
        "id" : "1",
        "service_1" : "Facial",
        "img" : " ",
        "category_1" : "Normal Facial":[
            {
                "category_id" : "1",
                "type-1" : [{
                    "type-id" : "1",
                    "name" : " Hydra Facial ",
                    "details" : " It is for dry to normal skin. Ease dry and flaky skin with intensive hydration that locks moisture within skin.",
                }],
                "type-2" : [{
                    "type-id" : "2",
                    "name" : "Deep Pore",
                    "details" : " It is for oily to combination skin. A revolutionary facial to reduce & control imperfections on oily skin. Enhance natural glow while leaving the skin with matte appearance.",
                }],
                "type-3" : [{
                    "type-id" : "3",
                    "name" : "Clari Control",
                    "details" : " It is for oily skin. control's oil & comodones which gives your skin a matte & oil free look.",
                }],
                 
                
                
            },
        ],
        "category_2" :  "Designer Facial":[
            {
                "category_id" : "2",
                "type-1" : [{
                    "type-id" : "1",
                    "name" : " Re-Energize ",
                    "details" : " It is recommended for dehydrated, dull skin. Experience the luxury of re - energizing of face with the combination of minerals and elements from nature.",
                }],
                "type-2" : [{
                    "type-id" : "2",
                    "name" : "Hydramoist",
                    "details" : "It is for normal to dry skin. It Reawaken your skin's natural luster with ingredients that provides intense hydration. Strengthens the skin's natural barrier to moisture loss.",
                }],
                "type-3" : [{
                    "type-id" : "3",
                    "name" : "Age Blocker",
                    "details" : "It is for mature skin. This beauty booster facial re-introduces your facial skin into youthful freshness & glow with the goodness of Vitamin C, it revitalizes the ageing skin.",
                }],
                 
             },
        ],

    {
        "id" : "2",
        "service_2" : "Clean Ups/Peek Mask",
        "img" : " ",
        "category_1" : "Clean Ups":[
            {
                "category_id" : "1",
                "type-1" : [{
                    "type-id" : "1",
                    "name" : "Hydra fresh Clean Up",
                    "details" : "It is for normal to dry skin. Leaves the skin soft and supple.",
                }],
                "type-2" : [{
                    "type-id" : "2",
                    "name" : "Deep Pore Clean Up",
                    "details" : " It is for oily to combination skin. Removes impurities with extraction of blackheads and whiteheads.",
                }],
                "type-3" : [{
                    "type-id" : "3",
                    "name" : "D-Tan",
                    "details" : " It is for tanned & uneven skin. Removes tan and leaves skin lighter and softer.",
                }],
                 
                
                
            },
        ],
        "category_2" :  "Designer Clean Ups":[
            {
                "category_id" : "2",
                "type-1" : [{
                    "type-id" : "1",
                    "name" : "Re-Energize Clean Up",
                    "details" : "It is designed for dry, dehydrated & dull skin, feel the hydration & nourishment with this cleanup with the combination of nature & science.",
                }],
                "type-2" : [{
                    "type-id" : "2",
                    "name" : "Brightening Clean Up ",
                    "details" : "It designed for dry, dehydrated & dull skin, feel the hydration & nourishment with this cleanup with the combination of nature & science.",
                }],
                "type-3" : [{
                    "type-id" : "3",
                    "name" : "Sensi Magic",
                    "details" : "Non irritating cleanup for sensitive skin.The bio sensitive products helps soothing and calming down the skin. Subsides redness and brightens the skin.",
                }],
                 
             },
        ],
    }

    {
        "id" : "3",
        "service_3" : "Bleach/Threading",
         "category_1" : "Bleach",
         "details" : "Bleaching is also called skin whitening or skin lightening process, where the aim is to obtain an uniform skin colour, so that it can have an even exposure.",
         "img" : " ",
         "catergory_2 : "Threading",
         "details" : "Threading is method of Hair Removal from Eyebrow, Upper Lip / Lower Lip, Forehead, Chin, Cheeks, Jawline, Full Face plucking the hair at the follicle level. Threading allows for a more defined and precise shape and can create better definition.",
         "img" : " ",
    }
        
    {
        "id" : "4",
        "service_4" : "Waxing",
        "category_1" : "Normal Waxing",
         "details" : "Waxing is the procedure of removing hair from certain parts of the body, under arms, half arms, full arms, half legs, full legs, bikini line, stomach, buttocks, half front / back full front / back bikini / brazilian, full body. normal wax is made of sugar & lemon mix.",
         "img" : " ",
         "category_2" :"Flavoured Chocolate Waxing"
         "details" : "Chocolate as an ingredient has many beauty benefits to offer. It prevents fine lines, hydrates and boosts the skin for a healthy glow. This is so because chocolate possess antioxidants like cocoa flavonoids which are good for skin.",
         "img" : " ",
        
    },
    {
        "id" : "5",
        "service_5" : "Manicure/Pedicure",
        "img" : " ",
       "category_1" : "Manicure",
         "details" : "It is beauty treatment for the fingernails and hands performed. A manicure consists of filing and shaping the free edge, pushing and clipping (with a cuticle pusher and cuticle nippers) any non living tissue (but limited to the cuticle and hangnails), treatments with various liquids, massage of the hand, and the application of fingernail polish.",
        "category_2" :"Pedicure",
         "details" : "It is beauty treatments designed to improve - or maintain - the appearance and condition of the feet and toe nails. Pedicure comprise foot exfoliation to remove dead skin cells, nail filing, cuticle neatening, and the application of one or more nail polishes.",
        
    }

]
nail services = [
    {
        "id" : "1",
        "service_1" : "Nail paint",
        "img" : "",
    },
    {
        "id" : "2",
        "service_2" : "Gel paint",
        "img" : "",
    },
    {
        "id" : "3",
        "service_3" : "Gel extension",
        "img" : " ",
       
    },
    {
        "id" : "4",
        "service_4" : "Acrylic Extension",
        "img" : "",
        
    },
    {
        "id" : "5",
        "service_5" : "Nail Art",
        "img" : "",
        
    }

]

hair services = [
    {
        "id" : "1",
        "service_1" : "haircut",
        "img" : " ",
        "category-1" : "Classic Bob Hair Cut",
        "category-2" : "Asymmetric Hair Cut",
        "category-3" : "Long Layers & many more"
    },
    {
        "id" : "2",
        "service_2" : "hair styling",
        "img" : " ",
        "category-1" : "Temporary  Styling",
          "sub-category-1" : "Blow Dry - Curls / Straight",
          "sub-category-2" : "Ironing",
          "sub-category-3" : "Crimping",
        "category-2" : "Permanent Styling",
          "sub-category-1" : "Smoothening / Relaxing",
          "sub-category-2" : "Straightening",
          "sub-category-3" : " Rebonding",
    },
    {
        "id" : "3",
        "service_3" : "hair color",
        "category-1" : "Global  Colour",
        "img" : " ",
        "category-2" :"Highlights",
        "img" : " ",
        "category-3" :Colour Streaks",
        "img" : " ",
    },
    {
        "id" : "4",
        "service_4" : "hair treatments",
        "img" : " ",
        "category_1" : "For Dry Damaged Hair Lipidium Reconstruction Series":[
            {
                "category_id" : "1",
                "type-1" : [{
                    "type-id" : "1",
                    "name" : "Primer Reconstruction ",
                    "details" : "Post shampoo treatment which reconstruct hair surface from roots to ends.",
                }],
                "type-2" : [{
                    "type-id" : "2",
                    "name" : "Power Reconstruction ",
                    "details" : "Enriched with Lactic acid that works on cortex reconstruction, leaving your hair smooth & shiny.",
                }],
                "type-3" : [{
                    "type-id" : "3",
                    "name" : "Vapo Reconstruction ",
                    "details" : " Enriched with reconstructing lipids targets each zone of the hair fibre leaving your hair soft and silky.",
                }],
                 
                
                
            },
        ],
        "category_2" :  "Association of several oils ":[
            {
                "category_id" : "2",
                  "sub-category-1" :"Anti Hair Thinning Treatment",
                  "sub-category-2" :" Anti Dandruff",
                  "sub-category-3" :" Balancing Treatment – for Oily Scalp",
                  "sub-category-4" :"Nourishing Treatment - for Dry Scalp",
                  "sub-category-5" : "Anti Hair loss Treatment",

             },
        ],
    },
    {
        "id" : "5",
        "service_5" : "hair spa",
        "img" : "",
        "category" : "Hair Spa",
        "details" : "";
        "category" : "Detox Hair Spa",
        "details" : "Personalized clay-based service to remove excess oil & dandruff leaving your scalp & hair completely detoxified.";
        "category" : "Keratin Spa",
        "details" : "Specially Formulated to contain Juvexin Keratin, which rebuilds, restores & rejuvenate the hair giving a softer, silker feel.";
       
    }
     {
        "id" : "5",
        "service_5" : "hair wash",
        "category-1": "normal hair wash",
        "img" : " ",
        "category-2" :"keratin hair wash",
        "img" : " ",
    }

]
