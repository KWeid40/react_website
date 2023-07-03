import path from "path";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const publicPath = path.join(__dirname, "..", "dist");
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

app.get("*", (res, req) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => console.log(`App listening at port: ${port}`));
