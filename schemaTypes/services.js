export default {
  name: "service",
  title: "Service",
  type: "object",
  fields: [
    {
      name: "tagline",
      title: "Tagline (Top Label)",
      type: "string",
      description: "e.g. OUR SERVICES",
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
      title: "Service Cards",
      type: "array",
      of: [
        {
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
              name: "link",
              title: "Learn More Link",
              type: "string",
              description: "e.g. /services/skilled-migration or #",
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
        },
      ],
    },
    {
      name: "primaryCTA",
      title: "Primary CTA",
      type: "object",
      fields: [
        { name: "text", title: "Button Text", type: "string" },
        { name: "link", title: "Button Link", type: "string" },
        { name: "openInModal", title: "Open In Consultation Modal", type: "boolean", initialValue: false },
      ],
    },
    {
      name: "secondaryCTA",
      title: "Secondary CTA",
      type: "object",
      fields: [
        { name: "text", title: "Button Text", type: "string" },
        { name: "link", title: "Button Link", type: "string" },
        { name: "openInModal", title: "Open In Consultation Modal", type: "boolean", initialValue: false },
      ],
    },
  ],
};
