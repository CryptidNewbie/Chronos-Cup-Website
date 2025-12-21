export interface Chapter {
    id: string;
    title: string;
    logline: string;
    image?: string;
}

export interface Route {
    id: string;
    title: string;
    subtitle: string;
    teaser: string;
    color: string;
    chapters: Chapter[];
    image: string; // Path to image in public folder
}

export interface BookData {
    title: string;
    subtitle: string;
    blurb: string;
    tagline: string;
    routes: Route[];
    images: {
        hero: string;
        common: string;
    }
}

export const storyData: BookData = {
    title: "The Chronos Cup",
    subtitle: "The Three Paths",
    blurb: "In Capitalia, the city where time is money, Julian dreams of flavors that demand reverence. When he stumbles into The Chronos Cup—an old brick sanctuary—he uncovers a profound sensory ability, his Siphon, and a secret war against the modern rush. Now, faced with a devastating external attack, Julian must choose a master: Kai's ruthless structure, Alistair's intoxicating chaos, or Salvatore's gentle balance. His choice will define his art, his power, and the love that anchors him against the storm.",
    tagline: "Which path will stop time?",
    images: {
        hero: "/images/julian_intro.jpg", // Bakery/City (intro)
        common: "/images/kai_hands.jpg", // Using Hands for "Taste of Time"? Or just general baking.
    },
    routes: [
        {
            id: "common",
            title: "Common Route",
            subtitle: "The Setup",
            color: "text-white", // Neutral
            teaser: "A single, perfect croissant awakens a dangerous sensory power in Julian, forcing him to confront the frustrating mediocrity of his own life.",
            image: "/images/julian_intro.jpg", // Reusing or finding a better match
            chapters: [
                { id: "P_01", title: "The Taste of Time ☕", logline: "A single, perfect croissant awakens a dangerous sensory power in Julian, forcing him to confront the frustrating mediocrity of his own life.", image: "/images/julian_intro.jpg" },
                { id: "P_02", title: "The Three Paths 🧭", logline: "Julian obsesses over the bakery's secret, meeting three unique masters—the perfectionist, the bohemian, and the empath—each offering a different philosophy for his demanding new gift.", image: "/images/P_02.jpg" },
                { id: "P_03", title: "The Catalyst 🔥", logline: "As corporate pressure turns into external sensory interference, Julian's Siphon overloads, and he must choose immediately which guide can save him from the chaos.", image: "/images/P_03.jpg" },
            ]
        },
        {
            id: "kai",
            title: "Kai Route",
            subtitle: "Path of Order",
            color: "text-kai-light",
            teaser: "Under Kai's demanding, silent regimen, Julian learns the exhausting beauty of precision, finding an unexpected spark in their shared, disciplined focus.",
            image: "/images/K_01.jpg",
            chapters: [
                { id: "K_01", title: "The Apprentice", logline: "Under Kai's demanding, silent regimen, Julian learns the exhausting beauty of precision, finding an unexpected spark in their shared, disciplined focus.", image: "/images/K_01.jpg" },
                { id: "K_02", title: "The Pressure Test", logline: "An attempt at emotional baking ends in disaster, forcing Kai's rigid control to shatter and revealing the immense vulnerability beneath his perfectionist shield.", image: "/images/K_02.jpg" },
                { id: "K_03", title: "Rule Breaking", logline: "Julian forces Kai to confront his feeling by tasting an imperfect treat, leading to a passionate, messy, and forbidden breach of structure in the sterile kitchen.", image: "/images/K_03.jpg" },
                { id: "K_04", title: "The Order Climax", logline: "Hand-in-hand, they build a luminous, geometric defense, anchoring their future in the unbreakable power of absolute, shared control.", image: "/images/K_04.jpg" },
            ]
        },
        {
            id: "alistair",
            title: "Alistair Route",
            subtitle: "Path of Chaos",
            color: "text-alistair-light",
            teaser: "Julian's training begins in a chaotic library, where relying on pure instinct and a near-fall forges a thrilling, reckless connection with Alistair.",
            image: "/images/A_01.jpg",
            chapters: [
                { id: "A_01", title: "Dive into Disarray", logline: "Julian's training begins in a chaotic library, where relying on pure instinct and a near-fall forges a thrilling, reckless connection with Alistair.", image: "/images/A_01.jpg" },
                { id: "A_02", title: "The Forbidden Knowledge", logline: "Alistair introduces Julian to the truth of his power—a consuming, wild potential—fueling his reckless pursuit of artistic freedom.", image: "/images/A_02.jpg" },
                { id: "A_03", title: "The Chaotic Release", logline: "A fiery argument ignites a sensory surge, resulting in a passionate kiss that unleashes a storm of floating objects and untamed energy.", image: "/images/A_03.jpg" },
                { id: "A_04", title: "The Chaos Climax", logline: "Embracing the storm, Julian siphons the city's interference, learning to channel raw, terrifying energy into an art of limitless potential.", image: "/images/A_04.jpg" },
            ]
        },
        {
            id: "salvatore",
            title: "Salvatore Route",
            subtitle: "Path of Balance",
            color: "text-salvatore-light",
            teaser: "Salvatore introduces Julian to his hidden garden, teaching him to find peace and power by nurturing, rather than consuming, his ingredients.",
            image: "/images/S_01.jpg",
            chapters: [
                { id: "S_01", title: "Grounding Ritual", logline: "Salvatore introduces Julian to his hidden garden, teaching him to find peace and power by nurturing, rather than consuming, his ingredients.", image: "/images/S_01.jpg" },
                { id: "S_02", title: "The Symbiotic Touch", logline: "A mistake leaves Julian drained, forcing Salvatore to heal him, creating a moment of profound energetic harmony between their two very different powers.", image: "/images/S_02.jpg" },
                { id: "S_03", title: "The Moonlight Embrace", logline: "Julian confesses his deepest fear of consumption, leading to a tender, vulnerable embrace and the promise of a life built on mutual regulation.", image: "/images/S_03.jpg" },
                { id: "S_04", title: "The Balance Climax", logline: "Acting as a filter, Salvatore guides Julian to siphon the city's interference, stabilizing their future through the creation of a perfect, luminous harmony.", image: "/images/S_04.jpg" },
            ]
        }
    ]
};
