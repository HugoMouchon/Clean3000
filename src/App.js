import "./sass/App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home.js";
// import ProjectN1 from "./components/ProjetN°1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="titre-projet1" element={<ProjectN1 />} /> */}
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
