import express from "express";
import router from "./routes/api.js";

const PORT = 8989;

const app = express();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
