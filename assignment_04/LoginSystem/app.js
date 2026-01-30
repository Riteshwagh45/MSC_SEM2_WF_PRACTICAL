const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Show login page
app.get("/", (req, res) => {
  res.render("login", { error: null });
});

// Handle login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username.length > 6) {
    return res.render("login", {
      error: "Username should not contain more than 6 characters"
    });
  }

  res.send("Login Successful");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
