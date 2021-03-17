import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup
    .string() // type data
    .email('Email tidak valid') // email regex
    .required('Please masukin email')
    .nullable(),
  password: yup
    .string() //type data
    .min(8) // 8 chars minimum
    .required(`Password tidak boleh kosong`)
    .nullable()
});
