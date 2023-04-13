// ======================== React Router
import { Route, Routes } from "react-router-dom";

// ======================== Components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

// ======================== Pages
import Create from "./pages/create/Create";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";

// ======================== Styles

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/create" element={<Create />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
