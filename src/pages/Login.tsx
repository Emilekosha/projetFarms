import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}