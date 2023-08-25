import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Menu from "./pages/Menu";

function App() {
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/HowItWorks" element={<HowItWorks URL={URL} />} />
        <Route path="/Menu" element={<Menu URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
