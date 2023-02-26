'use client';

import { IErrorProps } from 'interfaces';

function Error({ error, reset }: IErrorProps): JSX.Element {
  return (
    <>
      <p>Произошла ошибка: {error.message}</p>
    </>
  );
}

export default Error;
