import React, { useState, useEffect } from 'react';
import './global.css';
import './NoteList.css';
import logo from '../assets/logo.jpg';
import leftImage from '../assets/basetis.png'

import { Link } from 'react-router-dom';
import NoteItem from './NoteItem';
import NoteService from '../services/NoteService.js';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Al montar el componente, obtenemos todas las notas
        fetchAllNotes();
    }, []);

    const fetchAllNotes = async () => {
        try {
            const allNotes = await NoteService.getAllNotes();
            setNotes(allNotes);
        } catch (error) {
            console.error('Error al obtener todas las notas:', error);
        }
    };

    /*const notes = [
        { id: 1, title: 'Nota 1', description: 'Descripción de la nota 1' },
        { id: 2, title: 'Nota 2', description: 'Descripción de la nota 2' },
        // ... otras notas
      ];*/

    console.log(notes);

    return (
        <div className='notelist-container'>
            <header>
                <Link to="/">
                    <img src={leftImage} alt="Basetis Logo" className="left-image" />
                </Link>

                <div className="header-title">
                    <h1>Lista de notas</h1>
                </div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </header>

            <main>
                <Link to="/create-note">
                    <button className="create-note-button">Crear Nota</button>
                </Link>
                <div className="note-list">
                    {notes.map((note) => (
                        <NoteItem key={note.id} id={note.id} title={note.name} description={note.description} fetchAllNotes={fetchAllNotes}/>
                    ))}
                </div>
            </main>

            <footer>
                <div className="footer-left">Adrián Bravo</div>
                <div className="footer-center"> </div>
                <div className="footer-right">Versión 1.0</div>
            </footer>
        </div>
    );
};

export default NoteList;