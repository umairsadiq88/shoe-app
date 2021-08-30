import Navbar2 from './components/Navbar2'

const { default: Context } = require("./components/Context");

import './App.css';
import Footer from './components/Footer';



function App() {
  return (
     <>

    <Navbar2 />
    <Footer />
    <Context />
    </>
  )
};

export default App;
