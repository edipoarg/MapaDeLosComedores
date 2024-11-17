import './App.css';
import Navbar from './components/navbar/Navbar';
import Mapa from './components/mapa/Mapa';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';

function App() {

  return (
    <>
    <Menu/>
      <Navbar/>
      <Mapa/>
      <Footer/>
    </>
  )
}

export default App
