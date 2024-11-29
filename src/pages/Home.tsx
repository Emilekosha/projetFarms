import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Leaf, Users, Sun } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')] bg-cover bg-center">
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h1 className="text-5xl font-bold mb-4">Découvrez les Fermes d'Afrique</h1>
              <p className="text-xl mb-8">Explorez la richesse agricole du continent africain</p>
              <Link to="/map" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Explorer la carte
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">L'Agriculture Africaine</h2>
          <p className="mt-4 text-xl text-gray-600">Une tradition millénaire qui nourrit le continent</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Diversité Régionale</h3>
            <p className="text-gray-600">Des cultures adaptées à chaque région</p>
          </div>
          <div className="text-center p-6">
            <Leaf className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Agriculture Durable</h3>
            <p className="text-gray-600">Respect des traditions et de l'environnement</p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Communautés Locales</h3>
            <p className="text-gray-600">Soutien aux agriculteurs africains</p>
          </div>
          <div className="text-center p-6">
            <Sun className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Énergie Solaire</h3>
            <p className="text-gray-600">Innovation et développement durable</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-gray-600 mb-4">
                Nous travaillons main dans la main avec les agriculteurs africains pour promouvoir 
                une agriculture durable et préserver les méthodes traditionnelles tout en adoptant 
                des innovations respectueuses de l'environnement.
              </p>
              <p className="text-gray-600">
                Notre plateforme connecte les producteurs locaux aux marchés, favorisant ainsi 
                le développement économique des communautés rurales.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1505471768190-275e2ad070d9"
                alt="Agriculteur africain"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}