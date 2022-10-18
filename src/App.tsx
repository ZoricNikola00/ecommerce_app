import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Specific from './pages/Specific';
import Category from './pages/Category';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/specific/:id' element={<Specific/>}/>
          <Route path='/category/:string' element={<Category/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
