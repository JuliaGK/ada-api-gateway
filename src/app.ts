import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const port = process.env.PORT;

const EVENTS_SERVICE_URL = process.env.EVENTS_SERVICE_URL;
const USERS_SERVICE_URL = process.env.USERS_SERVICE_URL;
const PARTICIPANTS_SERVICE_URL = process.env.PARTICIPANTS_SERVICE_URL;

app.use(express.json());

app.use("/users", async (req, res) => {
    try {
        const url = `${USERS_SERVICE_URL}${req.url}`;
        const method = req.method;
        const data = req.body;

        const headers = {
            Origin: "http://localhost:4000",
        };

        const response = await axios({
            headers,
            method,
            data,
            url,
        });

        res.status(response.status).send(response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            res.status(error.response?.status || 500).send(
                error.response?.data
            );
        } else {
            res.status(500).send({ message: "An unexpected error occurred" });
        }
    }
});

app.use("/events", async (req, res) => {
    try {
        const url = `${EVENTS_SERVICE_URL}${req.url}`;
        const method = req.method;
        const data = req.body;

        const headers = {
            Origin: "http://localhost:4000",
        };

        const response = await axios({
            headers,
            method,
            data,
            url,
        });

        res.status(response.status).send(response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            res.status(error.response?.status || 500).send(
                error.response?.data
            );
        } else {
            res.status(500).send({ message: "An unexpected error occurred" });
        }
    }
});

app.use("/participants", async (req, res) => {
    try {
        const url = `${PARTICIPANTS_SERVICE_URL}${req.url}`;
        const method = req.method;
        const data = req.body;

        const headers = {
            Origin: "http://localhost:4000",
        };

        const response = await axios({
            headers,
            method,
            data,
            url,
        });

        res.status(response.status).send(response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            res.status(error.response?.status || 500).send(
                error.response?.data
            );
        } else {
            res.status(500).send({ message: "An unexpected error occurred" });
        }
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
