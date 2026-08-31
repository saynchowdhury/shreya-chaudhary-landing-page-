export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-01-14". */
  date: string;
  author: string;
  /** Optional featured image URL — real photography only. */
  image?: string;
  imageAlt?: string;
  /** Body as an ordered list of blocks so articles stay structured. */
  body: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "list"; items: string[] }
  >;
  relatedServices?: Array<"bridal-makeup" | "engagement-makeup" | "party-makeup">;
  faqs?: { question: string; answer: string }[];
}

/**
 * Journal articles. Written by hand only — nothing generated, nothing thin.
 * Add entries here and the listing, article page and Article schema follow.
 */
export const posts: Post[] = [];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
