import { GlobalConfig } from 'payload'

export const HomePageGlobals: GlobalConfig = {
  slug: 'homePageGlobals',
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
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
