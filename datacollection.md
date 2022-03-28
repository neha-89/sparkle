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
        "category_2" :  "Designer Facial"::[
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
        "service_2" : "Clean-ups",
        "details" : "Normal clean-up,Designer clean-up,Peal mask"
    },
    {
        "id" : "3",
        "service_3" : "Bleach/Threading",
        "details" : "Bleach,Threading"
    },
    {
        "id" : "4",
        "service_1" : "Waxing",
        "details" : "Normal-waxing, Choclate-waxing"
    },
    {
        "id" : "5",
        "service_1" : "Manicure/Pedicure",
        "details" : "Manicure,Pedicure",
    }

]
nail services = [
    {
        "id" : "1",
        "service_1" : "Nail paint",
    },
    {
        "id" : "2",
        "service_2" : "Gel paint",
    },
    {
        "id" : "3",
        "service_3" : "Gel extension",
       
    },
    {
        "id" : "4",
        "service_1" : "Acrylic Extension",
        
    },
    {
        "id" : "5",
        "service_1" : "Nail Art",
        
    }

]

hair services = [
    {
        "id" : "1",
        "service_1" : "haircut",
        "details" : "Classic Bob Hair Cut,Asymmetric Hair Cut,Long Layers & many more"
    },
    {
        "id" : "2",
        "service_2" : "hair styling",
        "details" : "Temporary  Styling,Permanent Styling"
    },
    {
        "id" : "3",
        "service_3" : "hair color",
        "details" : "Global  Colour,Highlights,Colour Streaks"
    },
    {
        "id" : "4",
        "service_1" : "hair treatments",
        "details" : "For Dry Damaged Hair"
    },
    {
        "id" : "5",
        "service_1" : "hair spa",
        "details" : "Manicure,Pedicure",
    }
     {
        "id" : "5",
        "service_1" : "hair wash",
        "details" : "Manicure,Pedicure",
    }

]
[{"_id":"618776b162a1816f885956b9",
"restaurant_id":1,"restaurant_name":"Domino's Pizza","location_id":1,"state_id":1,"address":"Ashok Vihar Phase 3, New Delhi",
"restaurant_thumb":"https://b.zmtcdn.com/data/pictures/chains/3/143/c77dfea619f2d7786a7d054afab5cd88_featured_v2.jpg",
"average_rating":4.2,"rating_text":"Very Good","cost":666,"contact_number":9453524651,
"mealTypes":[{"mealtype_id":1,"mealtype_name":"Breakfast"},{"mealtype_id":2,"mealtype_name":"Lunch"}],"cuisines":[{"cuisine_id":1,"cuisine_name":"North Indian"},{"cuisine_id":4,"cuisine_name":"Fast Food"}],"