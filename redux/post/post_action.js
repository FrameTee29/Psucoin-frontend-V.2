import * as types from './types';

export const fetchposts = ()=> async dispacth =>{
    const res = await axios.get('api/posts');
    dispacth({
        type:types.GET_POST,
        payload : ['1st post' , '2nd post' , '3 posts']
    })
}