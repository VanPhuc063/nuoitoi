import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NUÔI TÔI
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Tại Sao?</a>
            <a href="#" className="hover:text-primary transition-colors">So Sánh</a>
            <a href="#" className="hover:text-primary transition-colors">Chi Tiêu</a>
            <a href="#" className="hover:text-primary transition-colors">Donate</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10 text-gray-400 text-sm">
          <p>&copy; 2025 Nuôi Tôi. Tất cả quyền được bảo lưu. (Nhưng tôi vẫn nghèo lắm!)</p>
        </div>
      </div>
    </footer>
  );
};