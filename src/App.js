import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllProducts from './component/GetallProduct';
import ProductDetails from './component/SingleProduct';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts  />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
          
          
    </BrowserRouter>
  );
}

export default App;
