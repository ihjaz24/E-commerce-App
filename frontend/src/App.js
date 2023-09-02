import {Routes,Route} from 'react-router-dom'
import About from './pages/About';
import SignUp from './pages/Auth/SignUp';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='*' element={<Pagenotfound />} />
        <Route path='/SignUp' element={<SignUp />} />


        
      </Routes> 
    </>
  );
}

export default App;
