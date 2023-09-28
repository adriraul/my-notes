// src/components/NoteForm.js
import React, { useState, useEffect } from 'react';
import NoteService from '../services/NoteService.js';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import leftImage from '../assets/basetis.png'
import './global.css';
import './NoteForm.css';
import { useNavigate, useParams } from 'react-router-dom';

const NoteForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    console.log(NoteService);

    useEffect(() => {
        const fetchNoteById = async (noteId) => {
            try {
                const noteResponse = await NoteService.getNoteById(noteId);
                const note = noteResponse; // Acceder a la nota en la propiedad data
                console.log(note)
                console.log(noteResponse.data)
                setName(note.name);
                setDescription(note.description);
            } catch (error) {
                console.error('Error al obtener la nota por ID:', error);
                // Aquí puedes manejar el error, por ejemplo, redireccionando a otra pantalla
                // navigate('/error-page');
            }
        };

        if (id) {
            // Si hay un ID en los parámetros de la URL, significa que estamos en modo de edición
            // Aquí cargamos los datos de la nota existente utilizando el ID
            fetchNoteById(id);
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const noteData = {
            name,
            description,
        };

        try {
            if (id) {
                console.log('intentamos hacer llamada al updatenote');
                // Si hay un ID en los parámetros de la URL, significa que estamos en modo de edición
                // Aquí actualizamos la nota existente utilizando el ID
                await NoteService.updateNote(id, noteData);
            } else {
                console.log('intentamos hacer llamada al createnote');
                // Si no hay un ID en los parámetros de la URL, significa que estamos en modo de creación
                // Aquí creamos una nueva nota
                await NoteService.createNote(noteData);
            }

            // Después de crear o actualizar la nota, redirigimos a la pantalla de lista de notas
            navigate('/note-list');
        } catch (error) {
            console.error('Error al guardar la nota:', error);
        }
    };


    return (
        <div className="noteform-container">
            <header>
                <Link to="/">
                    <img src={leftImage} alt="Basetis Logo" className="left-image" />
                </Link>
                <div className="header-title">
                    <h1>Nota</h1>
                </div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </header>
            <main>
                <div className="note-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Título de la nota"
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Contenido de la nota"
                        />
                        <button className="save-note-button" type="submit">Guardar Nota</button>
                    </form>
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

export default NoteForm;