import axios from "axios";
import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(404).send();
    }
};

const addUser = async (req: Request, res: Response) => {
    try {
        const response = await axios.post(
            `http://localhost:3001/users/addUser`,
            req.body
        );
        res.send();
    } catch (error) {
        console.log(error);
        res.status(404).send();
    }
};

export { addUser, getUser };
