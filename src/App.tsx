import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Specific from './pages/Specific';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Cart from './components/Cart';
import { useGlobalContext } from './context';
import About from './pages/About';


function App() {
  const {setOpenCart}=useGlobalContext()
  window.addEventListener('click',(e:any)=>{
    if(e.target.classList[0]==='cartBackground'){
      setOpenCart(false)
    }
  })
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Cart/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop/:string' element={<Shop/>}/>
          <Route path='/specific/:id' element={<Specific/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signout' element={<SignOut/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
