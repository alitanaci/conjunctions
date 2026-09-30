import React from 'react';

interface IllustrationProps {
  type: string;
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ type, className = "w-full h-48 sm:h-56" }) => {
  switch (type) {
    case 'honest_boy':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F0FDF4" />
          <circle cx="200" cy="150" r="110" fill="#DCFCE7" />
          {/* Boy Body */}
          <path d="M150 260 L160 170 C160 150 240 150 240 170 L250 260 Z" fill="#2563EB" />
          {/* Neck */}
          <rect x="188" y="125" width="24" height="25" fill="#FBBF24" rx="6" />
          {/* Head */}
          <circle cx="200" cy="105" r="40" fill="#FDE68A" />
          {/* Hair */}
          <path d="M165 95 C165 65 235 65 235 95 C230 75 220 70 200 70 C180 70 170 80 165 95 Z" fill="#92400E" />
          {/* Friendly Eyes & Smile */}
          <circle cx="187" cy="105" r="4.5" fill="#1E293B" />
          <circle cx="213" cy="105" r="4.5" fill="#1E293B" />
          <path d="M190 120 Q200 130 210 120" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
          {/* Gold Star Medal for Honesty */}
          <polygon points="200,165 206,182 224,182 210,193 215,210 200,199 185,210 190,193 176,182 194,182" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
          <circle cx="200" cy="190" r="4" fill="#FEF3C7" />
          {/* Sparkles */}
          <path d="M120 70 L125 80 L135 85 L125 90 L120 100 L115 90 L105 85 L115 80 Z" fill="#F59E0B" />
          <path d="M280 100 L283 108 L291 111 L283 115 L280 123 L277 115 L269 111 L277 108 Z" fill="#10B981" />
        </svg>
      );

    case 'happy_friends':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#EFF6FF" />
          {/* Sun */}
          <circle cx="340" cy="60" r="32" fill="#FBBF24" opacity="0.8" />
          {/* Green Hills */}
          <path d="M0 240 Q150 180 400 240 L400 300 L0 300 Z" fill="#86EFAC" />
          <path d="M0 260 Q220 210 400 270 L400 300 L0 300 Z" fill="#4ADE80" />
          {/* Friend 1 (Left) */}
          <circle cx="160" cy="130" r="28" fill="#FED7AA" />
          <path d="M135 125 C135 100 185 100 185 125 C180 110 170 105 160 105 C150 105 140 110 135 125 Z" fill="#451A03" />
          <circle cx="152" cy="132" r="3.5" fill="#1E293B" />
          <circle cx="168" cy="132" r="3.5" fill="#1E293B" />
          <path d="M153 144 Q160 152 167 144" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M125 250 L135 175 C135 160 185 160 185 175 L195 250 Z" fill="#3B82F6" />
          {/* Friend 2 (Right) */}
          <circle cx="240" cy="135" r="28" fill="#FDE68A" />
          <path d="M215 130 C215 105 265 105 265 130 C260 112 250 108 240 108 C230 108 220 112 215 130 Z" fill="#B45309" />
          <circle cx="232" cy="137" r="3.5" fill="#1E293B" />
          <circle cx="248" cy="137" r="3.5" fill="#1E293B" />
          <path d="M233 149 Q240 157 247 149" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M205 250 L215 180 C215 165 265 165 265 180 L275 250 Z" fill="#EC4899" />
          {/* Linked arms / Heart */}
          <path d="M200 120 C200 110 190 105 185 112 C180 105 170 110 170 120 C170 135 200 145 200 145 C200 145 230 135 230 120 C230 110 220 105 215 112 C210 105 200 110 200 120 Z" fill="#EF4444" transform="translate(0,-30) scale(0.6)" transform-origin="200 80" />
        </svg>
      );

    case 'stubborn_boy':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FEF2F2" />
          <circle cx="200" cy="150" r="110" fill="#FEE2E2" />
          {/* Angry eyebrows steam puff */}
          <path d="M125 90 Q120 70 135 75 Q150 65 155 80 Q165 85 155 95 Z" fill="#CBD5E1" opacity="0.6" />
          <path d="M275 90 Q280 70 265 75 Q250 65 245 80 Q235 85 245 95 Z" fill="#CBD5E1" opacity="0.6" />
          {/* Body with Crossed Arms */}
          <path d="M140 260 L155 175 C155 155 245 155 245 175 L260 260 Z" fill="#EF4444" />
          {/* Crossed arms shape */}
          <rect x="150" y="190" width="100" height="36" rx="18" fill="#DC2626" />
          <circle cx="160" cy="208" r="14" fill="#FDE68A" />
          <circle cx="240" cy="208" r="14" fill="#FDE68A" />
          {/* Head & Neck */}
          <rect x="188" y="125" width="24" height="20" fill="#FBBF24" />
          <circle cx="200" cy="110" r="40" fill="#FED7AA" />
          {/* Red/Brown Spiky Hair */}
          <path d="M160 100 L170 70 L185 80 L200 65 L215 80 L230 70 L240 100 Z" fill="#B91C1C" />
          {/* Pouting Angry Eyes & Brows */}
          <line x1="175" y1="95" x2="192" y2="104" stroke="#7F1D1D" strokeWidth="4" strokeLinecap="round" />
          <line x1="225" y1="95" x2="208" y2="104" stroke="#7F1D1D" strokeWidth="4" strokeLinecap="round" />
          <circle cx="184" cy="108" r="4" fill="#1E293B" />
          <circle cx="216" cy="108" r="4" fill="#1E293B" />
          {/* Pout Mouth */}
          <path d="M188 132 Q200 124 212 132" stroke="#7F1D1D" strokeWidth="3.5" strokeLinecap="round" />
          {/* Flushed cheeks */}
          <circle cx="174" cy="120" r="7" fill="#FCA5A5" />
          <circle cx="226" cy="120" r="7" fill="#FCA5A5" />
        </svg>
      );

    case 'sharing_secrets':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FAF5FF" />
          <circle cx="200" cy="150" r="110" fill="#F3E8FF" />
          {/* Girl 1 (Left whispering) */}
          <circle cx="150" cy="125" r="32" fill="#FED7AA" />
          {/* Long Hair */}
          <path d="M118 120 C118 80 182 80 182 120 C182 165 175 180 175 180 L125 180 C125 180 118 165 118 120 Z" fill="#78350F" />
          <circle cx="150" cy="125" r="28" fill="#FED7AA" />
          {/* Hand cupping ear */}
          <path d="M175 130 Q190 120 185 140 Q175 145 170 135" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.5" />
          <circle cx="160" cy="122" r="3.5" fill="#1E293B" />
          {/* Girl 2 (Right listening with smile) */}
          <circle cx="245" cy="125" r="32" fill="#FDE68A" />
          <path d="M215 120 C215 85 275 85 275 120 C275 150 270 170 270 170 L220 170 Z" fill="#92400E" />
          <circle cx="245" cy="125" r="28" fill="#FDE68A" />
          <circle cx="235" cy="122" r="3.5" fill="#1E293B" />
          <circle cx="255" cy="122" r="3.5" fill="#1E293B" />
          <path d="M238 138 Q245 146 252 138" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          {/* Speech Whisper bubbles */}
          <circle cx="195" cy="115" r="5" fill="#A855F7" opacity="0.6" />
          <circle cx="205" cy="105" r="7" fill="#A855F7" opacity="0.8" />
          <path d="M205 90 Q215 80 225 90 Q225 100 215 98 Z" fill="#9333EA" />
          {/* Lock & Secret Icon */}
          <rect x="188" y="210" width="24" height="20" rx="4" fill="#EAB308" />
          <path d="M194 210 V200 C194 195 206 195 206 200 V210" stroke="#CA8A04" strokeWidth="3" fill="none" />
        </svg>
      );

    case 'buddies_backup':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F0F9FF" />
          {/* Support Group / Buddies */}
          {/* Central friend */}
          <circle cx="200" cy="120" r="28" fill="#FED7AA" />
          <path d="M175 110 C175 85 225 85 225 110 Z" fill="#1E293B" />
          <path d="M170 250 L180 170 C180 155 220 155 220 170 L230 250 Z" fill="#0284C7" />
          {/* Buddy 1 (Left supporting) */}
          <circle cx="130" cy="130" r="26" fill="#FDE68A" />
          <path d="M110 120 C110 95 150 95 150 120 Z" fill="#92400E" />
          <path d="M100 250 L110 180 C110 165 150 165 150 180 L160 250 Z" fill="#10B981" />
          {/* Hand on shoulder */}
          <path d="M150 175 Q175 165 185 170" stroke="#059669" strokeWidth="8" strokeLinecap="round" />
          {/* Buddy 2 (Right supporting) */}
          <circle cx="270" cy="130" r="26" fill="#FED7AA" />
          <path d="M250 120 C250 95 290 95 290 120 Z" fill="#B45309" />
          <path d="M240 250 L250 180 C250 165 290 165 290 180 L300 250 Z" fill="#8B5CF6" />
          {/* Hand on right shoulder */}
          <path d="M250 175 Q225 165 215 170" stroke="#7C3AED" strokeWidth="8" strokeLinecap="round" />
          {/* Glowing Shield badge */}
          <path d="M200 60 L218 70 V85 C218 97 200 105 200 105 C200 105 182 97 182 85 V70 Z" fill="#38BDF8" opacity="0.8" />
        </svg>
      );

    case 'count_on_me':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FDF4FF" />
          {/* Two stylized figures shaking hands / fist bumping */}
          <circle cx="140" cy="110" r="30" fill="#FED7AA" />
          <path d="M110 240 L125 160 C125 145 165 145 165 160 L175 240 Z" fill="#EC4899" />
          <circle cx="260" cy="110" r="30" fill="#FDE68A" />
          <path d="M225 240 L235 160 C235 145 275 145 275 160 L290 240 Z" fill="#3B82F6" />
          {/* Shaking Hands in center */}
          <path d="M150 170 L185 185 L200 180" stroke="#DB2777" strokeWidth="12" strokeLinecap="round" />
          <path d="M250 170 L215 185 L200 180" stroke="#2563EB" strokeWidth="12" strokeLinecap="round" />
          <circle cx="200" cy="180" r="14" fill="#F59E0B" />
          {/* Friendship Star */}
          <polygon points="200,60 205,75 220,75 208,85 212,100 200,90 188,100 192,85 180,75 195,75" fill="#EAB308" />
        </svg>
      );

    case 'movies_popcorn':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FEFCE8" />
          {/* Film Strip */}
          <rect x="60" y="50" width="280" height="50" rx="8" fill="#1E293B" />
          <rect x="75" y="58" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="110" y="58" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="145" y="58" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="180" y="58" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="215" y="58" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="250" y="58" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="285" y="58" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="75" y="78" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="110" y="78" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="145" y="78" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="180" y="78" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="215" y="78" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="250" y="78" width="16" height="12" rx="2" fill="#FFFFFF" />
          <rect x="285" y="78" width="16" height="12" rx="2" fill="#FFFFFF" />
          {/* Popcorn Bucket */}
          <path d="M140 270 L155 140 L245 140 L260 270 Z" fill="#EF4444" />
          {/* White stripes on bucket */}
          <path d="M170 270 L178 140 L192 140 L188 270 Z" fill="#FFFFFF" />
          <path d="M212 270 L208 140 L222 140 L230 270 Z" fill="#FFFFFF" />
          {/* Popcorn Kernels Cloud */}
          <circle cx="165" cy="130" r="16" fill="#FEF08A" />
          <circle cx="190" cy="120" r="18" fill="#FDE047" />
          <circle cx="215" cy="125" r="17" fill="#FEF08A" />
          <circle cx="235" cy="135" r="15" fill="#FDE047" />
          <circle cx="175" cy="105" r="16" fill="#FACC15" />
          <circle cx="205" cy="100" r="18" fill="#FEF08A" />
          <circle cx="225" cy="110" r="15" fill="#FACC15" />
          {/* 3D Glasses */}
          <rect x="80" y="190" width="50" height="24" rx="4" fill="#3B82F6" opacity="0.9" />
          <rect x="85" y="194" width="40" height="16" rx="2" fill="#93C5FD" />
        </svg>
      );

    case 'best_friend_hug':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FFF1F2" />
          {/* Floating Hearts */}
          <path d="M200 60 C200 45 180 40 175 52 C170 40 150 45 150 60 C150 80 200 95 200 95 C200 95 250 80 250 60 C250 45 230 40 225 52 C220 40 200 45 200 60 Z" fill="#FB7185" />
          {/* Two Girls Hugging */}
          <circle cx="165" cy="135" r="28" fill="#FED7AA" />
          <path d="M140 125 C140 95 190 95 190 125 C190 160 180 180 180 180 L140 180 Z" fill="#831843" />
          <circle cx="165" cy="135" r="24" fill="#FED7AA" />
          <path d="M158 144 Q165 150 172 144" stroke="#BE123C" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="235" cy="135" r="28" fill="#FDE68A" />
          <path d="M210 125 C210 95 260 95 260 125 C260 160 250 180 250 180 L210 180 Z" fill="#B45309" />
          <circle cx="235" cy="135" r="24" fill="#FDE68A" />
          <path d="M228 144 Q235 150 242 144" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          {/* Bodies joined in hug */}
          <path d="M135 260 L145 180 C145 160 255 160 255 180 L265 260 Z" fill="#F43F5E" />
          <path d="M175 185 Q200 200 225 185" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
        </svg>
      );

    case 'call_cafe':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F0FDFA" />
          {/* Cafe Awning */}
          <path d="M60 40 L340 40 L330 80 L70 80 Z" fill="#0D9488" />
          <path d="M90 40 L110 40 L105 80 L85 80 Z" fill="#CCFBF1" />
          <path d="M140 40 L160 40 L155 80 L135 80 Z" fill="#CCFBF1" />
          <path d="M190 40 L210 40 L205 80 L185 80 Z" fill="#CCFBF1" />
          <path d="M240 40 L260 40 L255 80 L235 80 Z" fill="#CCFBF1" />
          <path d="M290 40 L310 40 L305 80 L285 80 Z" fill="#CCFBF1" />
          {/* Coffee Cup Sign */}
          <circle cx="100" cy="140" r="24" fill="#0F766E" />
          <path d="M90 135 H110 V145 C110 150 105 152 100 152 C95 152 90 150 90 145 Z" fill="#FFFFFF" />
          {/* Person with Phone */}
          <circle cx="240" cy="130" r="32" fill="#FED7AA" />
          <path d="M210 120 C210 85 270 85 270 120 Z" fill="#1F2937" />
          <circle cx="240" cy="130" r="28" fill="#FED7AA" />
          {/* Smartphone held to ear */}
          <rect x="268" y="115" width="16" height="32" rx="4" fill="#111827" />
          <rect x="270" y="118" width="12" height="24" rx="2" fill="#38BDF8" />
          <path d="M205 260 L215 180 C215 160 270 160 270 180 L280 260 Z" fill="#0D9488" />
          {/* Calling Waves */}
          <path d="M292 118 Q300 125 292 135" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M298 112 Q310 125 298 140" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'slumber_chat':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FDF2F8" />
          {/* Music Notes */}
          <path d="M80 70 L95 65 V85 A6 6 0 1 1 85 80 V72 Z" fill="#DB2777" />
          <path d="M310 80 L325 75 V95 A6 6 0 1 1 305 90 V82 Z" fill="#8B5CF6" />
          <path d="M200 45 L220 40 V60 A6 6 0 1 1 200 55 V47 Z" fill="#F59E0B" />
          {/* Slumber Pillows */}
          <rect x="70" y="210" width="110" height="60" rx="20" fill="#FBCFE8" />
          <rect x="220" y="210" width="110" height="60" rx="20" fill="#DDD6FE" />
          {/* Pajama Friends */}
          <circle cx="150" cy="140" r="28" fill="#FED7AA" />
          <circle cx="250" cy="140" r="28" fill="#FDE68A" />
          {/* Pajamas with Polka Dots */}
          <path d="M120 250 L130 180 C130 165 175 165 175 180 L185 250 Z" fill="#EC4899" />
          <circle cx="140" cy="195" r="4" fill="#FFFFFF" />
          <circle cx="160" cy="205" r="4" fill="#FFFFFF" />
          <path d="M220 250 L230 180 C230 165 275 165 275 180 L285 250 Z" fill="#8B5CF6" />
          <circle cx="240" cy="195" r="4" fill="#FFFFFF" />
          <circle cx="260" cy="205" r="4" fill="#FFFFFF" />
          {/* Chat bubble */}
          <path d="M185 105 Q200 95 215 105 Q220 120 205 125 L195 135 L197 125 Q180 120 185 105 Z" fill="#F472B6" />
        </svg>
      );

    case 'birthday_party':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FFFBEB" />
          {/* Bunting Party Flags */}
          <polygon points="40,40 70,80 100,40" fill="#EF4444" />
          <polygon points="100,40 130,80 160,40" fill="#3B82F6" />
          <polygon points="160,40 190,80 220,40" fill="#10B981" />
          <polygon points="220,40 250,80 280,40" fill="#F59E0B" />
          <polygon points="280,40 310,80 340,40" fill="#8B5CF6" />
          <polygon points="340,40 370,80 400,40" fill="#EC4899" />
          <line x1="30" y1="40" x2="400" y2="40" stroke="#78350F" strokeWidth="2" />
          {/* Balloons */}
          <circle cx="80" cy="120" r="24" fill="#F87171" />
          <line x1="80" y1="144" x2="80" y2="200" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="320" cy="120" r="24" fill="#60A5FA" />
          <line x1="320" y1="144" x2="320" y2="200" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Birthday Cake */}
          <rect x="150" y="210" width="100" height="55" rx="10" fill="#FB7185" />
          <rect x="165" y="170" width="70" height="42" rx="8" fill="#FDE047" />
          {/* Candle & Flame */}
          <rect x="196" y="145" width="8" height="25" fill="#38BDF8" rx="2" />
          <path d="M200 130 Q194 140 200 145 Q206 140 200 130 Z" fill="#F59E0B" />
          <circle cx="200" cy="139" r="2.5" fill="#EF4444" />
          {/* Sparkles */}
          <polygon points="130,120 133,127 140,130 133,133 130,140 127,133 120,130 127,127" fill="#F59E0B" />
          <polygon points="270,120 273,127 280,130 273,133 270,140 267,133 260,130 267,127" fill="#10B981" />
        </svg>
      );

    case 'funny_prank':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F5F3FF" />
          {/* Prankster Boy */}
          <circle cx="160" cy="125" r="34" fill="#FED7AA" />
          <path d="M130 115 C130 75 195 75 195 115 Z" fill="#374151" />
          {/* Winking cheeky eye */}
          <path d="M148 125 Q154 120 160 125" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="175" cy="125" r="4" fill="#1E293B" />
          <path d="M152 138 Q165 152 178 138" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />
          {/* Squirting Flower Lapel */}
          <circle cx="200" cy="180" r="14" fill="#FBBF24" />
          <circle cx="190" cy="172" r="8" fill="#EF4444" />
          <circle cx="210" cy="172" r="8" fill="#EF4444" />
          <circle cx="190" cy="188" r="8" fill="#EF4444" />
          <circle cx="210" cy="188" r="8" fill="#EF4444" />
          {/* Water squirt arc */}
          <path d="M200 180 Q240 140 280 160 Q310 180 340 150" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" fill="none" strokeDasharray="6 4" />
          <circle cx="345" cy="148" r="5" fill="#0284C7" />
          <circle cx="335" cy="162" r="4" fill="#0284C7" />
          {/* Laugh marks 'HA HA' */}
          <text x="250" y="80" fill="#7C3AED" fontSize="24" fontWeight="bold" fontFamily="sans-serif">HA! HA!</text>
        </svg>
      );

    case 'tired_girl':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F8FAFC" />
          {/* Floating 'Zzz' */}
          <text x="260" y="80" fill="#94A3B8" fontSize="26" fontWeight="bold" fontFamily="sans-serif">Z</text>
          <text x="285" y="60" fill="#94A3B8" fontSize="20" fontWeight="bold" fontFamily="sans-serif">z</text>
          <text x="305" y="45" fill="#94A3B8" fontSize="16" fontWeight="bold" fontFamily="sans-serif">z</text>
          {/* Slouching Tired Girl */}
          <circle cx="190" cy="130" r="30" fill="#FED7AA" />
          <path d="M160 125 C160 90 220 90 220 125 Z" fill="#9A3412" />
          {/* Droopy sleepy eyes */}
          <path d="M175 132 Q182 138 189 132" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <path d="M198 132 Q205 138 212 132" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          {/* Slumped shoulders */}
          <path d="M150 260 L165 180 C165 160 225 165 220 185 L225 260 Z" fill="#64748B" />
          {/* Heavy battery icon: almost empty */}
          <rect x="80" y="70" width="50" height="26" rx="4" stroke="#EF4444" strokeWidth="2.5" fill="#FFFFFF" />
          <rect x="130" y="77" width="5" height="12" rx="2" fill="#EF4444" />
          <rect x="84" y="74" width="12" height="18" rx="2" fill="#EF4444" />
        </svg>
      );

    case 'refuse_invite':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FEF2F2" />
          {/* Big NO Badge */}
          <circle cx="200" cy="75" r="35" fill="#EF4444" />
          <text x="200" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="800" fontFamily="sans-serif">NO</text>
          {/* Girl politely declining with hand raised */}
          <circle cx="200" cy="160" r="30" fill="#FED7AA" />
          <path d="M170 150 C170 115 230 115 230 150 Z" fill="#78350F" />
          <circle cx="192" cy="160" r="3.5" fill="#1E293B" />
          <circle cx="208" cy="160" r="3.5" fill="#1E293B" />
          <path d="M194 172 Q200 176 206 172" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
          {/* Raised polite hand */}
          <rect x="135" y="165" width="22" height="30" rx="8" fill="#FDBA74" transform="rotate(-20 135 165)" />
          {/* Body */}
          <path d="M165 270 L175 200 C175 185 225 185 225 200 L235 270 Z" fill="#F43F5E" />
          {/* Envelope with X */}
          <rect x="60" y="160" width="50" height="36" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <path d="M60 160 L85 180 L110 160" stroke="#CBD5E1" strokeWidth="2" />
        </svg>
      );

    case 'jane_support':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F0FDF4" />
          <circle cx="200" cy="150" r="100" fill="#DCFCE7" />
          {/* Jane & Friend */}
          <circle cx="160" cy="120" r="28" fill="#FED7AA" />
          <circle cx="240" cy="120" r="28" fill="#FDE68A" />
          <path d="M135 110 C135 80 185 80 185 110 Z" fill="#15803D" />
          <path d="M215 110 C215 80 265 80 265 110 Z" fill="#A16207" />
          {/* Happy smiles */}
          <path d="M153 128 Q160 136 167 128" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M233 128 Q240 136 247 128" stroke="#713F12" strokeWidth="2.5" strokeLinecap="round" />
          {/* Jane arm supporting friend */}
          <path d="M130 250 L140 170 C140 155 260 155 260 170 L270 250 Z" fill="#22C55E" />
          <path d="M175 170 Q200 155 225 170" stroke="#16A34A" strokeWidth="10" strokeLinecap="round" />
          {/* Heart icon */}
          <path d="M200 70 C200 58 185 54 180 63 C175 54 160 58 160 70 C160 85 200 98 200 98 C200 98 240 85 240 70 C240 58 225 54 220 63 C215 54 200 58 200 70 Z" fill="#10B981" />
        </svg>
      );

    case 'gossip_secret':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FFF7ED" />
          {/* Girl telling everybody */}
          <circle cx="150" cy="130" r="32" fill="#FED7AA" />
          <path d="M120 120 C120 80 180 80 180 120 Z" fill="#C2410C" />
          {/* Wide open mouth shouting secret */}
          <ellipse cx="160" cy="140" rx="8" ry="12" fill="#7C2D12" />
          {/* Megaphone / Sound Waves spreading to everybody */}
          <path d="M185 130 L230 100 V160 Z" fill="#F97316" />
          <rect x="175" y="122" width="14" height="16" rx="2" fill="#EA580C" />
          {/* Sound blast waves */}
          <path d="M245 105 Q265 130 245 155" stroke="#EA580C" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M260 90 Q290 130 260 170" stroke="#F97316" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M275 75 Q315 130 275 185" stroke="#FB923C" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Broken secret lock */}
          <circle cx="80" cy="90" r="16" fill="#FEE2E2" />
          <text x="80" y="97" textAnchor="middle" fill="#EF4444" fontSize="18" fontWeight="bold">🔓</text>
        </svg>
      );

    case 'party_invite_check':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F0FDF4" />
          {/* Envelope */}
          <rect x="110" y="100" width="180" height="130" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
          <path d="M110 100 L200 170 L290 100" stroke="#94A3B8" strokeWidth="3" />
          {/* Letter inside */}
          <rect x="135" y="60" width="130" height="60" rx="6" fill="#FEF08A" stroke="#EAB308" strokeWidth="2" />
          <text x="200" y="95" textAnchor="middle" fill="#854D0E" fontSize="16" fontWeight="bold" fontFamily="sans-serif">INVITATION</text>
          {/* Big Green Accept Checkmark */}
          <circle cx="200" cy="180" r="36" fill="#22C55E" />
          <path d="M185 180 L195 192 L218 168" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'slumber_fun':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FAF5FF" />
          {/* Moon and Stars */}
          <path d="M330 50 A20 20 0 0 0 315 80 A20 20 0 1 1 330 50 Z" fill="#FBBF24" />
          <polygon points="270,60 272,65 277,66 273,70 274,75 270,72 266,75 267,70 263,66 268,65" fill="#FDE047" />
          {/* Two girls cozy in blankets */}
          <circle cx="160" cy="130" r="28" fill="#FED7AA" />
          <circle cx="240" cy="130" r="28" fill="#FDE68A" />
          {/* Fluffy Sleeping Blanket */}
          <path d="M90 270 Q200 170 310 270 Z" fill="#C084FC" />
          <circle cx="160" cy="128" r="3.5" fill="#1E293B" />
          <circle cx="240" cy="128" r="3.5" fill="#1E293B" />
          <path d="M153 140 Q160 148 167 140" stroke="#9333EA" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M233 140 Q240 148 247 140" stroke="#7E22CE" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'exam_tomorrow':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#EFF6FF" />
          {/* Ticking Clock */}
          <circle cx="100" cy="90" r="36" fill="#FFFFFF" stroke="#2563EB" strokeWidth="4" />
          <line x1="100" y1="90" x2="100" y2="68" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="90" x2="118" y2="90" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          {/* Stack of Books */}
          <rect x="230" y="220" width="120" height="28" rx="4" fill="#3B82F6" />
          <rect x="240" y="195" width="100" height="25" rx="4" fill="#EF4444" />
          <rect x="250" y="172" width="80" height="23" rx="4" fill="#10B981" />
          <rect x="255" y="152" width="70" height="20" rx="4" fill="#F59E0B" />
          {/* Exam Paper with A+ */}
          <rect x="150" y="110" width="80" height="110" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
          <line x1="165" y1="130" x2="215" y2="130" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
          <line x1="165" y1="145" x2="215" y2="145" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
          <line x1="165" y1="160" x2="200" y2="160" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
          <text x="190" y="200" fill="#DC2626" fontSize="24" fontWeight="800" fontFamily="sans-serif">EXAM</text>
        </svg>
      );

    case 'honest_reliable':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#ECFDF5" />
          <circle cx="200" cy="150" r="110" fill="#D1FAE5" />
          {/* Reliable Shield */}
          <path d="M200 60 L245 80 V130 C245 165 200 185 200 185 C200 185 155 165 155 130 V80 Z" fill="#10B981" />
          {/* Checkmark inside shield */}
          <path d="M180 120 L195 135 L225 105" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* Two hands clasped together */}
          <circle cx="130" cy="230" r="24" fill="#3B82F6" />
          <circle cx="270" cy="230" r="24" fill="#059669" />
          <path d="M145 230 L255 230" stroke="#1E293B" strokeWidth="12" strokeLinecap="round" />
          <text x="200" y="275" textAnchor="middle" fill="#065F46" fontSize="16" fontWeight="bold">HONEST & RELIABLE</text>
        </svg>
      );

    case 'concert_invite':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FAF5FF" />
          {/* Concert Stage Spotlights */}
          <polygon points="50,0 120,300 0,300" fill="#A855F7" opacity="0.15" />
          <polygon points="350,0 400,300 280,300" fill="#EC4899" opacity="0.15" />
          {/* Two Golden Concert Tickets */}
          <g transform="rotate(-10 170 140)">
            <rect x="110" y="90" width="140" height="70" rx="8" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
            <line x1="155" y1="90" x2="155" y2="160" stroke="#D97706" strokeWidth="2" strokeDasharray="4 4" />
            <text x="200" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">TICKET 1</text>
          </g>
          <g transform="rotate(12 230 170)">
            <rect x="170" y="120" width="140" height="70" rx="8" fill="#10B981" stroke="#059669" strokeWidth="2" />
            <line x1="215" y1="120" x2="215" y2="190" stroke="#059669" strokeWidth="2" strokeDasharray="4 4" />
            <text x="260" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">EXTRA +1</text>
          </g>
        </svg>
      );

    case 'helping_bicycle':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F0F9FF" />
          {/* Ground */}
          <line x1="20" y1="260" x2="380" y2="260" stroke="#94A3B8" strokeWidth="4" />
          {/* Fallen Bicycle Wheels */}
          <circle cx="90" cy="235" r="25" stroke="#64748B" strokeWidth="4" fill="none" />
          <circle cx="150" cy="235" r="25" stroke="#64748B" strokeWidth="4" fill="none" />
          <line x1="90" y1="235" x2="120" y2="210" stroke="#3B82F6" strokeWidth="4" />
          <line x1="120" y1="210" x2="150" y2="235" stroke="#3B82F6" strokeWidth="4" />
          {/* Person on ground reaching out */}
          <circle cx="190" cy="220" r="18" fill="#FED7AA" />
          <path d="M190 238 L210 255" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
          {/* Loyal friend bending down helping up */}
          <circle cx="270" cy="140" r="24" fill="#FDE68A" />
          <path d="M260 164 L240 215" stroke="#10B981" strokeWidth="10" strokeLinecap="round" />
          {/* Reaching hands connecting */}
          <path d="M210 230 L240 215" stroke="#F59E0B" strokeWidth="7" strokeLinecap="round" />
          <text x="290" y="90" fill="#0284C7" fontSize="16" fontWeight="bold">Helping Hand</text>
        </svg>
      );

    case 'arguing_kids':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FFF1F2" />
          {/* Kid 1 (Left, Angry) */}
          <circle cx="120" cy="140" r="30" fill="#FED7AA" />
          <path d="M90 130 C90 95 150 95 150 130 Z" fill="#DC2626" />
          <circle cx="130" cy="138" r="4" fill="#7F1D1D" />
          <path d="M110 155 Q125 145 135 155" stroke="#7F1D1D" strokeWidth="3" strokeLinecap="round" />
          {/* Lightning / Argument Sparks */}
          <path d="M190 90 L210 120 L195 125 L215 160" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Kid 2 (Right, Angry facing opposite) */}
          <circle cx="280" cy="140" r="30" fill="#FDE68A" />
          <path d="M250 130 C250 95 310 95 310 130 Z" fill="#991B1B" />
          <circle cx="270" cy="138" r="4" fill="#7F1D1D" />
          <path d="M265 155 Q275 145 290 155" stroke="#7F1D1D" strokeWidth="3" strokeLinecap="round" />
          {/* Broken heart */}
          <path d="M185 220 L195 200 L205 210 L215 190" stroke="#991B1B" strokeWidth="3" fill="none" />
        </svg>
      );

    case 'buddy_advice':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F0FDFA" />
          {/* Glowing Lightbulb (Advice/Idea) */}
          <circle cx="200" cy="70" r="22" fill="#FDE047" stroke="#EAB308" strokeWidth="2" />
          <rect x="194" y="92" width="12" height="8" rx="2" fill="#94A3B8" />
          <line x1="200" y1="35" x2="200" y2="25" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <line x1="170" y1="50" x2="160" y2="42" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <line x1="230" y1="50" x2="240" y2="42" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          {/* Wise buddy with arm around friend */}
          <circle cx="150" cy="160" r="28" fill="#FED7AA" />
          <circle cx="240" cy="160" r="28" fill="#FDE68A" />
          <path d="M125 270 L135 200 C135 185 175 185 175 200 L185 270 Z" fill="#0D9488" />
          <path d="M215 270 L225 200 C225 185 265 185 265 200 L275 270 Z" fill="#3B82F6" />
          <path d="M165 200 Q200 185 225 195" stroke="#0F766E" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );

    case 'cafe_meeting':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FFFBEB" />
          {/* Cafe Round Table */}
          <ellipse cx="200" cy="210" rx="120" ry="35" fill="#D97706" />
          <rect x="194" y="210" width="12" height="70" fill="#92400E" />
          {/* Steaming Coffee Cups */}
          <rect x="150" y="175" width="28" height="24" rx="4" fill="#FFFFFF" stroke="#B45309" strokeWidth="2" />
          <path d="M178 182 Q185 187 178 192" stroke="#B45309" strokeWidth="2" fill="none" />
          <path d="M158 165 Q164 158 158 150" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none" />
          <rect x="220" y="175" width="28" height="24" rx="4" fill="#FFFFFF" stroke="#B45309" strokeWidth="2" />
          <path d="M248 182 Q255 187 248 192" stroke="#B45309" strokeWidth="2" fill="none" />
          <path d="M228 165 Q234 158 228 150" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Calendar Badge 'SUNDAY' */}
          <rect x="160" y="55" width="80" height="70" rx="8" fill="#FFFFFF" stroke="#EF4444" strokeWidth="2" />
          <rect x="160" y="55" width="80" height="22" rx="6" fill="#EF4444" />
          <text x="200" y="71" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">SUNDAY</text>
          <text x="200" y="108" textAnchor="middle" fill="#1E293B" fontSize="24" fontWeight="800">SUN</text>
        </svg>
      );

    case 'awesome_concert_ticket':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F5F3FF" />
          {/* Guitar Music Ticket */}
          <rect x="90" y="100" width="220" height="110" rx="12" fill="#8B5CF6" />
          <circle cx="90" cy="155" r="14" fill="#F5F3FF" />
          <circle cx="310" cy="155" r="14" fill="#F5F3FF" />
          <line x1="230" y1="100" x2="230" y2="210" stroke="#DDD6FE" strokeWidth="2" strokeDasharray="5 5" />
          <text x="160" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="bold">CONCERT</text>
          <text x="160" y="175" textAnchor="middle" fill="#EDE9FE" fontSize="14">LIVE MUSIC</text>
          <text x="270" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="bold">VIP</text>
          {/* No Ticket Cross */}
          <circle cx="280" cy="70" r="28" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
          <path d="M268 58 L292 82 M292 58 L268 82" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'stubborn_mind':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#FFF7ED" />
          <circle cx="200" cy="150" r="105" fill="#FFEDD5" />
          {/* Stubborn Tim pulling or refusing */}
          <circle cx="200" cy="120" r="35" fill="#FED7AA" />
          <path d="M165 110 C165 70 235 70 235 110 Z" fill="#9A3412" />
          {/* Grumpy stubborn tight face */}
          <line x1="178" y1="115" x2="194" y2="120" stroke="#7C2D12" strokeWidth="3" strokeLinecap="round" />
          <line x1="222" y1="115" x2="206" y2="120" stroke="#7C2D12" strokeWidth="3" strokeLinecap="round" />
          <circle cx="188" cy="125" r="3.5" fill="#1E293B" />
          <circle cx="212" cy="125" r="3.5" fill="#1E293B" />
          <line x1="188" y1="140" x2="212" y2="140" stroke="#7C2D12" strokeWidth="3.5" strokeLinecap="round" />
          {/* Firm planted feet */}
          <path d="M160 260 L170 185 C170 165 230 165 230 185 L240 260 Z" fill="#EA580C" />
          {/* Padlock on brain/head meaning won't change mind */}
          <circle cx="200" cy="60" r="18" fill="#F59E0B" />
          <text x="200" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="18">🔒</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" rx="16" fill="#F1F5F9" />
          <circle cx="200" cy="150" r="60" fill="#E2E8F0" />
          <text x="200" y="160" textAnchor="middle" fill="#64748B" fontSize="24" fontWeight="bold">CONJUNCTIONS</text>
        </svg>
      );
  }
};
