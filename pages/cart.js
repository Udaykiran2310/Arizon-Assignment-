import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl">Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
      <button className="mt-4 bg-blue-500 text-white p-2 rounded">Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
