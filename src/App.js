import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Main-Component/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BuySale from "./Components/BuySale";
import Agent from "./Components/Agent";
import LoginForm from "./Components/Login";
import Blog from "./Components/Blog";
import Add_property_form from "./Components/Add_property_form";
import PropertyListings from "./Components/Property_Listing";

// ---------------Admin pannel --------------------------------------------------
import AdminLogin from "./Admin-Pannel/Admin-Component/AdminLogin";
import AdminDashboard from "./Admin-Pannel/Admin-Component/AdminDashboard";
import AdminLayout from "./Admin-Pannel/Admin-Component/AdminLayout";
import ProtectedRoute from "./Admin-Pannel/Admin-Component/ProtectedRoute";


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
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="addpropertyform" element={<Add_property_form />} />
        <Route path="propertylisting" element={<PropertyListings />} />

        </Route>

        <Route path="adminlogin" element={<AdminLogin/>} />
        <Route path="/admin" element={
            <ProtectedRoute>
            <AdminLayout />
            </ProtectedRoute>
            }>
        <Route index element={<AdminDashboard />} />



        </Route>
        </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
