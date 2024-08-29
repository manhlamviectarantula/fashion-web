import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Collection from './pages/Collection';
import DetailsProduct from './pages/DetailsProduct';
import ContactPage from './pages/Contact';
import ProductList from './pages/ProductList';
import CategoryList from './pages/CategoryList';
import ChangePw from './pages/ChangePw';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryList" element={<CategoryList />} />
        <Route path="/categoryList/:category" element={<ProductList />} />
        {/* <Route path="/detailsProduct/:id" element={<DetailsProduct />} /> */}
        <Route path="/categoryList/:category/:id" element={<DetailsProduct />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/account" element={!user ? <Navigate to="/" /> : <Account />} />
        <Route path="/account/change-pw" element={<ChangePw />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
