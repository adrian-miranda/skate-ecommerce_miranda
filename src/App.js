import './App.css';
import './components/navbar/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <ItemListContainer/>
      </header>
    </div>
  );
}
export default App;

// Proviene de manifesto.json que no soporta comentarios
// "icons": [
//   {
//     "src": "favicon.ico",
//     "sizes": "64x64 32x32 24x24 16x16",
//     "type": "image/x-icon"
//   },
//   {
//     "src": "logo192.png",
//     "type": "image/png",
//     "sizes": "192x192"
//   },
//   {
//     "src": "logo512.png",
//     "type": "image/png",
//     "sizes": "512x512"
//   }
// ],
