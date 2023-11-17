/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Header from "./components/Header/Header";
import Login from "./pages/Authentication/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Register from "./pages/Authentication/Register";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header logout={logout} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/createProduct" element={<CreateProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/product/:no" element={<DetailProduct />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
