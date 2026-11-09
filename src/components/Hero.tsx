import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Heart,
  Smile,
  Clock
} from 'lucide-react';
import { DADOS_PSICOLOGA } from '../data/conteudo';

interface HeroProps {
  onOpenBooking: () => void;
}

// Hook de animação de contagem numérica fluida
function useCountUp(target: number, duration: number = 2000, startNow: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startNow) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, startNow]);

  return count;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const anosExp = useCountUp(10, 1800);
  const horasAtendimento = useCountUp(1850, 2200);
  const taxaAcolhimento = useCountUp(99, 1900);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FFF5F8]/40 to-[#FDFBF7]"
    >
      {/* Elementos botânicos e etéreos de fundo */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-[#F472B6]/15 via-[#16A34A]/10 to-transparent rounded-full blur-3xl opacity-70"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 -left-20 w-80 h-80 bg-[#F472B6]/10 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Texto (7 colunas no desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge de Credencial */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FCE7F3]/80 border border-[#F472B6]/30 text-[#9D174D] shadow-[0_2px_12px_rgba(244,114,182,0.12)] mb-6 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-wide">
                Atendimento Clínico Humanizado • CRP 06/148920
              </span>
            </motion.div>

            {/* Headline Magnético com Cormorant Garamond */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
              className="font-display font-medium text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] xl:text-[88px] leading-[1.05] tracking-tight text-[#0F172A] mb-6"
            >
              Onde o silêncio ganha voz e a sua história encontra{' '}
              <span className="relative inline-block italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#DB2777] via-[#E11D48] to-[#15803D]">
                acolhimento.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#F472B6]/40 overflow-visible"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subtítulo Empático */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
              className="font-body text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Você não precisa carregar o peso do mundo sem amparo. Um consultório concebido para oferecer escuta ética, rigor científico e cuidado genuíno nas suas dores e recomeços.
            </motion.p>

            {/* CTAs Principais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                type="button"
                onClick={onOpenBooking}
                className="cursor-pointer group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] hover:from-[#BE185D] hover:to-[#166534] shadow-[0_12px_28px_-6px_rgba(219,39,119,0.35)] transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(219,39,119,0.45)] hover:-translate-y-1 active:translate-y-0"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <a
                href="#areas"
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-[#1E293B] bg-white/80 hover:bg-white border border-[#F472B6]/30 hover:border-[#F472B6]/60 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Conhecer áreas de cuidado</span>
              </a>
            </motion.div>

            {/* Selos de Garantia e Confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs text-[#64748B] pt-6 border-t border-[#F472B6]/20 w-full"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="font-medium">Sigilo Ético Absoluto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0" />
                <span className="font-medium">Resolução CFP 11/2018</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Smile className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="font-medium">Online e Presencial</span>
              </div>
            </motion.div>

          </div>

          {/* Coluna Visual e Composição (5 colunas) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Moldura orgânica da foto principal */}
              <div className="relative rounded-[32px] overflow-hidden shadow-[0_24px_50px_-12px_rgba(30,41,59,0.15)] border-2 border-white/80 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                  alt="Maurizia Gomes, Psicóloga Clínica em ambiente de acolhimento"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                  loading="eager"
                />
                
                {/* Overlay sutil para integração com o tema */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent pointer-events-none" />

                {/* Legenda na base da foto */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-display text-2xl font-semibold leading-tight">
                    Maurizia Gomes
                  </p>
                  <p className="text-xs text-white/90 font-medium tracking-wider uppercase mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                    Psicóloga Clínica • TCC & Humanismo
                  </p>
                </div>
              </div>

              {/* Card Flutuante 1: Citação Acolhedora (Superior Esquerdo) */}
              <motion.div
                initial={{ opacity: 0, x: -25, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
                className="hidden sm:flex absolute -top-6 -left-8 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F472B6]/30 shadow-[0_16px_32px_rgba(244,114,182,0.15)] max-w-[260px] items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FCE7F3] flex items-center justify-center shrink-0 text-[#DB2777]">
                  <Heart className="w-5 h-5 fill-[#F472B6]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0F172A] leading-tight">
                    Ambiente Sem Julgamentos
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-1 leading-snug">
                    Sua dor é válida e merece ser ouvida no seu ritmo.
                  </p>
                </div>
              </motion.div>

              {/* Card Flutuante 2: Modalidade Online (Inferior Direito) */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
                className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#16A34A]/30 shadow-[0_16px_32px_rgba(22,163,74,0.15)] max-w-[240px] items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center shrink-0 text-[#16A34A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#15803D] block">
                    Conveniência & Conforto
                  </span>
                  <span className="text-xs font-semibold text-[#0F172A] block leading-tight mt-0.5">
                    Sessões Seguras Online
                  </span>
                  <span className="text-[10px] text-[#64748B] block mt-0.5">
                    De qualquer lugar do mundo
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Barra de Estatísticas com Contador Numérico Vivo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-20 pt-10 border-t border-[#F472B6]/20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
                +{anosExp}
              </span>
              <span className="font-display text-2xl font-medium text-[#DB2777]">anos</span>
            </div>
            <span className="text-sm font-semibold text-[#1E293B] mt-1">
              Prática Clínica
            </span>
            <span className="text-xs text-[#64748B] mt-0.5">
              Dedicados ao desenvolvimento humano
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
                +{horasAtendimento}
              </span>
              <span className="font-display text-2xl font-medium text-[#16A34A]">h</span>
            </div>
            <span className="text-sm font-semibold text-[#1E293B] mt-1">
              Horas de Escuta
            </span>
            <span className="text-xs text-[#64748B] mt-0.5">
              Atendimentos clínicos supervisionados
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
                100
              </span>
              <span className="font-display text-2xl font-medium text-[#DB2777]">%</span>
            </div>
            <span className="text-sm font-semibold text-[#1E293B] mt-1">
              Sigilo Ético
            </span>
            <span className="text-xs text-[#64748B] mt-0.5">
              Em estrita conformidade com o CFP
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
                {taxaAcolhimento}
              </span>
              <span className="font-display text-2xl font-medium text-[#16A34A]">%</span>
            </div>
            <span className="text-sm font-semibold text-[#1E293B] mt-1">
              Sensação de Alívio
            </span>
            <span className="text-xs text-[#64748B] mt-0.5">
              Relatada logo no primeiro mês
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
