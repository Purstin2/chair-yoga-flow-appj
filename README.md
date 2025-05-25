# Chair Yoga Flow App

Este aplicativo oferece uma biblioteca de exercícios de yoga em cadeira para alívio de dores e melhoria da qualidade de vida, com recursos de vídeos incorporados e uma interface intuitiva.

## Recursos

- **Biblioteca de Exercícios**: Exercícios para diferentes partes do corpo e necessidades específicas
- **Vídeos Integrados**: Instruções visuais detalhadas com vídeos do YouTube
- **Favoritos**: Salve seus exercícios preferidos para acesso rápido
- **Modo Passo a Passo**: Guia interativo para fazer os exercícios corretamente
- **Organização por Categorias**: Encontre facilmente exercícios para áreas específicas do corpo
- **Interface Intuitiva**: Design responsivo e fácil de usar

## Melhorias Recentes

### Otimizações de Performance

- Implementação de componentes modulares (VideoEmbed, CompletionDialog, StepByStepGuide)
- Carregamento sob demanda de recursos (vídeos, áudio)
- Sistema de cache para reduzir requisições ao localStorage
- Otimização de imagens com carregamento lazy
- Gerenciamento de estado mais eficiente

### Acessibilidade

- Feedback visual durante o carregamento de vídeos
- Feedback tátil através de vibração (dispositivos compatíveis)
- Melhor marcação semântica com labels em botões e controles
- Contraste aprimorado para melhor legibilidade
- Navegação e interação otimizadas para leitores de tela

### Experiência do Usuário

- Sistema de favoritos aprimorado com feedback instantâneo
- Detecção automática da posição de rolagem para guiar exercícios
- Melhor gestão de sons e preferências do usuário
- Animações e transições mais suaves
- Feedback visual e tátil mais consistente durante interações

### Funcionalidades

- Sistema de estatísticas de uso para acompanhamento do progresso
- Gestão aprimorada de exercícios concluídos
- Feedback sonoro para interações do usuário
- Visualização de miniaturas dos vídeos com carregamento otimizado
- Persistência de preferências do usuário

## Tecnologias

- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- YouTube API
- Intersection Observer API

## Desenvolvimento

Para iniciar o ambiente de desenvolvimento:

```sh
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## Estrutura do Projeto

```
src/
  ├── components/      # Componentes da UI
  ├── data/           # Dados dos exercícios
  ├── hooks/          # Hooks personalizados
  ├── lib/            # Utilidades e API
  ├── pages/          # Páginas principais
  └── types/          # Definições de tipos
```

## Como Usar

1. Navegue pela biblioteca de exercícios usando as abas e filtros
2. Selecione um exercício para ver detalhes
3. Use o modo passo a passo para seguir instruções detalhadas
4. Marque exercícios como favoritos para acesso rápido
5. Acompanhe seu progresso através de exercícios concluídos
6. Personalize suas preferências de som e notificações

## Licença

Este projeto está licenciado sob a Licença MIT.

## Project info

**URL**: https://lovable.dev/projects/a505287e-396f-4826-abfc-906e1a93ca3c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a505287e-396f-4826-abfc-906e1a93ca3c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a505287e-396f-4826-abfc-906e1a93ca3c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
