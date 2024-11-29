import React from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthInput from '../../components/auth/AuthInput';
import AuthCard from '../../components/auth/AuthCard';

export default function RegisterForm() {
  return (
    <AuthCard
      title="Inscription"
      subtitle="Rejoignez notre communauté agricole"
    >
      <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
          <AuthInput
            id="name"
            type="text"
            placeholder="Nom complet"
            icon={User}
          />
          <AuthInput
            id="email"
            type="email"
            placeholder="Adresse email"
            icon={Mail}
          />
          <AuthInput
            id="phone"
            type="tel"
            placeholder="Numéro de téléphone"
            icon={Phone}
          />
          <AuthInput
            id="password"
            type="password"
            placeholder="Mot de passe"
            icon={Lock}
          />
          <AuthInput
            id="password_confirmation"
            type="password"
            placeholder="Confirmer le mot de passe"
            icon={Lock}
          />
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Créer un compte
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Déjà inscrit?{' '}
            <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
              Se connecter
            </Link>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}