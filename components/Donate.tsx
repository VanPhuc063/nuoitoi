import React from 'react';
import { CreditCard, Zap, Gift } from 'lucide-react';

export const Donate: React.FC = () => {
  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 animate-pulse-slow">
          💳 DONATE NGAY ĐI, NẾU BẠN ĐÃ CƯỜI!
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* QR Code Column */}
          <div className="flex flex-col items-center group perspective-1000">
            <div className="bg-white p-4 rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
              <div className="relative overflow-hidden rounded-2xl w-[250px] h-[250px] bg-gray-200">
                <img 
                    src="https://picsum.photos/400/400?grayscale" 
                    alt="Donate QR Code" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-white/80 px-4 py-2 rounded-lg text-dark font-bold shadow-lg">QR CODE HERE</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-lg font-medium opacity-90 max-w-xs">
              Quét mã QR này để nuôi tôi<br/>
              <span className="text-sm opacity-75">(và nhận bản sao kê ngay lập tức!)</span>
            </p>
          </div>

          {/* Info Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-4">
              <div className="bg-yellow-400 p-3 rounded-full text-dark">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Tốc độ ánh sáng</h4>
                <p className="text-sm opacity-80">Chuyển xong là có mail tự động cảm ơn!</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-4">
              <div className="bg-pink-400 p-3 rounded-full text-white">
                <Gift size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Quà tặng tinh thần</h4>
                <p className="text-sm opacity-80">Tôi sẽ chúc bạn ngủ ngon mỗi tối.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-4">
              <div className="bg-blue-400 p-3 rounded-full text-white">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Mọi ngân hàng</h4>
                <p className="text-sm opacity-80">Momo, Bank, Visa... nhận hết!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
             <div className="bg-white/90 text-dark p-8 rounded-3xl shadow-xl">
                 <h3 className="text-2xl font-bold mb-4">🎤 Lời Nhắn Từ Trái Tim</h3>
                 <p className="mb-4 text-gray-700">
                    Tôi nghèo, tôi cần tiền, nhưng tôi <span className="font-bold text-red-500">KHÔNG MẤT LƯƠNG TÂM!</span> 
                 </p>
                 <p className="text-gray-600 italic text-sm">
                    P/S: Tôi hứa sẽ không mua xe hơi bằng tiền donate. Vì... tôi chưa có bằng lái! 🚗❌
                 </p>
             </div>
             
             <div className="mt-8 p-4 border border-yellow-400/50 bg-yellow-400/10 rounded-xl">
                <p className="text-yellow-200 text-sm">
                    <strong>⚠️ DISCLAIMER:</strong> Đây là trang web mang tính chất HÀI HƯỚC. 
                    Mọi nội dung đều mang tính giải trí.
                </p>
             </div>
        </div>
      </div>
    </section>
  );
};