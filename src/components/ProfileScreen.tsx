
import React, { useState } from 'react';
import { ArrowLeft, Camera, Mail, Lock, User, Edit2 } from 'lucide-react';

interface ProfileScreenProps {
  onBack: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    photo: '👩‍🦳'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Aqui salvaria as mudanças
  };

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-purple-700" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-purple-900">Perfil</h1>
          <p className="text-purple-600">Gerencie suas informações</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors"
        >
          <Edit2 size={20} className="text-purple-600" />
        </button>
      </div>

      {/* Profile Photo */}
      <div className="gradient-card rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-4xl">
              {userInfo.photo}
            </div>
            {isEditing && (
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Camera size={16} className="text-white" />
              </button>
            )}
          </div>
          <h2 className="text-xl font-bold text-purple-900 mb-1">{userInfo.name}</h2>
          <p className="text-purple-600 text-sm">Membro desde Janeiro 2024</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Informações Pessoais</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-2">Nome</label>
            {isEditing ? (
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            ) : (
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <User size={18} className="text-purple-600 mr-3" />
                <span className="text-purple-900">{userInfo.name}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-700 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
              />
            ) : (
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <Mail size={18} className="text-purple-600 mr-3" />
                <span className="text-purple-900">{userInfo.email}</span>
              </div>
            )}
          </div>

          {isEditing && (
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-2">Nova Senha</label>
              <div className="flex items-center p-3 border border-purple-200 rounded-lg">
                <Lock size={18} className="text-purple-600 mr-3" />
                <input
                  type="password"
                  placeholder="Digite sua nova senha"
                  className="flex-1 focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {isEditing && (
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 py-3 border border-purple-300 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Salvar
            </button>
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Seu Progresso</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-purple-700">Dias Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">156</div>
            <div className="text-sm text-purple-700">Min Totais</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-sm text-purple-700">Exercícios</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">15</div>
            <div className="text-sm text-purple-700">Receitas</div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="gradient-card rounded-2xl p-5 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Configurações</h3>
        <div className="space-y-3">
          <button className="w-full text-left p-3 hover:bg-purple-50 rounded-lg transition-colors">
            <span className="text-purple-900">Notificações</span>
          </button>
          <button className="w-full text-left p-3 hover:bg-purple-50 rounded-lg transition-colors">
            <span className="text-purple-900">Privacidade</span>
          </button>
          <button className="w-full text-left p-3 hover:bg-purple-50 rounded-lg transition-colors">
            <span className="text-purple-900">Ajuda e Suporte</span>
          </button>
          <button className="w-full text-left p-3 hover:bg-red-50 rounded-lg transition-colors">
            <span className="text-red-600">Sair</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
