export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header Section",
      type: "header",
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "hero",
    },
    {
      name: "trustStrip",
      title: "Trust Strip Section",
      type: "trustStrip",
    },
    {
      name: "howWeWork",
      title: "How We Work Section",
      type: "howWeWork",
    },
    {
      name: "services",
      title: "Services Section",
      type: "array",
      of: [{ type: "service" }],
    },
    {
      name: "outcomes",
      title: "Client Outcomes Section",
      type: "outcomes",
    },
    {
      name: "about",
      title: "About Section",
      type: "about",
    },
    {
      name: "insights",
      title: "Insights Section",
      type: "insights",
    },
    {
      name: "cta",
      title: "Call to Action Section",
      type: "cta",
    },
    {
      name: "footer",
      title: "Footer Section",
      type: "footer",
    },
  ],
};