import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Navbar,Sidebar,Footer } from './components';
import {Home,SingleProduct,Products,Error,About,Cart, Checkout} from './pages'
function App() {
  return (
     <>
       <Navbar/>
       <Sidebar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products:id' element={<SingleProduct/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/checkout' element={<Checkout/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
       <Footer/>
     </>
  );
}

export default App;
