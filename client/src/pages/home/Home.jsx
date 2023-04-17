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
    getAllTypes,
} from "../../redux/actions";

// ======================== Components
const SelectType = ({ type, pokemons }) => {
    const count = pokemons.filter((pokemon) =>
        pokemon.types.includes(type)
    ).length;
    const typeName = type[0].toUpperCase() + type.substring(1);
    return (
        <option value={type} disabled={!Boolean(count)}>
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
            <option
                key="0"
                value="dataBase"
                disabled={!Boolean(dataBasePokemons)}
            >
                Created ({dataBasePokemons})
            </option>
            <option
                key="1"
                value="pokeApi"
                disabled={!Boolean(pokeApiPokemons)}
            >
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

    // Get All Pokemons & types
    const types = props.types;
    useEffect(() => {
        props.getAllPokemons();
        !props.types.length && props.getAllTypes();
    }, []);

    const pokemons = props.pokemons;

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
        props.filterPokemonsByType(event.target.value);
        setCurrentPage(1);
    };

    const handleFilterBySource = (event) => {
        setFilterSource(event.target.value);
        props.filterPokemonsBySource(event.target.value);
        setCurrentPage(1);
    };

    // Order
    const handleOrder = (event) => {
        setOrder(event.target.value);
        props.orderPokemons(event.target.value);
        setCurrentPage(1);
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.navBar}>
                <div className={styles.filterContainer}>
                    <span>Filters:</span>
                    <select value={filterType} onChange={handleFilterByType}>
                        <option value="allTypes">All types</option>
                        {types.map((type) => (
                            <SelectType
                                key={type.id}
                                type={type.name}
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
        types: state.types,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPokemons: () => dispatch(getAllPokemons()),
        filterPokemonsByType: (type) => dispatch(filterPokemonsByType(type)),
        filterPokemonsBySource: (source) =>
            dispatch(filterPokemonsBySource(source)),
        orderPokemons: (order) => dispatch(orderPokemons(order)),
        getAllTypes: () => dispatch(getAllTypes()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
