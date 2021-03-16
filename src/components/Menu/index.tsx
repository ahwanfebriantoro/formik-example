import Link from 'next/link';
import Button from '../Button';

const menu = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
  { label: 'Traditional Form', href: '/traditional-form' },
  { label: 'Complex Form', href: '/complex-form' }
];

const Menu = () => {
  return (
    <>
      {menu.map((item) => (
        <Link key={item.href} href={item.href}>
          <a>
            <Button>{item.label}</Button>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Menu;
