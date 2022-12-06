import logo from './logo.svg';
import './App.css';

import { Navbar, Intro, About, Products, Order, Gallery, Care, Contact, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Products />
      <Order />
      Gallery
      <Care />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
