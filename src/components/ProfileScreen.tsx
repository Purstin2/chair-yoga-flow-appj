import React, { useState } from 'react';
import { 
  ArrowLeftIcon, 
  CameraIcon, 
  EnvelopeIcon, 
  UserIcon, 
  PencilIcon, 
  CheckIcon, 
  XMarkIcon,
  BellIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { User, UserProgress } from '@/types';

interface ProfileScreenProps {
  onBack: () => void;
  onResetProgress: () => void;
  onUpdateUser: (userData: User) => void;
  currentUser: User;
  userProgress: UserProgress;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ 
  onBack, 
  onResetProgress, 
  onUpdateUser, 
  currentUser, 
  userProgress 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUserInfo, setTempUserInfo] = useState({
    name: currentUser.name,
    email: currentUser.email,
    photo: currentUser.photo,
  });

  const handleEdit = () => {
    setIsEditing(true);
    setTempUserInfo({
      name: currentUser.name,
      email: currentUser.email,
      photo: currentUser.photo,
    });
  };

  const handleSave = () => {
    const updatedUser = {
      ...currentUser,
      name: tempUserInfo.name,
      email: tempUserInfo.email,
      photo: tempUserInfo.photo
    };
    
    onUpdateUser(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUserInfo({
      name: currentUser.name,
      email: currentUser.email,
      photo: currentUser.photo,
    });
    setIsEditing(false);
  };

  const handleSettingClick = (setting: string) => {
    switch (setting) {
      case 'notifications':
        alert('Configurações de notificação em desenvolvimento');
        break;
      case 'privacy':
        alert('Configurações de privacidade em desenvolvimento');
        break;
      case 'help':
        alert('Central de ajuda em desenvolvimento');
        break;
      case 'reset':
        if (confirm('Tem certeza que deseja resetar seu progresso? Esta ação não pode ser desfeita.')) {
          onResetProgress();
          alert('Seu progresso foi resetado com sucesso!');
        }
        break;
    }
  };

  const avatarOptions = ['😊', '👩', '👨', '👵', '👴', '🧕', '👩‍🦰', '👩‍🦱', '👩‍🦲', '👨‍🦰', '👨‍🦱', '👨‍🦲'];

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <ArrowLeftIcon className="h-6 w-6 text-purple-700" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Perfil</h1>
          <p className="text-gray-600">Gerencie suas informações</p>
        </div>
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="p-2 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors"
          >
            <PencilIcon className="h-5 w-5 text-purple-600" />
          </button>
        )}
      </div>

      {/* Profile Photo */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-white/20">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-4xl cursor-pointer">
              {tempUserInfo.photo}
            </div>
            {isEditing && (
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <CameraIcon className="h-4 w-4 text-white" />
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
          
          <h2 className="text-xl font-bold text-gray-900 mb-1">{tempUserInfo.name}</h2>
          <p className="text-gray-600 text-sm">Membro desde Janeiro 2024</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Informações Pessoais</h3>
          {isEditing && (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <XMarkIcon className="h-4 w-4 text-gray-600" />
              </button>
              <button
                onClick={handleSave}
                className="p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors"
              >
                <CheckIcon className="h-4 w-4 text-green-600" />
              </button>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
            {isEditing ? (
              <input
                type="text"
                value={tempUserInfo.name}
                onChange={(e) => setTempUserInfo({...tempUserInfo, name: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-gray-900"
                placeholder="Digite seu nome"
              />
            ) : (
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <UserIcon className="h-5 w-5 text-gray-600 mr-3" />
                <span className="text-gray-900">{currentUser.name}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={tempUserInfo.email}
                onChange={(e) => setTempUserInfo({...tempUserInfo, email: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-gray-900"
                placeholder="Digite seu email"
              />
            ) : (
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <EnvelopeIcon className="h-5 w-5 text-gray-600 mr-3" />
                <span className="text-gray-900">{currentUser.email}</span>
              </div>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleCancel}
              className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
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
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-6 shadow-lg border border-white/20">
        <h3 className="font-semibold text-gray-900 mb-4">Seu Progresso</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">{userProgress?.completedDays || 0}</div>
            <div className="text-sm text-gray-700">Dias Ativos</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">{userProgress?.totalMinutes || 0}</div>
            <div className="text-sm text-gray-700">Min Totais</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">{userProgress?.completedExercises?.length || 0}</div>
            <div className="text-sm text-gray-700">Exercícios</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">{userProgress?.streak || 0}</div>
            <div className="text-sm text-gray-700">Sequência</div>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20">
        <h3 className="font-semibold text-gray-900 mb-4">Configurações</h3>
        <div className="space-y-1">
          <button 
            onClick={() => handleSettingClick('notifications')}
            className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3"
          >
            <BellIcon className="h-5 w-5 text-gray-600" />
            <span className="text-gray-900">Notificações</span>
          </button>
          <button 
            onClick={() => handleSettingClick('privacy')}
            className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3"
          >
            <ShieldCheckIcon className="h-5 w-5 text-gray-600" />
            <span className="text-gray-900">Privacidade</span>
          </button>
          <button 
            onClick={() => handleSettingClick('help')}
            className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3"
          >
            <QuestionMarkCircleIcon className="h-5 w-5 text-gray-600" />
            <span className="text-gray-900">Ajuda e Suporte</span>
          </button>
          <button 
            onClick={() => handleSettingClick('reset')}
            className="w-full text-left p-3 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-3"
          >
            <TrashIcon className="h-5 w-5 text-red-600" />
            <span className="text-red-600">Resetar Progresso</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
