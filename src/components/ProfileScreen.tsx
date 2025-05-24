
import React, { useState } from 'react';
import { ArrowLeft, Camera, Mail, Lock, User, Edit2, Save, X, Settings, HelpCircle, LogOut } from 'lucide-react';

interface ProfileScreenProps {
  onBack: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    photo: '👩‍🦳',
    password: ''
  });

  const [tempUserInfo, setTempUserInfo] = useState(userInfo);

  const handleEdit = () => {
    setIsEditing(true);
    setTempUserInfo(userInfo);
  };

  const handleSave = () => {
    setUserInfo(tempUserInfo);
    setIsEditing(false);
    // Here you would normally save to backend/localStorage
    localStorage.setItem('userProfile', JSON.stringify(tempUserInfo));
  };

  const handleCancel = () => {
    setTempUserInfo(userInfo);
    setIsEditing(false);
  };

  const avatarOptions = ['👩‍🦳', '👩', '👵', '🧕', '👩‍🦰', '👩‍🦱', '👩‍🦲'];

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
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="p-2 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors"
          >
            <Edit2 size={20} className="text-purple-600" />
          </button>
        )}
      </div>

      {/* Profile Photo */}
      <div className="gradient-card rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-4xl cursor-pointer">
              {tempUserInfo.photo}
            </div>
            {isEditing && (
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Camera size={16} className="text-white" />
              </button>
            )}
          </div>
          
          {isEditing && (
            <div className="flex gap-2 mb-4 flex-wrap justify-center">
              {avatarOptions.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => setTempUserInfo({...tempUserInfo, photo: avatar})}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 transition-colors ${
                    tempUserInfo.photo === avatar 
                      ? 'border-purple-500 bg-purple-100' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          )}
          
          <h2 className="text-xl font-bold text-purple-900 mb-1">{tempUserInfo.name}</h2>
          <p className="text-purple-600 text-sm">Membro desde Janeiro 2024</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-purple-900">Informações Pessoais</h3>
          {isEditing && (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={16} className="text-gray-600" />
              </button>
              <button
                onClick={handleSave}
                className="p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors"
              >
                <Save size={16} className="text-green-600" />
              </button>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-2">Nome</label>
            {isEditing ? (
              <input
                type="text"
                value={tempUserInfo.name}
                onChange={(e) => setTempUserInfo({...tempUserInfo, name: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
                placeholder="Digite seu nome"
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
                value={tempUserInfo.email}
                onChange={(e) => setTempUserInfo({...tempUserInfo, email: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
                placeholder="Digite seu email"
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
              <label className="block text-sm font-medium text-purple-700 mb-2">Nova Senha (opcional)</label>
              <input
                type="password"
                value={tempUserInfo.password}
                onChange={(e) => setTempUserInfo({...tempUserInfo, password: e.target.value})}
                className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none"
                placeholder="Digite nova senha ou deixe em branco"
              />
            </div>
          )}
        </div>

        {isEditing && (
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleCancel}
              className="flex-1 py-3 border border-purple-300 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Salvar Alterações
            </button>
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="gradient-card rounded-2xl p-5 mb-6 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Seu Progresso</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-purple-700">Dias Ativos</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">156</div>
            <div className="text-sm text-purple-700">Min Totais</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">25</div>
            <div className="text-sm text-purple-700">Exercícios</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">18</div>
            <div className="text-sm text-purple-700">Receitas</div>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="gradient-card rounded-2xl p-5 shadow-lg">
        <h3 className="font-semibold text-purple-900 mb-4">Configurações</h3>
        <div className="space-y-1">
          <button className="w-full text-left p-3 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-3">
            <Settings size={20} className="text-purple-600" />
            <span className="text-purple-900">Notificações</span>
          </button>
          <button className="w-full text-left p-3 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-3">
            <Lock size={20} className="text-purple-600" />
            <span className="text-purple-900">Privacidade</span>
          </button>
          <button className="w-full text-left p-3 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-3">
            <HelpCircle size={20} className="text-purple-600" />
            <span className="text-purple-900">Ajuda e Suporte</span>
          </button>
          <button className="w-full text-left p-3 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-3">
            <LogOut size={20} className="text-red-600" />
            <span className="text-red-600">Sair da Conta</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
