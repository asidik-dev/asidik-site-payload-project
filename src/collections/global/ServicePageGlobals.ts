import { GlobalConfig } from 'payload'

const previewBaseurl = process.env.LIVE_PREVIEW_URL ?? 'https://asidik-draft.tomwojciechowski.workers.dev'

export const ServicePageGlobals: GlobalConfig = {
  slug: 'servicePageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  admin: {
    preview: ({ slug }) => `${previewBaseurl}/services`,
    livePreview: {
      url: `${previewBaseurl}/services`,
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
