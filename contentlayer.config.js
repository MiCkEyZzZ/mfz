import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Заголовок поста',
      required: true,
    },
    seoTitle: {
      type: 'string',
      description: 'ПО Заголовок поста',
      required: true,
    },
    isPublished: {
      type: 'boolean',
      description: 'Флаг на публикацию поста',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'Дата публикации поста',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'Краткое описание поста',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Картинка поста',
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlughtedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlughtedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
