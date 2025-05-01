import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const { cart } = useCart();
  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <Link href="/" className="font-bold">Logo</Link>
      <nav>
        <Link href="/cart" className="relative">Cart
          <span className="absolute right-0 top-0 bg-red-500 text-white rounded-full px-2">{cart.length}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
