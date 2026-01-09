export type Category = "Models" | "Agencies" | "Boutiques" | "Photographers" | "Creatives" | "All"

export const CATEGORIES = [
    { name: "Models", description: "Runway, print, commercial" },
    { name: "Agencies", description: "Global & boutique" },
    { name: "Photographers", description: "Editorial & campaign" },
    { name: "Creatives", description: "MUAs, Stylists, Retouchers" },
    { name: "Boutiques", description: "Luxury & concept" },
]

export const FEATURED_MODELS = [
    {
        id: "m1",
        name: "Elena Rossi",
        location: "Milan",
        height: "5'11\"",
        tags: ["Runway", "Editorial"],
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        verified: true,
        stats: {
            height: "180cm / 5'11\"",
            bust: "81cm / 32\"",
            waist: "61cm / 24\"",
            hips: "89cm / 35\"",
            shoe: "40 EU / 9 US",
            hair: "Dark Brown",
            eyes: "Green",
        },
        experience: "Professional",
        compensation: "Paid Work Only",
        travelNotice: "Paris (Sep 20-25)",
    },
    {
        id: "m2",
        name: "Marcus Chen",
        location: "New York",
        height: "6'2\"",
        tags: ["Commercial", "Fitness"],
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
        verified: false,
        stats: {
            height: "188cm / 6'2\"",
            chest: "96cm / 38\"",
            waist: "76cm / 30\"",
            shoe: "44 EU / 10.5 US",
            hair: "Black",
            eyes: "Dark Brown",
        },
        experience: "Experienced",
        compensation: "Paid & Select TFP",
    },
    {
        id: "m3",
        name: "Sarah Jenks",
        location: "London",
        height: "5'9\"",
        tags: ["New Face", "Print"],
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
        verified: false,
        stats: {
            height: "175cm / 5'9\"",
            bust: "84cm / 33\"",
            waist: "63cm / 25\"",
            hips: "91cm / 36\"",
            shoe: "39 EU / 8.5 US",
            hair: "Blonde",
            eyes: "Blue",
        },
        experience: "New Face",
        compensation: "TFP / Portfolio Building",
    },
]

export const CREATIVES = [
    {
        id: "c1",
        name: "Sophie Clark",
        type: "Makeup Artist",
        location: "London",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
        tags: ["Editorial", "Bridal"],
        rate: "£350/day",
    },
    {
        id: "c2",
        name: "James Miller",
        type: "Stylist",
        location: "New York",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        tags: ["Celebrity", "High Fashion"],
        rate: "$800/day",
    },
    {
        id: "c3",
        name: "Anna V",
        type: "Retoucher",
        location: "Remote",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
        tags: ["Beauty", "Commercial"],
        rate: "$50/image",
    }
]

export const AGENCIES_BOUTIQUES = [
    {
        id: "a1",
        name: "Elite Casting",
        type: "Model Agency",
        location: "Paris & Milan",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "b1",
        name: "Atelier Nova",
        type: "Concept Boutique",
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "p1",
        name: "Lumiere Studios",
        type: "Photo Studio",
        location: "Berlin, DE",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    },
]

export const PHOTOGRAPHERS = [
    {
        id: "ph1",
        name: "Marco Rossi",
        specialty: "Fashion Photographer",
        location: "Milan, IT",
        image: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2035&auto=format&fit=crop",
        stats: {
            camera: "Canon R5",
            lenses: "50mm f/1.2, 85mm f/1.4",
            studio: "Yes (Milan Center)"
        }
    },
    {
        id: "ph2",
        name: "Jules & Co",
        specialty: "Street Style",
        location: "New York, US",
        image: "https://images.unsplash.com/photo-1520155707818-8638c9e050c7?q=80&w=1978&auto=format&fit=crop",
        stats: {
            camera: "Sony A7IV",
            lenses: "35mm f/1.4",
            studio: "No (On location only)"
        }
    },
]

export const JOBS = [
    {
        id: "j1",
        title: "Summer Campaign 2024",
        client: "Zara",
        location: "Barcelona, Spain",
        date: "Aug 12 - 14",
        rate: "€2,500/day",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        tags: ["Female", "Editorial", "Travel"],
    },
    {
        id: "j2",
        title: "E-Commerce Shoot",
        client: "ASOS",
        location: "London, UK",
        date: "ASAP",
        rate: "£400/day",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
        tags: ["Male", "Commercial"],
    },
    {
        id: "j3",
        title: "Paris Fashion Week Runway",
        client: "Balmain",
        location: "Paris, France",
        date: "Sep 25",
        rate: "TBD",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        tags: ["Runway", "High Fashion"],
    },
]

export const MESSAGES = [
    {
        id: "msg1",
        sender: "Elite Casting",
        avatar: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        content: "Hi! We'd love to see you for the casting tomorrow.",
        time: "10:30 AM",
        unread: true,
    },
    {
        id: "msg2",
        sender: "Marco Rossi",
        avatar: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2035&auto=format&fit=crop",
        content: "Great working with you! Sent the edited shots.",
        time: "Yesterday",
        unread: false,
    },
    {
        id: "msg3",
        sender: "Sarah (Agent)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        content: "Can you update your measurements pls?",
        time: "Tue",
        unread: false,
    },
]
