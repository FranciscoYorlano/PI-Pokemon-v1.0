// ======================== Styles
import styles from "./create.module.css";
import pikachu from "../../assets/pikachu.png";

// ======================== Functions
import validateCreate from "../../functions/validateCreate";

// ======================== Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ======================== Redux
import { useDispatch, useSelector } from "react-redux";

import { getAllTypes, createPokemon } from "../../redux/actions";

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
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: "",
    });

    // Get all Types
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);

    const allTypes = useSelector((state) => state.types);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setNewPokemon({ ...newPokemon, [property]: value });
        setErrors(validateCreate({ ...newPokemon, [property]: value }));
    };

    const handleCheckboxSelection = (event) => {
        const typeId = event.target.value;
        const typeName = event.target.name;

        if (event.target.checked) {
            setNewPokemon({
                ...newPokemon,
                types: [...newPokemon.types, { id: typeId, name: typeName }],
            });
            setErrors(
                validateCreate({
                    ...newPokemon,
                    types: [
                        ...newPokemon.types,
                        { id: typeId, name: typeName },
                    ],
                })
            );
        } else {
            setNewPokemon({
                ...newPokemon,
                types: newPokemon.types.filter((type) => type.id !== typeId),
            });
            setErrors(
                validateCreate({
                    ...newPokemon,
                    types: newPokemon.types.filter(
                        (type) => type.id !== typeId
                    ),
                })
            );
        }
    };

    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();

        if (!buttonDisabled) {
            const pokemonToCreate = {
                ...newPokemon,
                types: newPokemon.types.map((type) => Number(type.id)),
                life: Number(newPokemon.life),
                attack: Number(newPokemon.attack),
                defense: Number(newPokemon.defense),
                speed: Number(newPokemon.speed),
                height: Number(newPokemon.height),
                weight: Number(newPokemon.weight),
            };

            dispatch(createPokemon(pokemonToCreate));
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
    };

    const buttonDisabled =
        Object.values(errors).some((error) => error !== "") ||
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
                                    errors.name && styles.error
                                }`}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Pikachu"
                                value={newPokemon.name}
                                onChange={handleChange}
                            />
                            <span className={styles.spanError}>
                                {errors.name}
                            </span>
                        </div>
                        <div className={styles.textInput}>
                            <label htmlFor="image">Image Link:</label>
                            <input
                                className={`${styles.input} ${
                                    errors.image && styles.error
                                }`}
                                type="text"
                                id="image"
                                name="image"
                                placeholder="https://pokemon.com/pikachu.png"
                                value={newPokemon.image}
                                onChange={handleChange}
                            />
                            <span className={styles.spanError}>
                                {errors.image}
                            </span>
                        </div>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <label htmlFor="life">Life:</label>
                            <input
                                className={`${styles.input} ${
                                    errors.life && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="life"
                                name="life"
                                value={newPokemon.life}
                                onChange={handleChange}
                            />
                            <span className={styles.spanError}>
                                {errors.life}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="attack">Attack:</label>
                            <input
                                className={`${styles.input} ${
                                    errors.attack && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="attack"
                                name="attack"
                                value={newPokemon.attack}
                                onChange={handleChange}
                            />
                            <span className={styles.spanError}>
                                {errors.attack}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="defense">Defense:</label>
                            <input
                                className={`${styles.input} ${
                                    errors.defense && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="defense"
                                name="defense"
                                value={newPokemon.defense}
                                onChange={handleChange}
                            />
                            <span className={styles.spanError}>
                                {errors.defense}
                            </span>
                        </div>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <label htmlFor="speed">Speed:</label>
                            <input
                                className={`${styles.input} ${
                                    errors.speed && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="speed"
                                name="speed"
                                value={newPokemon.speed}
                                onChange={handleChange}
                            />
                            <span className={styles.spanError}>
                                {errors.speed}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="height">Height:</label>
                            <input
                                className={`${styles.input} ${
                                    errors.height && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="height"
                                name="height"
                                value={newPokemon.height}
                                onChange={handleChange}
                            />
                            <span className={styles.spanError}>
                                {errors.height}
                            </span>
                        </div>
                        <div className={styles.stat}>
                            <label htmlFor="weight">Weight:</label>
                            <input
                                className={`${styles.input} ${
                                    errors.weight && styles.error
                                } ${styles.statInput}`}
                                type="number"
                                id="weight"
                                name="weight"
                                value={newPokemon.weight}
                                onChange={handleChange}
                            />
                            <span className={styles.spanError}>
                                {errors.weight}
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
                                                onChange={
                                                    handleCheckboxSelection
                                                }
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
                    <span className={styles.spanError}>{errors.types}</span>

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
                        (newPokemon.image.slice(-3) === "jpg" && !errors.image)
                            ? newPokemon.image
                            : pikachu
                    }
                    alt="Create Pokemon"
                />
                <div className={styles.info}>
                    <h2>
                        {newPokemon.name.length && !errors.name
                            ? newPokemon.name.replace(/\s(?=\w)/g, "")
                            : "Your pokemon"}
                    </h2>
                </div>
                {newPokemon.types.length && !errors.types ? (
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
