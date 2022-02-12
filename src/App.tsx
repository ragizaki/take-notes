import React, { useState, useCallback } from 'react';

import Form from './components/Form';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import { Note } from './util/interfaces';

const App = (): JSX.Element => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [noteSearch, setNoteSearch] = useState<string>('');

    const handleNoteSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setNoteSearch(e.target.value);
        },
        [setNoteSearch]
    );

    const handleDelete = (id: number): void => {
        const notesToKeep = notes.filter((note: Note): boolean => note.id !== id);
        setNotes(notesToKeep);
    };

    return (
        <div>
            <h1>Take notes</h1>
            <Form notes={notes} setNotes={setNotes} />
            <SearchBar value={noteSearch} handleSearch={handleNoteSearch} />
            <NoteList notes={notes} noteSearch={noteSearch} handleDelete={handleDelete} />
        </div>
    );
};

export default App;
