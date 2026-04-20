import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static("node_modules"));
app.use(express.static("src/assets"));

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

// route
app.get("/", (req, res) => {
  res.render("index", { title: "My Portfolio" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
