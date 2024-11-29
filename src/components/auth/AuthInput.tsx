import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AuthInputProps {
  id: string;
  type: string;
  placeholder: string;
  icon: LucideIcon;
  required?: boolean;
}

export default function AuthInput({ id, type, placeholder, icon: Icon, required = true }: AuthInputProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        placeholder={placeholder}
      />
    </div>
  );
}