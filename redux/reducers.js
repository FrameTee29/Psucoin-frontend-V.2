import {combineReducers} from 'redux';
import { post_reducer } from './post/post_reducer';
import { login_reducer } from './login/login_reducer'

export default combineReducers({    
    post:post_reducer,
    login:login_reducer
});