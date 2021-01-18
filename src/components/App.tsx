import React from 'react';
import { NewNoteInput } from './NewNoteInput';
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from '../reducers/notesReducer';
import { addNote } from '../actions/notes';
import { Note } from './Note';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note:string) => {
    dispatch(addNote(note));
  }

  return (
    <div className="wrapper">
      <div> TODO APP </div>
      <NewNoteInput addNote={onAddNote}/>
      <hr />
      <ul>
            {notes.map((note, index) => {
              return <Note note={note} index={index} />
            })}
      </ul>
    </div>
  );
}

export default App;
