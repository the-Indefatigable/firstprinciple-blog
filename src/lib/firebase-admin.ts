import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getDb() {
    if (!getApps().length) {
        const projectId = process.env.FB_PROJECT_ID;
        const clientEmail = process.env.FB_CLIENT_EMAIL;
        let privateKey = process.env.FB_PRIVATE_KEY;

        console.log('[blog] FB_PROJECT_ID:', projectId ? '✓ set' : '✗ missing');
        console.log('[blog] FB_CLIENT_EMAIL:', clientEmail ? '✓ set' : '✗ missing');
        console.log('[blog] FB_PRIVATE_KEY:', privateKey ? `✓ set (${privateKey.length} chars)` : '✗ missing');

        if (!projectId || !clientEmail || !privateKey) {
            console.error('[blog] Firebase credentials not found — returning empty posts');
            return null;
        }

        // Handle various private key formats from Vercel env vars
        if (privateKey.includes('\\n')) {
            privateKey = privateKey.replace(/\\n/g, '\n');
        }

        try {
            initializeApp({
                credential: cert({ projectId, clientEmail, privateKey }),
            });
            console.log('[blog] Firebase Admin initialized successfully');
        } catch (initErr) {
            console.error('[blog] Firebase Admin init FAILED:', initErr);
            return null;
        }
    }
    return getFirestore();
}

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    content: string;
    tag: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
    try {
        const db = getDb();
        if (!db) {
            console.error('[blog] getDb() returned null');
            return [];
        }

        console.log('[blog] Fetching all posts from collection "posts"...');
        const snap = await db.collection('posts').get();
        console.log('[blog] Fetched', snap.size, 'total documents');

        const posts = snap.docs
            .map((doc) => {
                const d = doc.data();
                return {
                    slug: d.slug,
                    title: d.title,
                    description: d.description,
                    content: d.content,
                    tag: d.tag,
                    published: d.published,
                    createdAt: d.createdAt?.toDate?.()?.toISOString() || '',
                    updatedAt: d.updatedAt?.toDate?.()?.toISOString() || '',
                };
            })
            .filter((p) => p.published)
            .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));

        console.log('[blog] Published posts:', posts.length);
        return posts;
    } catch (err) {
        console.error('[blog] FETCH ERROR:', err);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const db = getDb();
        if (!db) return null;

        const snap = await db
            .collection('posts')
            .where('slug', '==', slug)
            .limit(1)
            .get();

        if (snap.empty) return null;
        const d = snap.docs[0].data();
        return {
            slug: d.slug,
            title: d.title,
            description: d.description,
            content: d.content,
            tag: d.tag,
            published: d.published,
            createdAt: d.createdAt?.toDate?.()?.toISOString() || '',
            updatedAt: d.updatedAt?.toDate?.()?.toISOString() || '',
        };
    } catch (err) {
        console.error('[blog] Failed to fetch post:', slug, err);
        return null;
    }
}

export function readingTime(content: string): string {
    const words = content.trim().split(/\s+/).length;
    const min = Math.max(1, Math.ceil(words / 200));
    return `${min} min read`;
}
