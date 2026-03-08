import Link from "next/link";
import { posts } from "./posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — STEM Tutorials & Guides",
    description:
        "Deep-dive tutorials on Math, Physics, and Computer Science. First-principles explanations with free interactive tools.",
    alternates: { canonical: "https://www.firstprincipleslearningg.com/blog" },
};

export default function BlogIndex() {
    return (
        <main className="blog-container">
            <section className="blog-hero">
                <div className="blog-hero-eyebrow">
                    <span className="line" />
                    <span>The FirstPrinciple Blog</span>
                    <span className="line" />
                </div>
                <h1>
                    STEM, explained from <em>scratch.</em>
                </h1>
                <p>
                    First-principles tutorials on math, physics, and computer science —
                    paired with free interactive tools.
                </p>
            </section>

            <div className="post-grid">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="post-card"
                    >
                        <div className="post-card-meta">
                            <span className="post-card-tag">{post.tag}</span>
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <span className="post-card-read">Read article →</span>
                    </Link>
                ))}
            </div>
        </main>
    );
}
