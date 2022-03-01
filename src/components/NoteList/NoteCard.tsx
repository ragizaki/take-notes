import React from 'react';
import { Note } from '../../util/interfaces';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

interface INoteProps {
    note: Note;
    handleDelete(id: number): void;
}

const NoteCard = ({ note, handleDelete }: INoteProps): JSX.Element => {
    return (
        <Card sx={{ backgroundColor: '#f5f3f4' }}>
            <CardContent>
                <h2>{note.title}</h2>
                <p>{note.description}</p>
                <p>
                    Due:{' '}
                    {new Intl.DateTimeFormat('en-US', {
                        dateStyle: 'medium',
                    }).format(note.due)}{' '}
                    at{' '}
                    {new Intl.DateTimeFormat('en-US', {
                        timeStyle: 'short',
                    }).format(note.due)}
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
