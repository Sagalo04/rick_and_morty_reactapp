import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import CardDeck from "./Components/CardDeck/CardDeck";
import Character from "./Components/Character/Character";
import EpisodePage from "./Components/EpisodePage/EpisodePage";
import Home from "./Components/Home/Home";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/characters" element={<CardDeck />} /> 
        <Route path="/characters/:characterId" element={<Character />} />
        <Route path="/episode/:episodeId" element={<EpisodePage />} />
      </Route>    
    </Routes>
  </BrowserRouter>,
  rootElement
);