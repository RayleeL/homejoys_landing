import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время для подтверждения.');
    clearCart();
  };

  return (
    <div className="min-h-screen bg-bakery-milk pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-bakery-caramel hover:text-bakery-terracotta font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Вернуться к покупкам
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-bakery-caramel mb-10">
          Ваша корзина
        </h1>

        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] p-12 text-center border border-bakery-vanilla shadow-sm"
          >
            <div className="w-20 h-20 bg-bakery-milk rounded-full flex items-center justify-center mx-auto mb-6 text-bakery-caramel/30">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-bakery-caramel mb-4">В корзине пока пусто</h2>
            <p className="text-bakery-caramel/60 mb-8">
              Кажется, вы еще не выбрали ничего вкусного. Самое время заглянуть в наш ассортимент!
            </p>
            <Link 
              to="/" 
              className="inline-block bg-bakery-terracotta text-white px-8 py-4 rounded-full font-bold hover:bg-bakery-caramel transition-all shadow-lg"
            >
              Перейти к покупкам
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-3xl p-4 md:p-6 flex gap-4 md:gap-6 items-center border border-bakery-vanilla shadow-sm"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-serif font-bold text-bakery-caramel truncate">
                        {item.name}
                      </h3>
                      <p className="text-bakery-terracotta font-bold">{item.price}</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                      <div className="flex items-center bg-bakery-milk rounded-xl p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:text-bakery-terracotta transition-colors"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="w-8 text-center font-bold text-bakery-caramel">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:text-bakery-terracotta transition-colors"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-bakery-caramel/30 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-[40px] p-8 border border-bakery-vanilla shadow-lg sticky top-28">
                <h3 className="text-2xl font-serif font-bold text-bakery-caramel mb-6">Итого</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-bakery-caramel/60">
                    <span>Товары ({cartItems.length})</span>
                    <span>{totalPrice} сом</span>
                  </div>
                  <div className="flex justify-between text-bakery-caramel/60">
                    <span>Доставка</span>
                    <span className="text-bakery-sage font-bold">Бесплатно</span>
                  </div>
                  <div className="h-px bg-bakery-vanilla my-4" />
                  <div className="flex justify-between text-xl font-bold text-bakery-caramel">
                    <span>К оплате</span>
                    <span className="text-bakery-terracotta">{totalPrice} сом</span>
                  </div>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-bakery-caramel text-white py-5 rounded-2xl font-bold text-lg hover:bg-bakery-cinnamon transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Оформить заказ
                </button>
                <p className="text-[10px] text-center text-bakery-caramel/40 mt-4 uppercase tracking-widest leading-tight">
                  Нажимая кнопку, вы соглашаетесь с условиями доставки и оплаты
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
