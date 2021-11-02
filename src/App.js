import './App.css';
import './components/navbar/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar/navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer/>
        <ItemDetailContainer />
      </header>
    </div>
  );
}
export default App;