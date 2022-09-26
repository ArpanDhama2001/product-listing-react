import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/productsSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchProducts());

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
