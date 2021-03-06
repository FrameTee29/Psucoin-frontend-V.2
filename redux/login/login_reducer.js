import * as  types from './types';

const initalState={
    username:null,
    password:null,
}

export const login_reducer = (state=initalState,action) => {
    switch(action.type){
        case types.GET_POST:
            return {
                ...state ,
                username: action.payload,
                password: action.payload, // payload จะส่งค่ามาจาก Action อีกทีนึง
            }
        default:
            return state;
    }
}