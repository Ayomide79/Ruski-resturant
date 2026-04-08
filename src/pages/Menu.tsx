import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'desserts'>('starters');

  const menuItems = {
    starters: [
      { name: 'Proin gravida gravida', price: '$10.50', desc: 'Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et.', image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=200&q=80' },
      { name: 'Nullam a ultricies', price: '$12.00', desc: 'Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et.', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=200&q=80' },
      { name: 'Vestibulum ante ipsum', price: '$9.50', desc: 'Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et.', image: 'https://images.unsplash.com/photo-1607098665874-fd193397547b?w=200&q=80' },
      { name: 'Cras ultricies ligula', price: '$11.50', desc: 'Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan vitae, dapibus et.', image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=200&q=80' },
    ],
    mains: [
      { name: 'Grilled Salmon Fillet', price: '$24.50', desc: 'Fresh Atlantic salmon with herbs and lemon butter sauce, served with seasonal vegetables.', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&q=80' },
      { name: 'Ribeye Steak', price: '$32.00', desc: 'Prime cut ribeye cooked to perfection, truffle mashed potatoes, red wine reduction.', image: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?w=200&q=80' },
      { name: 'Pasta Primavera', price: '$18.50', desc: 'House-made pasta with fresh garden vegetables, basil pesto, and parmesan crisp.', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&q=80' },
      { name: 'Duck Confit', price: '$28.00', desc: 'Slow-cooked duck leg with cherry sauce, roasted root vegetables.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=80' },
    ],
    desserts: [
      { name: 'Chocolate Fondant', price: '$12.00', desc: 'Warm chocolate cake with molten center, vanilla bean ice cream.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=200&q=80' },
      { name: 'Crème Brûlée', price: '$10.50', desc: 'Classic vanilla custard with caramelized sugar crust, fresh berries.', image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=200&q=80' },
      { name: 'Tiramisu', price: '$11.00', desc: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa dust.', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&q=80' },
      { name: 'Panna Cotta', price: '$9.50', desc: 'Silky vanilla cream with berry coulis and fresh mint.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=80' },
    ],
  };

  return (
    <div className="pt-24 pb-24 bg-white dark:bg-slate-950 transition-colors min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-6">
            <ChefHat className="w-8 h-8 text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Menu
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Curated selection of our finest dishes, prepared with passion and the freshest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {(['starters', 'mains', 'desserts'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium capitalize transition-all ${
                activeCategory === category
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div 
              key={index}
              className="group flex gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-amber-500">{item.price}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};