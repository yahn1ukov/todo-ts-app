import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer as authReducer } from '../slices/auth.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
