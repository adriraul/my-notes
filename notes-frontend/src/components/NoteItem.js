import React from 'react';
import './NoteItem.css';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NoteService from '../services/NoteService.js';

const NoteItem = ({ id, title, description, fetchAllNotes }) => {
    const limitedDescription = description.length > 165 ? `${description.substring(0, 165)}...` : description;

    const handleEditNote = async () => {
        try {
            await NoteService.updateNote(id);
        } catch (error) {
            console.error('Error al eliminar la nota:', error);
        }
    };

    const handleDeleteNote = async () => {
        try {
            const confirmDelete = window.confirm(`¿Estás seguro de que quieres eliminar la nota "${title}"?`);
            if (confirmDelete) {
                await NoteService.deleteNote(id);
                fetchAllNotes();
            }
        } catch (error) {
            console.error('Error al eliminar la nota:', error);
        }
    };

    return (
        <div className="note-item">
            <div className="buttons-container">
            <Link to={`/edit-note/${id}`}>
                <button className="edit-button" >
                    <BsPencilSquare size={15} onClick={handleEditNote}/> {}
                </button>
            </Link>
                <button className="delete-button" onClick={handleDeleteNote}>
                    <BsTrash size={15} /> {}
                </button>
            </div>
            <div className="note-content">
                <div className="note-title">{title}</div>
                <div className="note-description">{limitedDescription}</div>
            </div>
        </div>
    );
};

export default NoteItem;