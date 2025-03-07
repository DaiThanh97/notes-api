import { Router } from "express";
import {
  createNoteController,
  deleteNoteController,
  getAllNotesController,
  getNoteController,
  updateNoteController,
} from "../controllers/note.controller";

const noteRoutes = Router();

noteRoutes.post("/", createNoteController);
noteRoutes.get("/", getAllNotesController);
noteRoutes.get("/:id", getNoteController);
noteRoutes.put("/:id", updateNoteController);
noteRoutes.delete("/:id", deleteNoteController);

export default noteRoutes;
