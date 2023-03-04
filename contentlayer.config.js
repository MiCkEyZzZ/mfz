import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(2).join(''),
  },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
    }),
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Заголовок поста',
      required: true,
    },
    tag: {
      type: 'string',
      description: 'Тег документа',
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
}));

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: '**/pages/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Заголовок поста',
      required: true,
    },
    tag: {
      type: 'string',
      description: 'Тег документа',
      required: true,
    },
    seoTitle: {
      type: 'string',
      description: 'ПО Заголовок поста',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'Краткое описание поста',
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
    image: {
      type: 'string',
      description: 'Картинка поста',
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Page],
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
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
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
});
