import { Link, Outlet } from 'react-router-dom';
import './App.css';
// import CardDeck from './Components/CardDeck/CardDeck';
// import Character from './Components/Character/Character';

function App() {


  return (
    <div className="App">
      <h1>Bookkeeper</h1>
      <nav
      >
        <Link to="/characters">Invoices</Link> |{" "}
        </nav>
      <Outlet />
    </div>
  );
}

export default App;
