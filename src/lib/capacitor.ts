import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

export const initCapacitor = async () => {
  try {
    // Esconder a splash screen com fade
    await SplashScreen.hide({
      fadeOutDuration: 300
    });

    // Configurar a status bar
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: '#ffffff' });

    // Adicionar listener para quando o app voltar do background
    App.addListener('appStateChange', ({ isActive }) => {
      if (isActive) {
        // O app está ativo novamente
        console.log('App retornou para o primeiro plano');
        // Aqui você pode atualizar dados, verificar conexão, etc.
      } else {
        // O app foi para o background
        console.log('App foi para o background');
        // Aqui você pode salvar o estado, pausar operações, etc.
      }
    });

    // Lidar com o botão de voltar no Android
    App.addListener('backButton', () => {
      // Se estiver na tela inicial
      if (window.location.pathname === '/') {
        // Confirmar saída do app
        if (window.confirm('Deseja sair do aplicativo?')) {
          App.exitApp();
        }
      } else {
        // Caso contrário, volte para a página anterior
        window.history.back();
      }
    });

  } catch (error) {
    // Lidar com erros em ambiente web
    console.log('Capacitor não está disponível ou ocorreu um erro:', error);
  }
}; 