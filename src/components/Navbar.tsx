import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Apple, Wrench, Mail, LogIn, Map } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-orange-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
              <Home className="h-6 w-6" />
              <span>Fermes d'Afrique</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/map" className="flex items-center space-x-1 hover:text-orange-200">
                <Map className="h-5 w-5" />
                <span>Carte</span>
              </Link>
              <Link to="/products" className="flex items-center space-x-1 hover:text-orange-200">
                <Apple className="h-5 w-5" />
                <span>Produits</span>
              </Link>
              <Link to="/services" className="flex items-center space-x-1 hover:text-orange-200">
                <Wrench className="h-5 w-5" />
                <span>Services</span>
              </Link>
              <Link to="/about" className="flex items-center space-x-1 hover:text-orange-200">
                <Info className="h-5 w-5" />
                <span>À propos</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-1 hover:text-orange-200">
                <Mail className="h-5 w-5" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-white text-orange-600 hover:bg-orange-100">
              <LogIn className="h-5 w-5" />
              <span>Connexion</span>
            </Link>
            <Link to="/login/register" className="flex items-center space-x-1 px-4 py-2 rounded-lg border-2 border-white text-white hover:bg-orange-500">
              <span>S'inscrire</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}