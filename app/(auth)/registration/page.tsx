import { Metadata } from 'next';

import { Form } from '../form';

export const metadata: Metadata = {
  title: 'Создание аккаунта',
  description: 'Разработчик, философ.',
};

function RegistrationPage(): JSX.Element {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl items-center justify-center">
        <Form />
      </div>
    </div>
  );
}

export default RegistrationPage;
