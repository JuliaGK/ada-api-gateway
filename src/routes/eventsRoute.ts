import { Router } from "express";
import { addEvent, getEvent } from "../controllers/eventsController";

// 3002

const eventsRouter = Router();

eventsRouter.get("/:id", getEvent);

eventsRouter.post("/addEvent", addEvent);

export default eventsRouter;
