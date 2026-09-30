import React, { useState, useEffect } from 'react';
import { Check, X, ArrowRight, ArrowLeft, HelpCircle, Languages, Sparkles } from 'lucide-react';
import { Question } from '../data/questions';
import { Illustration } from './Illustrations';
import { soundManager } from '../utils/audio';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  fontScale: 'normal' | 'large' | 'xlarge';
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
  canPrev: boolean;
  userAnswer?: {
    selectedOption: string;
    isCorrect: boolean;
  };
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  fontScale,
  onAnswer,
  onNext,
  onPrev,
  canPrev,
  userAnswer
}) => {
  const [selected, setSelected] = useState<string | null>(userAnswer ? userAnswer.selectedOption : null);
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [shakeOption, setShakeOption] = useState<string | null>(null);

  // Sync state if question changes
  useEffect(() => {
    setSelected(userAnswer ? userAnswer.selectedOption : null);
    setShakeOption(null);
  }, [question, userAnswer]);

  // Keyboard shortcut listener for smartboard or keyboard navigation: 1, 2, 3 or A, B, C or Space/Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selected !== null) {
        if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNext();
        }
        return;
      }

      if (e.key === '1' || e.key.toLowerCase() === 'a') {
        handleOptionClick(question.options[0]);
      } else if (e.key === '2' || e.key.toLowerCase() === 'b') {
        if (question.options[1]) handleOptionClick(question.options[1]);
      } else if (e.key === '3' || e.key.toLowerCase() === 'c') {
        if (question.options[2]) handleOptionClick(question.options[2]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question, selected, onNext]);

  const handleOptionClick = (option: string) => {
    if (selected !== null) return; // already answered
    setSelected(option);

    const isRight = option.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
    if (isRight) {
      soundManager.playCorrect();
    } else {
      soundManager.playWrong();
      setShakeOption(option);
    }
    onAnswer(isRight);
  };

  const letters = ['A', 'B', 'C', 'D'];

  // Font scale class helpers
  const sentenceSizeClass = 
    fontScale === 'xlarge' ? 'text-3xl sm:text-4xl' :
    fontScale === 'large' ? 'text-2xl sm:text-3xl' :
    'text-xl sm:text-2xl';

  const optionSizeClass =
    fontScale === 'xlarge' ? 'text-2xl sm:text-3xl py-6' :
    fontScale === 'large' ? 'text-xl sm:text-2xl py-5' :
    'text-lg sm:text-xl py-4';

  const hasAnswered = selected !== null;
  const isSelectedCorrect = selected?.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-sm overflow-hidden flex flex-col transition-all">
      {/* Question Header Bar */}
      <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-slate-800 text-lg sm:text-xl">
            Soru {questionIndex + 1}
            <span className="text-slate-400 font-normal text-sm ml-1.5">/ {totalQuestions}</span>
          </span>
          <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-100 text-blue-800">
            {question.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            title="Türkçe çeviriyi aç/kapat"
          >
            <Languages className="w-4 h-4 text-blue-600" />
            <span>{showTranslation ? 'Çeviriyi Gizle' : 'Türkçe Çeviriyi Gör'}</span>
          </button>
        </div>
      </div>

      {/* Question Body: Illustration & Sentence */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Illustration Container */}
          <div className="lg:col-span-5 flex items-center justify-center p-2 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner">
            <Illustration type={question.illustrationType} className="w-full h-48 sm:h-60 max-h-64 object-contain" />
          </div>

          {/* Sentence Display with Interactive Blank */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <div className={`font-extrabold text-slate-900 leading-relaxed ${sentenceSizeClass}`}>
              {question.sentenceBefore && <span>{question.sentenceBefore} </span>}

              {/* Blank Area */}
              <span
                className={`inline-block mx-1.5 px-4 py-1.5 rounded-xl border-b-4 transition-all duration-300 font-black ${
                  !hasAnswered
                    ? 'bg-blue-50 border-blue-500 text-blue-600 border-dashed animate-pulse'
                    : isSelectedCorrect
                    ? 'bg-emerald-100 border-emerald-600 text-emerald-800 scale-105 shadow-sm'
                    : 'bg-rose-100 border-rose-600 text-rose-800'
                }`}
              >
                {!hasAnswered ? (
                  '________'
                ) : isSelectedCorrect ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-6 h-6 text-emerald-600 stroke-[3]" />
                    {question.correctAnswer}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 line-through opacity-80">
                    <X className="w-5 h-5 text-rose-600 stroke-[3]" />
                    {selected}
                  </span>
                )}
              </span>

              {question.sentenceAfter && <span> {question.sentenceAfter}</span>}

              {/* In case of wrong answer, show the correct filling directly next to it */}
              {hasAnswered && !isSelectedCorrect && (
                <div className="mt-3 text-lg font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-200 inline-flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 stroke-[3]" />
                  <span>Doğru Cevap: <strong className="underline decoration-2">{question.correctAnswer}</strong></span>
                </div>
              )}
            </div>

            {/* Turkish Translation Card */}
            {showTranslation && (
              <div className="p-3.5 rounded-xl bg-slate-50 border-l-4 border-blue-500 text-slate-700 text-base sm:text-lg font-medium">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-0.5">Türkçe Anlamı:</span>
                {question.translationTr}
              </div>
            )}
          </div>
        </div>

        {/* Options Section: 3 Big, Touch-Friendly Buttons for Smartboards */}
        <div className="pt-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Şıklardan birini seçin:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {question.options.map((option, idx) => {
              const isOptionSelected = selected === option;
              const isOptionCorrect = option.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
              const isWrongSelection = isOptionSelected && !isOptionCorrect;
              const isShaking = shakeOption === option;

              let buttonStyles = "bg-white border-3 border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-blue-50/50";
              let letterBadgeStyles = "bg-slate-100 text-slate-600";

              if (hasAnswered) {
                if (isOptionCorrect) {
                  // Correct option turns GREEN with checkmark
                  buttonStyles = "bg-emerald-50 border-3 border-emerald-500 text-emerald-950 ring-4 ring-emerald-200/50 shadow-md";
                  letterBadgeStyles = "bg-emerald-600 text-white";
                } else if (isWrongSelection) {
                  // Selected wrong option turns RED with cross
                  buttonStyles = "bg-rose-50 border-3 border-rose-500 text-rose-950 ring-4 ring-rose-200/50 shadow-md";
                  letterBadgeStyles = "bg-rose-600 text-white";
                } else {
                  // Other unselected options fade slightly
                  buttonStyles = "bg-slate-50/60 border-2 border-slate-200 text-slate-400 opacity-60";
                  letterBadgeStyles = "bg-slate-200 text-slate-400";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  disabled={hasAnswered}
                  className={`relative flex items-center justify-between px-6 rounded-2xl font-black transition-all cursor-pointer select-none active:scale-[0.98] ${optionSizeClass} ${buttonStyles} ${
                    isShaking ? 'animate-bounce' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg transition-colors ${letterBadgeStyles}`}>
                      {letters[idx]}
                    </span>
                    <span className="tracking-wide">{option}</span>
                  </div>

                  {/* Feedback Icons (Yeşil Tik / Kırmızı Çarpı) */}
                  {hasAnswered && (
                    <div className="flex items-center">
                      {isOptionCorrect && (
                        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg animate-in zoom-in-50 duration-200">
                          <Check className="w-6 h-6 stroke-[3]" />
                        </div>
                      )}
                      {isWrongSelection && (
                        <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg animate-in zoom-in-50 duration-200">
                          <X className="w-6 h-6 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback / Explanation Box */}
        {hasAnswered && (
          <div className={`p-5 rounded-2xl border transition-all animate-in fade-in-50 duration-300 ${
            isSelectedCorrect 
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' 
              : 'bg-amber-50/90 border-amber-200 text-amber-950'
          }`}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {isSelectedCorrect ? (
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                )}
              </div>
              <div className="space-y-1">
                <div className="font-extrabold text-base flex items-center gap-2">
                  <span>{isSelectedCorrect ? 'Tebrikler, Doğru Cevap!' : 'Dikkat! Doğru Cevap: ' + question.correctAnswer}</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed opacity-90">
                  {question.explanationTr}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <button
            onClick={onPrev}
            disabled={!canPrev}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-colors ${
              canPrev
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer'
                : 'bg-slate-50 text-slate-300 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Önceki Soru</span>
          </button>

          {hasAnswered ? (
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg sm:text-xl shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{questionIndex + 1 === totalQuestions ? 'Sonuçları Gör ➔' : 'Sıradaki Soruya Geç'}</span>
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </button>
          ) : (
            <div className="text-sm font-semibold text-slate-400 italic">
              Lütfen devam etmek için bir şık seçin
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
