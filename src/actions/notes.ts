export type Actions = {
    addAction: {type: "ADD_NOTE", payload: string},
    updateAction: {type: "UPDATE_NOTE", payload: object},
    deleteAction: {type: "DELETE_NOTE", payload: number}
}

export const addNote = (note:string):Actions["addAction"] => ({
    type: "ADD_NOTE",
    payload: note
});

export const updateNote = (note:string, index: number):Actions["updateAction"] => ({
    type: "UPDATE_NOTE",
    payload: { note, index }
});

export const deleteNote = (index: number):Actions["deleteAction"] => ({
    type: "DELETE_NOTE",
    payload: index
});
