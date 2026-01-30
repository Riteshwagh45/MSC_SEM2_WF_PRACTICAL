const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Download route
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "sample.txt");

  res.download(filePath, "MyFile.txt", (err) => {
    if (err) {
      console.error("File download error:", err);
      res.status(404).send(" File not found or error occurred.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
