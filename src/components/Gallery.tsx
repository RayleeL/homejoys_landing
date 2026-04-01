import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1586788680434-30d324671ff6?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1621236304195-0699937e6797?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=600",
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-bakery-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-bakery-terracotta font-bold uppercase tracking-widest text-sm">Галерея</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-caramel mt-2">Атмосфера тепла</h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-bakery-caramel font-bold hover:text-bakery-terracotta transition-colors group"
          >
            <Instagram size={24} />
            <span>Подписывайтесь на наш Instagram</span>
            <div className="w-8 h-px bg-bakery-caramel group-hover:w-12 transition-all" />
          </a>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-[32px] cursor-pointer"
            >
              <img
                src={img}
                alt={`Bakery Gallery ${index}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bakery-caramel/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-bakery-caramel">
                  <Instagram size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
