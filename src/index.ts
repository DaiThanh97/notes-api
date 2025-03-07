import "dotenv/config";
import express from "express";

import { config } from "./configs/app.config";
import { errorHandler } from "./middlewares/error-handler.middleware";
import noteRoutes from "./routes/note.route";

const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${BASE_PATH}/notes`, noteRoutes);

app.use(errorHandler);

app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
});
