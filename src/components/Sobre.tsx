import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  ShieldCheck, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Quote, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { DADOS_PSICOLOGA, DEPOIMENTOS_ANONIMOS } from '../data/conteudo';

interface SobreProps {
  onOpenBooking: () => void;
}

export const Sobre: React.FC<SobreProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative bg-gradient-to-b from-[#FDFBF7] via-[#FFF9FB] to-[#FDFBF7] overflow-hidden">
      
      {/* Luz ambiente botânica */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-20 right-10 w-96 h-96 bg-[#F472B6]/10 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-20 -left-20 w-80 h-80 bg-[#16A34A]/8 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bloco Principal em 12 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Coluna Imagem & Composição Editorial (5 colunas) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[32px] overflow-hidden border border-[#F472B6]/25 shadow-[0_20px_50px_rgba(244,114,182,0.12)] bg-white">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
                alt="Ambiente acolhedor e humanizado do consultório de psicologia"
                className="w-full h-[480px] sm:h-[540px] object-cover"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#86EFAC] block mb-1">
                  Abordagem Integrativa & Humanista
                </span>
                <p className="font-display text-xl sm:text-2xl font-medium leading-snug">
                  "O acolhimento não anula a técnica; ele é o solo fértil onde a mudança acontece."
                </p>
                <p className="text-xs text-white/80 mt-2">
                  — Maurizia Gomes • Psicóloga Clínica
                </p>
              </div>
            </div>

            {/* Badge de Credencial Ética */}
            <div className="mt-4 p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#16A34A]/25 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0F172A]">
                  Registro no Conselho Regional de Psicologia
                </p>
                <p className="text-[11px] text-[#64748B]">
                  Habilitação ativa • CRP 06/148920
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna Biografia e Filosofia Clínica (7 colunas) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE7F3] border border-[#F472B6]/30 text-[#9D174D] text-xs font-semibold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5 fill-[#F472B6]" />
              <span>Sobre Maurizia Gomes</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0F172A] leading-tight mb-6">
              Muito além de diagnósticos: um encontro humano autêntico e libertador
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#475569] leading-relaxed font-normal mb-8">
              <p>
                Olá, eu sou a <strong>Maurizia Gomes</strong>. Há mais de uma década dedico meus dias a ser facilitadora de caminhos para pessoas que, por diferentes razões, sentem que perderam a conexão consigo mesmas ou foram soterradas pelas exigências do mundo contemporâneo.
              </p>
              <p>
                Minha prática clínica combina o rigor e a eficácia comprovada da <strong>Terapia Cognitivo-Comportamental (TCC)</strong> com a sensibilidade e profundidade da <strong>Abordagem Humanista</strong>. Isso significa que não tratamos apenas o sintoma superficial, mas investigamos a história que gerou o padrão, oferecendo tanto ferramentas práticas para a sua semana quanto um colo seguro para as suas vulnerabilidades.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] italic border-l-2 border-[#F472B6] pl-4">
                "Não acredito em fórmulas mágicas nem em frases prontas de autoajuda. Acredito na coragem silenciosa de quem decide que merece viver com mais verdade, paz de espírito e menos peso nos ombros."
              </p>
            </div>

            {/* Pilares Éticos do Consultório */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-white border border-[#F472B6]/15 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0F172A]">
                    Escuta Sem Julgamentos
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Você tem total liberdade para falar sobre seus medos e culpas mais profundas.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F472B6]/15 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#DB2777] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0F172A]">
                    Sigilo Ético Absoluto
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Seus dados e relatos são protegidos pelo Código de Ética Profissional do Psicólogo.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F472B6]/15 shadow-sm flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0F172A]">
                    Atualização Científica
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Supervisão contínua, estudos clínicos recentes e formações continuadas.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F472B6]/15 shadow-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#DB2777] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0F172A]">
                    Foco na Autonomia
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    O objetivo é devolver a você a confiança para guiar a própria vida.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="cursor-pointer group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] hover:from-[#BE185D] hover:to-[#166534] shadow-[0_8px_24px_rgba(219,39,119,0.25)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Entrar em contato com Maurizia</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

          </motion.div>

        </div>

        {/* Depoimentos Anônimos e Éticos de Transformação */}
        <div className="pt-16 border-t border-[#F472B6]/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-[#15803D] uppercase tracking-widest block mb-1">
              Vozes Reais
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#0F172A]">
              Relatos de quem encontrou acolhimento no consultório
            </h3>
            <p className="text-xs text-[#64748B] mt-2">
              (Identidades preservadas em total conformidade com as diretrizes do CFP)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {DEPOIMENTOS_ANONIMOS.map((dep, idx) => (
              <motion.div
                key={dep.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#F472B6]/20 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#F472B6]/40 mb-4" />
                  <p className="text-sm text-[#475569] leading-relaxed italic mb-6">
                    "{dep.relato}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9]">
                  <p className="text-xs font-bold text-[#0F172A]">
                    {dep.iniciais}
                  </p>
                  <p className="text-[11px] text-[#15803D] font-medium">
                    {dep.focoTrabalhado} • {dep.tempoTerapia}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
