// ======================== Styles
import styles from "./alert.module.css";

// ======================== Hooks
import { useState } from "react";

// ======================== Hooks
import { connect } from "react-redux";
import { removeGlobalError } from "../../redux/actions";

// ======================== Link
import { Link } from "react-router-dom";

const Alert = (props) => {
    const { globalError, removeGlobalError } = props;

    const [error, setError] = useState(globalError);

    const handleCloseAlert = () => {
        removeGlobalError();
        setError("");
    };

    return (
        <div className={styles.alertWrapper}>
            <div className={styles.alertContainer}>
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={handleCloseAlert}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <p>{error}</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeGlobalError: () => dispatch(removeGlobalError()),
    };
};

export default connect(null, mapDispatchToProps)(Alert);
