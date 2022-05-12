import './App.css';
import NavBar from './NavBar';
import ProductsList from './ProductsList';
import Footer from './Footer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
    <NavBar></NavBar>       
    <ProductsList></ProductsList>
    <Footer></Footer>
    </div>
    );
}

export default App;
