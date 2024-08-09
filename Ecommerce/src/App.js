
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Cart from './Pages/Cart';




function App() {
  return (

    <div>


      <Navbar />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category='men' />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />
        <Route path='/product' element={<Product />} />
        <Route path=':productId' element={<Product />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
