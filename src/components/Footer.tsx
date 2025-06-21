
import React from 'react';
import { Bot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mr-3">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Malbebots</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              El futuro de la conversación con IA
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Malbebots. Todos los derechos reservados.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Potenciado por tecnología de ElevenLabs para experiencias conversacionales excepcionales
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
