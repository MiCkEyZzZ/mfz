import { Breadcrumbs } from 'components'

function PostLayout({ children }): JSX.Element {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  )
}

export default PostLayout
