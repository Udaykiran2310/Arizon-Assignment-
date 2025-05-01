import products from '@/data/products';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
