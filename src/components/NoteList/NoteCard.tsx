import React from 'react';
import { Note } from '../../util/interfaces';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

interface INoteProps {
    note: Note;
    handleDelete(id: number): void;
}

const NoteCard = ({ note, handleDelete }: INoteProps): JSX.Element => {
    return (
        <Card>
            <CardContent>
                <h2>{note.title}</h2>
                <p>{note.description}</p>
                <p>
                    {new Intl.DateTimeFormat('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                    }).format(note.created)}
                </p>
            </CardContent>
            <CardActions>
                <Button size='small' onClick={() => handleDelete(note.id)} variant='outlined' color='error'>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default NoteCard;
