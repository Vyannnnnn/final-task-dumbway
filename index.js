import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Debug paths
console.log("__dirname:", __dirname);
console.log("node_modules exists:", fs.existsSync(path.join(__dirname, "node_modules")));
console.log("src/assets exists:", fs.existsSync(path.join(__dirname, "src/assets")));

// Static files
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "src/assets")));

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: false,
    partialsDir: path.join(__dirname, "src/views/partials"),
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// Route
app.get("/", (req, res) => {
  res.render("index", { title: "My Portfolio" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
