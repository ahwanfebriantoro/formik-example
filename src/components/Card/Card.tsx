import cssCard from './Card.module.scss';

export default function Card({ children }) {
  return <div className={cssCard.card}>{children}</div>;
}
