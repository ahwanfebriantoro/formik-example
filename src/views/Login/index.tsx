/* This are common use of Formik form */

import { ErrorMessage, Formik } from 'formik';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input';
import loginAPI from '../../api/login';
import _ from 'lodash'
import { LoginSchema } from './schema/LoginSchema';

const LoginForm = () => {
  const post = loginAPI();
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) =>
        post(values)
          .then(() => alert('Access granted! Good luck, Comrade!'))
          .catch((err) => alert(err))
      }
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        isSubmitting
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <pre>{JSON.stringify({ values: values }, null, 2)}</pre>
            <pre>{JSON.stringify({ errors: errors }, null, 2)}</pre>
            <pre>{JSON.stringify({ touched: touched }, null, 2)}</pre>
            <Card>
              <h1>Login</h1>
              <div>
                <Input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <span style={{ color: 'red' }}>{errors.email}</span>
                )}
              </div>
              <div>
                <Input
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.password && touched.password && (
                  <span style={{ color: 'red' }}>{errors.password}</span>
                )} */}
                <ErrorMessage name='password'/>
              </div>

              <Button type="submit" isLoading={isSubmitting}>
                OK
              </Button>
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
