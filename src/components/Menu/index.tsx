import Link from 'next/link';
import Button from '../Button';
import Card from '../Card/Card';

const menu = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
  // { label: 'Sign Up', href: '/signup' },
  { label: 'Complicated Form', href: '/complicated-form' },
];

const Menu = () => {
  return (
    <Card>
      {menu.map((item) => (
        <Link href={item.href}>
          <a>
            <Button>{item.label}</Button>
          </a>
        </Link>
      ))}
    </Card>
  );
};

export default Menu;
