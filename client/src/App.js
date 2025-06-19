import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AddPet from "./pages/AddPet";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
