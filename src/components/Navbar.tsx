import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { DADOS_PSICOLOGA } from '../data/conteudo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre a Psicóloga', href: '#sobre' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/90 backdrop-blur-md py-3.5 shadow-[0_4px_24px_rgba(30,41,59,0.04)] border-b border-[#F472B6]/15'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
              aria-label="Maurizia Gomes Psicóloga - Voltar ao início"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FCE7F3] via-[#FDF2F8] to-[#DCFCE7] border border-[#F472B6]/30 flex items-center justify-center shadow-sm text-[#DB2777]">
                <Heart className="w-4 h-4 fill-[#F472B6] text-[#DB2777] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold tracking-tight text-[#0F172A] leading-none">
                  Maurizia Gomes
                </span>
                <span className="font-body text-[11px] font-medium tracking-widest text-[#15803D] uppercase mt-0.5 flex items-center gap-1.5">
                  Psicóloga Clínica • {DADOS_PSICOLOGA.crp}
                </span>
              </div>
            </a>

            {/* Links Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-[#475569]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative py-1 transition-colors hover:text-[#0F172A] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#F472B6] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] hover:from-[#BE185D] hover:to-[#166534] shadow-[0_8px_20px_-4px_rgba(219,39,119,0.25)] transition-all duration-300 hover:shadow-[0_12px_24px_-4px_rgba(219,39,119,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Botão Menu Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer text-xs font-semibold px-3 py-1.5 rounded-full text-[#9D174D] bg-[#FCE7F3] border border-[#F472B6]/40"
              >
                Contato
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#334155] hover:text-[#0F172A] hover:bg-[#FCE7F3]/50 transition-colors focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0F172A]/40 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FDFBF7] shadow-2xl p-6 flex flex-col justify-between border-l border-[#F472B6]/20">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F472B6]/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#DB2777]">
                    <Heart className="w-4 h-4 fill-[#F472B6]" />
                  </div>
                  <div>
                    <span className="font-display font-semibold text-lg text-[#0F172A] block leading-tight">
                      Maurizia Gomes
                    </span>
                    <span className="text-[10px] text-[#15803D] font-medium tracking-wider uppercase">
                      {DADOS_PSICOLOGA.crp}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-[#334155] hover:text-[#DB2777] py-2 px-3 rounded-lg hover:bg-[#FCE7F3]/40 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-[#FDF2F8] to-[#F0FDF4] border border-[#F472B6]/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#15803D] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Acolhimento Ético</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Sessões online para qualquer lugar e presenciais com privacidade absoluta.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F472B6]/15 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#DB2777] to-[#15803D] shadow-md flex items-center justify-center gap-2"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${DADOS_PSICOLOGA.telefoneWhatsapp}?text=${encodeURIComponent('Olá, psicóloga Maurizia! Gostaria de informações sobre atendimento psicológico.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-[#166534] bg-[#DCFCE7] hover:bg-[#BBF7D0] transition-colors flex items-center justify-center gap-2 border border-[#16A34A]/30"
              >
                <MessageCircle className="w-4 h-4 text-[#16A34A]" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
