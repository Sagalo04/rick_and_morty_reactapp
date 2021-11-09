import { Link, Outlet } from 'react-router-dom';
import Styles from './App.module.scss';
// import CardDeck from './Components/CardDeck/CardDeck';
// import Character from './Components/Character/Character';

function App() {


  return (
    <>
      <nav className={Styles.o_nav}>
        <Link className={Styles.o_link} to="/">Home</Link>
        <Link to="/characters">Personajes</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
