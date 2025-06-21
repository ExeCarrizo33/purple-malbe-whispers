
import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import ConversationButton from './ConversationButton';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Malbebots</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-200 max-w-3xl mx-auto leading-relaxed">
            Experimenta el futuro de la conversación con IA. 
            Interacción natural, fluida y completamente personalizada.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-300">
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-purple-700 font-medium">🎯 Conversación Natural</span>
            </div>
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-purple-700 font-medium">🚀 Respuestas Instantáneas</span>
            </div>
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-purple-700 font-medium">🧠 IA Avanzada</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in delay-500">
            <ConversationButton />
          </div>

          {/* Additional info */}
          <div className="mt-16 animate-fade-in delay-700">
            <p className="text-gray-500 mb-4">Tecnología de vanguardia</p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
              <span>Procesamiento de Lenguaje Natural</span>
              <span>•</span>
              <span>Síntesis de Voz</span>
              <span>•</span>
              <span>Aprendizaje Continuo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;
