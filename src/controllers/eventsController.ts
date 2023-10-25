import axios from "axios";
import { Request, Response } from "express";

const getEvent = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`http://localhost:3002/events/${id}`);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(404).send();
    }
};

const addEvent = async (req: Request, res: Response) => {
    try {
        const response = await axios.post(
            `http://localhost:3002/events/addEvent`,
            req.body
        );
        res.send();
    } catch (error) {
        console.log(error);
        res.status(404).send();
    }
};

export { getEvent, addEvent };
