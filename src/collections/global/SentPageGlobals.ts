import { GlobalConfig } from 'payload'

const previewBaseurl = process.env.LIVE_PREVIEW_URL ?? 'https://asidik-draft.tomwojciechowski.workers.dev'

export const SentPageGlobals: GlobalConfig = {
  slug: 'sentPageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
    admin: {
    preview: ({slug}) => `${previewBaseurl}/sent`,
    livePreview: {
      url: `${previewBaseurl}/sent`,
    }
  },
  fields: [
    {
      name: 'ContactSent',
      type: 'group',
      fields: [
        {
          name: 'successHeader',
          type: 'text',
          required: true,
        },
        {
          name: 'successText',
          type: 'richText',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          required: true,
        },
        {
          name: 'successIconAnimation',
          type: 'textarea',
          required: true,
          defaultValue: 'meow',
          maxLength: 100000,
          admin: {
            description: 'Lottie animation JSON',
            components: {
              Field: '/components/fields/LottieField#LottieField',
              Cell: '/components/cells/LottieCell#LottieCell',
            },
          },
        },
      ],
    },
  ],
}
