import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async-handler.middleware";
import { HTTP_STATUS } from "../configs/http.config";
import {
  createNoteSchema,
  getAllNotesSchema,
  getNoteSchema,
  updateNoteSchema,
} from "../validation/note.validation";
import {
  createNoteService,
  deleteNoteService,
  getAllNotesService,
  getNoteService,
  updateNoteService,
} from "../services/note.service";

export const createNoteController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = createNoteSchema.parse(req.body);

    const note = await createNoteService(body);

    return res.status(HTTP_STATUS.CREATED).json({
      message: "Note created successfully",
      data: note,
    });
  }
);

export const getAllNotesController = asyncHandler(
  async (req: Request, res: Response) => {
    const query = getAllNotesSchema.parse(req.query);

    const notes = await getAllNotesService(query);

    return res.status(HTTP_STATUS.OK).json({
      message: "List notes fetched successfully",
      data: notes,
    });
  }
);

export const getNoteController = asyncHandler(
  async (req: Request, res: Response) => {
    const params = getNoteSchema.parse(req.params);

    const note = await getNoteService(params.id);

    return res.status(HTTP_STATUS.OK).json({
      message: "Get note successfully",
      data: note,
    });
  }
);

export const updateNoteController = asyncHandler(
  async (req: Request, res: Response) => {
    const params = getNoteSchema.parse(req.params);
    const body = updateNoteSchema.parse(req.body);

    const note = await updateNoteService(params.id, body);

    return res.status(HTTP_STATUS.OK).json({
      message: "Note updated successfully",
      data: note,
    });
  }
);

export const deleteNoteController = asyncHandler(
  async (req: Request, res: Response) => {
    const params = getNoteSchema.parse(req.params);

    const note = await deleteNoteService(params.id);

    return res.status(HTTP_STATUS.OK).json({
      message: "Note deleted successfully",
      data: note,
    });
  }
);
