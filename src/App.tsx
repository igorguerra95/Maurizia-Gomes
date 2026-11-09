import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AreasAtuacao } from './components/AreasAtuacao';
import { Sobre } from './components/Sobre';
import { FaqSection } from './components/FaqSection';
import { Contato } from './components/Contato';
import { AgendamentoModal } from './components/AgendamentoModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [modalBookingAberto, setModalBookingAberto] = useState(false);

  const abrirAgendamento = () => {
    setModalBookingAberto(true);
  };

  const fecharAgendamento = () => {
    setModalBookingAberto(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E293B] flex flex-col font-body selection:bg-[#FCE7F3] selection:text-[#9D174D]">
      {/* Barra de Navegação Fixa com Glassmorphism */}
      <Navbar onOpenBooking={abrirAgendamento} />

      <main className="flex-grow">
        {/* 1. Início (Hero acolhedor com estatísticas dinâmicas e credenciais) */}
        <Hero onOpenBooking={abrirAgendamento} />

        {/* 2. Áreas de Atuação (Especialidades clínicas com filtros e jornada) */}
        <AreasAtuacao onOpenBooking={abrirAgendamento} />

        {/* 3. Sobre a Psicóloga (Abordagem clínica, biografia, rigor e acolhimento) */}
        <Sobre onOpenBooking={abrirAgendamento} />

        {/* 4. Dúvidas Frequentes (FAQ detalhado e transparente) */}
        <FaqSection onOpenBooking={abrirAgendamento} />

        {/* 5. Contato & Agendamento Online (Formulário completo de conversão) */}
        <Contato />
      </main>

      {/* Rodapé com Informações Éticas do CFP */}
      <Footer onOpenBooking={abrirAgendamento} />

      {/* Modal Interativo de Agendamento Rápido */}
      <AgendamentoModal isOpen={modalBookingAberto} onClose={fecharAgendamento} />

      {/* Botão Flutuante de WhatsApp com Pulso e Tooltip */}
      <FloatingWhatsApp />
    </div>
  );
}
