
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">¿Por qué Malbebots?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las características que hacen de Malbebots la plataforma de IA conversacional más avanzada del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100/50"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-600">Precisión en respuestas</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">&lt;100ms</div>
              <div className="text-gray-600">Tiempo de respuesta</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-600">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
