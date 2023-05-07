import { configureStore } from "@reduxjs/toolkit";
import  userReducer   from "../features/userSlice";
import tokenReducer from "../features/tokenSlice";
import playlistReducer from "../features/playlistSlice";

export default configureStore({
    reducer:{
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
    }
})