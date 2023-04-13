// ======================== Styles
import styles from "./header.module.css";
import logo from "../../assets/logo.png";

// ======================== React Router
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className={styles.navLinks}>
                <Link to="/home">Home</Link>
                <Link to="/create">Create</Link>
            </div>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Pokemon name or id"
                    className={styles.input}
                    name="search"
                    value=""
                />
                <button className={styles.button}>Search</button>
            </div>
        </div>
    );
};

export default Header;
