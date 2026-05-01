export default {
  name: "hero",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "slides",
      title: "Carousel Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", type: "string" },
            { name: "subheading", type: "text" },
            { name: "backgroundImage", type: "image" },
            {
              name: "buttons",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "text", type: "string" },
                    { name: "link", type: "string" },
                  ],
                },
              ],
            },
            
          ],
        },
      ],
    },
    {
      name: "features",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "image" },
            { name: "title", type: "string" },
            { name: "subtitle", type: "string" },
          ],
        },
      ],
    },
  ],
};