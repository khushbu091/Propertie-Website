import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Main-Component/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BuySale from "./Components/BuySale";
import Agent from "./Components/Agent";
import Listing from "./Components/Listing";
const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} /> 
        <Route path="home" element={<Home />} /> 
        <Route path="about" element={<About />} /> 
        <Route path="contact" element={<Contact />} /> 
        <Route path="buysale" element={<BuySale />} /> 
        <Route path="agent" element={<Agent />} />
        <Route path="listing" element={<Listing />} />



        </Route>
        </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
