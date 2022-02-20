import React, { useState, useCallback, useEffect } from 'react';

import Form from './components/Form/Form';
import NoteList from './components/NoteList/NoteList';
import SearchBar from './components/SearchBar/SearchBar';
import { Note } from './util/interfaces';

import { Container, Stack } from '@mui/material';

const App: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [noteSearch, setNoteSearch] = useState<string>('');
    const [classes, setClasses] = useState<string[]>([]);

    const onAddClick = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setClasses([...classes, e.target.value]);
        },
        [setClasses]
    );

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
        <Container sx={{ my: 4 }}>
            <Stack spacing={2}>
                <SearchBar value={noteSearch} handleSearch={handleNoteSearch} />
                <NoteList notes={notes} noteSearch={noteSearch} handleDelete={handleDelete} />
                <Form notes={notes} setNotes={setNotes} />
            </Stack>
        </Container>
    );
};

export default App;
