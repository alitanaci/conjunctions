import React, { useEffect } from 'react';
import { Trophy, RotateCcw, Download, CheckCircle, XCircle, Star, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { downloadStandaloneSmartboardHtml } from '../utils/standaloneHtmlGenerator';

interface ResultsModalProps {
  correctCount: number;
  wrongCount: number;
  totalQuestions: number;
  onRestartNewSet: () => void;
  onReviewMistakes?: () => void;
  hasMistakes: boolean;
}

export const ResultsModal: React.FC<ResultsModalProps> = ({
  correctCount,
  wrongCount,
  totalQuestions,
  onRestartNewSet,
  onReviewMistakes,
  hasMistakes
}) => {
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  useEffect(() => {
    soundManager.playCelebration();
  }, []);

  let badgeTitle = "Mükemmel Başarı!";
  let badgeSubtitle = "Conjunctions konusunu kusursuz bir şekilde kavramışsınız!";
  let starCount = 5;

  if (percentage < 50) {
    badgeTitle = "Geliştirilebilir";
    badgeSubtitle = "Konu özetine göz atıp tekrar çözmenizde fayda var.";
    starCount = 2;
  } else if (percentage < 75) {
    badgeTitle = "İyi Seviye";
    badgeSubtitle = "Birkaç küçük hata dışında çok iyi bir performans.";
    starCount = 3;
  } else if (percentage < 90) {
    badgeTitle = "Harika Sonuç!";
    badgeSubtitle = "Tebrikler, bağlaçlar konusuna oldukça hakimsiniz.";
    starCount = 4;
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-xl p-8 max-w-2xl mx-auto text-center space-y-6 animate-in zoom-in-95 duration-300">
      {/* Trophy & Stars */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
            <Trophy className="w-12 h-12" />
          </div>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-7 h-7 text-amber-500 fill-amber-400" />
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1.5 mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-7 h-7 ${
                star <= starCount ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-100'
              }`}
            />
          ))}
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 mt-2">{badgeTitle}</h2>
        <p className="text-slate-600 font-medium text-base mt-1 max-w-md">{badgeSubtitle}</p>
      </div>

      {/* Numerical Stats Card */}
      <div className="grid grid-cols-3 gap-4 py-3">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="text-3xl font-black text-blue-600">{percentage}%</div>
          <div className="text-xs font-bold text-slate-500 uppercase mt-1">Başarı Oranı</div>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
          <div className="text-3xl font-black text-emerald-600 flex items-center justify-center gap-1">
            <CheckCircle className="w-6 h-6 stroke-[3]" />
            <span>{correctCount}</span>
          </div>
          <div className="text-xs font-bold text-emerald-700 uppercase mt-1">Doğru Cevap</div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
          <div className="text-3xl font-black text-rose-600 flex items-center justify-center gap-1">
            <XCircle className="w-6 h-6 stroke-[3]" />
            <span>{wrongCount}</span>
          </div>
          <div className="text-xs font-bold text-rose-700 uppercase mt-1">Yanlış Cevap</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-200">
        <button
          onClick={onRestartNewSet}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base shadow-md cursor-pointer transition-colors active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Yeni Rastgele Soru Seti Başlat</span>
        </button>

        {hasMistakes && onReviewMistakes && (
          <button
            onClick={onReviewMistakes}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-base shadow-md cursor-pointer transition-colors active:scale-95"
          >
            <span>Hataları İncele</span>
          </button>
        )}

        <button
          onClick={downloadStandaloneSmartboardHtml}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-xl font-bold text-base cursor-pointer transition-colors"
          title="Okul akıllı tahtasında internetsiz çalıştırmak için tek dosya HTML indir"
        >
          <Download className="w-5 h-5 text-emerald-600" />
          <span>Tahta İçin İndir (.html)</span>
        </button>
      </div>
    </div>
  );
};
