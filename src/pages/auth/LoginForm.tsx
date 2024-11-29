import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthInput from '../../components/auth/AuthInput';
import AuthCard from '../../components/auth/AuthCard';

export default function LoginForm() {
  return (
    <AuthCard
      title="Connexion"
      subtitle="Accédez à votre espace personnel"
    >
      <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
          <AuthInput
            id="email"
            type="email"
            placeholder="Adresse email"
            icon={Mail}
          />
          <AuthInput
            id="password"
            type="password"
            placeholder="Mot de passe"
            icon={Lock}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Se souvenir de moi
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
              Mot de passe oublié?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Se connecter
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Pas encore de compte?{' '}
            <Link to="/login/register" className="font-medium text-orange-600 hover:text-orange-500">
              S'inscrire
            </Link>
          </p>
        </div>
      </form>
    </AuthCard>
  );
}