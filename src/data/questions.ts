export interface Question {
  id: number;
  sentenceBefore: string;
  sentenceAfter: string;
  options: string[];
  correctAnswer: string;
  translationTr: string;
  explanationTr: string;
  category: string;
  illustrationType: string;
}

export const QUESTIONS_DATA: Question[] = [
  // Page 1
  {
    id: 1,
    sentenceBefore: "Adrian is a very honest boy,",
    sentenceAfter: "everybody trusts him.",
    options: ["Because", "But", "So"],
    correctAnswer: "So",
    translationTr: "Adrian çok dürüst bir çocuk, bu yüzden herkes ona güvenir.",
    explanationTr: "'So' (bu yüzden / dolayısıyla), bir nedenin sonucunu belirtmek için kullanılır. Adrian dürüst olduğu için sonuç olarak herkes ona güvenmektedir.",
    category: "Cause & Result",
    illustrationType: "honest_boy"
  },
  {
    id: 2,
    sentenceBefore: "I feel very happy",
    sentenceAfter: "I spend time with my best friend.",
    options: ["When", "That's why", "But"],
    correctAnswer: "When",
    translationTr: "En iyi arkadaşımla vakit geçirdiğimde kendimi çok mutlu hissederim.",
    explanationTr: "'When' (-dığı zaman / -dığında), zaman bildiren bir bağlaçtır. Mutlu hissetme eyleminin ne zaman gerçekleştiğini açıklar.",
    category: "Time",
    illustrationType: "happy_friends"
  },
  {
    id: 3,
    sentenceBefore: "He is a good boy,",
    sentenceAfter: "he is sometimes very stubborn.",
    options: ["And", "But", "So"],
    correctAnswer: "But",
    translationTr: "O iyi bir çocuk ama bazen çok inatçıdır.",
    explanationTr: "'But' (ama / fakat), zıt veya çelişen iki durumu birbirine bağlar (iyi bir çocuk <-> inatçı).",
    category: "Contrast",
    illustrationType: "stubborn_boy"
  },
  {
    id: 4,
    sentenceBefore: "Mary is very reliable.",
    sentenceAfter: "I share my secrets with her.",
    options: ["That's why", "Because", "But"],
    correctAnswer: "That's why",
    translationTr: "Mary çok güvenilirdir. Bu yüzden sırlarımı onunla paylaşırım.",
    explanationTr: "'That's why' (bu yüzden / işte bu nedenle), iki bağımsız cümle arasında neden-sonuç ilişkisi kurar.",
    category: "Cause & Result",
    illustrationType: "sharing_secrets"
  },
  {
    id: 5,
    sentenceBefore: "",
    sentenceAfter: "I have a problem, my buddies always back me up.",
    options: ["Because", "So", "When"],
    correctAnswer: "When",
    translationTr: "Bir problemim olduğunda, dostlarım her zaman bana arka çıkar.",
    explanationTr: "'When' cümlenin başında kullanıldığında 'Bir problemim olduğunda / ne zaman bir sorunum olsa' anlamı verir.",
    category: "Time",
    illustrationType: "buddies_backup"
  },
  {
    id: 6,
    sentenceBefore: "",
    sentenceAfter: "you need help, you can count on me.",
    options: ["If", "Because", "So"],
    correctAnswer: "If",
    translationTr: "Eğer yardıma ihtiyacın olursa bana güvenebilirsin.",
    explanationTr: "'If' (eğer / -se, -sa), koşul bildirir: Yardıma ihtiyacın olursa bana güvenebilirsin.",
    category: "Condition",
    illustrationType: "count_on_me"
  },
  {
    id: 7,
    sentenceBefore: "I like watching movies",
    sentenceAfter: "eating popcorn with my friends.",
    options: ["And", "But", "So"],
    correctAnswer: "And",
    translationTr: "Arkadaşlarımla film izlemeyi ve patlamış mısır yemeyi severim.",
    explanationTr: "'And' (ve), benzer fikirleri veya iki paralel eylemi (film izlemek + mısır yemek) birbirine bağlar.",
    category: "Addition",
    illustrationType: "movies_popcorn"
  },
  {
    id: 8,
    sentenceBefore: "She never tells lies,",
    sentenceAfter: "she is my best friend.",
    options: ["But", "So", "If"],
    correctAnswer: "So",
    translationTr: "O asla yalan söylemez, bu yüzden o benim en iyi arkadaşımdır.",
    explanationTr: "'So' (bu yüzden), birinci cümledeki nedenin (asla yalan söylememesi) doğurduğu sonucu bağlar.",
    category: "Cause & Result",
    illustrationType: "best_friend_hug"
  },
  {
    id: 9,
    sentenceBefore: "I will call you",
    sentenceAfter: "I arrive at the cafe.",
    options: ["Because", "When", "So"],
    correctAnswer: "When",
    translationTr: "Kafeye vardığımda seni arayacağım.",
    explanationTr: "'When' (-dığında), gelecekte yapılacak aramanın gerçekleşeceği zamanı belirtir.",
    category: "Time",
    illustrationType: "call_cafe"
  },
  {
    id: 10,
    sentenceBefore: "We chat",
    sentenceAfter: "listen to music at slumber parties.",
    options: ["And", "But", "Because"],
    correctAnswer: "And",
    translationTr: "Pijama partilerinde sohbet eder ve müzik dinleriz.",
    explanationTr: "'And' (ve), 'chat' ve 'listen' fiillerini bağlayarak birlikte yapılan etkinlikleri ifade eder.",
    category: "Addition",
    illustrationType: "slumber_chat"
  },
  {
    id: 11,
    sentenceBefore: "",
    sentenceAfter: "I am very busy, I will come to your birthday party.",
    options: ["Although", "When", "That's why"],
    correctAnswer: "Although",
    translationTr: "Çok meşgul olmama rağmen doğum günü partine geleceğim.",
    explanationTr: "'Although' (-e rağmen), beklenenin aksine gelişen bir zıtlığı ifade eder (meşgul olmasına rağmen gelmesi).",
    category: "Contrast",
    illustrationType: "birthday_party"
  },
  {
    id: 12,
    sentenceBefore: "He is a very funny boy.",
    sentenceAfter: "he sometimes makes bad jokes.",
    options: ["Because", "If", "However"],
    correctAnswer: "However",
    translationTr: "O çok komik bir çocuktur. Ancak bazen kötü şakalar yapar.",
    explanationTr: "'However' (ancak / yine de), iki bağımsız cümle arasında zıtlık belirtmek için virgülden önce kullanılır.",
    category: "Contrast",
    illustrationType: "funny_prank"
  },

  // Page 2
  {
    id: 13,
    sentenceBefore: "She wants to join the event,",
    sentenceAfter: "she feels too tired.",
    options: ["And", "But", "So"],
    correctAnswer: "But",
    translationTr: "Etkinliğe katılmak istiyor ama çok yorgun hissediyor.",
    explanationTr: "'But' (ama / fakat), katılma isteği ile yorgunluk hissi arasındaki çelişkiyi gösterir.",
    category: "Contrast",
    illustrationType: "tired_girl"
  },
  {
    id: 14,
    sentenceBefore: "",
    sentenceAfter: "she refused my invitation, I am not angry with her.",
    options: ["Although", "Because", "But"],
    correctAnswer: "Although",
    translationTr: "Davetimi reddetmesine rağmen ona kızgın değilim.",
    explanationTr: "'Although' (-e rağmen / karşın), reddetme durumuna rağmen kızgın olmama tezatını kurar.",
    category: "Contrast",
    illustrationType: "refuse_invite"
  },
  {
    id: 15,
    sentenceBefore: "Jane is my best friend",
    sentenceAfter: "she always backs me up.",
    options: ["But", "So", "When"],
    correctAnswer: "So",
    translationTr: "Jane benim en iyi arkadaşım, bu yüzden her zaman bana destek olur.",
    explanationTr: "'So' (bu yüzden / dolayısıyla), neden-sonuç ilişkisi kurar. Jane en iyi arkadaşı olduğu için sonuç olarak her zaman ona arka çıkmaktadır.",
    category: "Cause & Result",
    illustrationType: "jane_support"
  },
  {
    id: 16,
    sentenceBefore: "She promised to keep my secret.",
    sentenceAfter: "she told it to everybody.",
    options: ["When", "However", "Although"],
    correctAnswer: "However",
    translationTr: "Sırrımı saklayacağına söz verdi. Ancak bunu herkese anlattı.",
    explanationTr: "'However' (ancak / ne var ki), iki cümle arasında beklenmeyen karşıtlığı vurgular.",
    category: "Contrast",
    illustrationType: "gossip_secret"
  },
  {
    id: 17,
    sentenceBefore: "",
    sentenceAfter: "my mate invites me to a party, I always accept it.",
    options: ["When", "Because", "Although"],
    correctAnswer: "When",
    translationTr: "Arkadaşım beni bir partiye davet ettiğinde, her zaman kabul ederim.",
    explanationTr: "'When' (-dığında / ne zaman ... olsa), olayın koşullandığı zamanı belirtir.",
    category: "Time",
    illustrationType: "party_invite_check"
  },
  {
    id: 18,
    sentenceBefore: "We will be very happy",
    sentenceAfter: "you come to my slumber party.",
    options: ["But", "If", "And"],
    correctAnswer: "If",
    translationTr: "Pijama partime gelirsen çok mutlu olacağız.",
    explanationTr: "'If' (eğer / -sen), mutluluğun koşulunun partiye gelinmesi olduğunu ifade eder.",
    category: "Condition",
    illustrationType: "slumber_fun"
  },
  {
    id: 19,
    sentenceBefore: "I have an exam tomorrow.",
    sentenceAfter: "I can't come to the party.",
    options: ["That's why", "Because", "When"],
    correctAnswer: "That's why",
    translationTr: "Yarın bir sınavım var. Bu yüzden partiye gelemem.",
    explanationTr: "'That's why' (bu yüzden / bu sebeple), ilk cümledeki sınav durumunun sonucunu bildirir.",
    category: "Cause & Result",
    illustrationType: "exam_tomorrow"
  },
  {
    id: 20,
    sentenceBefore: "A true friend should be honest",
    sentenceAfter: "reliable.",
    options: ["And", "But", "So"],
    correctAnswer: "And",
    translationTr: "Gerçek bir arkadaş dürüst ve güvenilir olmalıdır.",
    explanationTr: "'And' (ve), iki olumlu sıfatı (honest + reliable) birbirine ekler.",
    category: "Addition",
    illustrationType: "honest_reliable"
  },
  {
    id: 21,
    sentenceBefore: "I have an extra ticket,",
    sentenceAfter: "I am inviting you to the concert.",
    options: ["But", "If", "So"],
    correctAnswer: "So",
    translationTr: "Fazladan bir biletim var, bu yüzden seni konsere davet ediyorum.",
    explanationTr: "'So' (bu yüzden / bu nedenle), biletin fazla olmasının doğrudan sonucunu aktarır.",
    category: "Cause & Result",
    illustrationType: "concert_invite"
  },
  {
    id: 22,
    sentenceBefore: "A loyal friend helps you",
    sentenceAfter: "you are in trouble.",
    options: ["When", "And", "But"],
    correctAnswer: "When",
    translationTr: "Sadık bir arkadaş, başın dertte olduğunda sana yardım eder.",
    explanationTr: "'When' (zaman bildirir: dertte olduğun zaman / durumlarda).",
    category: "Time",
    illustrationType: "helping_bicycle"
  },
  {
    id: 23,
    sentenceBefore: "They always argue;",
    sentenceAfter: "they are not close friends.",
    options: ["However", "When", "That's why"],
    correctAnswer: "That's why",
    translationTr: "Her zaman tartışırlar; bu yüzden yakın arkadaş değillerdir.",
    explanationTr: "Noktalı virgülden sonra gelen 'that's why', tartışmanın sonucu olarak yakın arkadaş olmadıklarını belirtir.",
    category: "Cause & Result",
    illustrationType: "arguing_kids"
  },
  {
    id: 24,
    sentenceBefore: "My buddy backs me up",
    sentenceAfter: "gives me good advice.",
    options: ["And", "But", "So"],
    correctAnswer: "And",
    translationTr: "Dostum bana destek olur ve bana iyi tavsiyeler verir.",
    explanationTr: "'And' (ve), iki destekleyici eylemi (destek olmak + tavsiye vermek) birbirine ekler.",
    category: "Addition",
    illustrationType: "buddy_advice"
  },
  {
    id: 25,
    sentenceBefore: "We can meet at the cafe",
    sentenceAfter: "you are not busy on Sunday.",
    options: ["But", "If", "And"],
    correctAnswer: "If",
    translationTr: "Pazar günü meşgul değilsen kafede buluşabiliriz.",
    explanationTr: "'If' (eğer / -se), kafede buluşmanın şartını ortaya koyar.",
    category: "Condition",
    illustrationType: "cafe_meeting"
  },
  {
    id: 26,
    sentenceBefore: "The concert sounds awesome.",
    sentenceAfter: "I don't have any ticket.",
    options: ["That's why", "Because", "However"],
    correctAnswer: "However",
    translationTr: "Konser kulağa harika geliyor. Ancak hiç biletim yok.",
    explanationTr: "'However' (ancak / lakin), konserin harika olması ile bilet olmaması arasındaki çelişkiyi vurgular.",
    category: "Contrast",
    illustrationType: "awesome_concert_ticket"
  },
  {
    id: 27,
    sentenceBefore: "Tim is very stubborn,",
    sentenceAfter: "he never changes his mind.",
    options: ["But", "If", "So"],
    correctAnswer: "So",
    translationTr: "Tim çok inatçıdır, bu yüzden fikrini asla değiştirmez.",
    explanationTr: "'So' (bu yüzden), inatçı bir karakterin doğal bir sonucu olarak fikrini değiştirmemesini bağlar.",
    category: "Cause & Result",
    illustrationType: "stubborn_mind"
  }
];

// Helper to shuffle array (Fisher-Yates)
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate a randomized set of questions with shuffled options
export function generateQuestionSet(count?: number): Question[] {
  const shuffledQuestions = shuffleArray(QUESTIONS_DATA);
  const selected = count && count < shuffledQuestions.length ? shuffledQuestions.slice(0, count) : shuffledQuestions;
  
  // Also shuffle the options for each question
  return selected.map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
}
