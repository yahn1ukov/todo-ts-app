import { users } from './user.reducer';
import { todo } from './todo.reducer';
import { authentication } from './authentication.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    users,
    todo,
    authentication
});

export type RootState = ReturnType<typeof rootReducer>;
