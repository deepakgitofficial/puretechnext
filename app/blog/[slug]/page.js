import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, Share2 } from "lucide-react";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

/* Fetch All Blogs */
async function getBlogs() {
  return await client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc){
      _id,
      title,
      author,
      category,
      excerpt,
      content,
      publishedAt,
      tags,
      mainImage,
      slug
    }
  `);
}

/* Static Slugs */
export async function generateStaticParams() {
  const posts = await getBlogs();

  return posts.map((post) => ({
    slug: post?.slug?.current, // ✅ FIXED
  }));
}

/* SEO Metadata */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const posts = await getBlogs();

  const post = posts.find((item) => item?.slug?.current === slug);

  if (!post) {
    return {
      title: "Post Not Found | Pure Tech Zone",
    };
  }

  return {
    title: `${post.title} | Pure Tech Zone`,
    description: post.excerpt,
  };
}

/* Blog Detail Page */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const posts = await getBlogs();

  const post = posts.find((item) => item?.slug?.current === slug);

  if (!post) notFound();

  return (
    <article className="pt-32 pb-20 bg-white dark:bg-[#0a0a0a]">
      {/* Header */}
      <header className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary mb-8 transition-colors"
        >
          &larr; Back to Blog
        </Link>

        {/* Category */}
        <div className="mb-6 flex justify-center">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            {post?.category?.replace("-", " ")}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
          {post?.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post?.author}
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(post?.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {Math.ceil(post?.content?.length / 4)} min read
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container mx-auto px-4 max-w-5xl mb-16">
        <div className="rounded-3xl overflow-hidden shadow-xl h-auto">
          {post?.mainImage?.asset && (
            <img
              src={urlFor(post.mainImage).width(1400).url()}
              alt={post?.mainImage?.alt || post?.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Excerpt */}
        <p className="text-xl text-gray-600 dark:text-gray-300 italic border-l-4 border-primary pl-6 mb-10 leading-relaxed">
          {post?.excerpt}
        </p>

        {/* Portable Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post?.content?.map((block) => {
            const text = block?.children?.map((child) => child.text).join("");

            if (block.style === "h2") {
              return (
                <h2
                  key={block._key}
                  style={{ fontSize: "24px", marginTop: "20px" }}
                >
                  {text}
                </h2>
              );
            }

            if (block.listItem === "bullet") {
              return (
                <ul key={block._key}>
                  <li>{text}</li>
                </ul>
              );
            }

            return <p key={block._key}>{text}</p>;
          })}
        </div>

        {/* Tags */}
        {post?.tags?.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Share */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <span className="font-semibold">Share this article:</span>

          <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
