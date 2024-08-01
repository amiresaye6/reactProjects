// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
// import { useContext } from 'react'
// import all_product from './components/Assets/all_product'

function App() {
  // const products = useContext(all_product)
  return (
    <>
      <Navbar />
      {/* <UserContext.Provider value={all_product}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      {/* </UserContext.Provider > */}
    </>
  )
}

export default App
