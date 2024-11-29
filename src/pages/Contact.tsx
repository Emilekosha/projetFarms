import React from 'react';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-Nous</h1>
          <p className="text-xl text-gray-600">Notre équipe est à votre écoute</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Nos Bureaux</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Siège Social</p>
                  <p className="text-gray-600">123 Avenue de l'Indépendance</p>
                  <p className="text-gray-600">Dakar, Sénégal</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-600">+221 XX XXX XXXX</p>
                  <p className="text-gray-600">+221 XX XXX XXXX (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">contact@fermesdafrique.com</p>
                  <p className="text-gray-600">support@fermesdafrique.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Heures d'ouverture</p>
                  <p className="text-gray-600">Lundi - Vendredi: 8h - 18h</p>
                  <p className="text-gray-600">Samedi: 9h - 13h</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Bureaux Régionaux</p>
                  <p className="text-gray-600">Abidjan, Côte d'Ivoire</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                  <p className="text-gray-600">Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-orange-50 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Assistance Agriculteurs</h3>
          <p className="text-gray-600 mb-4">
            Vous êtes un agriculteur et souhaitez rejoindre notre plateforme ? 
            Notre équipe dédiée est là pour vous accompagner dans votre démarche.
          </p>
          <p className="text-gray-600">
            Contactez notre service d'assistance aux agriculteurs :
            <br />
            Email: agriculteurs@fermesdafrique.com
            <br />
            Tél: +221 XX XXX XXXX
          </p>
        </div>
      </div>
    </div>
  );
}