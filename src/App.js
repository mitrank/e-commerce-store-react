import { useEffect, useState } from 'react';
import './App.css';
import { getCategories } from './fetcher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import Category from './components/Category';
import Home from './components/Home';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []});

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout categories={categories} />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='products/:productId' element={<ProductDetail />} />
          <Route path='categories/:categoryId' element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
