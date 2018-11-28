import express from "express";
import path from "path";
const app = express();

app.get("/api/*", (req, res) => res.json({ msg: "This is a message." }));

// Set static folder
app.use(express.static(path.resolve(__dirname, "..", "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
});

// Get port to run on
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
