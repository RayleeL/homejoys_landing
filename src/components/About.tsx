import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bakery-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
                alt="Family Bakery Story"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-bakery-terracotta text-white p-8 rounded-full shadow-xl hidden md:block">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold">7+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest">Лет тепла</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bakery-terracotta font-bold uppercase tracking-widest text-sm">Наша история</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-caramel mt-2 mb-8">
              «Домашние радости» — это больше, чем просто пекарня
            </h2>
            
            <div className="space-y-6 text-bakery-caramel/80 text-lg leading-relaxed">
              <p>
                Все началось в 2017 году на маленькой домашней кухне. Мы хотели создать место, где каждый житель нашего района мог бы почувствовать вкус настоящего дома, заботы и тепла.
              </p>
              <p>
                Для нас это семейный бизнес. Мы не гонимся за масштабами фабрик, потому что верим: выпечка требует рук, сердца и времени. Каждый десерт и каждая булочка в нашей витрине приготовлены так, как мы готовим их для своих детей и близких.
              </p>
              <p>
                Мы ценим натуральность ингредиентов, традиции и то самое тёплое отношение, которое делает случайного гостя нашим постоянным другом.
              </p>
            </div>

            <div className="mt-12 p-8 bg-bakery-vanilla/30 rounded-3xl border-l-4 border-bakery-terracotta relative">
              <Quote className="absolute top-4 right-4 text-bakery-terracotta/20" size={48} />
              <p className="text-xl font-serif italic text-bakery-caramel leading-relaxed">
                «Мы создаём ту самую выпечку, которая делает день теплее, а семейные вечера — уютнее. Это наше призвание и наша радость».
              </p>
              <div className="mt-4 font-bold text-bakery-caramel">— Семья основателей</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
