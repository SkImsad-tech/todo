import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote, deleteNote } from '../actions/notes';

interface noteProps {
  note: string;
  index: number;
}

export const Note: FC<noteProps> = ({ note, index }) => {
  const [currentNote, setNote] = useState(note);

  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => { setNote(note)}, [note]);

  const onUpdateNote = (event:ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  }

  const onDeleteNote = () => { dispatch(deleteNote(index)) }

  const onDeleteButton = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Delete') {
      event.preventDefault();
      onDeleteNote();
    }
  }

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
    <div className="note-flexbox-container" tabIndex={2} onKeyDown={onDeleteButton}>
      {
        editable
        ? <input
            onChange={onUpdateNote}
            onBlur={onBlurNote}
            value={currentNote}
            type="text"
            autoFocus
          />
        : <li
            onClick={onCLickNote}
            key={index}
        > {currentNote} </li>
      }
      <input type="submit" value="delete" onClick={onDeleteNote} />
    </div>
  );
}
