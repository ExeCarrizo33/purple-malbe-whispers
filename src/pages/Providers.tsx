
import React from 'react';
import { Users, MapPin, Phone, Mail, ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const providers = [
  {
    id: 1,
    name: 'TechCorp Solutions',
    category: 'Tecnología',
    location: 'Madrid, España',
    rating: 4.9,
    contact: {
      phone: '+34 91 123 4567',
      email: 'info@techcorp.es'
    },
    specialties: ['Desarrollo de Software', 'Consultoría IT', 'Cloud Services'],
    description: 'Empresa líder en soluciones tecnológicas empresariales con más de 15 años de experiencia.'
  },
  {
    id: 2,
    name: 'Green Energy Partners',
    category: 'Energía Renovable',
    location: 'Barcelona, España',
    rating: 4.8,
    contact: {
      phone: '+34 93 456 7890',
      email: 'contacto@greenenergy.es'
    },
    specialties: ['Paneles Solares', 'Energía Eólica', 'Consultoría Ambiental'],
    description: 'Especialistas en soluciones de energía renovable y sostenibilidad empresarial.'
  },
  {
    id: 3,
    name: 'LogiFlow Logistics',
    category: 'Logística',
    location: 'Valencia, España',
    rating: 4.7,
    contact: {
      phone: '+34 96 789 0123',
      email: 'operaciones@logiflow.es'
    },
    specialties: ['Transporte', 'Almacenamiento', 'Distribución'],
    description: 'Soluciones integrales de logística y cadena de suministro para empresas.'
  },
  {
    id: 4,
    name: 'Creative Design Studio',
    category: 'Diseño y Marketing',
    location: 'Sevilla, España',
    rating: 4.9,
    contact: {
      phone: '+34 95 234 5678',
      email: 'hola@creativestudio.es'
    },
    specialties: ['Branding', 'Marketing Digital', 'Diseño Web'],
    description: 'Estudio creativo especializado en branding y estrategias de marketing digital.'
  },
  {
    id: 5,
    name: 'SecureNet Cybersecurity',
    category: 'Ciberseguridad',
    location: 'Bilbao, España',
    rating: 4.8,
    contact: {
      phone: '+34 94 567 8901',
      email: 'seguridad@securenet.es'
    },
    specialties: ['Auditorías de Seguridad', 'Protección de Datos', 'Consultoría'],
    description: 'Expertos en ciberseguridad y protección de datos empresariales.'
  },
  {
    id: 6,
    name: 'HealthTech Innovations',
    category: 'Tecnología Médica',
    location: 'Zaragoza, España',
    rating: 4.9,
    contact: {
      phone: '+34 97 678 9012',
      email: 'info@healthtech.es'
    },
    specialties: ['Telemedicina', 'Software Médico', 'Dispositivos IoT'],
    description: 'Innovación tecnológica aplicada al sector sanitario y bienestar.'
  }
];

const Providers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold gradient-text">Proveedores</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Providers Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Red de Proveedores Certificados
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Conecta con nuestros proveedores de confianza, seleccionados por su calidad y experiencia en sus respectivos sectores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {providers.map((provider) => (
            <div 
              key={provider.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 sm:p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {provider.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                      {provider.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm sm:text-base">{provider.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">{provider.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                {provider.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Especialidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {provider.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{provider.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{provider.contact.email}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm">
                  Contactar
                </Button>
                <Button variant="outline" className="flex-1 text-sm">
                  Ver Perfil
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              ¿Buscas un proveedor específico?
            </h3>
            <p className="text-purple-100 mb-6 text-sm sm:text-base leading-relaxed">
              Malbe puede ayudarte a encontrar el proveedor perfecto para tus necesidades empresariales.
            </p>
            <Link to="/">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Consultar con Malbe
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;
