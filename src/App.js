import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Main-Component/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Agent from "./Components/Agent";
import Service from "./Components/Service";
import Terms from "./Components/Terms";
import PrivacyPolicy from "./Components/Policy";
import CancellationPolicy from "./Components/CancellationPolicy";

// ---------------Admin pannel --------------------------------------------------
import AdminLogin from "./Admin-Pannel/Admin-Component/AdminLogin";
import AdminDashboard from "./Admin-Pannel/Admin-Component/AdminDashboard";
import AdminLayout from "./Admin-Pannel/Admin-Component/AdminLayout";
import ProtectedRoute from "./Admin-Pannel/Admin-Component/ProtectedRoute";
import Add_property_form from "./Admin-Pannel/Admin-Component/Add_property_form";


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
            <Route path="agent" element={<Agent />} />
            <Route path="service" element={<Service />} />
            <Route path="terms" element={<Terms />} />
            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="cancellationPolicy" element={<CancellationPolicy />} />
        </Route>

        <Route path="adminlogin" element={<AdminLogin/>} />
        <Route path="/admin" element={
            <ProtectedRoute>
            <AdminLayout />
            </ProtectedRoute>
            }>
        <Route index element={<AdminDashboard />} />
        <Route path="/admin/addpropertyform" element={<Add_property_form />} />




        </Route>
        </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
