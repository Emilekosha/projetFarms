import React from 'react';
import { ShoppingBag, Truck, Users, Calendar } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600">Des solutions adaptées pour connecter producteurs et consommateurs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ShoppingBag className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Vente Directe</h3>
            <p className="text-gray-600 mb-4">
              Achetez directement auprès des producteurs locaux et profitez de produits frais et de saison.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Prix équitables</li>
              <li>Produits de qualité</li>
              <li>Circuit court</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Truck className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Livraison</h3>
            <p className="text-gray-600 mb-4">
              Service de livraison à domicile pour vous faire profiter des produits fermiers en toute simplicité.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Livraison rapide</li>
              <li>Emballages écologiques</li>
              <li>Suivi en temps réel</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Visites de Fermes</h3>
            <p className="text-gray-600 mb-4">
              Découvrez le quotidien de nos agriculteurs et participez à des activités pédagogiques.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Visites guidées</li>
              <li>Ateliers pédagogiques</li>
              <li>Dégustation de produits</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Communauté</h3>
            <p className="text-gray-600 mb-4">
              Rejoignez notre communauté et participez à des événements autour de l'agriculture locale.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Forums d'échange</li>
              <li>Événements saisonniers</li>
              <li>Groupes de discussion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}