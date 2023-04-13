// ======================== Styles
import styles from "./home.module.css";

// ======================== Components
import Card from "../../components/card/Card";

const Home = () => {
    return (
        <div>
            <div>Navbar</div>
            <div className="cardsContainer">
                <Card />
            </div>
        </div>
    );
};

export default Home;
