import "./App.css";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/home" element={<Dashboard/>}></Route>
      </Routes>
  );
}

export default App;
