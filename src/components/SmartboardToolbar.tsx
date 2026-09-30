import React from 'react';
import { 
  Shuffle, 
  Download, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Type, 
  BookOpen, 
  WifiOff 
} from 'lucide-react';
import { downloadStandaloneSmartboardHtml } from '../utils/standaloneHtmlGenerator';

interface SmartboardToolbarProps {
  onNewSet: (count?: number) => void;
  selectedCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  fontScale: 'normal' | 'large' | 'xlarge';
  onChangeFontScale: (scale: 'normal' | 'large' | 'xlarge') => void;
  onOpenGuide: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const SmartboardToolbar: React.FC<SmartboardToolbarProps> = ({
  onNewSet,
  selectedCount,
  soundEnabled,
  onToggleSound,
  fontScale,
  onChangeFontScale,
  onOpenGuide,
  isFullscreen,
  onToggleFullscreen
}) => {
  return (
    <header className="bg-white border-b-2 border-slate-200 px-4 sm:px-6 py-3 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Brand / Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
              CONJUNCTIONS
            </span>
            <span className="hidden sm:inline text-xs font-semibold px-2 py-0.5 rounded-sm bg-blue-50 text-blue-700 border border-blue-200">
              Akıllı Tahta Testi
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-sm bg-emerald-50 text-emerald-700 border border-emerald-200" title="İnternet gerektirmez, çevrimdışı çalışır">
              <WifiOff className="w-3 h-3" />
              Çevrimdışı
            </span>
          </div>

          {/* Quick mobile actions */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={onToggleSound}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5 text-blue-600" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
            </button>
            <button
              onClick={onToggleFullscreen}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              title="Tam Ekran"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Center / Right: Question Count & Interactive Smartboard Controls */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
          {/* Question Set Select */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
            <button
              onClick={() => onNewSet(10)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedCount === 10 ? 'bg-white text-blue-700 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              10 Soru
            </button>
            <button
              onClick={() => onNewSet(15)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedCount === 15 ? 'bg-white text-blue-700 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              15 Soru
            </button>
            <button
              onClick={() => onNewSet(27)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedCount === 27 ? 'bg-white text-blue-700 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              Tümü (27 Soru)
            </button>
          </div>

          {/* New Random Set button */}
          <button
            onClick={() => onNewSet(selectedCount)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-xs cursor-pointer active:scale-95"
            title="Soruları ve şıkları yeniden rastgele karıştır"
          >
            <Shuffle className="w-4 h-4" />
            <span>Yeni Rastgele Soru Seti</span>
          </button>

          {/* Download Standalone Single HTML for Smartboards */}
          <button
            onClick={downloadStandaloneSmartboardHtml}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer active:scale-95"
            title="Okul akıllı tahtasında internetsiz çalıştırmak için tek dosya HTML indir"
          >
            <Download className="w-4 h-4" />
            <span className="hidden lg:inline">Akıllı Tahtaya İndir (.html)</span>
            <span className="lg:hidden">İndir (.html)</span>
          </button>

          {/* Font scale button */}
          <button
            onClick={() => {
              if (fontScale === 'normal') onChangeFontScale('large');
              else if (fontScale === 'large') onChangeFontScale('xlarge');
              else onChangeFontScale('normal');
            }}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            title="Yazı Boyutunu Değiştir (Sınıftan Okunabilirlik)"
          >
            <Type className="w-3.5 h-3.5" />
            <span>
              {fontScale === 'normal' ? 'Normal' : fontScale === 'large' ? 'Büyük' : 'Çok Büyük'}
            </span>
          </button>

          {/* Conjunctions Guide */}
          <button
            onClick={onOpenGuide}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            title="Bağlaçlar konu özetini aç"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">Konu Özeti</span>
          </button>

          {/* Sound toggle (desktop) */}
          <button
            onClick={onToggleSound}
            className="hidden md:inline-flex items-center justify-center p-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Fullscreen (desktop) */}
          <button
            onClick={onToggleFullscreen}
            className="hidden md:inline-flex items-center justify-center p-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            title={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran Modu'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
