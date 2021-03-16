import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cssInput from './Input.module.scss';

const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input className={cssInput.input} placeholder="placeholder" {...props} />
  );
};

export default Input;
