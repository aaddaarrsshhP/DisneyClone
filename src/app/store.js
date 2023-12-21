import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer  from '../feature/user/userSlice';
import movieReducer from '../feature/user/movieSlice';
import watchListReducer from '../feature/user/watchlistSlice'

export default configureStore({
    reducer:{

        user: userReducer,
        movie: movieReducer,
        watch: watchListReducer,
    }, 
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
});