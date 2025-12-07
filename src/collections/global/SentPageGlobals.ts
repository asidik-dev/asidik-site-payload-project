import { GlobalConfig } from 'payload'

export const SentPageGlobals: GlobalConfig = {
  slug: 'sentPageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
    admin: {
    preview: ({slug}) => `http://localhost:4321/sent`,
    livePreview: {
      url: `http://localhost:4321/sent`,
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
