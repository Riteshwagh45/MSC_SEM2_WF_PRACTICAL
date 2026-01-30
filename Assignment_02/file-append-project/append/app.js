const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h2>Append File Practical</h2>
        <form action="/append" method="post">
            First File: <input name="file1" required><br><br>
            Second File: <input name="file2" required><br><br>
            <button>Append & Delete</button>
        </form>
    `);
});

app.post("/append", (req, res) => {
    const { file1, file2 } = req.body;

    fs.readFile(file1, "utf8", (err, data) => {
        if (err) return res.send("First file not found!");

        fs.appendFile(file2, "\n" + data, (err) => {
            if (err) return res.send("Cannot write to second file!");

            fs.unlink(file1, (err) => {
                if (err) return res.send("Cannot delete first file!");
                res.send("Success! Appended and deleted first file.");
            });
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
