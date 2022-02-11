import React, { useState } from 'react';

import Form from './components/Form';
import NoteList from './components/NoteList';
import { Note } from './util/interfaces';

const App = (): JSX.Element => {
    const [notes, setNotes] = useState<Note[]>([]);

    const handleDelete = (id: number): void => {
        const notesToKeep = notes.filter((note: Note): boolean => note.id !== id);
        setNotes(notesToKeep);
    };

    return (
        <div>
            <h1>Take notes</h1>
            <Form notes={notes} setNotes={setNotes} />
            <NoteList notes={notes} handleDelete={handleDelete} />
        </div>
    );
};

export default App;
