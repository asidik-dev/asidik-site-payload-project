import path from 'path'
import { cloudflare } from '@payload-config'
import { DatabaseAdapter } from 'payload'
import { Media } from '@/payload-types'

export const updateImage = async (mediaCollectionDoc: Media, R2: R2Bucket, db: DatabaseAdapter) => {
  const sizes = mediaCollectionDoc.sizes

  const full = sizes.full

  const ext = path.extname(mediaCollectionDoc.filename)
  const fileName = path.basename(mediaCollectionDoc.filename, ext)

  const getTheOriginal = await cloudflare.env.R2.get(mediaCollectionDoc.filename)

  const originalBuffer = await getTheOriginal.arrayBuffer()

  const token = '8CZ46ToRDCNkjLhQ9WfULby4TVMjjPcF7CcjSzSf'

  const fileResult = await fetch(` https://webp-worker.tomwojciechowski.workers.dev/${mediaCollectionDoc.filename}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: originalBuffer,
  })

  const calculatedFileName = `${fileName}-full.avif`

  const returnedImage = await fileResult.arrayBuffer()
  const res = await R2.put(calculatedFileName, returnedImage)

  full.width = mediaCollectionDoc.width
  full.height = mediaCollectionDoc.height
  full.mimeType = 'image/avif'
  full.filesize = returnedImage.byteLength
  full.filename = calculatedFileName
  full.url = `/api/media/file/${calculatedFileName}`

  await db.updateOne({
    collection: 'media',
    id: mediaCollectionDoc.id,
    data: {
      'sizes.full': full,
    },
  })
}
