import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import Biker from "./pages/Biker";
import PendingParcels from "./pages/PendingParcels";
import Error from "./pages/Error";
import CreateParcel from "./pages/CreateParcel";
import SingleParcel from "./pages/SingleParcel";

// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<User />} />
          <Route path="/create-parcel" element={<CreateParcel />} />
          <Route path="/biker" element={<Biker />} />
          <Route path="/all-parcels" element={<PendingParcels />} />
          <Route path="/single-parcel/:id" element={<SingleParcel />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
