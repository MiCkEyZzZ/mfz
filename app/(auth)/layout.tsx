import { ReactNode } from 'react';

interface IAuthProps {
  children: ReactNode;
}

function AuthLayout({ children }: IAuthProps) {
  return <div className="min-h-screen w-full">{children}</div>;
}

export default AuthLayout;
