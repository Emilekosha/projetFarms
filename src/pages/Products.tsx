import React from 'react';
import { farms } from '../data/farms';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Produits</h1>
          <p className="text-xl text-gray-600">Découvrez les produits frais de nos fermes locales</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {farms.map((farm) => (
            <div key={farm.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={farm.imageUrl}
                alt={farm.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{farm.name}</h3>
                <p className="text-gray-600 mb-4">{farm.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Produits disponibles:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {farm.products.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}