'use client'

import { IErrorProps } from 'interfaces'

function Error({ error, reset }: IErrorProps): JSX.Element {
  return (
    <>
      <p>An error occured: {error.message}</p>
    </>
  )
}

export default Error
