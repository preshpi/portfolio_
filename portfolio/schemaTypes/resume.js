import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],
})
