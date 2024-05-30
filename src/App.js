import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Profil from './component/Profil';
import Hero from './component/Hero';
import Feature from './component/Feature';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Profil/>
      <Feature/>
      <Footer/>
      
    </div>
  );
}

export default App;
      