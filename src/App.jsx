import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Cart, Home, Wishlist } from "./page";

const App = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Cart />} />
        <Route path="/pages" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
