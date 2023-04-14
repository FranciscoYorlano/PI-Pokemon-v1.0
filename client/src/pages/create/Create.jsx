// ======================== Styles
import styles from "./create.module.css";
import pikachu from "../../assets/pikachu.png";

const Create = () => {
    return (
        <div className={styles.createContainer}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Catch Your Dream Pokemon!</h1>
                <p className={styles.description}>
                    Let your imagination run wild as you design your dream
                    Pokemon.
                </p>
                <form action="">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="image">Image Link:</label>
                    <input type="text" id="image" name="image" />

                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <label htmlFor="life">Life:</label>
                            <input type="number" id="life" name="life" />
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="attack">Attack:</label>
                            <input type="number" id="attack" name="attack" />
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="defense">Defense:</label>
                            <input type="number" id="defense" name="defense" />
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="speed">Speed:</label>
                            <input type="number" id="speed" name="speed" />
                        </div>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <label htmlFor="height">Height:</label>
                            <input type="number" id="height" name="height" />
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="weight">Weight:</label>
                            <input type="number" id="weight" name="weight" />
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="types">Types:</label>
                            <select id="types" name="types" multiple>
                                <option value="1">Type 1</option>
                                <option value="2">Type 2</option>
                                <option value="3">Type 3</option>
                                <option value="4">Type 4</option>
                                <option value="5">Type 5</option>
                                <option value="6">Type 6</option>
                                <option value="7">Type 7</option>
                                <option value="8">Type 8</option>
                                <option value="9">Type 9</option>
                                <option value="10">Type 10</option>
                                <option value="11">Type 11</option>
                                <option value="12">Type 12</option>
                                <option value="13">Type 13</option>
                                <option value="14">Type 14</option>
                                <option value="15">Type 15</option>
                                <option value="16">Type 16</option>
                                <option value="17">Type 17</option>
                                <option value="18">Type 18</option>
                                <option value="19">Type 19</option>
                                <option value="20">Type 20</option>
                            </select>
                        </div>
                    </div>

                    <button className={styles.button}>Submit</button>
                </form>
            </div>
            <div className={styles.imageContainer}>
                <img src={pikachu} alt="Create Pokemon" />
            </div>
        </div>
    );
};

export default Create;
