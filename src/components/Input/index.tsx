import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cssInput from './Input.module.scss';

const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const { placeholder = 'Input something', ...rest } = props;
  return (
    <input className={cssInput.input} placeholder={placeholder} {...rest} />
  );
};

export default Input;
