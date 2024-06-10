import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Registration/Login";
import SignUp from "./Pages/Registration/SignUp";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";
import Profile from "./Pages/Profile";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import { AuthProvider } from "./Context/AuthContext";
import RequireAuth from "./Pages/Registration/RequireAuth";
import { CountProvider } from "./Context/CountContext";
import OurProducts from "./Pages/OurProducts";
import AppLayout from "./Pages/Layout/AppLayout";
import SearchResults from "./Pages/SearchResults";
import Reviews from "./Pages/Reviews";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CountProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="about" element={<About />} />
              <Route path="allProducts" element={<OurProducts />} />
              <Route path="contact" element={<Contact />} />
              <Route path="searchResults" element={<SearchResults />} />
              <Route
                path="productDetail/:productId"
                element={<ProductDetails />}
              />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route element={<RequireAuth />}>
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="account" element={<Account />}>
                  <Route index element={<Profile />} />
                </Route>
                <Route path="review/:productId" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </CountProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
