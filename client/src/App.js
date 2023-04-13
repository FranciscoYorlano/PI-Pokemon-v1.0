// ======================== React Router
import { Route, Routes } from "react-router-dom/cjs/react-router-dom.min";

// ======================== Components
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

// ======================== Pages
import Create from "./pages/create/Create";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";

// ======================== Styles
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </>
    );
}

export default App;
