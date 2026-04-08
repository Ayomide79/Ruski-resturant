import React from 'react';
import { ChefHat, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Welcome Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" 
                  alt="Chef preparing food"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl" />
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-amber-500">25+</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Years Experience</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Welcome to <br />
                <span className="italic text-amber-500">RuskiBite</span> Restaurant
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis tortor eget sodales ultrices. 
                Pellentesque bibendum condimentum neque, nec iaculis augue ultrices ac.
              </p>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Fusce interdum viverra aliquet. We believe in creating memorable dining experiences that engage all your senses, 
                from the visual presentation to the explosion of flavors in every bite.
              </p>

              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-white">Master Chefs</span>
                    <span className="text-sm text-slate-500">Professional team</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-white">Made with Love</span>
                    <span className="text-sm text-slate-500">Every dish matters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Our Team</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Meet Our Chefs
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ez8ac94e4a?w=400&q=80" 
                  alt="Kate Fuson"
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kate Fuson</h3>
              <p className="text-amber-500 font-medium">Head Chef & Founder</p>
            </div>
            
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80" 
                  alt="Jack Fuson"
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Jack Fuson</h3>
              <p className="text-amber-500 font-medium">Co-Founder & Sommelier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15K+', label: 'Happy Customers' },
              { number: '50+', label: 'Menu Items' },
              { number: '25', label: 'Years Experience' },
              { number: '12', label: 'Award Winning' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-amber-500">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};