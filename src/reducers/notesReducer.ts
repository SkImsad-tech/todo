import { AnyAction } from '@reduxjs/toolkit'

const initialState: string[] = [];

export const notesReducer = (state: string[] = initialState, action: AnyAction ) => {
  switch(action.type) {
    case "ADD_NOTE": {
      return [ ...state, action.payload ]
    }
    case "UPDATE_NOTE": {
      const newNotes = [ ...state ];
      newNotes[action.payload.index] = action.payload.note;
      return [...newNotes];
    }
    case "DELETE_NOTE": {
      const newState = [ ...state ];
      newState.splice(action.payload, 1);
      return [ ...newState ];
    }
    default:
      return state;
  }
} 
