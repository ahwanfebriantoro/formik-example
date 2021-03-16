import cssButton from './Button.module.scss';

const Button = (props) => {
  const { children = 'Button', color = 'purple', fontColor = 'white' } = props;

  return (
    <button
      className={cssButton.button}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
