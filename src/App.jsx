import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import MenuSection from "./features/menu/MenuSection";
import CartSection from "./features/cart/CartSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AppLayout />}>
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/cart" element={<CartSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
