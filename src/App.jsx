import Header from "./component/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import ResturantMenu from "./component/ResturantMenu";
import ErrorPage from "./component/ErrorPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/resturants/:id" element={<ResturantMenu />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
