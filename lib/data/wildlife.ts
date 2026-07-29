import { Binoculars, MapPin, Heart, Users, Leaf, Camera, Clock, Calendar } from "lucide-react"

export const wildlifePlaces = {
    "yala-national-park": {
        title: "Yala National Park",
        subtitle: "The Realm of the Leopard",
        image: "/yala-leopard-national-park.jpg",
        description: "Sri Lanka's most famous national park, Yala is a sprawling sanctuary of biodiversity on the southeastern coast. It is world-renowned for having the highest density of leopards on Earth, but it offers so much more than just big cat sightings. The park's unique landscape shifts from dense monsoon forests to dry scrubland, lagoons, and golden beaches bordering the Indian Ocean.",
        whySpecial: "Yala is not just a park; it's a living tapestry of Sri Lanka's wild soul. It's the only place where you can see leopards prowling near ancient ruins, elephants wandering on the beach, and crocodiles basking in lagoons—all within a single afternoon safari.",
        highlights: [
            "Highest leopard density in the world",
            "Large herds of wild Asian elephants",
            "Over 215 bird species, including endemics",
            "Ancient Buddhist ruins like Sithulpawwa inside the park",
            "Stunning coastal landscapes and lagoons"
        ],
        gallery: [
            "/yala-leopard-national-park.jpg",
            "/jungle-scene.jpg",
            "/minneriya-elephant-gathering.jpg",
            "/yala-leopard-national-park.jpg"
        ],
        details: {
            bestTime: "February to June (Dry season for best visibility)",
            keyAnimals: "Leopards, Sloth Bears, Elephants, Crocodiles, Peacocks",
            activities: "Jeep Safaris, Birdwatching, Photography, Night Camping Nearby",
            duration: "Full-day safari recommended (6 AM - 6 PM)",
        },
        travelTips: {
            packing: "Lightweight neutral clothing, binoculars, long-lens camera, hat, and sunscreen.",
            entry: "Requires a permit and a registered safari jeep. Book in advance during peak season.",
            ethical: "Maintain strict silence. Never feed animals or use drones. Follow your guide's instructions at all times."
        }
    },
    "udawalawe-national-park": {
        title: "Udawalawe National Park",
        subtitle: "The Sanctuary of Giants",
        image: "/minneriya-elephant-gathering.jpg",
        description: "Udawalawe is the closest Sri Lanka gets to the African savanna. Created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir, this park is the best place in the country to see Asian elephants year-round. Its open plains and marshes provide a stunning backdrop for wildlife photography.",
        whySpecial: "If you want a guaranteed elephant encounter, Udawalawe is the place. Unlike other parks where sightings can be seasonal, Udawalawe's resident herds are always present, often seen bathing in the reservoir or grazing in the vast open grasslands.",
        highlights: [
            "Guaranteed Asian elephant sightings",
            "Udawalawe Elephant Transit Home (Rehabilitation center)",
            "Open savanna-like grasslands for clear photography",
            "Rich birdlife including serpent eagles and kingfishers",
            "Frequent sightings of water buffalo and spotted deer"
        ],
        gallery: [
            "/minneriya-elephant-gathering.jpg",
            "/jungle-scene.jpg",
            "/minneriya-elephant-gathering.jpg",
            "/yala-leopard-national-park.jpg"
        ],
        details: {
            bestTime: "Year-round, but May to September is peak",
            keyAnimals: "Asian Elephants, Water Buffalo, Spotted Deer, Mugger Crocodiles",
            activities: "Jeep Safaris, Visiting Elephant Transit Home, Birding",
            duration: "3-4 hour safari (Morning or Afternoon)",
        },
        travelTips: {
            packing: "Sun protection is vital as the park is very open. Bring a light scarf for dust.",
            entry: "Permits available at the gate. Combine with a visit to the Elephant Transit Home.",
            ethical: "Keep a respectful distance from elephants, especially mothers with calves."
        }
    },
    "minneriya-national-park": {
        title: "Minneriya National Park",
        subtitle: "Home of 'The Gathering'",
        image: "/minneriya-elephant-gathering.jpg",
        description: "Located in the heart of the Cultural Triangle, Minneriya is famous for one of the world's most incredible wildlife spectacles: 'The Gathering'. During the dry season, hundreds of elephants migrate to the shores of the ancient Minneriya Tank to feed, socialize, and drink.",
        whySpecial: "The Gathering is ranked by Lonely Planet as one of the 10 greatest wildlife spectacles in the world. Witnessing 300+ elephants in a single location is an awe-inspiring experience that you won't find anywhere else in Asia.",
        highlights: [
            "The Gathering (July to September)",
            "Ancient Minneriya Tank (3rd-century irrigation wonder)",
            "Large numbers of cormorants and painted storks",
            "Beautiful views of the central mountains",
            "Sightings of rare Purple-faced Langurs"
        ],
        gallery: [
            "/minneriya-elephant-gathering.jpg",
            "/jungle-scene.jpg",
            "/minneriya-elephant-gathering.jpg",
            "/yala-leopard-national-park.jpg"
        ],
        details: {
            bestTime: "July to September (Peak for The Gathering)",
            keyAnimals: "Elephants (in hundreds), Painted Storks, Pelicans, Deer",
            activities: "Afternoon Jeep Safaris (best for elephant viewing)",
            duration: "3 hours (Typically starting at 3:00 PM)",
        },
        travelTips: {
            packing: "Camera with a wide-angle lens for group shots. Comfortable shoes.",
            entry: "Can be crowded during August, so arrive early at the gate.",
            ethical: "Do not encourage drivers to get too close to the herds. Let the elephants move freely."
        }
    },
    "bundala-national-park": {
        title: "Bundala National Park",
        subtitle: "A Birdwatcher's Coastal Paradise",
        image: "/jungle-scene.jpg",
        description: "Bundala is a UNESCO Biosphere Reserve and the first Ramsar wetland in Sri Lanka. It's a complex network of lagoons, scrub jungle, and sand dunes that serves as a critical wintering ground for migratory birds from as far away as Siberia.",
        whySpecial: "Bundala is the only park in Sri Lanka where you can see both marsh and saltwater crocodiles in the same lagoon. It's a peaceful alternative to Yala, offering incredible birding and coastal wilderness without the crowds.",
        highlights: [
            "UNESCO Biosphere Reserve status",
            "Greater Flamingo migrations",
            "Crucial turtle nesting beaches",
            "Unique coastal wetland ecosystem",
            "Silent, crowd-free safari experience"
        ],
        gallery: [
            "/jungle-scene.jpg",
            "/minneriya-elephant-gathering.jpg",
            "/jungle-scene.jpg",
            "/yala-leopard-national-park.jpg"
        ],
        details: {
            bestTime: "December to March (Peak migratory bird season)",
            keyAnimals: "Flamingos, Pelicans, Storks, Crocodiles, Elephants",
            activities: "Birdwatching Safaris, Nature Photography, Lagoon Tours",
            duration: "3-4 hours (Early morning is best)",
        },
        travelTips: {
            packing: "Binoculars are a MUST. Bird identification guide recommended.",
            entry: "Entrance is near Hambantota. Often combined with Yala tours.",
            ethical: "Respect the nesting sites of birds. Keep noise to an absolute minimum."
        }
    },
    "wilpattu-national-park": {
        title: "Wilpattu National Park",
        subtitle: "The Land of Lakes",
        image: "/jungle-scene.jpg",
        description: "Wilpattu is the largest and oldest national park in Sri Lanka. Its name comes from the 'Villus'—natural, sand-rimmed water basins that fill with rainwater. The park is a dense, wild jungle that offers a truly raw and uncrowded safari experience in the northwest of the island.",
        whySpecial: "Wilpattu is for the true wilderness seeker. It competes with Yala for leopard sightings but offers much more seclusion. The unique 'Villu' ecosystems create a hauntingly beautiful landscape that feels untouched by time.",
        highlights: [
            "Sri Lanka's largest national park",
            "Unique 'Villu' (Natural lakes) landscapes",
            "Excellent leopard and sloth bear sightings",
            "High density of endemic flora and fauna",
            "Incredible sense of solitude and adventure"
        ],
        gallery: [
            "/jungle-scene.jpg",
            "/minneriya-elephant-gathering.jpg",
            "/jungle-scene.jpg",
            "/yala-leopard-national-park.jpg"
        ],
        details: {
            bestTime: "February to October (May to September is best)",
            keyAnimals: "Leopards, Sloth Bears, Barking Deer, Painted Storks",
            activities: "Full-day Expeditions, Leopard Tracking, Camping",
            duration: "Full-day safari highly recommended",
        },
        travelTips: {
            packing: "Binoculars, earth-toned clothing, snacks for a long day.",
            entry: "Gate is at Hunuwilgama. Private jeeps are necessary.",
            ethical: "Stay on established tracks. This is a very large park, so trust your guide."
        }
    }
}
