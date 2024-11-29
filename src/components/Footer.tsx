import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Fermes d'Afrique</h3>
            <p className="text-sm mb-4">
              Votre plateforme de découverte des producteurs agricoles africains, 
              valorisant les traditions et l'innovation durable.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" className="hover:text-orange-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-orange-500 transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-orange-500 transition-colors">Nos produits</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-orange-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/map" className="text-sm hover:text-orange-500 transition-colors">Carte des fermes</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-orange-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>123 Avenue de l'Indépendance, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+221 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>contact@fermesdafrique.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Restez informé de nos dernières actualités et des nouveaux producteurs.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-3 py-2 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Fermes d'Afrique. Tous droits réservés.</p>
            <div className="mt-2 space-x-4">
              <Link to="/privacy" className="hover:text-orange-500 transition-colors">Politique de confidentialité</Link>
              <Link to="/terms" className="hover:text-orange-500 transition-colors">Conditions d'utilisation</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}