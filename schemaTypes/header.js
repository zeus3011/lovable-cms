export default {
  name: "header",
  title: "Header",
  type: "object",
  fields: [
    { name: "logo", type: "image", title: "Logo" },
    {
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "link", type: "string" },
          ],
        },
      ],
    },
    { name: "phone", type: "string", title: "Phone Number" },
    { name: "ctaText", type: "string", title: "CTA Text" },
    { name: "ctaLink", type: "string", title: "CTA Link" },
    {
      name: "ctaOpenInModal",
      type: "boolean",
      title: "Header CTA Opens Modal",
      initialValue: false,
    },
  ],
};
