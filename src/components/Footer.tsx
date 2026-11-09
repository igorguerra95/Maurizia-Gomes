import React from 'react';
import { Heart, ShieldCheck, PhoneCall, ArrowUp } from 'lucide-react';
import { DADOS_PSICOLOGA } from '../data/conteudo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-[#94A3B8] pt-16 pb-12 border-t border-[#334155]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          
          {/* Identidade (5 colunas) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#DB2777]">
                <Heart className="w-4 h-4 fill-[#F472B6]" />
              </div>
              <div>
                <span className="font-display text-2xl font-semibold text-white tracking-tight">
                  Maurizia Gomes
                </span>
                <span className="block text-xs text-[#4ADE80] font-medium tracking-wider uppercase">
                  {DADOS_PSICOLOGA.crp}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed mb-6 font-normal">
              Psicoterapia individual, casal e desenvolvimento emocional com acolhimento sem julgamentos e rigor científico.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
              <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
              <span>Atendimento em conformidade com o Código de Ética do Psicólogo</span>
            </div>
          </div>

          {/* Navegação Rápida (3 colunas) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Maurizia Gomes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato e Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento & CTA (4 colunas) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Atendimento Clínico
            </h4>
            <p className="text-sm text-[#94A3B8] mb-4">
              Atendimentos online em todo o Brasil e presenciais em ambiente acolhedor.
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] hover:from-[#BE185D] hover:to-[#166534] shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>Entrar em contato</span>
            </button>
          </div>

        </div>

        {/* Aviso de Emergência Emocional (Obrigatório e Ético) */}
        <div className="my-8 p-4 rounded-2xl bg-[#1E293B]/80 border border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E11D48]/20 text-[#FB7185] flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <p className="leading-relaxed">
              <strong>Atenção:</strong> Em momentos de crise emocional aguda ou risco de vida, ligue gratuitamente para o <strong>CVV (188)</strong> ou procure o pronto-atendimento hospitalar mais próximo (SAMU 192).
            </p>
          </div>
          <a
            href="https://cvv.org.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-[#86EFAC] hover:underline shrink-0"
          >
            Acessar cvv.org.br
          </a>
        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © {new Date().getFullYear()} Maurizia Gomes Psicologia • Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="cursor-pointer flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
