// src/routes/noteRoutes.ts
import { Router } from 'express';
import { getNotes, getNoteById, createNote, updateNote, updateNoteById, deleteNote } from '../controllers/NoteController';

const router = Router();

router.get('/notes', getNotes);
router.get('/notes/:id', getNoteById);
router.post('/notes', createNote);
router.put('/notes', updateNote);
router.put('/notes/:id', updateNoteById);
router.delete('/notes/:id', deleteNote);

export default router;