/* This are common use of Formik form */

import { Formik } from 'formik';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input';
import * as yup from 'yup';
import loginAPI from '../../api/login';

const LoginSchema = yup.object().shape({
  email: yup.string().nullable(),
  password: yup.string().nullable()
});

const LoginForm = () => {
  const post = loginAPI();
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => post(values)}
    >
      {({ handleSubmit, values, handleChange, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card>
              <h1>Login</h1>
              <Input name="email" placeholder="Email" onChange={handleChange} />
              <Input
                name="password"
                value={values.password}
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
              <Button type="submit" isLoading={isSubmitting}>OK</Button>
            </Card>
          </form>
        );
      }}
    </Formik>
  );
};

const Login = () => {
  return (
    <Background color="#CFE3E8">
      <LoginForm />
    </Background>
  );
};

export default Login;
