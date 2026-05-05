export default {
  name: "howWeWork",
  title: "How We Work Section",
  type: "object",
  fields: [
    {
      name: "tagline",
      title: "Tagline (Top Label)",
      type: "string",
      description: "e.g. HOW WE WORK",
    },
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
    },
    {
      name: "steps",
      title: "Process Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
            },
            {
              name: "title",
              title: "Card Title",
              type: "string",
            },
            {
              name: "description",
              title: "Card Description",
              type: "text",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(6),
    },
    {
      name: "primaryCTA",
      title: "Primary Button",
      type: "object",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "string", title: "Button Link" },
        { name: "openInModal", type: "boolean", title: "Open In Consultation Modal", initialValue: false },
      ],
    },
    {
      name: "secondaryCTA",
      title: "Secondary Button",
      type: "object",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "string", title: "Button Link" },
        { name: "openInModal", type: "boolean", title: "Open In Consultation Modal", initialValue: false },
      ],
    },
  ],
};
