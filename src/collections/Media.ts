import type { CollectionConfig } from 'payload'

import {Media as MediaType} from "../payload-types"
import { updateImage } from '@/util/images'
import { cloudflare } from '@payload-config'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async ({collection, req, data, doc, operation}) => {

        const media: MediaType = doc as MediaType;
        await updateImage(media, cloudflare.env.R2, req.payload.db)

      }
    ]
  },
  upload: {
    imageSizes: [
      {
        name: 'full',
        formatOptions: {
          format: 'avif',
        },
      },
    ],
    // These are not supported on Workers yet due to lack of sharp
    crop: false,
    focalPoint: false,
  },
}
