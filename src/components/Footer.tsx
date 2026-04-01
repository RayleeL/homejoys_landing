import React from 'react';
import { Instagram, Facebook, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bakery-caramel text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex flex-col">
              <span className="text-3xl font-serif font-bold leading-none">Домашние радости</span>
              <span className="text-[10px] uppercase tracking-widest text-bakery-vanilla font-bold">Семейная пекарня</span>
            </a>
            <p className="text-white/70 leading-relaxed">
              Мы создаем уют и дарим радость через нашу свежую выпечку и десерты с 2017 года. Тёплая атмосфера и домашний вкус в каждой булочке.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Навигация</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#assortment" className="hover:text-white transition-colors">Ассортимент</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Почему мы</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Контакты</h4>
            <ul className="space-y-4 text-white/70">
              <li>+996 707 609 955</li>
              <li>г. Бишкек, с. Кара-Жыгач, ул. Кондучалова 195</li>
              <li>bakery@homejoys.kg</li>
              <li>Ежедневно: 08:00 – 20:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Новости пекарни</h4>
            <p className="text-white/70 mb-6">Подпишитесь, чтобы узнавать о новинках в витрине первыми.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Ваш e-mail"
                className="bg-white/10 border-none rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-bakery-vanilla w-full"
              />
              <button className="bg-bakery-vanilla text-bakery-caramel p-3 rounded-xl hover:bg-white transition-all">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-sm">
          <p>© 2017–2026 «Домашние радости». Все права защищены.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
