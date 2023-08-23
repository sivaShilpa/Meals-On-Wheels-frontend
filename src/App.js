import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
