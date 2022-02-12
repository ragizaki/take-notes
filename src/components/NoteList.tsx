import { useCallback } from 'react';
import { Note } from '../util/interfaces';

interface INoteListProps {
    noteSearch: string;
    notes: Note[];
    handleDelete(id: number): void;
}

interface title {
    title: string;
}

const NoteList = ({ noteSearch, notes, handleDelete }: INoteListProps): JSX.Element => {
    const listItems = notes
        .filter(({ title }: title) => {
            return title.toLowerCase().includes(noteSearch.toLowerCase());
        })
        .map((note: Note) => (
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

    const memoizedItems = useCallback(() => listItems, [listItems]);

    return <ul>{memoizedItems}</ul>;
};

export default NoteList;
