import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./pages/HowItWorks";
import Mission from "./pages/Mission";
import Work from "./pages/Work";
import OurService from "./pages/OurService";
import Price from "./pages/Price";
import AskedQuestion from "./pages/AskedQuestion";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TermsConditions from "./components/TermsCondition";
import SignupForm from "./pages/SignupForm";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Hero/>}/>
        <Route path="/hero" element={<Hero/>}/>

        {/* Signup Route */}
        <Route path="/how-it-works" element={<HowItWorks/>} />
        <Route path="/signup" element={<SignupForm/>} />

        {/* Congratulations Route */}
        <Route path="/mission" element={<Mission/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/service" element={<OurService/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/terms&conditions" element={<TermsConditions/>}/>
        {/* <Route path="/price" element={<Price/>}/> */}
      </Routes>
      <AskedQuestion/>
      <Footer/>
    </Router>
  );
};

export default App;
