import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const COMMITMENTS = [
  { title: 'Sao kê mỗi ngày', desc: 'Cập nhật lúc 6h sáng, đều như vắt chanh! (Kể cả Chủ Nhật)' },
  { title: 'Không giấu giếm', desc: 'Từ tô phở 50k đến hộp sữa chua 8k đều được ghi chép.' },
  { title: 'Có hóa đơn', desc: 'Chụp hình bill, quét mã vạch, lưu biên lai đầy đủ!' },
  { title: 'Video unboxing', desc: 'Mở từng gói mì tôm live trên Facebook cho anh chị xem!' },
  { title: 'Hotline 24/7', desc: 'Gọi hỏi tôi ăn gì bất cứ lúc nào, kể cả 3h sáng!' },
  { title: 'Không block', desc: 'Hỏi khó đến mấy cũng trả lời, không "đã xem" rồi im lặng!' },
];

export const Commitment: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#4ecdc4] to-[#44a08d] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🎪 Cam Kết Vàng Của Tôi:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMITMENTS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex gap-4 items-start"
              >
                <CheckCircle2 className="text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};