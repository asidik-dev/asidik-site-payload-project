import type { CollectionConfig, GlobalConfig } from 'payload'

// Collections
export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
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
      admin: {
        description: 'Lottie animation JSON',
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
      name: 'parentService',
      type: 'relationship',
      relationTo: 'parent-services',
    },
    {
      name: 'pageSections',
      type: 'blocks',
      blocks: [
        {
          slug: 'featureSection',
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
              name: 'bulletPointCards',
              type: 'array',
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
              ],
            },
          ],
        },
        {
          slug: 'featureCardHorizontal',
          fields: [
            {
              name: 'text',
              type: 'richText',
              required: true,
            },
            {
              name: 'imageLeft',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'button',
              type: 'group',
              fields: [
                {
                  name: 'buttonText',
                  type: 'text',
                },
                {
                  name: 'link',
                  type: 'text',
                },
              ],
            },
            {
              name: 'counter',
              type: 'text',
            },
          ],
        },
        {
          slug: 'singleColumnCenterText',
          fields: [
            {
              name: 'text',
              type: 'richText',
              required: true,
            },
          ],
        },
        {
          slug: 'spacer',
          fields: [],
        },
      ],
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
  admin: {
    useAsTitle: 'name',
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
      admin: {
        description: 'Lottie animation JSON',
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
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'pageSections',
      type: 'blocks',
      blocks: [
        {
          slug: 'featureSection',
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
              name: 'bulletPointCards',
              type: 'array',
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
              ],
            },
          ],
        },
        {
          slug: 'featureCardHorizontal',
          fields: [
            {
              name: 'text',
              type: 'richText',
              required: true,
            },
            {
              name: 'imageLeft',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'button',
              type: 'group',
              fields: [
                {
                  name: 'buttonText',
                  type: 'text',
                },
                {
                  name: 'link',
                  type: 'text',
                },
              ],
            },
            {
              name: 'counter',
              type: 'text',
            },
          ],
        },
        {
          slug: 'singleColumnCenterText',
          fields: [
            {
              name: 'text',
              type: 'richText',
              required: true,
            },
          ],
        },
        {
          slug: 'spacer',
          fields: [],
        },
      ],
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

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'services', 'featured'],
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
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
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
  admin: {
    useAsTitle: 'title',
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
  admin: {
    useAsTitle: 'clientName',
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
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
}

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
  upload: {
    crop: false,
    focalPoint: false,
  },
}

// Globals (Singletons)
export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'introText',
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

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headerText',
      type: 'text',
      required: true,
    },
    {
      name: 'introductoryParagraph',
      type: 'richText',
      required: true,
    },
    {
      name: 'processHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'testimonialsHeader',
      type: 'text',
      required: true,
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

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headerText',
      type: 'text',
      required: true,
    },
    {
      name: 'submitButtonText',
      type: 'text',
      required: true,
    },
    {
      name: 'contactExplanationText',
      type: 'richText',
      required: true,
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

export const ProjectsPage: GlobalConfig = {
  slug: 'projects-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headerText',
      type: 'text',
      required: true,
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

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headerText',
      type: 'text',
      required: true,
    },
    {
      name: 'introductoryParagraph',
      type: 'richText',
      required: true,
    },
    {
      name: 'viewWorkText',
      type: 'text',
      required: true,
    },
    {
      name: 'viewWorkButtonText',
      type: 'text',
      required: true,
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

export const MessageSentPage: GlobalConfig = {
  slug: 'message-sent-page',
  access: {
    read: () => true,
  },
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
      admin: {
        description: 'Lottie animation JSON',
      },
    },
  ],
}
