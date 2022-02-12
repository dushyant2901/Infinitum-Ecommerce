import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Home,SingleProduct,Products,Error,About,Cart} from './pages'
function App() {
  return (
     <>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products:id' element={<SingleProduct/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
     </>
  );
}

export default App;
