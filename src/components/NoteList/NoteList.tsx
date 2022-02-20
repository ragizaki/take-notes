import { Note } from '../../util/interfaces';
import NoteCard from './NoteCard';
import { Grid } from '@mui/material';

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
            <Grid item xs={12} md={6} key={note.id}>
                <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
        ));

    return (
        <Grid container spacing={2}>
            {listItems}
        </Grid>
    );
};

export default NoteList;
