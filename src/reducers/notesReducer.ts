interface Actions {
    type: string,
    payload: any
}

export interface NotesState {
    notes: string[]
};

const initialState = {
    notes: []
}

export const notesReducer = (state:NotesState = initialState, action:Actions ) => {
    switch(action.type) {
        case "ADD_NOTE": {
            return { ...state, notes: [ ...state.notes, action.payload ] }
        }
        case "UPDATE_NOTE": {
            const newNotes = state.notes;
            newNotes[action.payload.index] = action.payload.note
            return { ...state, notes: [...newNotes] }
        }
        case "DELETE_NOTE": {
            const newNotes = state.notes;
            newNotes.splice(action.payload, 1);
            console.log('newNotes', newNotes);
            return { ...state, notes: [...newNotes] }
        }
        default:
            return state;
    }
} 
