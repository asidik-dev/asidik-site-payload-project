import type { CollectionConfig } from 'payload'
import {
  CardBulletPointSection,
  FeatureCardBlock,
  SingleColumnCenterRichTextBlock,
  SpacerBlock,
} from '@/collections/blocks/blocks'

const previewBaseurl = process.env.LIVE_PREVIEW_URL ?? 'https://draft.asidik.com'

export const WebServices: CollectionConfig = {
  slug: 'webservices',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'name',
    preview: ({ slug }) => `${previewBaseurl}/webservices/${slug}`,
    livePreview: {
      url: ({ collectionConfig, req, data }) => {
        return `${previewBaseurl}/webservices/${data.slug}`
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