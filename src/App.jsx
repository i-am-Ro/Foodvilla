import Header from "./component/Header";
import Title from "./component/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import ResturantMenu from "./component/ResturantMenu";
import ErrorPage from "./component/ErrorPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <Title />
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resturants/:id" element={<ResturantMenu />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
