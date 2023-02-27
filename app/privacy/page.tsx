import { Metadata } from 'next';

import { allPages } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Конфиденциальность',
  description: 'Разработчик, философ',
};

function getPrivacy(type: string) {
  return allPages.map((page) => <p key={page.title}>{page.title}</p>);
}

function Privacy(): JSX.Element {
  const privacy = getPrivacy('privacy');
  console.log(allPages);

  return (
    <div>
      <h1>{privacy}</h1>
    </div>
  );
}

export default Privacy;
