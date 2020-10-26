import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Home from './components/Home'
import Launch from './components/Launch/Launch'
import LaunchIndex from './components/Launch/LaunchIndex'
import LaunchShoe from './components/Launch/LaunchShoe'
import NotFound from './components/NotFound'


import './App.css';


function App() {
  return <Router>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/Launch">Launch</Link>
      </nav>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="Launch" element={<Launch />}>
        <Route path="/" element={<LaunchIndex />} />
        <Route path=":slug" element={<LaunchShoe />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

};

export default App;
