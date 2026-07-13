# React Practice

Monorepo para estudo e prática de React seguindo o React Practice Calendar.

## Objetivo

Este repositório tem como objetivo fornecer uma base sólida para praticar React através de 13 desafios progressivos, focando em conceitos fundamentais sem dependências desnecessárias.

## Estrutura do Projeto

```
react-practice/
├── apps/                    # Aplicações React
│   ├── 01-public-holidays/  # API de feriados públicos
│   ├── 02-accordion/        # Componente Accordion
│   ├── 03-use-local-storage/# Custom hook localStorage
│   ├── 04-memory-game/      # Jogo da memória
│   ├── 05-hacker-news/      # API Hacker News
│   ├── 06-todo-dnd/         # Todo com drag and drop
│   ├── 07-movie-search/     # Busca de filmes
│   ├── 08-timer/            # Timer
│   ├── 09-pokemon-list/     # Lista de Pokémon
│   ├── 10-contact-book/     # Livro de contatos
│   ├── 11-typewriter/       # Efeito typewriter
│   ├── 12-restaurant-reservation/ # Reservas
│   └── 13-github-issues-filter/   # GitHub Issues
├── package.json
├── tsconfig.base.json
├── eslint.config.js
├── prettier.config.js
├── .editorconfig
└── README.md
```

## Stack

- **npm Workspaces** - Gerenciamento de monorepo
- **React 19** - Versão mais recente
- **Vite** - Build tool
- **TypeScript** - Type safety
- **ESLint** - Linting
- **Prettier** - Formatação
- **EditorConfig** - Consistência entre editores

## Instalação

```bash
# Instalar dependências de todas as aplicações
npm install
```

## Como Executar

### Executar uma aplicação específica

```bash
# Desenvolvimento
npm run dev --workspace=01-public-holidays

# Build
npm run build --workspace=01-public-holidays

# Preview do build
npm run preview --workspace=01-public-holidays
```

### Scripts disponíveis na raiz

```bash
# Lint em todo o projeto
npm run lint

# Lint com auto-fix
npm run lint:fix

# Formatar todos os arquivos
npm run format

# Verificar formatação
npm run format:check
```

## Criando Novos Projetos

Para criar uma nova aplicação seguindo o mesmo padrão:

1. Crie o diretório em `apps/`:

   ```bash
   mkdir -p apps/NN-nome-do-projeto
   ```

2. Crie o `package.json`:

   ```json
   {
     "name": "NN-nome-do-projeto",
     "private": true,
     "version": "0.0.0",
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "tsc -b && vite build",
       "lint": "eslint .",
       "preview": "vite preview"
     },
     "dependencies": {
       "react": "^19.0.0",
       "react-dom": "^19.0.0"
     }
   }
   ```

3. Crie `tsconfig.json`:

   ```json
   {
     "extends": "../../tsconfig.base.json",
     "compilerOptions": {
       "composite": true,
       "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo"
     },
     "include": ["src"]
   }
   ```

4. Crie `vite.config.ts`:

   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
   });
   ```

5. Crie a estrutura padrão do Vite:

   ```bash
   mkdir -p apps/NN-nome-do-projeto/src
   ```

6. Adicione os arquivos básicos (`index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`)

7. Instale as dependências:
   ```bash
   npm install --workspace=NN-nome-do-projeto
   ```

## Lista de Desafios

| #   | Projeto                | Status |
| --- | ---------------------- | ------ |
| 01  | Public Holidays        | ⬜     |
| 02  | Accordion              | ⬜     |
| 03  | Use Local Storage      | ⬜     |
| 04  | Memory Game            | ⬜     |
| 05  | Hacker News            | ⬜     |
| 06  | Todo DnD               | ⬜     |
| 07  | Movie Search           | ⬜     |
| 08  | Timer                  | ⬜     |
| 09  | Pokemon List           | ⬜     |
| 10  | Contact Book           | ⬜     |
| 11  | Typewriter             | ⬜     |
| 12  | Restaurant Reservation | ⬜     |
| 13  | GitHub Issues Filter   | ⬜     |

## Restrições

As seguintes dependências **não** estão instaladas e serão adicionadas apenas quando necessário:

- Tailwind CSS
- MUI
- React Router
- TanStack Query
- Zustand
- React Hook Form
- Axios

## Configurações Compartilhadas

Todas as aplicações reutilizam as configurações centralizadas na raiz:

- **TypeScript**: `tsconfig.base.json`
- **ESLint**: `eslint.config.js`
- **Prettier**: `prettier.config.js`
- **EditorConfig**: `.editorconfig`
