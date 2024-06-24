import "./App.css";
import Home from "./components/Home/Home";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import NotFound from "./Pages/NotFound";
import ProductPage from "./components/ProductPage/ProductPage";
import CartContextProvider from "./context/CartContext";
import CartPage from "./components/CartPage/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":id" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </div>
  );
}

export default App;
