import { createSlice } from "@reduxjs/toolkit";

export const UserPlaylistsSlice = createSlice({
    name: "userplaylists",
    initialState:{
        playlist: null,  
    },
    reducers: {
        SET_USERPLAYLISTS:(state, action) => {
            state.userplaylists = action.payload;
        }
    } 
})

export const {SET_USERPLAYLISTS} =  UserPlaylistsSlice.actions;
export const selectUserPlaylist = (state) => state.userplaylists.userplaylists;
export default UserPlaylistsSlice.reducer;