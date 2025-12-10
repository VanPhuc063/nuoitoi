import React from 'react';
import { Heart, FileText } from 'lucide-react';

const FLOATING_ICONS = ['💰', '🍜', '📊', '💳', '🎯', '🥑', '💸'];

export const Hero: React.FC = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FLOATING_ICONS.map((icon, index) => (
          <div
            key={index}
            className="absolute text-4xl opacity-10 animate-float"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        
        {/* Logo Image */}
        <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-[0_0_50px_rgba(255,255,255,0.25)] border-4 border-white/20 animate-float hover:scale-105 transition-transform duration-500">
                <img 
                    src="https://api.dicebear.com/9.x/notionists/svg?seed=Felix&backgroundColor=ffdfbf" 
                    alt="Logo Nuôi Tôi" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white transform rotate-12 animate-pulse">
                    Đói quá! 🍜
                </div>
            </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-down drop-shadow-md">
          <span className="inline-block animate-bounce">🌱</span>
          <span className="mx-2 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            NUÔI TÔI
          </span>
          <span className="inline-block animate-bounce delay-75">🌱</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 opacity-90 font-light max-w-2xl mx-auto leading-relaxed">
          HÃY NUÔI TÔI. Tôi hứa sẽ sao kê đầy đủ, từ gói mì tôm đến ly trà sữa! 💯
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToDonate}
            className="px-8 py-4 bg-gradient-to-r from-primary to-red-400 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 animate-pulse-slow"
          >
            <Heart className="fill-current" />
            NUÔI NGAY
          </button>
          <button 
             onClick={() => document.getElementById('usage')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
          >
            <FileText />
            XEM SAO KÊ
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Sao Kê', val: '24/7', desc: 'Realtime' },
            { label: 'Minh Bạch', val: '36%', desc: '(Đang cố lên 100%)' },
            { label: 'Lừa Đảo', val: '0%', desc: 'Uy tín luôn' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
              <div className="text-4xl font-black text-yellow-300 mb-2">{stat.val}</div>
              <div className="font-bold text-lg">{stat.label}</div>
              <div className="text-sm opacity-70">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};