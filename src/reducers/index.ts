import userReducer from './user.reducer';
import todoReducer from './todo.reducer';
import authenticationReducer from './authentication.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    users: userReducer,
    todo: todoReducer,
    authentication: authenticationReducer
});

export type RootState = ReturnType<typeof rootReducer>;
