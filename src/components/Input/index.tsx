import cssInput from './Input.module.scss';

const Input = (props) => {
  return (
    <input className={cssInput.input} placeholder="placeholder" {...props} />
  );
};

export default Input;
