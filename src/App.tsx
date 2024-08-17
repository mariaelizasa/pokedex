import { PokemonProvider } from "./context/PokedexContext";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
     <PokemonProvider>
      <GlobalStyle />
      <AppRoutes/>
      </PokemonProvider>
    </>
  );
}

export default App;
