
import React from 'react';
import { Bot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-0 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mr-3">
              <Bot className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold gradient-text">Malbebots</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2 text-sm md:text-base">
              El futuro de la conversación con IA
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              © 2024 Malbebots. Todos los derechos reservados.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed px-4">
            Potenciado por tecnología de ElevenLabs para experiencias conversacionales excepcionales
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
