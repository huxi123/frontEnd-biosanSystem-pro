import {GET_MENULIST_START,GET_MENULIST_SUCCESS} from '../Action/index.js';

//登出
export const menuData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_MENULIST_SUCCESS:
            return Object.assign({},state,action);
        case GET_MENULIST_START:
            return state;            
        default:
            return state;
    }
}
