import { useMDXComponent } from 'next-contentlayer/hooks'

import { IMdxProps } from 'interfaces'
import { AnchorLink, PostCard } from 'components'

const components = {
  a: AnchorLink,
  PostCard,
}

function Mdx({ code }: IMdxProps): JSX.Element {
  const Component = useMDXComponent(code)

  return (
    <article>
      <Component components={{ ...components }} />
    </article>
  )
}

export default Mdx
