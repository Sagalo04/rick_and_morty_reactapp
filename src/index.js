import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import CardDeck from "./Components/CardDeck/CardDeck";
import Character from "./Components/Character/Character";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
        <Route path="/characters" element={<CardDeck />}> 
        </Route>
        <Route path="/characters/:characterId" element={<Character />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);