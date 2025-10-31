import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import CustomerReviews from "./components/CustomerReviews";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/customerreviews" element={<CustomerReviews />} />
    </Routes>
  </BrowserRouter>
);
