import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  HeartHandshake, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Clock, 
  ArrowUpRight, 
  Check, 
  HelpCircle,
  CalendarCheck
} from 'lucide-react';
import { AREAS_ATUACAO, PASSOS_JORNADA } from '../data/conteudo';

interface AreasAtuacaoProps {
  onOpenBooking: () => void;
}

export const AreasAtuacao: React.FC<AreasAtuacaoProps> = ({ onOpenBooking }) => {
  const [filtroAtivo, setFiltroAtivo] = useState<'todos' | 'individual' | 'casal' | 'desafios'>('todos');
  const [cardExpandido, setCardExpandido] = useState<string | null>(null);

  const getIcone = (nome: string) => {
    switch (nome) {
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const areasFiltradas = AREAS_ATUACAO.filter(area => {
    if (filtroAtivo === 'todos') return true;
    return area.categoria === filtroAtivo;
  });

  return (
    <section id="areas" className="py-24 sm:py-32 relative bg-[#FDFBF7]">
      {/* Detalhe botânico de ambientação */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-0 w-72 h-72 bg-[#F472B6]/8 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 right-0 w-80 h-80 bg-[#16A34A]/8 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#16A34A]/25 text-[#166534] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Especialidades Clínicas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0F172A] leading-tight"
          >
            Cuidado especializado para cada dimensão do seu sentir
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-[#64748B] mt-4 leading-relaxed"
          >
            Intervenções embasadas na ciência comportamental e no respeito absoluto à singularidade da sua história. Conheça as principais demandas atendidas no consultório.
          </motion.p>

          {/* Filtros de Categoria */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {[
              { id: 'todos', label: 'Todas as Áreas' },
              { id: 'individual', label: 'Terapia Individual' },
              { id: 'casal', label: 'Casal & Relacionamentos' },
              { id: 'desafios', label: 'Burnout & Transições' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFiltroAtivo(tab.id as any)}
                className={`cursor-pointer px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  filtroAtivo === tab.id
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-white/80 text-[#64748B] hover:text-[#0F172A] hover:bg-white border border-[#F472B6]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid de Áreas com Cards Elegantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {areasFiltradas.map((area, index) => {
              const estaExpandido = cardExpandido === area.id;

              return (
                <motion.div
                  layout
                  key={area.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group relative rounded-3xl p-7 sm:p-8 bg-white/90 border border-[#F472B6]/20 shadow-[0_4px_20px_-2px_rgba(244,114,182,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(30,41,59,0.08)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Topo do card: Ícone e Badges */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FCE7F3] to-[#DCFCE7] border border-[#F472B6]/30 flex items-center justify-center text-[#DB2777] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        {getIcone(area.icone)}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569]">
                        {area.modalidade}
                      </span>
                    </div>

                    {/* Título & Subtítulo */}
                    <h3 className="font-display text-2xl font-semibold text-[#0F172A] leading-tight mb-2">
                      {area.titulo}
                    </h3>
                    <p className="text-xs font-medium text-[#15803D] mb-4">
                      {area.subtitulo}
                    </p>

                    {/* Descrição */}
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6 font-normal">
                      {area.descricao}
                    </p>

                    {/* Sintomas / Gatilhos frequentes */}
                    <div className="pt-4 border-t border-[#F1F5F9] mb-6">
                      <p className="text-xs font-semibold text-[#334155] uppercase tracking-wider mb-3">
                        Sinais frequentes trabalhados:
                      </p>
                      <ul className="space-y-2 text-xs text-[#64748B]">
                        {area.sintomasComuns.slice(0, estaExpandido ? undefined : 3).map((sintoma, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F472B6] mt-1.5 shrink-0" />
                            <span>{sintoma}</span>
                          </li>
                        ))}
                      </ul>

                      {area.sintomasComuns.length > 3 && (
                        <button
                          type="button"
                          onClick={() => setCardExpandido(estaExpandido ? null : area.id)}
                          className="cursor-pointer text-[11px] font-semibold text-[#DB2777] hover:underline mt-2 inline-block"
                        >
                          {estaExpandido ? 'Ver menos detalhes' : '+ Ver outros sintomas'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Rodapé do Card com CTA direto */}
                  <div className="pt-4 border-t border-[#F472B6]/15 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                      <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>{area.duracao}</span>
                    </div>

                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold text-[#9D174D] group-hover:text-[#DB2777] transition-colors"
                    >
                      <span>Entrar em contato</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Como funciona o processo terapêutico (Etapas com design editorial) */}
        <div className="mt-24 sm:mt-32 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#FFF5F8] via-[#FDFBF7] to-[#F0FDF4] border border-[#F472B6]/25 shadow-[0_8px_30px_rgba(244,114,182,0.08)]">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold text-[#15803D] uppercase tracking-widest block mb-2">
              Jornada Passo a Passo
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#0F172A]">
              Como acontece a sua transformação na psicoterapia
            </h3>
            <p className="text-sm text-[#64748B] mt-2">
              Processo claro, previsível e conduzido com profundo respeito ao seu momento de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PASSOS_JORNADA.map((passo, idx) => (
              <div 
                key={passo.numero}
                className="relative flex flex-col p-6 rounded-2xl bg-white/80 border border-[#F472B6]/15 shadow-sm"
              >
                <span className="font-display text-3xl font-bold text-[#F472B6] mb-3">
                  {passo.numero}
                </span>
                <h4 className="font-display text-xl font-semibold text-[#0F172A] mb-2">
                  {passo.titulo}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {passo.descricao}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={onOpenBooking}
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] hover:from-[#BE185D] hover:to-[#166534] shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Entrar em contato e iniciar seu processo</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
