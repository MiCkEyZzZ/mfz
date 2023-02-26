export interface IMdxProps {
  code: string;
}

export interface IErrorProps {
  error: Error;
  reset: () => void;
}

export interface IBreadcrumbsProps {
  title: string;
  tag: string;
}

export interface IMobileMenuProps {
  onClose: () => void;
}

export interface IThemeProps {
  isDarkMode?: boolean;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children?: any;
}
