import { GlobalConfig } from 'payload'

export const ServicePageGlobals: GlobalConfig = {
  slug: 'servicePageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  admin: {
    preview: ({ slug }) => `http://localhost:4321/services`,
    livePreview: {
      url: `http://localhost:4321/services`,
    },
  },
  fields: [
    {
      name: 'Services',
      type: 'group',
      fields: [
        {
          name: 'headerText',
          type: 'text',
          required: true,
        },
        {
          name: 'viewWorkHeader',
          type: 'text',
          required: true,
        },
        {
          name: 'viewWorkText',
          type: 'text',
          required: true,
        },
        {
          name: 'viewWorkButtonText',
          type: 'text',
          required: true,
        },
        {
          name: 'introductoryParagraph',
          type: 'richText',
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
