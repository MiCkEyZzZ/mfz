import { Form } from '../form';

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
