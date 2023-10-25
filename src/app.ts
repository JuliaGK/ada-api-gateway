import express from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/usersRoute";
import eventsRouter from "./routes/eventsRoute";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/events", eventsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
