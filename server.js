import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

// Starting server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
