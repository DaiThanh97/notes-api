import { v4 as uuidv4 } from "uuid";
import { BadRequestException } from "../utils/error";
import { IListNote, INote } from "../interfaces/note.interface";
import {
  CreateNoteSchemaType,
  GetAllNotesSchemaType,
} from "../validation/note.validation";

const notes: INote[] = [];

export const createNoteService = (payload: CreateNoteSchemaType): INote => {
  const { title, description, isPinned } = payload;

  const note = notes.find((note) => note.title === title);
  if (note) {
    throw new BadRequestException("Note with this title already exists");
  }

  const newNote: INote = {
    id: uuidv4(),
    title,
    description,
    isPinned: isPinned || false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  notes.push(newNote);

  return newNote;
};

export const getAllNotesService = (
  payload: GetAllNotesSchemaType
): IListNote => {
  const { limit, skip } = payload;
  return {
    total: notes.length,
    notes: notes.slice(skip, limit),
  };
};

export const getNoteService = (id: string): INote => {
  const note = notes.find((note) => note.id === id);
  if (!note) {
    throw new BadRequestException("Note not found");
  }

  return note;
};

export const updateNoteService = (id: string, payload: any): INote => {
  const note = notes.find((note) => note.id === id);
  if (!note) {
    throw new BadRequestException("Note not found");
  }

  const { title, description, isPinned } = payload;

  note.title = title;
  note.description = description;
  note.isPinned = isPinned;
  note.updatedAt = new Date();

  return note;
};

export const deleteNoteService = (id: string): boolean => {
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) {
    throw new BadRequestException("Note not found");
  }

  notes.splice(noteIndex, 1);

  return true;
};
