import './App.css';
import video from './assets/Video.png'
import About from './Components/Home/About/About';
import Awards from './Components/Home/Awards/Awards';
import Banner from './Components/Home/Banner/Banner';
import ChefsWord from './Components/Home/ChefsWord/ChefsWord';
import Contact from './Components/Home/Contact/Contact';
import Instagram from './Components/Home/Instagram/Instagram';
import Menu from './Components/Home/Menu/Menu';
import Navbar from './Components/Home/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Menu />
      <ChefsWord />
      <div>
        <img src={video} alt="" width='100%' />
      </div>
      <Awards />
      <Instagram />
      <Contact />
    </div>
  );
}

export default App;
