import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ContainCardsPokemon from "./components/ContainCardsPokemon";
import DetailPokemon from "./components/DetailPokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ContainCardsPokemon />} />
          <Route path="/detailPokemon/:idPokemon" element={<DetailPokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
