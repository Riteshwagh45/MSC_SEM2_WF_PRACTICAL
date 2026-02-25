const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("login", { message: "" });
});


app.post("/login", (req, res) => {
    const { username, password } = req.body;

    
    if (username.length > 6) {
        return res.render("login", { 
            message: "Username must not contain more than 6 characters!" 
        });
    }

    if (!username || !password) {
        return res.render("login", { 
            message: "All fields are required!" 
        });
    }

    res.render("login", { 
        message: "Login Successful" 
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
