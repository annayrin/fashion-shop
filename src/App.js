
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

import LoginPage from "./components/login/LoginPage";
import Products from "./components/products/Products";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// import {getData} from "./services/api"

// getData();
function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={ <Products/> } />
                    <Route path="/login" element={ <LoginPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
