import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded p-4">
      <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <p className="text-sm">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <button onClick={handleAddToCart} className="mt-2 bg-blue-500 text-white p-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
