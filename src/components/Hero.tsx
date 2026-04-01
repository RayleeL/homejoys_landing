import React from 'react';
import { motion } from 'motion/react';
import { Heart, Clock, Utensils } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1920"
          alt="Fresh Bakery"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bakery-cream via-bakery-cream/80 to-transparent md:to-bakery-cream/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-bakery-vanilla/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-bakery-caramel border border-bakery-caramel/10">
              <Clock size={14} /> С 2017 года
            </span>
            <span className="inline-flex items-center gap-1.5 bg-bakery-vanilla/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-bakery-caramel border border-bakery-caramel/10">
              <Heart size={14} /> Семейный бизнес
            </span>
            <span className="inline-flex items-center gap-1.5 bg-bakery-vanilla/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-bakery-caramel border border-bakery-caramel/10">
              <Utensils size={14} /> Свежая выпечка
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-bakery-caramel leading-[1.1] mb-6"
          >
            Домашняя выпечка и десерты, приготовленные <span className="text-bakery-terracotta italic">с любовью</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-bakery-caramel/80 mb-10 leading-relaxed"
          >
            Семейная пекарня в Бишкеке, работающая с 2017 года. Мы каждый день создаем уют и дарим радость через наши свежие десерты и ароматные булочки.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#assortment"
              className="bg-bakery-caramel text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-bakery-cinnamon transition-all shadow-lg hover:shadow-xl text-center"
            >
              Смотреть ассортимент
            </a>
            <a
              href="tel:+996707609955"
              className="bg-white border-2 border-bakery-caramel text-bakery-caramel px-8 py-4 rounded-full text-lg font-bold hover:bg-bakery-vanilla transition-all text-center"
            >
              Позвонить нам
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-dashed border-bakery-caramel/20 rounded-full flex items-center justify-center"
        >
          <div className="text-bakery-caramel/30 font-serif text-center text-sm leading-tight">
            СВЕЖЕЕ<br />КАЖДЫЙ<br />ДЕНЬ
          </div>
        </motion.div>
      </div>
    </section>
  );
};
