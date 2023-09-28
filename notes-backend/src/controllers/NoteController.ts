// src/controllers/NoteController.ts
import { Request, Response } from 'express';
import { appDataSource } from '../app';
import { Note } from '../entities/Note';

export const getNotes = async (_: Request, res: Response) => {
    const noteRepository = appDataSource.getRepository(Note);
    const notes = await noteRepository.find();
    res.json(notes);
};

export const getNoteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const noteRepository = appDataSource.getRepository(Note);
    const note = await noteRepository.findOneOrFail({ where: { id: Number(id) } });
    res.json(note);
};

export const createNote = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const noteRepository = appDataSource.getRepository(Note);
    const newNote = noteRepository.create({ name, description });
    await noteRepository.save(newNote);
    res.json(newNote);
};

export const updateNote = async (req: Request, res: Response) => {
    const { id, name, description } = req.body;
    console.log(id);
    const noteRepository = appDataSource.getRepository(Note);

    try {
        const noteToUpdate = await noteRepository.findOneOrFail({ where: { id: Number(id) } });
        console.log(noteToUpdate);
        noteToUpdate.name = name;
        noteToUpdate.description = description;
        noteToUpdate.update_date = new Date();
        await noteRepository.save(noteToUpdate);
        res.json(noteToUpdate);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Note not found' });
    }
};

export const updateNoteById = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const { id } = req.params;
    const noteRepository = appDataSource.getRepository(Note);

    try {
        const noteToUpdate = await noteRepository.findOneOrFail({ where: { id: Number(id) } });
        console.log(noteToUpdate);
        noteToUpdate.name = name;
        noteToUpdate.description = description;
        noteToUpdate.update_date = new Date();
        await noteRepository.save(noteToUpdate);
        res.json(noteToUpdate);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Note not found' });
    }
};

export const deleteNote = async (req: Request, res: Response) => {
    const { id } = req.params;
    const noteRepository = appDataSource.getRepository(Note);

    try {
        const noteToDelete = await noteRepository.findOneOrFail({ where: { id: Number(id) } });
        await noteRepository.remove(noteToDelete);
        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: 'Note not found' });
    }
};