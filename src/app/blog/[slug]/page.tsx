import { getPublishedPosts, getPostBySlug, readingTime } from "@/lib/firebase-admin";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
    const posts = await getPublishedPosts();
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `https://www.firstprincipleslearningg.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.createdAt,
            authors: ["FirstPrinciple Tutoring"],
        },
    };
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.createdAt,
        dateModified: post.updatedAt,
        author: {
            "@type": "Organization",
            name: "FirstPrinciple Tutoring",
            url: "https://www.firstprincipleslearningg.com",
        },
        publisher: {
            "@type": "Organization",
            name: "FirstPrinciple Tutoring",
        },
        mainEntityOfPage: `https://www.firstprincipleslearningg.com/blog/${post.slug}`,
    };

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article>
                <header className="post-header">
                    <Link href="/blog" className="post-header-back">
                        ← Back to all posts
                    </Link>
                    <h1>{post.title}</h1>
                    <div className="post-header-meta">
                        <span className="post-card-tag">{post.tag}</span>
                        <span>{formatDate(post.createdAt)}</span>
                        <span>·</span>
                        <span>{readingTime(post.content)}</span>
                    </div>
                </header>

                <MarkdownRenderer content={post.content} />

                <div className="post-cta" style={{ marginTop: 56 }}>
                    <h3>📚 Need help understanding {post.tag.toLowerCase()}?</h3>
                    <p>
                        Book a free 30-minute consultation with a FirstPrinciple tutor.
                    </p>
                    <a
                        href="https://www.firstprincipleslearningg.com"
                        className="cta-btn"
                    >
                        Book Free Consultation →
                    </a>
                </div>
            </article>
        </main>
    );
}
