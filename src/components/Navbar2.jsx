import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home'

import Men from './Men/Men'
import MenIndex from './Men/MenIndex'
import MenShoe from './Men/MenShoe'

import Women from './Women/Women'
import WomenIndex from './Women/WomenIndex'
import WomenShoe from './Women/WomenShoe'

import Kids from './Kids/Kids'
import KidsIndex from './Kids/KidsIndex'
import KidsShoe from './Kids/KidsShoe'

import NotFound from '../components/NotFound'

const Navbar2 = () => {
    return (
        <Router>
        <nav>
         <Link to="/">Home</Link>
         <Link to="/Men">Men</Link>
         <Link to="/Women">Women</Link>
         <Link to="/Kids">Kids</Link>
       </nav>
 
     <Routes>
 
       <Route path="/" element={<Home />} />
       
       <Route path="Men" element={<Men />}>
         <Route path="/" element={<MenIndex />} />
         <Route path=":slug" element={<MenShoe />} />
       </Route>

       <Route path="Women" element={<Women />}>
         <Route path="/" element={<WomenIndex />} />
         <Route path=":slug" element={<WomenShoe />} />
       </Route>

       <Route path="Kids" element={<Kids />}>
         <Route path="/" element={<KidsIndex />} />
         <Route path=":slug" element={<KidsShoe />} />
       </Route>

       <Route path="*" element={<NotFound />} />
     </Routes>
   </Router>
    )
}

export default Navbar2;