import { GlobalConfig } from 'payload'

const previewBaseurl = process.env.LIVE_PREVIEW_URL ?? 'https://asidik.tomwojciechowski.workers.dev'

export const HomePageGlobals: GlobalConfig = {
  slug: 'homePageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  admin: {
    preview: ({slug}) => `${previewBaseurl}`,
    livePreview: {
      url: `${previewBaseurl}`,
    }
  },
  fields: [
    {
      name: 'Home',
      type: 'group',
      fields: [
        {
          name: 'IntroText',
          type: 'textarea',
          required: true,
        },
        {
          name: 'projectsHeader',
          type: 'text',
          required: true,
        },
        {
          name: 'servicesHeader',
          type: 'text',
          required: true,
        },
        {
          name: 'projectsButtonText',
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
