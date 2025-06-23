
import React from 'react';
import { Brain, MessageCircle, Zap, Shield, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'IA Conversacional Avanzada',
    description: 'Tecnología de última generación que entiende el contexto y mantiene conversaciones naturales y coherentes.'
  },
  {
    icon: MessageCircle,
    title: 'Interacción Fluida',
    description: 'Comunicación bidireccional sin limitaciones, adaptándose a tu estilo de conversación único.'
  },
  {
    icon: Zap,
    title: 'Respuestas Instantáneas',
    description: 'Procesamiento ultrarrápido que garantiza una experiencia de conversación en tiempo real.'
  },
  {
    icon: Shield,
    title: 'Privacidad Garantizada',
    description: 'Tus conversaciones están protegidas con los más altos estándares de seguridad y privacidad.'
  },
  {
    icon: Globe,
    title: 'Multiidioma',
    description: 'Soporte para múltiples idiomas con comprensión cultural y contextual avanzada.'
  },
  {
    icon: Headphones,
    title: 'Experiencia Inmersiva',
    description: 'Audio de alta calidad con síntesis de voz natural que hace cada conversación única.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">¿Por qué Malbebots?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4 leading-relaxed">
            Descubre las características que hacen de Malbebots la plataforma de IA conversacional más avanzada del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100/50"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-600 text-sm sm:text-base">Precisión en respuestas</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">&lt;100ms</div>
              <div className="text-gray-600 text-sm sm:text-base">Tiempo de respuesta</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600 text-sm sm:text-base">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
