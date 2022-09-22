import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";

function App() {
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
