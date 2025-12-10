import React, { useState } from 'react';
import { CreditCard, Zap, Gift, Copy, Check } from 'lucide-react';

// CẤU HÌNH TÀI KHOẢN NGÂN HÀNG CỦA BẠN TẠI ĐÂY
const BANK_INFO = {
  bankId: 'MB', // Mã ngân hàng (Ví dụ: MB, VCB, ACB, VPBank, TPBank, Techcombank...)
  accountNo: '16100399999', // Số tài khoản của bạn
  accountName: 'PHAM VAN PHUC', // Tên chủ tài khoản (Viết không dấu)
  template: 'compact2' // Giao diện QR
};

export const Donate: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Tạo URL QR Code tự động từ VietQR
  const qrUrl = `https://img.vietqr.io/image/${BANK_INFO.bankId}-${BANK_INFO.accountNo}-${BANK_INFO.template}.png?addInfo=Nuoi Toi&accountName=${encodeURIComponent(BANK_INFO.accountName)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(BANK_INFO.accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 animate-pulse-slow">
          💳 DONATE NGAY ĐI, NẾU BẠN ĐÃ CƯỜI!
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* QR Code Column */}
          <div className="flex flex-col items-center order-2 md:order-1">
            <div className="bg-white p-6 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105 border-4 border-white/20">
              
              {/* QR Image Container */}
              <div className="relative w-[280px] md:w-[320px] rounded-xl overflow-hidden bg-white shadow-inner border border-gray-100 mb-4">
                 <img 
                    src={qrUrl} 
                    alt={`QR Code ${BANK_INFO.bankId}`} 
                    className="w-full h-auto object-contain"
                    loading="lazy"
                 />
              </div>

              {/* Bank Details & Copy Action */}
              <div className="text-center space-y-2">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Chuyển khoản 24/7
                </p>
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 flex items-center justify-between gap-3 group">
                    <div className="text-left overflow-hidden">
                        <div className="text-xs text-gray-500 font-semibold">Số Tài Khoản ({BANK_INFO.bankId})</div>
                        <div className="text-dark text-xl font-bold font-mono tracking-tight truncate">
                            {BANK_INFO.accountNo}
                        </div>
                    </div>
                    <button 
                        onClick={handleCopy}
                        className={`p-3 rounded-lg transition-all duration-200 flex-shrink-0 shadow-sm ${
                            copied 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white text-gray-600 hover:bg-primary hover:text-white border border-gray-200'
                        }`}
                        title="Sao chép số tài khoản"
                    >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                </div>
                <div className="text-dark font-bold text-sm bg-yellow-100 py-1 px-3 rounded-full inline-block">
                    {BANK_INFO.accountName}
                </div>
              </div>

            </div>
            
            <p className="mt-6 text-center text-lg font-medium opacity-90">
              Quét mã hoặc sao chép STK nhé!<br/>
              <span className="text-sm opacity-75">(Mình dùng VietQR nên bank nào cũng nhận được)</span>
            </p>
          </div>

          {/* Info Column */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-4">
              <div className="bg-yellow-400 p-3 rounded-full text-dark shadow-lg">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Tốc độ ánh sáng</h4>
                <p className="text-sm opacity-80">"Ting ting" cái là mình nhận được ngay!</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-4">
              <div className="bg-pink-400 p-3 rounded-full text-white shadow-lg">
                <Gift size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Quà tặng tinh thần</h4>
                <p className="text-sm opacity-80">Mỗi giao dịch là một niềm vui vô bờ bến.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-4">
              <div className="bg-blue-400 p-3 rounded-full text-white shadow-lg">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Mọi ngân hàng</h4>
                <p className="text-sm opacity-80">Momo, Bank, Zalopay... quét là dính!</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/90 text-dark rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                 <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <span className="text-2xl">🍜</span> Quy đổi giá trị:
                 </h3>
                 <ul className="text-sm space-y-2 text-gray-700 font-medium">
                    <li>• 5.000đ = 1 Gói mì tôm (Hảo Hảo)</li>
                    <li>• 10.000đ = 1 Ổ bánh mì không thịt</li>
                    <li>• 50.000đ = 1 Bữa cơm có thịt (Xa xỉ!)</li>
                    <li>• 500.000đ = 1 Tuần không lo đói</li>
                 </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
             <div className="p-4 border border-yellow-400/50 bg-yellow-400/10 rounded-xl">
                <p className="text-yellow-200 text-sm">
                    <strong>⚠️ LƯU Ý:</strong> Nội dung chuyển khoản bạn cứ ghi lời nhắn nhủ yêu thương nhé, mình đọc hết đó!
                </p>
             </div>
        </div>
      </div>
    </section>
  );
};