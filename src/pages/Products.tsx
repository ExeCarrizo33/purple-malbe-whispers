
import React from 'react';
import { Package, ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Smartphone Pro Max',
    category: 'Electrónicos',
    price: '$899',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'El último smartphone con tecnología avanzada y cámara profesional.'
  },
  {
    id: 2,
    name: 'Laptop Gaming Elite',
    category: 'Computadoras',
    price: '$1,299',
    rating: 4.9,
    image: '/placeholder.svg',
    description: 'Laptop de alto rendimiento para gaming y trabajo profesional.'
  },
  {
    id: 3,
    name: 'Auriculares Wireless',
    category: 'Audio',
    price: '$199',
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'Auriculares inalámbricos con cancelación de ruido activa.'
  },
  {
    id: 4,
    name: 'Reloj Inteligente',
    category: 'Wearables',
    price: '$349',
    rating: 4.6,
    image: '/placeholder.svg',
    description: 'Reloj inteligente con monitoreo de salud y GPS integrado.'
  },
  {
    id: 5,
    name: 'Tablet Pro 12"',
    category: 'Electrónicos',
    price: '$599',
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'Tablet profesional con pantalla de alta resolución y stylus incluido.'
  },
  {
    id: 6,
    name: 'Cámara DSLR',
    category: 'Fotografía',
    price: '$1,099',
    rating: 4.9,
    image: '/placeholder.svg',
    description: 'Cámara profesional para fotografía y video de alta calidad.'
  }
];

const Products = () => {
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
                <Package className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold gradient-text">Productos</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Nuestro Catálogo de Productos
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Descubre nuestra amplia gama de productos de alta calidad, desde electrónicos hasta accesorios especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-48 sm:h-56 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Package className="w-16 h-16 sm:w-20 sm:h-20 text-purple-500" />
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-purple-600">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Agregar al Carrito
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-purple-100 mb-6 text-sm sm:text-base leading-relaxed">
              Pregúntale a Malbe sobre cualquier producto específico y te ayudará a encontrarlo.
            </p>
            <Link to="/">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Hablar con Malbe
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
