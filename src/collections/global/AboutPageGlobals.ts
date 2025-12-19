import { GlobalConfig } from 'payload'

const previewBaseurl = process.env.LIVE_PREVIEW_URL ?? 'https://draft.asidik.com'

export const AboutPageGlobals: GlobalConfig = {
  slug: 'aboutPageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
    admin: {
    preview: ({slug}) => `${previewBaseurl}/about`,
    livePreview: {
      url: `${previewBaseurl}/about`,
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
