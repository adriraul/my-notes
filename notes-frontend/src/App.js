import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note-list" element={<NoteList />} />
        <Route path="/create-note" element={<NoteForm />} />
        <Route exact path="/edit-note/:id" element={<NoteForm/>} />
      </Routes>
    </div>
  );
}

export default App;