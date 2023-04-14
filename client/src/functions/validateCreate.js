const validateCreate = (newPokemon) => {
    const { name, image, life, attack, defense, speed, height, weight, types } =
        newPokemon;

    const errors = {
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: "",
    };

    const REGEX_URL =
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    if (!name) {
        errors.name = "Pokemon name is required.";
    }

    if (name.length > 20) {
        errors.name = "Pokemon name should not be longer than 20 characters.";
    }

    if (!REGEX_URL.test(image)) {
        errors.image = "Pokemon image url is invalid.";
    }

    if (!image) {
        errors.image = "Pokemon image is required.";
    }

    if (!life) errors.life = "Pokemon life is required.";

    if (!attack) errors.attack = "Pokemon attack is required.";

    if (!defense) errors.defense = "Pokemon defense is required.";

    if (life && life < 0)
        errors.life = "Pokemon life must be greater or equal to zero";

    if (attack & (attack < 0))
        errors.attack = "Pokemon attack must be greater or equal to zero";

    if (defense && defense < 0)
        errors.defense = "Pokemon defense must be greater or equal to zero";

    if (speed && speed < 0)
        errors.speed = "Pokemon speed must be greater or equal to zero";

    if (height && height < 0)
        errors.height = "Pokemon height must be greater or equal to zero";

    if (weight && weight < 0)
        errors.weight = "Pokemon weight must be greater or equal to zero";

    if (types.length > 5)
        errors.types = "Pokemon must not have more than 5 types.";

    return errors;
};

export default validateCreate;
