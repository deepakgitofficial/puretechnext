import React from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogsData } from "@/data/blogs";
import CTASection from "@/components/home/CTASection";
// import BlogsData from "@/components/BlogsData";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export const metadata = {
  title: "Blog | Pure Tech Zone",
  description:
    "Read the latest insights on Web Development, SEO, and UI/UX design from the team at Pure Tech Zone.",
};

export default async function BlogListingPage() {
  const sanityBlogData = await client.fetch(`*[_type == "blogPost"]`);

  return (
    <>
      <div></div>
      {/* <section className="relative py-15 md:py-20 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-heading">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Blog
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and industry news from our web experts to help
            you navigate the digital landscape.
          </p>
        </div>
      </section> */}

      <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {blogsData.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-accent/80 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" /> {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" /> {post.author}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm flex-grow">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors mt-auto"
                  >
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))} */}

            {sanityBlogData?.map((post) => (
              <article
                key={post?._id}
                className="bg-white dark:bg-[#111111] border border-gray-200  dark:border-white/20 rounded-3xl overflow-hidden  hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group"
              >
                {/* Blog Image */}
                <div className=" bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  {post?.mainImage?.asset && (
                    <img
                      src={urlFor(post?.mainImage).url()}
                      alt={post?.mainImage?.alt || post?.title}
                      className="w-full h-full object-cover  transition-transform duration-500"
                    />
                  )}
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 to-accent/70 mix-blend-multiply"></div> */}
                  {/* Category */}
                  <div className="absolute top-4 left-4 bg-primary backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                    {post?.category?.replace("-", " ")}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post?.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>

                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post?.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post?.slug?.current}`}>
                      {post?.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm flex-grow">
                    {post?.excerpt}
                  </p>

                  {/* {post?.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )} */}

                  {/* Read More */}
                  <Link
                    href={`/blog/${post?.slug?.current}`}
                    className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors mt-auto"
                  >
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <BlogsData /> */}
      {/* <CTASection /> */}
    </>
  );
}
