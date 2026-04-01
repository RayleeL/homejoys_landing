import React from 'react';
import { motion } from 'motion/react';
import { Heart, Clock, Utensils, Leaf, Home, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    icon: <Heart className="text-bakery-terracotta" size={32} />,
    title: "Семейный подход",
    description: "Мы относимся к каждому гостю как к члену нашей большой семьи."
  },
  {
    icon: <Clock className="text-bakery-terracotta" size={32} />,
    title: "Работаем с 2017 года",
    description: "Многолетний опыт и сотни довольных клиентов каждый день."
  },
  {
    icon: <Utensils className="text-bakery-terracotta" size={32} />,
    title: "Свежесть 100%",
    description: "Выпекаем всё утром, чтобы к вашему приходу витрина была полна тепла."
  },
  {
    icon: <Home className="text-bakery-terracotta" size={32} />,
    title: "Домашний вкус",
    description: "Используем проверенные временем рецепты, которые напоминают о детстве."
  },
  {
    icon: <Leaf className="text-bakery-terracotta" size={32} />,
    title: "Натуральность",
    description: "Только настоящее сливочное масло, фермерское молоко и отборная мука."
  },
  {
    icon: <ShieldCheck className="text-bakery-terracotta" size={32} />,
    title: "Уют и забота",
    description: "Внимательно следим за качеством каждой булочки и каждого десерта."
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-bakery-milk">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-bakery-terracotta font-bold uppercase tracking-widest text-sm">Наши ценности</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-caramel mt-2">Почему нас выбирают</h2>
          <div className="w-24 h-1 bg-bakery-vanilla mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[32px] border border-bakery-vanilla shadow-sm hover:shadow-md transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {adv.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-bakery-caramel mb-4">{adv.title}</h3>
              <p className="text-bakery-caramel/70 leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
