export interface IMdxProps {
  code: string
}

export interface IErrorProps {
  error: Error
  reset: () => void
}

export interface IBreadcrumbsProps {
  title: string
  tag: string
}

export interface IMobileMenuProps {
  onClose: () => void
}
