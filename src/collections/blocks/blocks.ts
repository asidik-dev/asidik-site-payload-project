import { Block, CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const SpacerBlock: Block = {
  slug: 'SpacerBlock', // required
  fields: [

  ],
}

export const SingleColumnCenterRichTextBlock: Block = {
  slug: 'SingleColumnCenterRichTextBlock', // required
  fields: [
    {
      name: 'Copy',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
  ],
}

export const BulletPointBlock: Block = {
  slug: 'BulletPointBlock', // required
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
  ],
}


export const CardBulletPointSection: Block = {
  slug: 'CardBulletPointSection', // required
  fields: [
    {
      name: 'headerText',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      required: true,
    },
    {
      name: 'bulletPoints',
      type: 'blocks',
      required: true,
      minRows: 4,
      maxRows: 4,
      blocks: [],
      blockReferences: [BulletPointBlock],
    }
  ],
}

export const ButtonBlock : Block = {
  slug: 'ButtonBlock', // required
  fields: [
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
    },
  ],
}

export const FeatureCardBlock: Block = {
  slug: 'FeatureCardBlock', // required
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
    },
    {
      name: 'imageLeft',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'button',
      type: 'blocks',
      blocks: [],
      minRows: 1,
      maxRows: 1,
      blockReferences: [ButtonBlock],
      required: false,
    },
    {
      name: 'counter',
      type: 'number',
    }
  ],
}

