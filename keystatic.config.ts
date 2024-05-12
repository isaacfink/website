import { config, fields, collection, singleton } from "@keystatic/core";

function createCollection(label:string, path:string){
return collection({
  label: label,
  slugField: "title",
  path: `src/content/${path}/*`,
  format: { contentField: "content" },
  entryLayout: "content",
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    published: fields.checkbox({ label: "Published" }),
    publishedDate: fields.date({
      label: "Published Date",
      defaultValue: "now",
    }),
    description: fields.text({ label: "Description" }),
    image: fields.image({ label: "Image", directory: "src/images", publicPath: "/src/images/"}),

    content: fields.document({
      label: "Content",
      formatting: true,
      dividers: true,
      links: true,
      images: {directory: "src/images", publicPath: "/src/images/"},
      description: "The content of the post",
      tables: true,
    }),
  },
})
}


export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: {
      name: "Aluf devs",
    },
  },
  collections: {
    posts: createCollection("Posts", 'blog'),
    ['but-how']: createCollection("But How", 'but-how'),
    jsFramework: createCollection("JS Framework", 'js-web-framework'),
  },
  singletons: {
    about: singleton({
      label: "About",
      path: "src/content/about",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        image: fields.image({ label: "Image" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
          description: "The content of the post",
          tables: true,
        }),
      },
    }),
  },
});
