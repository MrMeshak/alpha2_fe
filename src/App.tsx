import { Routes, Route } from 'react-router-dom';
import HomePage from './app/homePage';
import ProductPage from './app/productPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
