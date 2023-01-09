import "./sass/App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home.js";
import Avisdepassage from "./components/Formulaire/avisdepassage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="avisdepassage" element={<Avisdepassage />} />
      {/* <Route path="listdesavisdepassage" element={<Listavisdepassage />} /> */}
    </Routes>
  );
}

export default function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
