import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Menu from "./pages/Menu";
import Form from "./pages/SignUpForm";

function App() {
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/HowItWorks" element={<HowItWorks />} />
        <Route exact path="/Menu" element={<Menu URL={URL} />} />
        <Route exact path="/SignUp" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
