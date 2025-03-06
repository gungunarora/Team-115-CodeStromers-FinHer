import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Calculate from "./pages/Calculate";
import PrivateRoute from "./pages/PrivateRoute"; // Make sure this path is correct
// import ProfilePage from "./pages/Profile";
// import BudgetTracker from "./pages/Tracker";



function App() {


  return (
    <div className="App">
      {console.log("App Component Loaded")}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
          <Route path="/calculate" element={<Calculate />} />


          



        </Routes>
      </Router>
      



    </div>
  );
}

function LandingPage() {
  console.log("LandingPage Component Mounted");

  useEffect(() => {
    console.log("Redirecting to /landing.html");
    window.location.replace("/landing.html");
  }, []);

  return <h1>Redirecting...</h1>;
}

export default App;
