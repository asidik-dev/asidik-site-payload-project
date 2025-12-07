import { GlobalConfig } from 'payload'

export const AboutPageGlobals: GlobalConfig = {
  slug: 'aboutPageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
    admin: {
    preview: ({slug}) => `http://localhost:4321/about`,
    livePreview: {
      url: `http://localhost:4321/about`,
    }
  },
  fields: [
    {
      name: 'About',
      type: 'group',
      fields: [
        {
          name: 'headerText',
          type: 'text',
          required: true,
        },
        {
          name: 'introductoryParagraph',
          type: 'richText',
          required: true,
        },
        {
          name: 'processHeader',
          type: 'text',
          required: true,
        },
        {
          name: 'testimonialsHeader',
          type: 'text',
          required: true,
        },
        {
          name: 'Seo',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'keywords',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
