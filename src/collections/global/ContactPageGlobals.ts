import { GlobalConfig } from 'payload'

const previewBaseurl = process.env.LIVE_PREVIEW_URL ?? 'https://asidik-draft.tomwojciechowski.workers.dev'

export const ContactPageGlobals: GlobalConfig = {
  slug: 'contactPageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
    admin: {
    preview: ({slug}) => `${previewBaseurl}/contact`,
    livePreview: {
      url: `${previewBaseurl}/contact`,
    }
  },
  fields: [
    {
      name: 'Contact',
      type: 'group',
      fields: [
        {
          name: 'headerText',
          type: 'text',
          required: true,
        },
        {
          name: 'contactExplanationText',
          type: 'richText',
          required: true,
        },
        {
          name: 'submitButtonText',
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
