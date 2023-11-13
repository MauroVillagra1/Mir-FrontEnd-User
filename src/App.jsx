import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav_bar from "./components/common/Navbar/Nav_bar";
import Footer from "./components/common/Footer/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Anuncios from "./components/Anuncios/Anuncios";
import Noticias from "./components/Noticias/Noticias";
import Cursos from "./components/Cursos/Cursos";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav_bar></Nav_bar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/Anuncios" element={<Anuncios></Anuncios>}></Route>
          <Route exact path="/Noticias" element={<Noticias></Noticias>}></Route>
          <Route exact path="/Cursos" element={<Cursos></Cursos>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
