
import React from 'react';
import { Bot, Store, Utensils, Briefcase, Heart, GraduationCap, Car, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const bots = [
  {
    icon: Store,
    name: 'Bot Comercial',
    description: 'Perfecto para tiendas y negocios retail. Gestiona consultas de productos, horarios y promociones.',
    features: ['Catálogo de productos', 'Horarios de atención', 'Promociones activas'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Utensils,
    name: 'Bot Restaurante',
    description: 'Ideal para restaurantes y bares. Maneja reservas, menús y pedidos de manera eficiente.',
    features: ['Reservas automáticas', 'Menú del día', 'Pedidos a domicilio'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Briefcase,
    name: 'Bot Corporativo',
    description: 'Diseñado para empresas. Asiste con información corporativa y soporte al cliente.',
    features: ['Información corporativa', 'Soporte técnico', 'FAQ automatizado'],
    color: 'from-gray-500 to-gray-600'
  },
  {
    icon: Heart,
    name: 'Bot Salud',
    description: 'Especializado en sector salud. Programa citas médicas y brinda información básica.',
    features: ['Citas médicas', 'Información de servicios', 'Horarios de especialistas'],
    color: 'from-red-500 to-red-600'
  },
  {
    icon: GraduationCap,
    name: 'Bot Educativo',
    description: 'Para instituciones educativas. Informa sobre cursos, inscripciones y eventos.',
    features: ['Información de cursos', 'Proceso de inscripción', 'Calendario académico'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Car,
    name: 'Bot Automotriz',
    description: 'Especializado en concesionarios y talleres. Gestiona citas de servicio y consultas.',
    features: ['Citas de servicio', 'Información de vehículos', 'Cotizaciones'],
    color: 'from-indigo-500 to-indigo-600'
  }
];

const BotsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Bots Especializados</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4 leading-relaxed">
            Descubre nuestros bots diseñados específicamente para diferentes industrias y necesidades de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {bots.map((bot, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-purple-100/50 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${bot.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <bot.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {bot.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center p-4 sm:p-6 pt-0">
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {bot.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-purple-700 mb-3 text-sm sm:text-base">Características principales:</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    {bot.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 px-4">
          <div className="glass px-4 py-3 sm:px-6 sm:py-4 rounded-2xl inline-block">
            <p className="text-purple-700 font-medium mb-2 text-sm sm:text-base">
              ¿Necesitas un bot personalizado?
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Podemos crear un bot específico para tu industria y necesidades únicas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotsSection;
