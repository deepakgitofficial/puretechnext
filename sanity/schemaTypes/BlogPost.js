// /schemas/blogPost.js

export default {
  name: "blogPost",
  title: "Blogs",
  type: "document",

  fields: [
    // Blog Title
    {
      name: "title",
      title: "Blog Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(120),
    },

    // Slug URL
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },

    // Short Description
    {
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(250),
    },

    // Main Blog Content
    {
      name: "content",
      title: "Blog Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },

    // Featured Image
    {
      name: "mainImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },

    // Category
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Development", value: "web-development" },
          { title: "SEO", value: "seo" },
          { title: "Technology", value: "technology" },
          { title: "Business", value: "business" },
        ],
      },
    },

    // Tags
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },

    // Author Name
    {
      name: "author",
      title: "Author Name",
      type: "string",
      initialValue: "Admin",
    },

    // Publish Date
    {
      name: "publishedAt",
      title: "Publish Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },

    // {
    //   name: "seoTitle",
    //   title: "SEO Title",
    //   type: "string",
    //   validation: (Rule) => Rule.max(60),
    // },

    // {
    //   name: "seoDescription",
    //   title: "SEO Description",
    //   type: "text",
    //   rows: 3,
    //   validation: (Rule) => Rule.max(160),
    // },

    // {
    //   name: "readingTime",
    //   title: "Reading Time",
    //   type: "string",
    //   description: "Example: 5 min read",
    // },

    // {
    //   name: "featured",
    //   title: "Featured Blog",
    //   type: "boolean",
    //   initialValue: false,
    // },

    // {
    //   name: "status",
    //   title: "Status",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Draft", value: "draft" },
    //       { title: "Published", value: "published" },
    //     ],
    //   },
    //   initialValue: "draft",
    // },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
      subtitle: "category",
    },
  },
};
