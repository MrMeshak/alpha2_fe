import { Routes, Route } from 'react-router-dom';
import HomePage from './app/homePage';
import ProductPage from './app/productPage';
import CategoryPage from './app/categoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/category/:category" element={<CategoryPage />}></Route>
      <Route path="/product/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
