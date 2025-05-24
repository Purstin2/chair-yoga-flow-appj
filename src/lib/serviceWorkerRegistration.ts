// This function registers our service worker for offline functionality
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceWorker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
          
          // Set up background sync when back online
          // Check if background sync is supported
          if ('sync' in registration) {
            // Safely cast to any to bypass TypeScript errors with the sync API
            (registration as any).sync.register('sync-user-data').catch((err: Error) => {
              console.error('Background sync registration failed:', err);
            });
          } else {
            console.log('Background sync not supported in this browser');
          }
          
          // Handle updates
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }
            
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // At this point, the updated precached content has been fetched,
                  // but the previous service worker will still serve the older
                  // content until all client tabs are closed.
                  console.log('New content is available and will be used when all tabs for this page are closed.');
                  
                  // Show notification to user about update
                  if (window.confirm('Uma nova versão está disponível! Atualizar agora?')) {
                    window.location.reload();
                  }
                } else {
                  // At this point, everything has been precached.
                  console.log('Content is cached for offline use.');
                }
              }
            };
          };
        })
        .catch(error => {
          console.error('Error during service worker registration:', error);
        });
        
      // Handle offline/online status changes
      window.addEventListener('online', () => {
        console.log('App is online. Syncing data...');
        // Trigger sync when back online
        navigator.serviceWorker.ready.then(registration => {
          // Check if background sync is supported
          if ('sync' in registration) {
            (registration as any).sync.register('sync-user-data').catch((err: Error) => {
              console.error('Background sync registration failed:', err);
            });
          }
        });
      });
      
      window.addEventListener('offline', () => {
        console.log('App is offline. Changes will be saved locally.');
        // Show offline notification to user
        showOfflineNotification();
      });
    });
  }
}

// Shows a notification to the user when the app goes offline
function showOfflineNotification() {
  // Create a notification element
  const notification = document.createElement('div');
  notification.className = 'offline-notification';
  notification.textContent = 'Você está offline. Os dados serão salvos localmente.';
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #7432B4;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    font-size: 14px;
  `;
  
  // Add to document
  document.body.appendChild(notification);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 5000);
} 