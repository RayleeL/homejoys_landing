import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Navigation, Clock } from 'lucide-react';

export const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="py-24 bg-bakery-milk">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-bakery-terracotta font-bold uppercase tracking-widest text-sm">Где мы находимся</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-caramel mt-2 mb-10">Заходите в гости за свежей выпечкой</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-bakery-vanilla rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-bakery-caramel" size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-bakery-caramel mb-1">Наш адрес</h4>
                  <p className="text-bakery-caramel/70 text-lg">
                    г. Бишкек, Аламудунский район, с. Кара-Жыгач, ул. Кондучалова 195
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-bakery-vanilla rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-bakery-caramel" size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-bakery-caramel mb-1">Телефон</h4>
                  <p className="text-bakery-caramel/70 text-lg">
                    +996 707 609 955
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-bakery-vanilla rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="text-bakery-caramel" size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-bakery-caramel mb-1">Режим работы</h4>
                  <p className="text-bakery-caramel/70 text-lg">
                    Ежедневно: 08:00 – 20:00
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://2gis.kg/bishkek/search/Кара-Жыгач%20Кондучалова%20195"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-bakery-caramel text-white px-8 py-4 rounded-full font-bold hover:bg-bakery-cinnamon transition-all shadow-lg"
              >
                <Navigation size={20} />
                Построить маршрут
              </a>
              <a
                href="tel:+996707609955"
                className="flex items-center gap-2 bg-white border-2 border-bakery-caramel text-bakery-caramel px-8 py-4 rounded-full font-bold hover:bg-bakery-vanilla transition-all"
              >
                <Phone size={20} />
                Позвонить
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[48px] shadow-xl border border-bakery-vanilla"
          >
            <h3 className="text-3xl font-serif font-bold text-bakery-caramel mb-8 text-center">Напишите нам</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-bakery-caramel mb-2 ml-2">Имя</label>
                <input
                  type="text"
                  placeholder="Как к вам обращаться?"
                  className="w-full bg-bakery-milk border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-bakery-terracotta transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-bakery-caramel mb-2 ml-2">Телефон</label>
                <input
                  type="tel"
                  placeholder="+996 (___) __ __ __"
                  className="w-full bg-bakery-milk border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-bakery-terracotta transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-bakery-caramel mb-2 ml-2">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Ваш вопрос или пожелание..."
                  className="w-full bg-bakery-milk border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-bakery-terracotta transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-bakery-terracotta text-white py-5 rounded-2xl font-bold text-lg hover:bg-bakery-caramel transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Отправить сообщение
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
