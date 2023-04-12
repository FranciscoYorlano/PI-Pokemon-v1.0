// Controllers

// ======================== Handlers

const getAllTypesHandler = (req, res) => {
    // -> array de types
    res.json({ handler: "getAllTypesHandler" });
};

module.exports = { getAllTypesHandler };
