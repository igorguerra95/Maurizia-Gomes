import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Calendar,
  Lock
} from 'lucide-react';
import { DADOS_PSICOLOGA } from '../data/conteudo';
import { SolicitacaoAgendamento } from '../types';

export const Contato: React.FC = () => {
  const [formData, setFormData] = useState<SolicitacaoAgendamento>({
    nome: '',
    whatsapp: '',
    email: '',
    modalidade: 'online',
    motivoPrincipal: 'Ansiedade e Estresse',
    preferenciaHorario: 'qualquer',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) return;

    setEnviado(true);

    // Preparar mensagem automática em português para o WhatsApp
    const mensagemWhatsapp = `Olá, Dra. Maurizia Gomes!
Meu nome é *${formData.nome}*.
Gostaria de agendar uma consulta psicológica.

• Modalidade: *${formData.modalidade === 'online' ? 'Online (Vídeo)' : 'Presencial'}*
• Motivo principal: *${formData.motivoPrincipal}*
• Preferência de horário: *${
      formData.preferenciaHorario === 'manha'
        ? 'Manhã'
        : formData.preferenciaHorario === 'tarde'
        ? 'Tarde'
        : formData.preferenciaHorario === 'noite'
        ? 'Noite'
        : 'Qualquer horário'
    }*
${formData.mensagem ? `• Mensagem: "${formData.mensagem}"` : ''}

Aguardo seu retorno para alinharmos os detalhes. Muito obrigado(a)!`;

    const encoded = encodeURIComponent(mensagemWhatsapp);
    const linkWhatsApp = `https://wa.me/${DADOS_PSICOLOGA.telefoneWhatsapp}?text=${encoded}`;

    // Abrir o WhatsApp após 800ms
    setTimeout(() => {
      window.open(linkWhatsApp, '_blank');
    }, 700);
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative bg-gradient-to-b from-[#FDFBF7] via-[#FFF5F8]/40 to-[#FDFBF7]">
      {/* Luz ambiente botânica */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-12 left-10 w-96 h-96 bg-[#F472B6]/10 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-12 right-10 w-80 h-80 bg-[#16A34A]/8 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE7F3] border border-[#F472B6]/30 text-[#9D174D] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Calendar className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Agendamento & Contato</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0F172A] leading-tight"
          >
            O primeiro passo para o seu bem-estar começa aqui
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-[#64748B] mt-4 leading-relaxed"
          >
            Preencha os campos abaixo para solicitar um horário ou tirar dúvidas. Seus dados são confidenciais e tratados com estrito sigilo ético.
          </motion.p>
        </div>

        {/* Layout 12 colunas: Informações e Formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Coluna Esquerda: Informações e Garantias (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white/90 border border-[#F472B6]/25 shadow-[0_8px_30px_rgba(244,114,182,0.08)]">
              <h3 className="font-display text-2xl font-semibold text-[#0F172A] mb-3">
                Canais de Atendimento
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                Priorizo uma comunicação humana e sem burocracias. Escolha como prefere conversar:
              </p>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${DADOS_PSICOLOGA.telefoneWhatsapp}?text=${encodeURIComponent('Olá, psicóloga Maurizia Gomes! Gostaria de agendar uma consulta.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F0FDF4] border border-[#16A34A]/25 hover:bg-[#DCFCE7]/70 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#166534] uppercase tracking-wider block">
                      WhatsApp Direto
                    </span>
                    <span className="text-sm font-bold text-[#0F172A] block mt-0.5 group-hover:text-[#16A34A] transition-colors">
                      {DADOS_PSICOLOGA.whatsappFormatado}
                    </span>
                    <span className="text-[11px] text-[#64748B] block mt-0.5">
                      Resposta ágil e alinhamento de horários
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${DADOS_PSICOLOGA.email}`}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFF5F8] border border-[#F472B6]/25 hover:bg-[#FCE7F3]/70 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#DB2777] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#9D174D] uppercase tracking-wider block">
                      E-mail Institucional
                    </span>
                    <span className="text-sm font-semibold text-[#0F172A] block mt-0.5 group-hover:text-[#DB2777] transition-colors break-all">
                      {DADOS_PSICOLOGA.email}
                    </span>
                    <span className="text-[11px] text-[#64748B] block mt-0.5">
                      Para informações clínicas detalhadas
                    </span>
                  </div>
                </a>
              </div>

              {/* Informações éticas adicionais */}
              <div className="mt-8 pt-6 border-t border-[#F1F5F9] space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-[#475569]">
                  <Clock className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Retorno habitual em até 2 horas úteis</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#475569]">
                  <Lock className="w-4 h-4 text-[#DB2777] shrink-0" />
                  <span>Sigilo garantido pelo Artigo 9º do Código de Ética (CFP)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#475569]">
                  <Sparkles className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Emissão de recibo para reembolso no convênio</span>
                </div>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Formulário de Agendamento (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#F472B6]/25 shadow-[0_12px_40px_rgba(244,114,182,0.1)] relative">
              
              {enviado ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mb-4 border border-[#16A34A]/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-[#0F172A] mb-2">
                    Solicitação Recebida com Carinho!
                  </h3>
                  <p className="text-sm text-[#475569] max-w-md leading-relaxed mb-6">
                    Agradeço pela confiança, <strong>{formData.nome}</strong>. O WhatsApp da clínica está sendo aberto para confirmarmos os detalhes com agilidade.
                  </p>
                  <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#16A34A]/20 text-xs text-[#166534] max-w-sm mb-6">
                    Caso o WhatsApp não tenha aberto automaticamente, clique no botão abaixo para iniciar a conversa:
                  </div>
                  <a
                    href={`https://wa.me/${DADOS_PSICOLOGA.telefoneWhatsapp}?text=${encodeURIComponent(
                      `Olá, Dra. Maurizia! Meu nome é ${formData.nome}. Gostaria de confirmar o agendamento de consulta.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir Conversa no WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setEnviado(false)}
                    className="text-xs text-[#64748B] hover:text-[#0F172A] underline mt-6 cursor-pointer"
                  >
                    Preencher um novo formulário
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome Completo */}
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Como prefere ser chamada(o)?"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#F472B6]/30 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#F472B6] transition-all"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                        WhatsApp para Contato *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(DDD) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#F472B6]/30 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#F472B6] transition-all"
                      />
                    </div>
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                      Seu E-mail (opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="exemplo@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#F472B6]/30 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#F472B6] transition-all"
                    />
                  </div>

                  {/* Modalidade de Atendimento */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                      Modalidade Desejada
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modalidade: 'online' })}
                        className={`cursor-pointer p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                          formData.modalidade === 'online'
                            ? 'bg-[#FCE7F3] border-[#DB2777] text-[#9D174D] shadow-sm'
                            : 'bg-[#FDFBF7] border-[#E2E8F0] text-[#64748B] hover:border-[#F472B6]/50'
                        }`}
                      >
                        <span className="font-bold block text-sm mb-0.5">Atendimento Online</span>
                        <span>Videochamada segura e confortável</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modalidade: 'presencial' })}
                        className={`cursor-pointer p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                          formData.modalidade === 'presencial'
                            ? 'bg-[#DCFCE7] border-[#16A34A] text-[#166534] shadow-sm'
                            : 'bg-[#FDFBF7] border-[#E2E8F0] text-[#64748B] hover:border-[#16A34A]/50'
                        }`}
                      >
                        <span className="font-bold block text-sm mb-0.5">Presencial</span>
                        <span>Espaço acolhedor e silencioso</span>
                      </button>
                    </div>
                  </div>

                  {/* Principal Demanda */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                        Motivo Principal do Atendimento
                      </label>
                      <select
                        value={formData.motivoPrincipal}
                        onChange={(e) => setFormData({ ...formData, motivoPrincipal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#F472B6]/30 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#F472B6] transition-all cursor-pointer"
                      >
                        <option value="Ansiedade e Crises de Pânico">Ansiedade & Pânico</option>
                        <option value="Depressão e Desânimo">Depressão & Vazio</option>
                        <option value="Terapia de Casal">Terapia de Casal</option>
                        <option value="Autoconhecimento e Autoestima">Autoconhecimento & Autoestima</option>
                        <option value="Burnout e Sobrecarga">Burnout & Estresse no Trabalho</option>
                        <option value="Luto e Mudança de Ciclo">Luto & Transições de Vida</option>
                        <option value="Outro motivo">Outro motivo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                        Período Preferencial
                      </label>
                      <select
                        value={formData.preferenciaHorario}
                        onChange={(e) => setFormData({ ...formData, preferenciaHorario: e.target.value as any })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#F472B6]/30 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#F472B6] transition-all cursor-pointer"
                      >
                        <option value="qualquer">Qualquer horário</option>
                        <option value="manha">Manhã (08h às 12h)</option>
                        <option value="tarde">Tarde (13h às 18h)</option>
                        <option value="noite">Noite (18h às 21h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem Opcional */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                      Gostaria de adiantar algo sobre o seu momento? (opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Fique à vontade para escrever o que estiver no seu coração..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#F472B6]/30 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#F472B6] transition-all resize-none"
                    />
                  </div>

                  {/* Botão de Envio com Microinteração */}
                  <button
                    type="submit"
                    className="cursor-pointer group w-full py-4 px-6 rounded-2xl font-semibold text-base text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] hover:from-[#BE185D] hover:to-[#166534] shadow-[0_8px_24px_rgba(219,39,119,0.3)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(219,39,119,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
                  >
                    <span>Entrar em contato</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-[11px] text-[#94A3B8]">
                    Ao enviar, você será direcionada(o) com a mensagem pronta para confirmação imediata.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
