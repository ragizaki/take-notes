import React, { useState } from 'react';
import { Note } from '../../util/interfaces';
import { TextField, Alert, Stack, Button, Typography } from '@mui/material';

type IFormProps = {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const Form = React.memo(({ notes, setNotes }: IFormProps): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (!title || !description) {
            return setShowAlert(true);
        }
        const note = {
            title,
            description,
            id: notes.length + 1,
            created: new Date(),
        };
        setNotes([...notes, note]);
        setTitle('');
        setDescription('');
        setShowAlert(false);
    };

    return (
        <div>
            <Typography variant='h3' sx={{ mb: 2 }}>
                Create Note
            </Typography>
            {showAlert && (
                <Alert sx={{ mb: 3 }} severity='error' onClose={() => setShowAlert(false)}>
                    All fields are mandatory to make a note.
                </Alert>
            )}
            <form onSubmit={handleFormSubmit} noValidate>
                <Stack spacing={2}>
                    <TextField
                        value={title}
                        label='Title'
                        onChange={e => setTitle(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        value={description}
                        label='Description'
                        onChange={e => setDescription(e.target.value)}
                        fullWidth
                        required
                    />
                    <Button variant='contained' color='info' type='submit'>
                        Submit
                    </Button>
                </Stack>
            </form>
        </div>
    );
});

export default Form;
