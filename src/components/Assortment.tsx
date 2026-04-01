import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';

export const Assortment: React.FC = () => {
  const desserts = PRODUCTS.filter(p => p.category === 'dessert');
  const plainBuns = PRODUCTS.filter(p => p.category === 'bun-plain');
  const filledBuns = PRODUCTS.filter(p => p.category === 'bun-filled');

  return (
    <section id="assortment" className="py-24 bg-bakery-milk">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-bakery-terracotta font-bold uppercase tracking-widest text-sm"
          >
            Наш выбор
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-bakery-caramel mt-2"
          >
            Сегодня в витрине
          </motion.h2>
          <div className="w-24 h-1 bg-bakery-vanilla mx-auto mt-6 rounded-full" />
        </div>

        {/* Desserts */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-serif font-bold text-bakery-caramel">Десерты</h3>
            <div className="flex-1 h-px bg-bakery-vanilla" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {desserts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Plain Buns */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-serif font-bold text-bakery-caramel">Булочки без начинки</h3>
            <div className="flex-1 h-px bg-bakery-vanilla" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plainBuns.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Filled Buns */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-serif font-bold text-bakery-caramel">Булочки с начинкой</h3>
            <div className="flex-1 h-px bg-bakery-vanilla" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filledBuns.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
