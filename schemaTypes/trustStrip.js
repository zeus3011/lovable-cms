export default {
  name: "trustStrip",
  title: "Trust Strip Section",
  type: "object",
  fields: [
    {
      name: "trustItems",
      title: "Trust Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "e.g. BadgeCheck, ClipboardList, Eye, Award",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(4),
    },
  ],
};