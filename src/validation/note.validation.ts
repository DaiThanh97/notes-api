import { z } from "zod";

export const titleSchema = z.string().trim().min(1).max(255);
export const descriptionSchema = z.string().trim().optional();

export const createNoteSchema = z.object({
  title: titleSchema,
  description: descriptionSchema,
  isPinned: z.boolean().optional(),
});

export const updateNoteSchema = z.object({
  title: titleSchema.optional(),
  description: descriptionSchema,
  isPinned: z.boolean().optional(),
});

export const getAllNotesSchema = z.object({
  limit: z.preprocess((val) => Number(val), z.number().int().optional()),
  skip: z.preprocess((val) => Number(val), z.number().int().default(0)),
});

export const getNoteSchema = z.object({
  id: z.string(),
});

export type CreateNoteSchemaType = z.infer<typeof createNoteSchema>;
export type UpdateNoteSchemaType = z.infer<typeof updateNoteSchema>;
export type GetAllNotesSchemaType = z.infer<typeof getAllNotesSchema>;
export type GetNoteSchemaType = z.infer<typeof getNoteSchema>;
