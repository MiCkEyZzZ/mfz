'use client';

import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const links = [
  { name: 'I глава', path: '/#' },
  { name: 'II глава', path: '/#' },
  { name: 'III глава', path: '/#' },
  { name: 'IV глава', path: '/#' },
  { name: 'V глава', path: '/#' },
  { name: 'VI глава', path: '/#' },
];

function renderContentLink(): JSX.Element[] {
  return links.map((link) => {
    return (
      <li key={link.name} className="mt-3.5">
        <a
          href={link.path}
          className="text-smb text-[#414141] opacity-70 hover:opacity-100 dark:text-white"
        >
          {link.name}
        </a>
      </li>
    );
  });
}

interface ITreeProps {
  tree: any;
  level?: number;
  activeItem?: string;
}

function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

// return tree?.item?.length && level < 3 ? <ul className="mt-3.5">{renderContentLink()}</ul> : null;
function Tree({ tree, level = 1, activeItem }: ITreeProps): JSX.Element | null {
  return tree?.items?.length && level < 3 ? (
    <ul className={cn('m-0 list-none', { 'pl-4': level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn('mt-0 pt-2')}>
            <a
              href={item.url}
              className={cn(
                'inline-block no-underline',
                item.url === `#${activeItem}`
                  ? 'text-state-900 font-medium'
                  : 'text-sm text-slate-600 hover:text-slate-900',
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default Tree;
