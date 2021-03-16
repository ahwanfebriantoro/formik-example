import { CSSProperties } from 'react';
import cssBackground from './Background.module.scss';

interface IBackground {
  color?: string;
  style?: CSSProperties,
}

const Background: React.FC<IBackground> = (props) => {
  const { color = 'red' } = props;
  return (
    <div
      className={cssBackground.background}
      style={{ backgroundColor: color }}
      {...props}
    />
  );
};

export default Background;
