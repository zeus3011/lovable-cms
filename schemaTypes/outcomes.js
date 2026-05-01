export default {
  name: "outcomes",
  title: "Client Outcomes Section",
  type: "object",
  fields: [
    {
      name: "tagline",
      title: "Tagline (Top Label)",
      type: "string",
      description: "e.g. CLIENT OUTCOMES",
    },
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "testimonials",
      title: "Client Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quote",
              title: "Quote",
              type: "text",
            },
            {
              name: "clientName",
              title: "Client Name",
              type: "string",
            },
            {
              name: "visaCategory",
              title: "Visa Category / Role",
              type: "string",
              description: "e.g. Subclass 189 — Software Engineer",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(10),
    },
  ],
};