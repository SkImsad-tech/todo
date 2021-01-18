import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote, deleteNote } from '../actions/notes';

interface noteProps {
    note: string;
    index: number;
}

export const Note = ({ note, index }:noteProps) => {
    const [currentNote, setNote] = React.useState(note);
    const [editable, setEditable] = React.useState(false);
    const dispatch = useDispatch();

    const onUpdateNote = (event:ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const onDeleteNote = () => { dispatch(deleteNote(index)) }

    const onBlurNote = () => {
        setEditable(false);
        if (currentNote) {
            dispatch(updateNote(currentNote, index));
        } else {
            dispatch(deleteNote(index))
        }
    }

    const onCLickNote = () => { setEditable(true); }

    return (
        <div className="note-flexbox-container">
            {
                editable
                && <input
                        onChange={onUpdateNote}
                        onBlur={onBlurNote}
                        value={currentNote}
                        type="text"
                        autoFocus
                    />
                || <li
                    onClick={onCLickNote}
                    key={note}
                > {note} </li>
            }
            <input type="submit" value="delete" onClick={onDeleteNote} />
        </div>
    );
}
