import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import loginAPI from '../../api/login';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input';

const LoginWithoutFormik = () => {
  const [value, setValue] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState(null);
  const [touched, setTouched] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleError = (e: FocusEvent<HTMLInputElement>) => {
    if (typeof value[e.target.name] !== 'string') {
      setErrors({ ...errors, [e.target.name]: 'Input invalid' });
    }
  };
  const handleTouch = (e: FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const post = loginAPI();
    post(value)
      .then(() => alert('Well... success, but I prefer using formik!'))
      .catch((err) => alert(err))
      .finally(() => setSubmitting(false));
  };

  return (
    <Background color="orange">
      <pre>{JSON.stringify({ value: value }, null, 2)}</pre>
      <pre>{JSON.stringify({ errors: errors }, null, 2)}</pre>
      <pre>{JSON.stringify({ touched: touched }, null, 2)}</pre>
      <form onSubmit={handleSubmit} action="#" method="POST">
        <Card>
          <h1>Let's Login without Formik</h1>
          <Input
            name="email"
            onChange={onChange}
            onBlur={handleError}
            onFocus={handleTouch}
            placeholder="Email"
          />
          <Input
            name="password"
            onChange={onChange}
            onBlur={handleError}
            onFocus={handleTouch}
            placeholder="Password"
            type="password"
          />
          <Button isLoading={isSubmitting} type="submit">
            Login with no Formik hehe
          </Button>
        </Card>
      </form>
    </Background>
  );
};

export default LoginWithoutFormik;
