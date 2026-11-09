import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';
import { PERGUNTAS_FREQUENTES, DADOS_PSICOLOGA } from '../data/conteudo';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [abertaId, setAbertaId] = useState<string | null>('primeira-sessao');

  const toggleFaq = (id: string) => {
    setAbertaId(abertaId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-[#FDFBF7]">
      {/* Detalhe botânico de fundo */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#F472B6]/10 via-[#16A34A]/8 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#16A34A]/25 text-[#166534] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Perguntas Frequentes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0F172A] leading-tight"
          >
            Tudo o que você precisa saber antes de iniciar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-[#64748B] mt-4 leading-relaxed"
          >
            A transparência é a base de uma relação terapêutica segura. Confira as dúvidas mais recorrentes de quem está dando o primeiro passo.
          </motion.p>
        </div>

        {/* Acordeão com Motion */}
        <div className="space-y-4">
          {PERGUNTAS_FREQUENTES.map((item, index) => {
            const estaAberta = abertaId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  estaAberta
                    ? 'bg-white shadow-[0_8px_30px_rgba(244,114,182,0.1)] border-[#F472B6]/40'
                    : 'bg-white/70 hover:bg-white border-[#F472B6]/20 shadow-[0_2px_8px_rgba(0,0,0,0.02)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={estaAberta}
                  className="cursor-pointer w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FCE7F3] text-[#9D174D]">
                      {item.categoria}
                    </span>
                    <span className="font-display text-lg sm:text-xl font-semibold text-[#0F172A]">
                      {item.pergunta}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      estaAberta
                        ? 'bg-[#FCE7F3] text-[#DB2777] rotate-180'
                        : 'bg-[#F1F5F9] text-[#64748B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {estaAberta && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-[#F1F5F9] text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                        {item.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bloco de Ajuda Personalizada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FCE7F3]/70 via-[#FFF5F8] to-[#DCFCE7]/70 border border-[#F472B6]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#15803D] shrink-0 border border-[#16A34A]/20">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-xl font-semibold text-[#0F172A]">
                Sua dúvida é específica?
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Envie uma mensagem direta e terei imenso prazer em responder pessoalmente.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] hover:from-[#BE185D] hover:to-[#166534] shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
