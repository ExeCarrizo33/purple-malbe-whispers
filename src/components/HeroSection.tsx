
import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import ConversationButton from './ConversationButton';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        <div className="text-center">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <Bot className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2">
                <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-purple-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
            <span className="gradient-text">Malbebots</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 animate-fade-in delay-200 leading-relaxed px-4">
            Experimenta el futuro de la conversación con IA. 
            Interacción natural, fluida y completamente personalizada.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 animate-fade-in delay-300 px-4">
            <div className="glass px-3 py-2 sm:px-4 sm:py-2 rounded-full">
              <span className="text-purple-700 font-medium text-sm sm:text-base">🎯 Conversación Natural</span>
            </div>
            <div className="glass px-3 py-2 sm:px-4 sm:py-2 rounded-full">
              <span className="text-purple-700 font-medium text-sm sm:text-base">🚀 Respuestas Instantáneas</span>
            </div>
            <div className="glass px-3 py-2 sm:px-4 sm:py-2 rounded-full">
              <span className="text-purple-700 font-medium text-sm sm:text-base">🧠 IA Avanzada</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in delay-500 px-4">
            <ConversationButton />
          </div>

          {/* Additional info */}
          <div className="mt-12 md:mt-16 animate-fade-in delay-700 px-4">
            <p className="text-gray-500 mb-4 text-sm md:text-base">Tecnología de vanguardia</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 text-xs sm:text-sm text-gray-400">
              <span>Procesamiento de Lenguaje Natural</span>
              <span className="hidden sm:inline">•</span>
              <span>Síntesis de Voz</span>
              <span className="hidden sm:inline">•</span>
              <span>Aprendizaje Continuo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-purple-400 rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;
