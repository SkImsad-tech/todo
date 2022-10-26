import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
import { notesReducer } from '../reducers/notesReducer'

export interface ReducerState {
  notes: string[]
};

const initialState: ReducerState = {
  notes: [ 'initial option' ]
}

export const store = configureStore({
  reducer: { notes: notesReducer },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});
