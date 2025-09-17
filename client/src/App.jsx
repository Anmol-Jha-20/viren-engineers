import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
