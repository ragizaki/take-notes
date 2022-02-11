import React, { useState } from 'react';
import { Note } from '../util/interfaces';

type IFormProps = {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const Form = ({ notes, setNotes }: IFormProps): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const note = {
            title,
            description,
            id: notes.length + 1,
            created: new Date(),
        };
        setNotes([...notes, note]);
    };

    return (
        <div>
            <h1>Create Note</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>
                        Title
                        <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Description
                        <input
                            type='text'
                            name='description'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
