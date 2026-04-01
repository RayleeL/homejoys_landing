import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../constants';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-bakery-vanilla group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-bakery-caramel shadow-sm">
          {product.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-bakery-caramel mb-2 group-hover:text-bakery-terracotta transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-bakery-caramel/70 mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="text-[10px] uppercase tracking-wider text-bakery-sage font-bold mb-4">
          Состав: {product.ingredients}
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center gap-2 bg-bakery-vanilla text-bakery-caramel py-3 rounded-2xl font-bold hover:bg-bakery-caramel hover:text-white transition-all active:scale-95"
        >
          <ShoppingCart size={18} />
          Добавить в корзину
        </button>
      </div>
    </motion.div>
  );
};
