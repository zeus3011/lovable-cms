export default {
  name: "footer",
  title: "Footer",
  type: "object",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "description",
      title: "Company Description",
      type: "text",
    },
    {
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "text",
        },
      ],
    },
    {
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "link", type: "string", title: "Link" },
          ],
        },
      ],
    },
    {
      name: "compliance",
      title: "Compliance Information",
      type: "object",
      fields: [
        {
          name: "marn",
          title: "MARN",
          type: "string",
        },
        {
          name: "details",
          title: "Compliance Details",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "string", title: "URL" },
          ],
        },
      ],
    },
    {
      name: "copyright",
      title: "Copyright Text",
      type: "string",
    },
  ],
};