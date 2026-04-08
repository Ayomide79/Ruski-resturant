import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Leaf, Heart, ChefHat } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Always Fresh',
      description: 'We source our ingredients daily from local organic farms to ensure the highest quality in every dish.',
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=80',
    },
    {
      icon: Heart,
      title: 'Eco Products',
      description: 'Sustainable practices are at our core. From farm to table, we minimize our environmental footprint.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
    },
    {
      icon: ChefHat,
      title: 'Healthy Desserts',
      description: 'Indulge guilt-free with our selection of nutritious desserts crafted by expert pastry chefs.',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80" 
            alt="Delicious food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Premium Quality Cuisine</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
              Taste the <br />
              <span className="text-gradient">Extraordinary</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed">
              Experience culinary artistry where every dish is crafted with passion, 
              using only the freshest ingredients sourced from local farms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Reserve a Table
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/menu">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-slate-900">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">What We Can Offer</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Our Specialties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-8 text-center relative">
                  <div className="w-16 h-16 mx-auto -mt-16 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 italic">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80" 
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join us for an evening of exceptional food, warm atmosphere, and impeccable service.
          </p>
          <Link to="/contact">
            <Button size="lg">Book Your Table Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};