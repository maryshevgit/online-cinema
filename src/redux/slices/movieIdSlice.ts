import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Movie = {
    id: number,
    genre: number
}

const initialState: Movie = {
    id: 0,
    genre: 0
}

const movieIdSlice = createSlice({
    name: 'movieId',
    initialState,
    reducers: {
        getId(state, action:PayloadAction<number>){
            state.id = action.payload
        },
        getGenre(state, action:PayloadAction<number>){
            state.genre = action.payload
        } 
    }
})

export const {getId, getGenre} = movieIdSlice.actions;

export default movieIdSlice.reducer