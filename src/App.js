import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/navbar.css';
import { NavBar } from './components/navbar/navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer/>
        <ItemDetailContainer />
      </div>
  );
}
export default App;