import React from 'react';
import { motion } from 'motion/react';
import { CalendarCheck } from 'lucide-react';

export const PreOrder: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-bakery-caramel rounded-[48px] p-8 md:p-16 text-white relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-bakery-terracotta/30 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                <CalendarCheck size={18} /> Предзаказ
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Оформите предзаказ и заберите свежую выпечку в удобное время
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Готовитесь к семейному празднику или просто хотите быть уверены, что ваши любимые булочки дождутся вас? Мы принимаем заказы на десерты, наборы булочек и праздничную выпечку.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-bakery-vanilla rounded-full" />
                  Праздничные наборы
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-bakery-vanilla rounded-full" />
                  Десерты к чаю
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-bakery-vanilla rounded-full" />
                  Булочки для завтрака
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-bakery-vanilla rounded-full" />
                  Семейные сеты
                </li>
              </ul>
              <a
                href="tel:+996707609955"
                className="inline-block bg-bakery-vanilla text-bakery-caramel px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-all shadow-lg"
              >
                Связаться для заказа
              </a>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=800"
                alt="Bakery Box"
                className="rounded-[32px] shadow-2xl transform rotate-3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
