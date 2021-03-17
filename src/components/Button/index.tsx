import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cssButton from './Button.module.scss';
import BallTriangle from '../../assets/BallTriangle';
interface MyButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
}

const Button = (props: MyButton) => {
  const {
    children = 'Button',
    color = 'purple',
    isLoading = false,
    type = 'button',
    ...rest
  } = props;

  return (
    <button className={cssButton.button} {...rest}>
      {isLoading && (
        <BallTriangle
          color="red"
          size={15}
          style={{ marginRight: 10, overflow: 'hidden' }}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
