import './App.css';
import './components/navbar/navbar.css';
import { NavBar } from './components/navbar/navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
// import {FontAwesoneIcon} from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer saludo='hola hola Bienvenido a la tienda'/>
      </header>
    </div>
  );
}

export default App;
