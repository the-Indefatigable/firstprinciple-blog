import { posts } from "../posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const content: Record<string, React.ReactNode> = {
    "how-fourier-transforms-work": (
        <div className="prose">
            <h2>What Is a Fourier Transform?</h2>
            <p>At its core, a Fourier transform answers one question: <strong>what frequencies make up this signal?</strong> Any signal — audio, light, radio waves, stock prices — can be decomposed into a sum of simple sine waves, each with its own frequency and amplitude.</p>
            <p>Joseph Fourier proved this startling fact in 1807: <em>any</em> periodic function, no matter how jagged or complex, equals an infinite sum of sines and cosines. This single idea powers everything from MP3 compression to MRI machines.</p>
            <h2>The Intuition: A Smoothie Analogy</h2>
            <p>Imagine you&apos;re handed a smoothie. You can taste it — that&apos;s the <strong>time domain</strong> (the mixed signal). A Fourier transform is like a machine that un-blends the smoothie back into its individual ingredients (banana, strawberry, mango) — that&apos;s the <strong>frequency domain</strong>.</p>
            <h2>The Math (Simplified)</h2>
            <p>The continuous Fourier transform is defined as:</p>
            <pre><code>F(ω) = ∫ f(t) · e^(-iωt) dt</code></pre>
            <ul>
                <li><strong>f(t)</strong> — your original signal (a function of time)</li>
                <li><strong>e^(-iωt)</strong> — a &ldquo;probe&rdquo; sine wave at frequency ω</li>
                <li><strong>F(ω)</strong> — the result: how much of frequency ω is in the signal</li>
            </ul>
            <p>You&apos;re essentially multiplying your signal by each possible frequency and integrating. If the signal contains that frequency, the integral is large. If not, it cancels out to zero.</p>
            <h2>Why It Matters</h2>
            <ul>
                <li><strong>Audio processing</strong> — MP3 compression removes frequencies you can&apos;t hear</li>
                <li><strong>Medical imaging</strong> — MRI machines reconstruct images from frequency data</li>
                <li><strong>Telecommunications</strong> — 5G, WiFi, and radio all use frequency-domain modulation</li>
                <li><strong>Quantum mechanics</strong> — position and momentum are Fourier transform pairs</li>
                <li><strong>Image processing</strong> — JPEG compression uses DCT, a variant of the Fourier transform</li>
            </ul>
            <div className="post-cta">
                <h3>🎵 Try the Interactive Fourier Transform Visualizer</h3>
                <p>Plot any signal and watch its frequency spectrum update live. Free, no signup required.</p>
                <a href="https://www.firstprincipleslearningg.com/math/fourier-transform" className="cta-btn">Open Fourier Transform Tool →</a>
            </div>
            <h2>Key Takeaways</h2>
            <ul>
                <li>Any signal = a sum of sine waves (Fourier&apos;s theorem)</li>
                <li>The Fourier transform converts time → frequency domain</li>
                <li>It&apos;s the mathematical backbone of modern signal processing</li>
                <li>Understanding it visually makes the math click instantly</li>
            </ul>
        </div>
    ),
    "sorting-algorithms-compared": (
        <div className="prose">
            <h2>Why Sorting Matters</h2>
            <p>Sorting is the most studied problem in computer science — not because sorting itself is exciting, but because it&apos;s the <strong>gateway to understanding algorithmic complexity</strong>.</p>
            <h2>The Contenders</h2>
            <h3>Bubble Sort — O(n²)</h3>
            <p>Compare adjacent elements and swap if out of order. Repeat until sorted. Intuitive but painfully slow on large datasets. Only useful for teaching.</p>
            <h3>Merge Sort — O(n log n)</h3>
            <p>Divide the array in half, sort each half recursively, merge them back. Guaranteed O(n log n) but needs O(n) extra memory for the merge buffer.</p>
            <h3>Quick Sort — O(n log n) average</h3>
            <p>Pick a pivot, partition into less/greater, recurse. Often the fastest in practice due to cache-friendly memory access. Degrades to O(n²) with bad pivots.</p>
            <h3>Heap Sort — O(n log n)</h3>
            <p>Build a max-heap, repeatedly extract the maximum. In-place and guaranteed O(n log n), but cache-unfriendly.</p>
            <h2>The Real Comparison</h2>
            <ul>
                <li><strong>Quick sort wins in practice</strong> despite same Big-O as merge sort — cache locality matters</li>
                <li><strong>Merge sort wins for linked lists</strong> where random access is expensive</li>
                <li><strong>Insertion sort beats everything for small n</strong> (n &lt; 20), which is why Timsort uses it</li>
            </ul>
            <blockquote>Python&apos;s built-in <code>sorted()</code> uses Timsort — a hybrid of merge sort and insertion sort.</blockquote>
            <div className="post-cta">
                <h3>🏁 Watch Algorithms Race in Real Time</h3>
                <p>Compare bubble, merge, quick, and heap sort visually. Adjust array size and speed.</p>
                <a href="https://www.firstprincipleslearningg.com/cs/sorting-visualizer" className="cta-btn">Open Sorting Visualizer →</a>
            </div>
        </div>
    ),
    "circuit-analysis-tutorial": (
        <div className="prose">
            <h2>Why Circuit Analysis Feels Hard</h2>
            <p>Most students struggle with circuits not because the physics is hard, but because they can&apos;t <em>see</em> what&apos;s happening. Current is invisible. Voltage is abstract. And textbook diagrams don&apos;t move.</p>
            <p>The fix? <strong>Build and simulate circuits</strong> as you learn.</p>
            <h2>The Three Laws You Need</h2>
            <h3>Ohm&apos;s Law: V = IR</h3>
            <p>The voltage across a resistor equals the current through it times its resistance. Resistors don&apos;t &ldquo;use up&rdquo; current — they create a voltage drop proportional to the current.</p>
            <h3>Kirchhoff&apos;s Voltage Law (KVL)</h3>
            <p>The sum of all voltages around any closed loop equals zero. Conservation of energy applied to circuits.</p>
            <h3>Kirchhoff&apos;s Current Law (KCL)</h3>
            <p>The sum of currents entering any node equals the sum leaving. Conservation of charge.</p>
            <h2>Series vs. Parallel</h2>
            <ul>
                <li><strong>Series:</strong> Components share the same current. R_total = R₁ + R₂</li>
                <li><strong>Parallel:</strong> Components share the same voltage. 1/R_total = 1/R₁ + 1/R₂</li>
            </ul>
            <h2>RC Circuits: Where It Gets Interesting</h2>
            <p>Add a capacitor and circuits gain <em>memory</em>. An RC circuit charges exponentially with time constant τ = RC. This is the basis for filters, timers, touch screens, and ADCs.</p>
            <div className="post-cta">
                <h3>⚡ Build and Simulate Circuits Free</h3>
                <p>Drag-and-drop schematic editor with DC analysis and oscilloscope view. No signup required.</p>
                <a href="https://www.firstprincipleslearningg.com/physics/circuit-builder" className="cta-btn">Open Circuit Builder →</a>
            </div>
        </div>
    ),
};

export async function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.description,
        alternates: { canonical: `https://www.firstprincipleslearningg.com/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: ["FirstPrinciple Tutoring"],
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) notFound();
    const body = content[slug];
    if (!body) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: { "@type": "Organization", name: "FirstPrinciple Tutoring", url: "https://www.firstprincipleslearningg.com" },
        publisher: { "@type": "Organization", name: "FirstPrinciple Tutoring" },
        mainEntityOfPage: `https://www.firstprincipleslearningg.com/blog/${post.slug}`,
    };

    return (
        <main className="blog-container">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article>
                <header className="post-header">
                    <Link href="/blog" className="post-header-back">← Back to all posts</Link>
                    <h1>{post.title}</h1>
                    <div className="post-header-meta">
                        <span className="post-card-tag">{post.tag}</span>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                    </div>
                </header>
                {body}
                <div className="post-cta" style={{ marginTop: 56 }}>
                    <h3>📚 Need help understanding {post.tag.toLowerCase()}?</h3>
                    <p>Book a free 30-minute consultation with a FirstPrinciple tutor.</p>
                    <a href="https://www.firstprincipleslearningg.com" className="cta-btn">Book Free Consultation →</a>
                </div>
            </article>
        </main>
    );
}
