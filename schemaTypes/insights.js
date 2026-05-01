export default {
  name: "insights",
  title: "Insights Section",
  type: "object",
  fields: [
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "e.g. INSIGHTS",
    },
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "viewAllLink",
      title: "View All Link",
      type: "string",
    },
    {
      name: "articles",
      title: "Featured Articles",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "e.g. Calendar, BookOpen, PlayCircle",
            },
            {
              name: "tag",
              title: "Tag",
              type: "string",
              description: "e.g. Update, Guide, Video",
            },
            {
              name: "title",
              title: "Article Title",
              type: "string",
            },
            {
              name: "description",
              title: "Article Description",
              type: "text",
            },
            {
              name: "link",
              title: "Article Link",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(10),
    },
  ],
};