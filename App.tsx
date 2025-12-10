import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Commitment } from './components/Commitment';
import { Comparison } from './components/Comparison';
import { UsageChart } from './components/UsageChart';
import { Donate } from './components/Donate';
import { Footer } from './components/Footer';
import { useKonamiCode } from './hooks/useKonamiCode';
import { X } from 'lucide-react';

const LoadingScreen = () => (
  <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
      <div className="text-white text-xl font-bold animate-pulse">Đang tải ví rỗng...</div>
    </div>
  </div>
);

const EasterEggModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
    <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl shadow-2xl text-white text-center max-w-sm relative transform animate-bounce-in">
      <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-1">
        <X size={20} />
      </button>
      <h3 className="text-3xl font-black mb-4">🎉 PHÁT HIỆN HACKER! 🎉</h3>
      <p className="mb-6 font-medium">Bạn đã tìm ra Konami Code!</p>
      <p className="text-sm opacity-90 mb-6">Phần thưởng của bạn là... <br/>được quyền Donate gấp đôi cho tôi! 😄</p>
      <button 
        onClick={onClose}
        className="bg-white text-primary font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Đã hiểu, Donate ngay!
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { success: easterEggFound, reset: resetEasterEgg } = useKonamiCode();

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="font-sans antialiased text-gray-800 bg-white selection:bg-primary selection:text-white">
      {easterEggFound && <EasterEggModal onClose={resetEasterEgg} />}
      
      <Navbar />
      <Hero />
      <Features />
      <Commitment />
      <Comparison />
      <UsageChart />
      <Donate />
      <Footer />
    </div>
  );
};

export default App;