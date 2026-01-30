const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// In-memory recipe storage
let recipes = [
  {
    id: 1,
    name: "Pav Bhaji",
    ingredients: "Potato, Tomato, Butter",
    instructions: "Boil vegetables, mash them and cook with spices."
  },
  {
    id: 2,
    name: "Maggi",
    ingredients: "Maggi noodles, Masala, Water",
    instructions: "Boil water, add noodles and masala, cook for 2 minutes."
  }
];

// Home Page
app.get("/", (req, res) => {
  res.render("home", { recipes });
});

// Recipe Details Page
app.get("/recipe/:id", (req, res) => {
  const recipe = recipes.find(r => r.id == req.params.id);
  res.render("details", { recipe });
});

// Add Recipe
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

// Delete Recipe
app.post("/delete/:id", (req, res) => {
  recipes = recipes.filter(r => r.id != req.params.id);
  res.redirect("/");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
