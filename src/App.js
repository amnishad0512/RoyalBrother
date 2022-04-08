import "./App.css";

import Navbar from "./Components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/HomeComponets/Home";
import Offer from "./Page/OfferComponets/Offer";

import { Footer } from "./Components/Layout/Footer";
import { Homepage } from "./Components/Homepage";
import { Tariff } from "./Components/Layout/Tariff/Tariff";
import { SearchR } from "./Components/Layout/SearchR.jsx/SearchR";
import { Login } from "./Components/Layout/Login/Login";
import {store} from "./Redux/Store"
import {Provider} from "react-redux"
import { Signup } from "./Components/Layout/Signup/Signup";
import { Profile } from "./Components/Profile/Profile";
import { ProductDetails } from "./Components/Layout/ProductDetails";
import { Confirmed } from "./Components/Layout/Confirmed";


import { Routing } from "./Routing";


function App() {
  return (
    <div className="App">

    <Provider store={store} >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/tariff" element={<Tariff />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/searchR" element={<SearchR />} />
        <Route path="/confirm" element={<Confirmed />} />

        <Route exact path="/searchR/:id" element={<ProductDetails />} />

        
        







      </Routes>

      <Footer />
      </Provider>
    </div>
  );
}

export default App;
