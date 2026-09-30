import { useState, useEffect, useCallback } from 'react';
import { SmartboardToolbar } from './components/SmartboardToolbar';
import { QuestionCard } from './components/QuestionCard';
import { ResultsModal } from './components/ResultsModal';
import { ConjunctionsGuide } from './components/ConjunctionsGuide';
import { generateQuestionSet, Question } from './data/questions';
import { soundManager } from './utils/audio';

export default function App() {
  const [selectedCount, setSelectedCount] = useState<number>(27);
  const [questions, setQuestions] = useState<Question[]>(() => generateQuestionSet(27));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, { selectedOption: string; isCorrect: boolean }>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [fontScale, setFontScale] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Initialize and Shuffle Question Set
  const startNewQuiz = useCallback((count?: number) => {
    const qCount = count || selectedCount;
    setSelectedCount(qCount);
    const newSet = generateQuestionSet(qCount);
    setQuestions(newSet);
    setCurrentIndex(0);
    setUserAnswers({});
    setIsCompleted(false);
  }, [selectedCount]);

  // Handle Sound Toggle
  const toggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    soundManager.enabled = nextVal;
  };

  // Handle Fullscreen Toggle for classroom smartboard
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Answer handler
  const handleAnswer = (isCorrect: boolean) => {
    const currentQ = questions[currentIndex];
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        selectedOption: currentQ.options.find(
          (opt) => isCorrect 
            ? opt.trim().toLowerCase() === currentQ.correctAnswer.trim().toLowerCase() 
            : opt.trim().toLowerCase() !== currentQ.correctAnswer.trim().toLowerCase()
        ) || currentQ.options[0],
        isCorrect
      }
    }));
  };

  // Next question handler
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  // Previous question handler
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Filter mistakes to review
  const handleReviewMistakes = () => {
    const wrongQuestions = questions.filter((q) => {
      const ans = userAnswers[q.id];
      return ans && !ans.isCorrect;
    });

    if (wrongQuestions.length > 0) {
      setQuestions(wrongQuestions);
      setCurrentIndex(0);
      setUserAnswers({});
      setIsCompleted(false);
    }
  };

  // Derived statistics
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.values(userAnswers).filter((a) => a.isCorrect).length;
  const wrongCount = Object.values(userAnswers).filter((a) => !a.isCorrect).length;
  const progressPercent = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;

  const currentQuestion = questions[currentIndex];
  const currentUserAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans select-none text-slate-900">
      {/* Top Smartboard Toolbar */}
      <SmartboardToolbar
        onNewSet={startNewQuiz}
        selectedCount={selectedCount}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        fontScale={fontScale}
        onChangeFontScale={setFontScale}
        onOpenGuide={() => setIsGuideOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Main Classroom Work Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center gap-6">
        {!isCompleted ? (
          <>
            {/* Live Progress Bar & Stats Pill for Smartboard */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center justify-between flex-wrap gap-4">
              {/* Question Progress Pill */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">İlerleme:</span>
                <span className="text-lg font-black text-blue-700">
                  {currentIndex + 1} / {questions.length}
                </span>
              </div>

              {/* Graphical Progress Bar */}
              <div className="flex-1 min-w-[200px] h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Counters */}
              <div className="flex items-center gap-4 text-sm sm:text-base font-extrabold">
                <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                  <span>✔</span>
                  <span>{correctCount} Doğru</span>
                </div>
                <div className="flex items-center gap-1.5 text-rose-600 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200">
                  <span>✖</span>
                  <span>{wrongCount} Yanlış</span>
                </div>
              </div>
            </div>

            {/* Active Question Card */}
            {currentQuestion && (
              <QuestionCard
                question={currentQuestion}
                questionIndex={currentIndex}
                totalQuestions={questions.length}
                fontScale={fontScale}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrev={handlePrev}
                canPrev={currentIndex > 0}
                userAnswer={currentUserAnswer}
              />
            )}
          </>
        ) : (
          /* Quiz Results View */
          <ResultsModal
            correctCount={correctCount}
            wrongCount={wrongCount}
            totalQuestions={questions.length}
            onRestartNewSet={() => startNewQuiz(selectedCount)}
            onReviewMistakes={wrongCount > 0 ? handleReviewMistakes : undefined}
            hasMistakes={wrongCount > 0}
          />
        )}
      </main>

      {/* Footer Info & Instructions for Smartboards */}
      <footer className="py-3 px-4 text-center text-xs text-slate-500 border-t border-slate-200 bg-white/70">
        <span>Akıllı tahta dokunmatik ekranları için optimize edilmiştir · </span>
        <span className="font-semibold text-slate-700">Klavye kısayolları:</span> 1, 2, 3 veya A, B, C tuşları ile şık seçebilir, Boşluk veya Enter ile sonraki soruya geçebilirsiniz.
      </footer>

      {/* Conjunctions Grammar Quick Guide Modal */}
      <ConjunctionsGuide
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
