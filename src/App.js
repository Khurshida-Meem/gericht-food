import './App.css';
import About from './Components/Home/About/About';
import Awards from './Components/Home/Awards/Awards';
import Banner from './Components/Home/Banner/Banner';
import ChefsWord from './Components/Home/ChefsWord/ChefsWord';
import Contact from './Components/Home/Contact/Contact';
import Footer from './Components/Home/Footer/Footer';
import Instagram from './Components/Home/Instagram/Instagram';
import Menu from './Components/Home/Menu/Menu';
import Navbar from './Components/Home/Navbar/Navbar';
import Newsletter from './Components/Home/Newsletter/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Menu />
      <ChefsWord />
      <Awards />
      <Instagram />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
