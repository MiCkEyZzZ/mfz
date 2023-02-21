export interface IMdxProps {
  code: string
}

export interface IErrorProps {
  error: Error
  reset: () => void
}

export interface BreadcrumbsProps {
  title: string
  tag: string
}
