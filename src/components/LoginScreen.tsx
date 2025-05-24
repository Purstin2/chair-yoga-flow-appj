
import React, { useState } from 'react';
import { UserIcon, KeyIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface LoginScreenProps {
  onLogin: (userData: any) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Senhas não coincidem');
      return;
    }

    if (!isLogin && (!formData.name || !formData.email || !formData.password)) {
      alert('Preencha todos os campos');
      return;
    }

    if (isLogin && (!formData.email || !formData.password)) {
      alert('Preencha email e senha');
      return;
    }

    // Simular login/cadastro
    const userData = {
      name: formData.name || 'Usuário',
      email: formData.email,
      photo: '👩‍🦳'
    };

    onLogin(userData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4">
            🧘‍♀️
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fenjes</h1>
          <p className="text-gray-600">Yoga na Cadeira para seu Bem-estar</p>
        </div>

        {/* Formulário */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-center font-medium rounded-lg transition-colors ${
                isLogin 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-center font-medium rounded-lg transition-colors ${
                !isLogin 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Cadastrar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-gray-900"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-gray-900"
                required
              />
            </div>

            <div className="relative">
              <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-gray-900"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirmar senha"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-gray-900"
                  required={!isLogin}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Ao continuar, você concorda com nossos{' '}
              <span className="text-purple-600 hover:underline cursor-pointer">
                Termos de Uso
              </span>{' '}
              e{' '}
              <span className="text-purple-600 hover:underline cursor-pointer">
                Política de Privacidade
              </span>
            </p>
          </div>
        </div>

        {/* Info sobre o app */}
        <div className="mt-6 bg-white/60 rounded-xl p-4 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Transforme sua vida em 21 dias</h3>
          <p className="text-sm text-gray-600">
            Método completo de Yoga na Cadeira com exercícios ilustrados, 
            plano de transformação e guias de respiração e nutrição.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
