export interface PostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    tag: string;
    toolLink?: string;
    toolName?: string;
}

export const posts: PostMeta[] = [
    {
        slug: "how-fourier-transforms-work",
        title: "How Fourier Transforms Work — An Interactive Visual Guide",
        description:
            "A first-principles explanation of Fourier transforms: why any signal can be broken into sine waves, and how to see it happen in real time with our free visualizer.",
        date: "2026-03-08",
        readTime: "8 min read",
        tag: "Mathematics",
        toolLink: "https://www.firstprincipleslearningg.com/math/fourier-transform",
        toolName: "Fourier Transform Visualizer",
    },
    {
        slug: "sorting-algorithms-compared",
        title: "Sorting Algorithms Compared: Which Is Actually Fastest?",
        description:
            "Bubble, merge, quick, heap — we benchmark them all with real animations. See exactly why O(n log n) matters and when each algorithm shines.",
        date: "2026-03-08",
        readTime: "10 min read",
        tag: "Computer Science",
        toolLink: "https://www.firstprincipleslearningg.com/cs/sorting-visualizer",
        toolName: "Sorting Visualizer",
    },
    {
        slug: "circuit-analysis-tutorial",
        title: "Understanding Circuit Analysis — Build and Simulate Free",
        description:
            "Learn Kirchhoff's laws, Ohm's law, and RC transient analysis by actually building and simulating circuits in your browser. No MATLAB needed.",
        date: "2026-03-08",
        readTime: "7 min read",
        tag: "Physics",
        toolLink: "https://www.firstprincipleslearningg.com/physics/circuit-builder",
        toolName: "Circuit Builder",
    },
];
