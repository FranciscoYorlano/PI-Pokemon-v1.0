// ======================== Styles
import styles from "./home.module.css";

// ======================== Components
import Card from "../../components/card/Card";

// ======================== Hooks
import { useState, useEffect } from "react";

// ======================== Redux
import { useDispatch, useSelector } from "react-redux";

import { getAllPokemons } from "../../redux/actions";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);

    // Get All Pokemons
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemons());
    }, []);

    const pokemons = useSelector((state) => state.pokemons);

    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const paginatedPokemons = pokemons.slice(
        (currentPage - 1) * pokemonsPerPage,
        currentPage * pokemonsPerPage
    );

    return (
        <div className={styles.homeContainer}>
            <div className={styles.navBar}>
                <div className={styles.filterContainer}>
                    <span>Filters:</span>
                    <select>
                        <option selected>All types</option>
                        <option value="normal">normal Q</option>
                        <option value="fighting">fighting</option>
                        <option value="poison">poison</option>
                        <option value="electric">electric</option>
                    </select>
                    <select>
                        <option selected>All sources</option>
                        <option value="created">Created</option>
                        <option value="PokeAPI">PokeAPI</option>
                    </select>
                </div>
                <div className={styles.pagesContainer}>
                    {pages.map((page) => (
                        <button
                            id={page}
                            key={page}
                            onClick={handlePageChange}
                            disabled={page === currentPage}
                            className={styles.button}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <div className={styles.sortContainer}>
                    <span>Sort: </span>
                    <select>
                        <option value="alphabeticalAsc">
                            Alphabetical (A-Z)
                        </option>
                        <option value="alphabeticalDesc">
                            Alphabetical (Z-A)
                        </option>
                        <option value="attackAsc">Attack (low to high)</option>
                        <option value="attackDesc">Attack (high to low)</option>
                    </select>
                </div>
            </div>
            {pokemons.length ? (
                <div className={styles.cardsContainer}>
                    {paginatedPokemons.map((pokemon) => (
                        <div key={pokemon.id}>
                            <Card pokemon={pokemon} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.loadingContainer}>
                    <span class={styles.loader}></span>
                </div>
            )}
            <div className={styles.navBarMobile}>
                <div className={styles.pagesContainerMobile}>
                    {pages.map((page) => (
                        <button
                            id={page}
                            key={page}
                            onClick={handlePageChange}
                            className={styles.button}
                            disabled={page === currentPage}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
