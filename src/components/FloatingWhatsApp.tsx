import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { DADOS_PSICOLOGA } from '../data/conteudo';

export const FloatingWhatsApp: React.FC = () => {
  const [mostrarTooltip, setMostrarTooltip] = useState(true);

  const mensagemPadrao = encodeURIComponent(
    'Olá, Dra. Maurizia! Gostaria de informações sobre horários e agendamento de psicoterapia.'
  );
  const linkWhatsApp = `https://wa.me/${DADOS_PSICOLOGA.telefoneWhatsapp}?text=${mensagemPadrao}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      
      {/* Tooltip de Boas-vindas Acolhedor */}
      {mostrarTooltip && (
        <div className="mb-3 max-w-[240px] p-3.5 rounded-2xl bg-white shadow-[0_10px_25px_-5px_rgba(30,41,59,0.15)] border border-[#16A34A]/25 relative animate-fadeIn">
          <button
            type="button"
            onClick={() => setMostrarTooltip(false)}
            className="absolute top-2 right-2 p-1 text-[#94A3B8] hover:text-[#0F172A] rounded-full"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#15803D] uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Consultório Online</span>
          </div>
          <p className="text-xs text-[#334155] leading-snug">
            Olá! Precisa de auxílio para agendar ou tirar dúvidas? Converse diretamente comigo.
          </p>
        </div>
      )}

      {/* Botão Flutuante Verde Folha com Efeito de Pulso Suave */}
      <a
        href={linkWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com Maurizia Gomes Psicóloga"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-[0_8px_24px_rgba(22,163,74,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 animate-soft-pulse"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        
        {/* Tooltip sutil no hover */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0F172A] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Falar no WhatsApp
        </span>
      </a>

    </div>
  );
};
