import React from 'react';
import { Heart, Shield, Sprout, Sun } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À Propos de Nous</h1>
          <p className="text-xl text-gray-600">Valoriser l'agriculture africaine et ses traditions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Passion</h3>
            <p className="text-gray-600">Promouvoir les méthodes agricoles traditionnelles africaines</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
            <p className="text-gray-600">Respect des traditions, innovation durable et équité</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Sprout className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Impact</h3>
            <p className="text-gray-600">Soutenir le développement agricole en Afrique</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre Vision pour l'Agriculture Africaine</h2>
          <p className="text-gray-600 mb-4">
            Notre plateforme est née de la volonté de mettre en valeur la richesse agricole de l'Afrique. 
            Nous croyons en une agriculture qui combine sagesse ancestrale et innovations durables pour 
            répondre aux défis du continent.
          </p>
          <p className="text-gray-600">
            En collaborant étroitement avec les communautés locales, nous contribuons à préserver 
            les traditions agricoles tout en favorisant le développement économique des régions rurales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-orange-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Traditions Agricoles</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Préservation des méthodes ancestrales</li>
              <li>• Valorisation des cultures locales</li>
              <li>• Transmission des savoirs</li>
              <li>• Respect des cycles naturels</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Innovation Durable</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Techniques d'irrigation modernes</li>
              <li>• Énergies renouvelables</li>
              <li>• Agriculture intelligente</li>
              <li>• Formation continue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}