import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import { About } from "./Components/About/About.jsx";
import Service from "./Components/Service/Service.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";
import { Signup } from "./Components/Signup/Signup.jsx";
import { Login } from "./Components/Login/Login.jsx";
import { NotFound } from "./Components/Error/Error.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import Logout from "./Components/Logout/Logout.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { AdminLayout } from "./Components/Layouts/AdminLayout.jsx";
import { AdminUsers } from "./Components/Admin-users/AdminUsers.jsx";
import { AdminContacts } from "./Components/Admin-contacts/AdminContacts.jsx";
import { Adminupdate } from "./Components/Admin-update/Adminupdate.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="update/:id" element={<Adminupdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
