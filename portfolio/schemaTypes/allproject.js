import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'allproject',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string',
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
    }),
    defineField({
      name: 'codeLink',
      title: 'CodeLink',
      type: 'string',
    }),
    defineField({
      name: 'viewLink',
      title: 'ViewLink',
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
