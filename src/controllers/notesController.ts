import { Request, Response } from "express";

import * as notesServices from "../services/notesServices";

export async function createNote(req: Request, res: Response) {
    const { userId } = res.locals;
    const { title, text } = req.body;

    await notesServices.createNote({ userId, title, text });
    
    res.status(201).send("Successfully created the note!");
}

export async function  getUserNotes(req: Request, res: Response) {
    const userId = Number(res.locals.userId);

    const allUserNotes = await notesServices.getUserNotes(userId);

    res.status(200).send(allUserNotes);
}

export async function getNoteById(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);
    const noteId: number = Number(req.params.id);

    res.status(200).send();
}

export async function deleteNote(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);
    const NoteId: number = Number(req.params.id);

    res.status(200).send("Successfully deleted the note!");
}