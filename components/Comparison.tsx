import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section id="compare" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-16 text-center">
          💰 So Sánh Với "Người Khác"
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Negative Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-red-400 transform transition-transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8" />
              Người Khác
            </h3>
            <ul className="space-y-4">
              {[
                'Sao kê sau 3 năm (hoặc quên luôn)',
                'File Excel mờ như tương lai chị Dậu',
                'Số liệu "làm tròn" theo kiểu 1 + 1 = 3',
                'Block người hỏi nhanh như chớp'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-red-300 mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Positive Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-green-500 transform transition-transform hover:-translate-y-2 scale-105">
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8" />
              Nuôi Tôi
            </h3>
            <ul className="space-y-4">
              {[
                'Sao kê trước khi tiêu (để anh chị duyệt)',
                'File Excel 4K Ultra HD, có chữ ký số',
                'Số liệu chính xác đến từng đồng lẻ',
                'Trả lời inbox nhanh hơn cả người yêu cũ'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};