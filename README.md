# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# Pokédex

<h1 align="center">📜 Registration Form<h1/>


![image](https://github.com/user-attachments/assets/ed9859bd-8131-4e56-a408-81c784dda861)

## Como executar / How to run

Instale as dependências / Install all the dependencies:

```sh
npm install
```

Crie um arquivo .env e adicione a URL da API como variável de ambiente no seguinte formato / Create an .env file and add the API URL on the following format:

```sh
Create .env
VITE_BASE_URL=https://pokeapi.co/api/v2/
```

Execute o projeto / Execute the project:

```sh
npm run dev
```

## Estrutura do Projeto / Project Structure

```
├── public
├── src
│   └── @types // Typescript Interface
│       ├── PokemonDetails.ts
│       ├── Pokemon.ts
│   └── components 
│       ├── Card
│       ├── Filters
│       ├── Icon
│       ├── Icon
│       ├── Loading
│       ├── NotFound
│       ├── Pagination
│   └── context
│       ├── PokedexContext.ts
│   └── pages
│       ├── Details
│       ├── Home
│   └── routes
│       ├── routes.tsx 
│       ├── Home
│   └── services
│       ├── api.ts // Api URL
│       ├── requests.ts 
│   └── styles
│       ├── global.ts
│   └── utils
│       ├── utils.ts
│   └── App.tsx
│   └── main.tsx

```

## Contributing

1. Fork it (`https://github.com/mariaelizasa/pokedex`)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
