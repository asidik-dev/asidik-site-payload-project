import type { CollectionConfig } from 'payload'
import {
  ButtonBlock,
  CardBulletPointSection,
  FeatureCardBlock,
  SingleColumnCenterRichTextBlock,
  SpacerBlock,
} from '@/collections/blocks/blocks'

const previewBaseurl = process.env.LIVE_PREVIEW_URL ?? 'https://asidik-draft.tomwojciechowski.workers.dev'

// Collections
export const Services: CollectionConfig = {
  slug: 'services',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'name',
    preview: ({ slug }) => `${previewBaseurl}/services/${slug}`,
    livePreview: {
      url: ({ collectionConfig, req, data }) => {
        return `${previewBaseurl}/services/${data.slug}`
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'animatedIcon',
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
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subheading',
          type: 'text',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'pageSections',
      type: 'blocks',
      blockReferences: [
        SpacerBlock,
        SingleColumnCenterRichTextBlock,
        CardBulletPointSection,
        FeatureCardBlock
      ],
      blocks: [],
    },
    {
      name: 'parentService',
      type: 'relationship',
      relationTo: 'parent-services',
    },
    {
      name: 'seo',
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
}

export const ParentServices: CollectionConfig = {
  slug: 'parent-services',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'name',
    preview: ({ slug }) => `${previewBaseurl}/services`,
    livePreview: {
      url: ({ collectionConfig, req, data }) => {
        return `${previewBaseurl}/services`
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'animatedIcon',
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
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
  ],
}

export const Projects: CollectionConfig = {
  slug: 'projects',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'services', 'featured'],
    preview: ({ slug }) => `${previewBaseurl}/projects/${slug}`,
    livePreview: {
      url: ({ collectionConfig, req, data }) => {
        return `${previewBaseurl}/projects/${data.slug}`
      },
    },
  },
  access: {
    read: () => true,
  },
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'forceSmall',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'detailedText',
      type: 'richText',
      required: true,
    },
    {
      name: 'additionalImages',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'displayOrder',
      type: 'number',
      admin: {
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'seo',
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
}

export const Processes: CollectionConfig = {
  slug: 'processes',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
        preview: ({ slug }) => `${previewBaseurl}/about`,
    livePreview: {
      url: ({collectionConfig, req, data}) => {
        return `${previewBaseurl}/about`
      },
    },
  },
  access: {
    read: () => true,
  },
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
      name: 'processNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
}

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'clientName',
        preview: ({ slug }) => `${previewBaseurl}/about`,
    livePreview: {
      url: ({collectionConfig, req, data}) => {
        return `${previewBaseurl}/about`
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'companyName',
      type: 'text',
      required: true,
    },
  ],
}
