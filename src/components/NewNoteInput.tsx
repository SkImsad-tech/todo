import React, { ChangeEvent } from 'react';

interface newNoteInputProps {
    addNote(note:string): void;
}

export const NewNoteInput:React.FC<newNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = React.useState("");
    
    const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const onAddNoteClick = () => {
        if (note) {
            addNote(note);
            setNote("");
        }
    }

    return (
        <div className="new-note-container">
            <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
            <input onClick={onAddNoteClick} value="add" type="submit" />
        </div>
    );
}
