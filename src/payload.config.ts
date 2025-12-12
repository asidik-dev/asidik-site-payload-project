// storage-adapter-import-placeholder
import { sqliteD1Adapter } from '@payloadcms/db-d1-sqlite' // database-adapter-import
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, PaginatedDocs } from 'payload'
import { fileURLToPath } from 'url'
import { CloudflareContext, getCloudflareContext } from '@opennextjs/cloudflare'
import { GetPlatformProxyOptions } from 'wrangler'
import { r2Storage } from '@payloadcms/storage-r2'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ParentServices, Processes, Projects, Services, Testimonials } from './collections/Lots'
import { HomePageGlobals } from '@/collections/global/HomePageGlobals'
import {
  CardBulletPointSection,
  FeatureCardBlock,
  SingleColumnCenterRichTextBlock,
  SpacerBlock,
} from '@/collections/blocks/blocks'
import { AboutPageGlobals } from '@/collections/global/AboutPageGlobals'
import { OurWorkPageGlobals } from '@/collections/global/OurWorkPageGlobals'
import { ContactPageGlobals } from '@/collections/global/ContactPageGlobals'
import { SentPageGlobals } from '@/collections/global/SentPageGlobals'
import { ServicePageGlobals } from '@/collections/global/ServicePageGlobals'

import { Media as MediaType } from 'src/payload-types'
import { updateImage } from '@/util/images'
import { cloudFlareSharpImpl } from '@/util/cf/sharpimpl'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isCLI = process.argv.some((value) => value.match(/^(generate|migrate):?/))
const isProduction = process.env.NODE_ENV === 'production'

export const cloudflare =
  isCLI || !isProduction
    ? await getCloudflareContextFromWrangler()
    : await getCloudflareContext({ async: true })

export default buildConfig({
  sharp: cloudFlareSharpImpl,
  admin: {
    components: {
      actions: ['/components/admin/GenerateImages#GenerateImagesButton'],
      beforeDashboard: [],
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },

    livePreview: {
      // url: ({collectionConfig, globalConfig, req, locale, data}) => {
      //
      // },
      collections: ['projects', 'parent-services', 'services'],
      globals: ['homePageGlobals'],
      breakpoints: [
        {
          label: 'Mobile Small',
          name: 'mobile-sm',
          width: 320,
          height: 568,
        },
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Mobile Large',
          name: 'mobile-lg',
          width: 414,
          height: 896,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Tablet Large',
          name: 'tablet-lg',
          width: 834,
          height: 1112,
        },
        {
          label: 'Laptop',
          name: 'laptop',
          width: 1024,
          height: 768,
        },
        {
          label: 'Laptop Large',
          name: 'laptop-lg',
          width: 1440,
          height: 900,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1920,
          height: 1080,
        },
        {
          label: 'Wide Desktop',
          name: 'desktop-wide',
          width: 2560,
          height: 1440,
        },
      ],
    },
  },
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'French',
        code: 'fr',
      },
    ],
    defaultLocale: 'en', // required
    fallback: true, // defaults to true
  },
  endpoints: [
    {
      path: '/generateImages',
      method: 'get',
      handler: async (req) => {
        if (!req.user) {
          return Response.json(
            { message: 'Nope' },
            { status: 401, statusText: 'Not authenticated' },
          )
        }

        try {
          const mediaCollection: PaginatedDocs<MediaType> = await req.payload.db.find({
            collection: 'media',
          })


          const mediaCollectionDocs = mediaCollection.docs
          for (const mediaCollectionDoc of mediaCollectionDocs) {
            //Lets make a fake one for each of the previews to test this
            await updateImage(mediaCollectionDoc, cloudflare.env.R2, req.payload.db)
          }

          return Response.json({
            message: `All good`,
          })
        } catch (err) {
          console.log(JSON.stringify(err, null, 2));
          return Response.json({
            error: err,
          }, {
            status: 500
          })
        }
      },
    },
  ],
  blocks: [SingleColumnCenterRichTextBlock, SpacerBlock, CardBulletPointSection, FeatureCardBlock],
  collections: [Users, Media, Services, Projects, ParentServices, Testimonials, Processes],
  globals: [
    HomePageGlobals,
    AboutPageGlobals,
    OurWorkPageGlobals,
    ContactPageGlobals,
    SentPageGlobals,
    ServicePageGlobals,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: sqliteD1Adapter({ binding: cloudflare.env.D1 }),
  // database-adapter-config-end
  plugins: [
    // storage-adapter-placeholder
    r2Storage({
      bucket: cloudflare.env.R2,
      collections: { media: true },
    }),
  ],
})

// Adapted from https://github.com/opennextjs/opennextjs-cloudflare/blob/d00b3a13e42e65aad76fba41774815726422cc39/packages/cloudflare/src/api/cloudflare-context.ts#L328C36-L328C46
function getCloudflareContextFromWrangler(): Promise<CloudflareContext> {
  return import(/* webpackIgnore: true */ `${'__wrangler'.replaceAll('_', '')}`).then(
    ({ getPlatformProxy }) =>
      getPlatformProxy({
        environment: process.env.CLOUDFLARE_ENV,
        remoteBindings: isProduction,
      } satisfies GetPlatformProxyOptions),
  )
}
