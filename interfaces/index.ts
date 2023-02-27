import { Post } from 'contentlayer/generated';

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
  onToggle: () => void;
}

export interface IThemeProps {
  isDarkMode?: boolean;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children?: any;
}

export interface PostPageProps {
  params: {
    slug: string[];
  };
}

export interface IGroupPost {
  label: string;
  data: Post[];
}

export interface PostCardProps {
  post: Post;
}

export interface TagsProps {
  tags: string[];
}
