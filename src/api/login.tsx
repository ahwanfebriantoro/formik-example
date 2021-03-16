import { LoginAttributes } from '../models/login';

const loginAPI = () => {
  return (data: LoginAttributes) =>
    new Promise((resolve, reject) => {
      const res = {
        isLogin: true,
        message: 'success',
        token: data.email + data.password,
        data
      };
      setTimeout(() => {
        window.localStorage.setItem('login', JSON.stringify(res));
        resolve({ res: JSON.stringify(res), status: 200 });
      }, 2000);
    });
};

export default loginAPI;
