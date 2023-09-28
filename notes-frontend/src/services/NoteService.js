// services/NoteService.js

const BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

const NoteService = {
    createNote: async (noteData) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noteData),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error al crear la nota');
        }
    },

    updateNote: async (noteId, noteData) => {
        try {
            const response = await fetch(`${BASE_URL}/${noteId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noteData),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error al actualizar la nota');
        }
    },

    getNoteById: async (noteId) => {
        try {
            const response = await fetch(`${BASE_URL}/${noteId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error al obtener la nota por ID');
        }
    },

    getAllNotes: async () => {
        try {
            console.log(BASE_URL);
            const response = await fetch(BASE_URL);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error al obtener todas las notas');
        }
    },

    deleteNote: async (noteId) => {
        try {
            const response = await fetch(`${BASE_URL}/${noteId}`, {
                method: 'DELETE',
            });

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error al eliminar la nota');
        }
    },
};

export default NoteService;