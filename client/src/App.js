// ======================== React Router
import { Route, Routes, useLocation } from "react-router-dom";

// ======================== Components
import Alert from "./components/alert/Alert";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

// ======================== Pages
import Create from "./pages/create/Create";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import NotFound from "./pages/notFound/NotFound";

// ======================== React Redux
import { connect } from "react-redux";

function App(props) {
    const { globalError } = props;

    return (
        <>
            {useLocation().pathname !== "/" && <Header />}
            {globalError && <Alert globalError={globalError} />}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/create" element={<Create />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        globalError: state.globalError,
    };
};

export default connect(mapStateToProps, null)(App);
