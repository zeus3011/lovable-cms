export default {
  name: "service",
  title: "Service",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
    },
    {
      name: "image",
      title: "Service Image",
      type: "image",
    },
    {
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "e.g. 189 / 190 / 491 VISA APPROVED",
    },
    {
      name: "items",
      title: "Service Items / Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Item Text",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};