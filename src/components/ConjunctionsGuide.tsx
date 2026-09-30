import React from 'react';
import { X, BookOpen, CheckCircle } from 'lucide-react';

interface ConjunctionsGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConjunctionsGuide: React.FC<ConjunctionsGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const rules = [
    {
      word: "So",
      meaning: "Bu yüzden, dolayısıyla",
      type: "Cause & Result (Sonuç)",
      example: "Adrian is a very honest boy, so everybody trusts him.",
      tip: "Neden önce, sonuç sonra gelir. (Virgül ile ayrılır)"
    },
    {
      word: "Because",
      meaning: "Çünkü",
      type: "Reason (Neden / Gerekçe)",
      example: "Jane is my best friend because she always backs me up.",
      tip: "Eylemin neden yapıldığını ya da sebebini açıklar."
    },
    {
      word: "But",
      meaning: "Ama, fakat",
      type: "Contrast (Zıtlık)",
      example: "He is a good boy, but he is sometimes very stubborn.",
      tip: "İki zıt veya çelişen durumu birbirine bağlar."
    },
    {
      word: "And",
      meaning: "Ve",
      type: "Addition (Ekleme)",
      example: "I like watching movies and eating popcorn with my friends.",
      tip: "Benzer fikirleri veya art arda yapılan eylemleri ekler."
    },
    {
      word: "When",
      meaning: "-dığı zaman, -dığında",
      type: "Time (Zaman)",
      example: "I feel very happy when I spend time with my best friend.",
      tip: "Bir eylemin ne zaman gerçekleştiğini belirtir."
    },
    {
      word: "If",
      meaning: "Eğer, -se / -sa",
      type: "Condition (Koşul / Şart)",
      example: "If you need help, you can count on me.",
      tip: "Bir durumun gerçekleşmesinin şartını belirtir."
    },
    {
      word: "That's why",
      meaning: "Bu yüzden, işte bu nedenle",
      type: "Cause & Result (Sonuç)",
      example: "Mary is very reliable. That's why I share my secrets with her.",
      tip: "Genellikle bağımsız bir cümlenin başında nedenin sonucunu bağlar."
    },
    {
      word: "Although",
      meaning: "-e rağmen, karşın",
      type: "Contrast / Concession (Beklenmeyen Zıtlık)",
      example: "Although she refused my invitation, I am not angry with her.",
      tip: "Bir duruma rağmen beklenenin aksine gelişen olayları bağlar."
    },
    {
      word: "However",
      meaning: "Ancak, ne var ki, yine de",
      type: "Contrast (Zıtlık)",
      example: "He is a very funny boy. However, he sometimes makes bad jokes.",
      tip: "Yeni bir cümlede zıtlık bildirir, arkasından genellikle virgül (,) gelir."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Bağlaçlar (Conjunctions) Konu Özeti</h2>
              <p className="text-xs text-slate-500">Akıllı tahta ve ders tekrarı için pratik kurallar</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            title="Kapat"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rules.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-lg font-extrabold text-blue-700">{item.word}</span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded-sm">
                    {item.type}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-2">
                  Anlamı: <span className="text-emerald-700">{item.meaning}</span>
                </div>
                <div className="text-xs italic text-slate-600 bg-white p-2.5 rounded-lg border border-slate-100 mb-2 font-mono">
                  "{item.example}"
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{item.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Anladım, Teste Dön
          </button>
        </div>
      </div>
    </div>
  );
};
