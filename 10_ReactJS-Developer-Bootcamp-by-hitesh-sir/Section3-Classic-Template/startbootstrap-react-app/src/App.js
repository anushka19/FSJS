
import './App.css';
import './index.css';
import Navbar from './Components/Navbar'
import MasterHead from './Components/MasterHead';
import avatar from './assets/img/avataaars.svg'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Contact from './Components/Contact';
import Footer from './Components/Footer'


function App() {
  return (
    <div>
   
      <Navbar/>
      <MasterHead imgUrl={avatar}/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
