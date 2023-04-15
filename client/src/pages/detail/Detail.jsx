// ======================== Styles
import styles from "./detail.module.css";

const pokemon = {
    id: "e48a4061-21de-406b-af63-877a17d46f43",
    name: "nidoking",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    life: 81,
    attack: 102,
    defense: 77,
    speed: 0,
    height: 0,
    weight: 620,
    types: ["poison", "ground"],
};

const Detail = () => {
    const nameU = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
    return (
        <div className={styles.detailContainer}>
            <div className={styles.leftContainer}>
                <h1 className={styles.title}>{nameU}</h1>
                <p className={styles.description}>
                    Explore {nameU}'s stats, abilities (soon), and unique
                    characteristics. Discover everything you need to train and
                    add this exciting Pokémon to your team. Don't miss a single
                    detail!
                </p>

                <div className={styles.row}>
                    <p className={styles.label}>ID:</p>
                    <p className={styles.id}>{pokemon.id}</p>
                </div>
                <div className={styles.row}>
                    <p className={styles.label}>Life:</p>
                    <div class={styles.progressBar}>
                        <div
                            class={styles.progress}
                            style={{
                                width: `${
                                    pokemon.life > 100 ? 100 : pokemon.life
                                }%`,
                            }}
                        >
                            <div class={styles.progressValue}>
                                {pokemon.life}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <p className={styles.label}>Attack:</p>

                    <div class={styles.progressBar}>
                        <div
                            class={styles.progress}
                            style={{
                                width: `${
                                    pokemon.attack > 100 ? 100 : pokemon.attack
                                }%`,
                            }}
                        >
                            <div class={styles.progressValue}>
                                {pokemon.attack}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <p className={styles.label}>Defense:</p>

                    <div class={styles.progressBar}>
                        <div
                            class={styles.progress}
                            style={{
                                width: `${
                                    pokemon.defense > 100
                                        ? 100
                                        : pokemon.defense
                                }%`,
                            }}
                        >
                            <div class={styles.progressValue}>
                                {pokemon.defense}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <p className={styles.label}>Speed:</p>

                    <div class={styles.progressBar}>
                        {pokemon.speed ? (
                            <div
                                class={styles.progress}
                                style={{
                                    width: `${
                                        pokemon.speed > 100
                                            ? 100
                                            : pokemon.speed
                                    }%`,
                                }}
                            >
                                {" "}
                                <div class={styles.progressValue}>
                                    {pokemon.speed}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.progressValueBlack}>
                                UNKNOWN
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.rowStats}>
                    <div className={styles.colStats}>
                        Height:{" "}
                        {pokemon.height ? `${pokemon.height}dm` : "UNKNOWN"}
                    </div>
                    <div className={styles.colStats}>
                        Weight:{" "}
                        {pokemon.weight ? `${pokemon.weight}hg` : "UNKNOWN"}
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img src={pokemon.image} alt={pokemon.name} />

                <div className={styles.types}>
                    {pokemon.types.map((type, index) => (
                        <span
                            key={index}
                            className={`${styles.type} ${styles[`${type}`]}`}
                        >
                            {type}
                        </span>
                    ))}
                </div>
                <p className={styles.typesLabel}>{nameU} types</p>
            </div>
        </div>
    );
};

export default Detail;
