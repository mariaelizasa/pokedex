<h1 align="center">Pokédex 🎮<h1/>

![image](https://github.com/user-attachments/assets/ed9859bd-8131-4e56-a408-81c784dda861)
![pokemon](https://github.com/user-attachments/assets/bd3e2b88-ca5d-4893-bb4c-06953e03264b)

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
