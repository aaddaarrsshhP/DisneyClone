import { createSlice } from "@reduxjs/toolkit";

const initialState={

    watchlist: [],
}

const watchlistSlice=createSlice({
    name:'watchlist',
    initialState,
    reducers: {

        addWacthList:(state,action)=>{

            state.watchlist=action.payload
        },
    },
        
})

export default watchlistSlice.reducer;

export const getWatchList = (state)=>state.watch.watchlist;
export const {addWacthList} = watchlistSlice.actions;