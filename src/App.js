import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Boss from './components/Boss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar background={'transparent'} />
    <Boss title='PEDALES BOSS' />
    <ItemListContainer greeting='Lista de Productos' />
    
    </>
  );
}

export default App;
