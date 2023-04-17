// ======================== Styles
import styles from "./home.module.css";

// ======================== Components
import Card from "../../components/card/Card";

// ======================== Hooks
import { useState, useEffect } from "react";

// ======================== Redux
import { connect } from "react-redux";

import {
    getAllPokemons,
    filterPokemonsByType,
    filterPokemonsBySource,
    orderPokemons,
    setPokemons,
} from "../../redux/actions";

// ======================== Functions
const getUniqueTypes = (pokemons) => {
    const typesForFilters = new Set();
    pokemons.forEach((pokemon) => {
        pokemon.types.forEach((type) => {
            typesForFilters.add(type);
        });
    });
    return typesForFilters;
};

// ======================== Components
const SelectType = ({ type, pokemons }) => {
    const count = pokemons.filter((pokemon) =>
        pokemon.types.includes(type)
    ).length;
    const typeName = type[0].toUpperCase() + type.substring(1);
    return (
        <option value={type}>
            {typeName} ({count})
        </option>
    );
};

const SelectSource = ({ pokemons }) => {
    const dataBasePokemons = pokemons.filter(
        (pokemon) => isNaN(pokemon.id) === true
    ).length;
    const pokeApiPokemons = pokemons.filter(
        (pokemon) => isNaN(pokemon.id) === false
    ).length;
    return (
        <>
            <option key="0" value="dataBase">
                Created ({dataBasePokemons})
            </option>
            <option key="1" value="pokeApi">
                Originals ({pokeApiPokemons})
            </option>
        </>
    );
};

const Home = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const [filterType, setFilterType] = useState("allTypes");
    const [filterSource, setFilterSource] = useState("allSources");
    const [order, setOrder] = useState("default");

    // Get All Pokemons
    useEffect(() => {
        props.getAllPokemons();
    }, [props]);

    const pokemons = props.pokemons;
    const types = getUniqueTypes(pokemons);

    // Paginated
    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const paginatedPokemons = pokemons.slice(
        (currentPage - 1) * pokemonsPerPage,
        currentPage * pokemonsPerPage
    );
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    // Filters
    const handleFilterByType = (event) => {
        setFilterType(event.target.value);
        if (event.target.value === "allTypes") {
            props.setPokemons();
        }
        props.filterPokemonsByType(event.target.value);
    };

    const handleFilterBySource = (event) => {
        setFilterSource(event.target.value);
        if (event.target.value === "allSources") {
            props.setPokemons();
        }
        props.filterPokemonsBySource(event.target.value);
    };

    // Order
    const handleOrder = (event) => {
        if (event.target.value === "defaul") {
            props.setPokemons();
        }
        setOrder(event.target.value);
        props.orderPokemons(event.target.value);
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.navBar}>
                <div className={styles.filterContainer}>
                    <span>Filters:</span>
                    <select value={filterType} onChange={handleFilterByType}>
                        <option value="allTypes">All types</option>
                        {Array.from(types).map((type) => (
                            <SelectType
                                key={type}
                                type={type}
                                pokemons={pokemons}
                            />
                        ))}
                    </select>
                    <select
                        value={filterSource}
                        onChange={handleFilterBySource}
                    >
                        <option value="allSources">All sources</option>
                        <SelectSource pokemons={pokemons} />
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
                    <select value={order} onChange={handleOrder}>
                        <option value="defaul">Default</option>
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
                    <span className={styles.loader}></span>
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

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPokemons: () => dispatch(getAllPokemons()),
        filterPokemonsByType: (type) => dispatch(filterPokemonsByType(type)),
        filterPokemonsBySource: (source) =>
            dispatch(filterPokemonsBySource(source)),
        orderPokemons: (order) => dispatch(orderPokemons(order)),
        setPokemons: () => dispatch(setPokemons()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
