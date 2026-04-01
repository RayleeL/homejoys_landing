import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-bakery-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-bakery-terracotta font-bold uppercase tracking-widest text-sm">Отзывы гостей</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-caramel mt-2">Что о нас говорят</h2>
          <div className="w-24 h-1 bg-bakery-vanilla mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-bakery-vanilla shadow-sm relative group hover:shadow-md transition-all"
            >
              <Quote className="absolute top-8 right-8 text-bakery-vanilla" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={cn(
                      i < review.rating ? "text-bakery-terracotta fill-bakery-terracotta" : "text-bakery-vanilla"
                    )}
                  />
                ))}
              </div>
              <p className="text-xl text-bakery-caramel/80 italic mb-8 leading-relaxed">
                «{review.text}»
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bakery-vanilla rounded-full flex items-center justify-center text-bakery-caramel font-bold text-xl">
                  {review.name[0]}
                </div>
                <div className="font-bold text-bakery-caramel">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for class names in this file since I forgot to import it
import { cn } from '../lib/utils';
