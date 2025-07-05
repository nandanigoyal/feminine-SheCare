
import React from 'react';
import { Leaf } from 'lucide-react';

const CycleTips = ({ currentPhase }) => {
  const tips = [
    {
      phase: 'During Menstruation',
      icon: '🩸',
      description: 'Stay hydrated, rest well, use heat therapy.',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-100'
    },
    {
      phase: 'Follicular Phase',
      icon: '🌱',
      description: 'Best for high-energy activities, new projects.',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-100'
    },
    {
      phase: 'Ovulation',
      icon: '🌕',
      description: 'Peak fertility – ideal for important decisions.',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100'
    },
    {
      phase: 'Luteal Phase',
      icon: '🌙',  
      description: 'Focus on self-care and prep for next cycle.',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-100'
    }
  ];

  return (
    <div className="bg-[#fff7f2] rounded-2xl p-6 shadow-sm border border-orange-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <Leaf className="w-6 h-6 text-green-500" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold text-[#5c3b28]">Cycle Tips & Insights</h3>
      </div>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div 
            key={index}
            className={`${tip.bgColor} ${tip.borderColor} border rounded-lg p-4 transition-all duration-200 hover:shadow-md`}
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{tip.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#5c3b28] mb-1">{tip.phase}</h4>
                <p className="text-[#9b7d65] text-sm">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CycleTips;
