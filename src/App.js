import React, { useState } from "react";
import "./App.css";
import "./Assets/css/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Authentications/Login/Login";
import Register from "./Components/Authentications/Register/Register";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Commons/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Commons/Footer/Footer";
import Sidebar from "./Components/Dashboard/components/00-SideBar/sidebar";
import Mail from "./Components/Dashboard/components/01-Mail/mail";
import Details from "./Components/Dashboard/components/01-Mail/details";
import Setting from "./Components/Dashboard/components/01-Mail/Setting";

function App() {
  const [state, setState] = useState(false);
  return (
    <div className={`App ${state ? "overflow-hidden" : ""}`}>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/home"
          element={<Sidebar state={state} setState={setState} />}
        >
          <Route index element={<Mail />} />
          <Route path="/home/detailsand" element={<Details />} />
          <Route path="/home/settings" element={<Setting />} />
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/contact" element={<Contacts></Contacts>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
