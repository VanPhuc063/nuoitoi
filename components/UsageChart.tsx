import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { ExpenseData } from '../types';

const DATA: ExpenseData[] = [
  { name: 'Ăn uống', value: 40, color: '#ff6b6b', desc: 'Mì tôm là chính' },
  { name: 'Điện nước', value: 20, color: '#4ecdc4', desc: 'Để online' },
  { name: 'Thuê nhà', value: 15, color: '#45b7d1', desc: 'Không penthouse' },
  { name: 'Y tế', value: 10, color: '#96ceb4', desc: 'Thuốc bổ' },
  { name: 'Học tập', value: 10, color: '#ffeaa7', desc: 'Sách vở' },
  { name: 'Giải trí', value: 5, color: '#dda0dd', desc: 'Youtube free' },
];

export const UsageChart: React.FC = () => {
  return (
    <section id="usage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 text-center">
          📈 Tôi Sẽ Dùng Tiền Vào Đâu?
        </h2>
        <p className="text-center text-gray-500 mb-12">Không có tôm hùm, cua hoàng đế đâu nha!</p>
        
        <div className="h-[400px] w-full max-w-4xl mx-auto bg-gray-50 rounded-3xl p-4 md:p-8 shadow-inner border border-gray-100">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={DATA}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={100}
                tick={{ fill: '#4a5568', fontSize: 14, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as ExpenseData;
                    return (
                      <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                        <p className="font-bold text-lg" style={{ color: data.color }}>{data.name}: {data.value}%</p>
                        <p className="text-gray-600 text-sm">{data.desc}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                {DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList 
                  dataKey="value" 
                  position="right" 
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#718096', fontWeight: 'bold' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mt-12">
            {DATA.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="w-3 h-3 rounded-full mb-2" style={{ backgroundColor: item.color }}></div>
                    <span className="font-bold text-gray-700">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.desc}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};