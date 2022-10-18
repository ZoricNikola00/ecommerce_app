import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Specific from './pages/Specific';
import Category from './pages/Category';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Cart from './components/Cart';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Cart/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/specific/:id' element={<Specific/>}/>
          <Route path='/category/:string' element={<Category/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signout' element={<SignOut/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
