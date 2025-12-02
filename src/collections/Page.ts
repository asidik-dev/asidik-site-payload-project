import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ]
}
