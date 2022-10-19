import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Specific from './pages/Specific';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useGlobalContext } from './context';
import About from './pages/About';
import Login from './pages/LogIn';
import RegisterForm from './pages/RegisterForm';


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
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
