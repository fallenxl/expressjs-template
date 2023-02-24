const express = require("express");
const morgan = require("morgan");
const path = require("path");
const indexRoutes = require("./src/routes/index.routes");

/*
 * Initializations
 */
const app = express();
const PORT = process.env.PORT || 4000;

/*
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))


/*
 * Frontend 
 */
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

/*
 * Routes
 */
app.use('/api', indexRoutes)


/*
 * Listener
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
