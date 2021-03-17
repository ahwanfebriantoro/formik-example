import { LoginAttributes } from '../models/login';

const loginAPI = () => {
  return (data: LoginAttributes) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data?.email.length < 1 || data?.password.length < 1) {
          reject(new Error('check your data'));
          return;
        }
        const res = {
          isLogin: true,
          message: 'success',
          token: data.email + data.password,
          data
        };
        window.localStorage.setItem('login', JSON.stringify(res));
        resolve({ res: JSON.stringify(res), status: 200 });
      }, 2000);
    });
};

export default loginAPI;
