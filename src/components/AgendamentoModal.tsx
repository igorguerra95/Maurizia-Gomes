import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  CalendarCheck
} from 'lucide-react';
import { DADOS_PSICOLOGA } from '../data/conteudo';

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgendamentoModal: React.FC<AgendamentoModalProps> = ({ isOpen, onClose }) => {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [modalidade, setModalidade] = useState<'online' | 'presencial'>('online');
  const [demanda, setDemanda] = useState('Ansiedade e Estresse');
  const [enviado, setEnviado] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !whatsapp) return;

    setEnviado(true);

    const texto = `Olá, psicóloga Maurizia Gomes!
Meu nome é *${nome}*.
Gostaria de agendar uma consulta psicológica.

• Modalidade: *${modalidade === 'online' ? 'Online por Videochamada' : 'Presencial'}*
• Foco do atendimento: *${demanda}*
• Meu WhatsApp: *${whatsapp}*

Por gentileza, quais são os horários disponíveis?`;

    const encoded = encodeURIComponent(texto);
    const linkWhatsApp = `https://wa.me/${DADOS_PSICOLOGA.telefoneWhatsapp}?text=${encoded}`;

    setTimeout(() => {
      window.open(linkWhatsApp, '_blank');
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0F172A]/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg rounded-3xl bg-[#FDFBF7] p-6 sm:p-8 shadow-2xl border border-[#F472B6]/30 overflow-hidden"
        >
          {/* Botão de Fechar */}
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer absolute top-5 right-5 p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#FCE7F3] transition-colors"
            aria-label="Fechar janela de agendamento"
          >
            <X className="w-5 h-5" />
          </button>

          {enviado ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mb-4 border border-[#16A34A]/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0F172A] mb-2">
                Solicitação Iniciada!
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xs mb-6">
                Estamos abrindo a conversa no WhatsApp para confirmar o seu horário com prioridade.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer px-6 py-2.5 rounded-full text-xs font-semibold text-[#1E293B] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC]"
              >
                Fechar janela
              </button>
            </div>
          ) : (
            <div>
              {/* Header do Modal */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] text-[#DB2777] flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-[#F472B6]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#0F172A] leading-tight">
                    Entrar em Contato
                  </h3>
                  <p className="text-xs text-[#15803D] font-medium">
                    Maurizia Gomes • {DADOS_PSICOLOGA.crp}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                Preencha seus dados para receber horários disponíveis e detalhes sobre o funcionamento da consulta.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F472B6]/30 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">
                    WhatsApp para Retorno *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(DDD) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F472B6]/30 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">
                    Modalidade
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setModalidade('online')}
                      className={`cursor-pointer py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                        modalidade === 'online'
                          ? 'bg-[#FCE7F3] border-[#DB2777] text-[#9D174D]'
                          : 'bg-white border-[#E2E8F0] text-[#64748B]'
                      }`}
                    >
                      Online por Vídeo
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalidade('presencial')}
                      className={`cursor-pointer py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                        modalidade === 'presencial'
                          ? 'bg-[#DCFCE7] border-[#16A34A] text-[#166534]'
                          : 'bg-white border-[#E2E8F0] text-[#64748B]'
                      }`}
                    >
                      Presencial
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E293B] mb-1.5">
                    Principal Motivo da Busca
                  </label>
                  <select
                    value={demanda}
                    onChange={(e) => setDemanda(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F472B6]/30 text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40"
                  >
                    <option value="Ansiedade e Crises de Pânico">Ansiedade & Pânico</option>
                    <option value="Depressão e Vazio Emocional">Depressão & Desânimo</option>
                    <option value="Terapia de Casal">Terapia de Casal</option>
                    <option value="Autoconhecimento e Limites">Autoconhecimento & Autoestima</option>
                    <option value="Burnout e Estresse Profissional">Burnout & Estresse</option>
                    <option value="Luto e Transições">Luto & Mudanças de Ciclo</option>
                    <option value="Outro motivo">Outro motivo</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer group w-full py-3.5 px-5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] hover:from-[#BE185D] hover:to-[#166534] shadow-md transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Entrar em contato</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Sigilo assegurado pelo Código de Ética do Psicólogo</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
