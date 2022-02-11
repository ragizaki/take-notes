import React from 'react';
import { Note } from '../util/interfaces';

interface INoteListProps {
    notes: Note[];
    handleDelete(id: number): void;
}

const NoteList = ({ notes, handleDelete }: INoteListProps): JSX.Element => {
    const listItems = notes.map((note: Note) => (
        <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <p>
                {new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                }).format(note.created)}
            </p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
        </li>
    ));

    return <ul>{listItems}</ul>;
};

export default NoteList;
