import './App.css';
import React, { Component } from "react";

import Home from "./home/home";
import Details from "./details/details";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
<>
<HelmetProvider>
<Helmet>
  <title>Zarcony-Ecommerce Store for Selling Mobile-Service</title>
  <meta
  name="description"
  content="Ecommerce Store for Selling Mobile-Service"
/>;
</Helmet>
    </HelmetProvider>
<BrowserRouter>
<Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/details" element={<Details/>}/>

</Routes>
</BrowserRouter>

</>
  );
}

export default App;
