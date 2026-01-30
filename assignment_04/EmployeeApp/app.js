const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Show form page
app.get("/", (req, res) => {
  res.render("form");
});

// Handle POST request
app.post("/submit", (req, res) => {
  const { name, email, department, salary } = req.body;

  res.render("result", {
    name,
    email,
    department,
    salary
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
