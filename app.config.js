module.exports = () => {
    if (process.env.APP_ENV === "prueba") {
        return require("./app.json");
    }
    if (process.env.APP_ENV === "demo") {
        return require("./app.json");
    }
};