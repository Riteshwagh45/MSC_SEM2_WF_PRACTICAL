const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// In-memory storage
let recipes = [
    { id: 1, name: "Pav Bhaji", ingredients: "Potato, Tomato", instructions: "Cook and mix well" },
    { id: 2, name: "Maggi", ingredients: "Noodles, Masala", instructions: "Boil for 2 minutes" }
];

// HOME PAGE
app.get("/", (req, res) => {
    res.render("home", { recipes });
});

// RECIPE DETAILS
app.get("/recipe/:id", (req, res) => {
    const recipe = recipes.find(r => r.id == req.params.id);
    res.render("details", { recipe });
});

// ADD RECIPE
app.post("/add", (req, res) => {
    const { name, ingredients, instructions } = req.body;

    const newRecipe = {
        id: recipes.length + 1,
        name,
        ingredients,
        instructions
    };

    recipes.push(newRecipe);
    res.redirect("/");
});

// DELETE RECIPE
app.post("/delete/:id", (req, res) => {
    recipes = recipes.filter(r => r.id != req.params.id);
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
