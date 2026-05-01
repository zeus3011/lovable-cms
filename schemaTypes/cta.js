export default {
  name: "cta",
  title: "Call to Action Section",
  type: "object",
  fields: [
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "e.g. BEGIN YOUR JOURNEY",
    },
    {
      name: "heading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    },
  ],
};