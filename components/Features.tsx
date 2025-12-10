import React from 'react';
import { Search, Wallet, Smartphone, Coffee } from 'lucide-react';
import { FeatureItem } from '../types';

const FEATURES: FeatureItem[] = [
  {
    icon: <Search className="w-12 h-12 text-primary" />,
    title: 'Sao Kê Realtime',
    description: 'Cập nhật từng giây! Còn nhanh hơn cả tốc độ bạn chuyển tiền!',
    highlight: 'Cập nhật mỗi giây'
  },
  {
    icon: <Wallet className="w-12 h-12 text-secondary" />,
    title: 'Minh Bạch 36%',
    description: 'Chưa được 100% nhưng tôi báo cáo cả việc mua hành lá!',
    highlight: 'Báo cáo chi tiết'
  },
  {
    icon: <Coffee className="w-12 h-12 text-blue-400" />,
    title: 'Chi Tiêu Hợp Lý',
    description: 'Không mua xe hơi, nhà cửa. Chỉ ăn cơm với mì tôm thôi!',
    highlight: 'Tiết kiệm tối đa'
  },
  {
    icon: <Smartphone className="w-12 h-12 text-purple-400" />,
    title: 'App Tracking',
    description: 'Theo dõi 24/7 tôi ăn gì, uống gì, đi đâu. Như "Big Brother"!',
    highlight: 'Giám sát liên tục'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 relative inline-block">
            🎯 Tại Sao Nên Nuôi Tôi?
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
              
              <span className="px-4 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold text-sm rounded-full">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};