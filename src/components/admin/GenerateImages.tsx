'use client'
import { toast } from '@payloadcms/ui';

function GenerateImagesButton() {


  return (
    <button
      style={{
        background: 'black',
      }}
      onClick={async () => {
        const res = await fetch('/api/generateImages', {
          method: 'GET',
        })

        if (res.status === 200) {
          const success = toast.success('Successfully generated images')
          console.log(success)
        } else {
          toast.error('Failed to generate images')
        }
      }}
    >
      ReGenerate Images
    </button>
  )
}

export { GenerateImagesButton }
