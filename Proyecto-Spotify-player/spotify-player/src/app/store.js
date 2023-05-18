import { configureStore } from "@reduxjs/toolkit";
import  userReducer   from "../features/userSlice";
import tokenReducer from "../features/tokenSlice";
import playlistReducer from "../features/playlistSlice";
import userPlaylistsReducer from "../features/userPlaylists";

export default configureStore({
    reducer:{
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
        userplaylists: userPlaylistsReducer,
    }
})