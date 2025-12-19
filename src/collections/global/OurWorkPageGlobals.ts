import { GlobalConfig } from 'payload'

const previewBaseurl = process.env.LIVE_PREVIEW_URL ?? 'https://draft.asidik.com'

export const OurWorkPageGlobals: GlobalConfig = {
  slug: 'ourWorkPageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
    admin: {
    preview: ({slug}) => `${previewBaseurl}/ourwork`,
    livePreview: {
      url: `${previewBaseurl}/ourwork`,
    }
  },
  fields: [
    {
      name: 'OurWork',
      type: 'group',
      fields: [
        {
          name: 'headerText',
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
