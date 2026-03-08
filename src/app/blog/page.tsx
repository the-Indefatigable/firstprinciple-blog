import Link from "next/link";
import { getPublishedPosts, readingTime } from "@/lib/firebase-admin";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — STEM Tutorials & Guides",
    description:
        "Deep-dive tutorials on Math, Physics, and Computer Science. First-principles explanations with free interactive tools.",
    alternates: { canonical: "https://www.firstprincipleslearningg.com/blog" },
};

export const revalidate = 60; // ISR: re-generate every 60 seconds

export default async function BlogIndex() {
    const posts = await getPublishedPosts();

    const formatDate = (iso: string) => {
        if (!iso) return "";
        return new Date(iso).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

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

            {posts.length === 0 ? (
                <div className="blog-empty">
                    <p>No articles yet. Check back soon!</p>
                </div>
            ) : (
                <div className="post-grid">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="post-card"
                        >
                            <div className="post-card-meta">
                                <span className="post-card-tag">{post.tag}</span>
                                <span>{formatDate(post.createdAt)}</span>
                                <span>·</span>
                                <span>{readingTime(post.content)}</span>
                            </div>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <span className="post-card-read">Read article →</span>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}
