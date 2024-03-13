import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skillData',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
