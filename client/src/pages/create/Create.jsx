// ======================== Styles
import styles from "./create.module.css";
import pikachu from "../../assets/pikachu.png";

// ======================== Validators
import { validateCreate, validateTypes } from "../../functions/validateCreate";

// ======================== Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ======================== Redux
import { useDispatch, useSelector } from "react-redux";
import {
    getAllTypes,
    createPokemon,
    setGlobalSuccess,
} from "../../redux/actions";

const Create = () => {
    const [newPokemon, setNewPokemon] = useState({
        name: "",
        image: "",
        life: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
    });
    const [errorName, setErrorName] = useState("");
    const [errorImage, setErrorImage] = useState("");
    const [errorLife, setErrorLife] = useState("");
    const [errorAttack, setErrorAttack] = useState("");
    const [errorDefense, setErrorDefense] = useState("");
    const [errorSpeed, setErrorSpeed] = useState("");
    const [errorHeight, setErrorHeight] = useState("");
    const [errorWeight, setErrorWeight] = useState("");
    const [errorTypes, setErrorTypes] = useState("");

    const errorObj = {
        errorName,
        errorImage,
        errorLife,
        errorAttack,
        errorDefense,
        errorSpeed,
        errorHeight,
        errorWeight,
        errorTypes,
    };

    const globalError = useSelector((state) => state.globalError);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get all Types
    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);
    const allTypes = useSelector((state) => state.types);

    // Handlers
    const handleNameChange = (event) => {
        setNewPokemon({ ...newPokemon, name: event.target.value });
        setErrorName(validateCreate({ name: event.target.value }).name);
    };

    const handleImageChange = (event) => {
        setNewPokemon({ ...newPokemon, image: event.target.value });
        setErrorImage(validateCreate({ image: event.target.value }).image);
    };

    const handleLifeChange = (event) => {
        setNewPokemon({ ...newPokemon, life: event.target.value });
        setErrorLife(validateCreate({ life: event.target.value }).life);
    };

    const handleAttackChange = (event) => {
        setNewPokemon({ ...newPokemon, attack: event.target.value });
        setErrorAttack(validateCreate({ attack: event.target.value }).attack);
    };

    const handleDefenseChange = (event) => {
        setNewPokemon({ ...newPokemon, defense: event.target.value });
        setErrorDefense(
            validateCreate({ defense: event.target.value }).defense
        );
    };

    const handleSpeedChange = (event) => {
        setNewPokemon({ ...newPokemon, speed: event.target.value });
        setErrorSpeed(validateCreate({ speed: event.target.value }).speed);
    };

    const handleHeightChange = (event) => {
        setNewPokemon({ ...newPokemon, height: event.target.value });
        setErrorHeight(validateCreate({ height: event.target.value }).height);
    };

    const handleWeightChange = (event) => {
        setNewPokemon({ ...newPokemon, weight: event.target.value });
        setErrorWeight(validateCreate({ weight: event.target.value }).weight);
    };

    const handleTypesChange = (event) => {
        const typeId = event.target.value;
        const typeName = event.target.name;

        if (event.target.checked) {
            setNewPokemon({
                ...newPokemon,
                types: [...newPokemon.types, { id: typeId, name: typeName }],
            });
            setErrorTypes(
                validateTypes([
                    ...newPokemon.types,
                    { id: typeId, name: typeName },
                ])
            );
        } else {
            setNewPokemon({
                ...newPokemon,
                types: newPokemon.types.filter((type) => type.id !== typeId),
            });
            setErrorTypes(
                validateTypes(
                    newPokemon.types.filter((type) => type.id !== typeId)
                )
            );
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!buttonDisabled) {
            setErrorImage(validateCreate({ image: newPokemon.image }).image);

            setErrorLife(validateCreate({ life: newPokemon.life }).life);

            setErrorAttack(
                validateCreate({ attack: newPokemon.attack }).attack
            );

            setErrorDefense(
                validateCreate({ defense: newPokemon.defense }).defense
            );

            setErrorTypes(validateTypes(newPokemon.types));

            if (!Object.values(errorObj).some((error) => error !== "")) {
                const pokemonToCreate = {
                    ...newPokemon,
                    types: newPokemon.types.map((type) => Number(type.id)),
                };

                dispatch(createPokemon(pokemonToCreate));
                if (!globalError) {
                    dispatch(
                        setGlobalSuccess("New pokemon successfully created.")
                    );
                }
                setNewPokemon({
                    name: "",
                    image: "",
                    life: 0,
                    attack: 0,
                    defense: 0,
                    speed: 0,
                    height: 0,
                    weight: 0,
                    types: [],
                });
                navigate("/home");
            }
        }
    };

    const buttonDisabled =
        Object.values(errorObj).some((error) => error !== "") ||
        newPokemon.name === "";
    return (
        <div className={styles.createContainer}>
            <div className={styles.formContainer}>
                <form onSubmit={submitHandler}>
                    <div className={styles.row}>
                        <div className={styles.textInput}>
                            <label htmlFor="name">Name:</label>
                            <input
                                className={`${styles.input} ${
                                    errorName && styles.error
                                }`}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Pikachu"
                                value={newPokemon.name}
                                onChange={handleNameChange}
                            />
                            <span className={styles.spanError}>
                                {errorName}
                            </span>
                        </div>
                        <div className={styles.textInput}>
                            <label htmlFor="image">Image Link:</label>
                            <input
                                className={`${styles.input} ${
                                    errorImage && styles.error
                                }`}
                                type="text"
                                id="image"
                                name="image"
                                placeholder="https://pokemon.com/pikachu.png"
                                value={newPokemon.image}
                                onChange={handleImageChange}
                            />
                            <span className={styles.spanError}>
                                {errorImage}
                            </span>
                        </div>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <label htmlFor="life">Life:</label>
                            <input
                                className={`${styles.input} ${
                                    errorLife && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="life"
                                name="life"
                                value={newPokemon.life}
                                onChange={handleLifeChange}
                            />
                            <span className={styles.spanError}>
                                {errorLife}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="attack">Attack:</label>
                            <input
                                className={`${styles.input} ${
                                    errorAttack && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="attack"
                                name="attack"
                                value={newPokemon.attack}
                                onChange={handleAttackChange}
                            />
                            <span className={styles.spanError}>
                                {errorAttack}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="defense">Defense:</label>
                            <input
                                className={`${styles.input} ${
                                    errorDefense && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="defense"
                                name="defense"
                                value={newPokemon.defense}
                                onChange={handleDefenseChange}
                            />
                            <span className={styles.spanError}>
                                {errorDefense}
                            </span>
                        </div>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <label htmlFor="speed">Speed:</label>
                            <input
                                className={`${styles.input} ${
                                    errorSpeed && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="speed"
                                name="speed"
                                value={newPokemon.speed}
                                onChange={handleSpeedChange}
                            />
                            <span className={styles.spanError}>
                                {errorSpeed}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="height">Height:</label>
                            <input
                                className={`${styles.input} ${
                                    errorHeight && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="height"
                                name="height"
                                value={newPokemon.height}
                                onChange={handleHeightChange}
                            />
                            <span className={styles.spanError}>
                                {errorHeight}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="weight">Weight:</label>
                            <input
                                className={`${styles.input} ${
                                    errorWeight && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="weight"
                                name="weight"
                                value={newPokemon.weight}
                                onChange={handleWeightChange}
                            />
                            <span className={styles.spanError}>
                                {errorWeight}
                            </span>
                        </div>
                    </div>
                    {allTypes.length ? (
                        <div className={styles.typesSelectors}>
                            {allTypes.length &&
                                allTypes.map((type) => (
                                    <div
                                        className={styles.typeSelector}
                                        key={type.id}
                                    >
                                        <label>
                                            <input
                                                type="checkbox"
                                                id={type.id}
                                                value={type.id}
                                                name={type.name}
                                                onChange={handleTypesChange}
                                            />
                                            {type.name}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <div className={styles.loadingContainer}>
                            <span class={styles.loader}></span>
                        </div>
                    )}
                    <span className={styles.spanError}>{errorTypes}</span>

                    <button
                        disabled={buttonDisabled}
                        className={styles.buttonSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className={styles.previewContainer}>
                <h1 className={styles.title}>Catch Your Dream Pokemon!</h1>
                <p className={styles.description}>
                    Let your imagination run wild as you design your dream
                    Pokemon.
                </p>

                <img
                    src={
                        newPokemon.image.slice(-3) === "png" ||
                        (newPokemon.image.slice(-3) === "jpg" && !errorImage)
                            ? newPokemon.image
                            : pikachu
                    }
                    alt="Create Pokemon"
                />
                <div className={styles.info}>
                    <h2>
                        {newPokemon.name.length && !errorName
                            ? newPokemon.name.replace(/\s(?=\w)/g, "")
                            : "Your pokemon"}
                    </h2>
                </div>
                {newPokemon.types.length && !errorTypes ? (
                    <div className={styles.types}>
                        {newPokemon.types.map((type) => (
                            <span
                                key={type.id}
                                className={`${styles.type} ${
                                    styles[`${type.name}`]
                                }`}
                            >
                                {type.name}
                            </span>
                        ))}
                    </div>
                ) : (
                    <div className={styles.types}></div>
                )}

                <p className={styles.previewText}>(Preview)</p>
            </div>
        </div>
    );
};

export default Create;
