import React, { useState, FC } from 'react';

interface newNoteInputProps {
  addNote(note:string): void;
}

export const NewNoteInput: FC<newNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState('');

  const updateNote = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  }

  const onAddNoteClick = () => {
    if (note) {
      addNote(note);
      setNote('');
    }
  }

  const onPressEnter = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onAddNoteClick();
    }
  }

  return (
    <div className="new-note-container">
      <input onChange={updateNote} onKeyDown={onPressEnter} value={note} type="text" name="note" placeholder="Note" tabIndex={1} />
      <input onClick={onAddNoteClick} value="add" type="submit" />
    </div>
  );
}
