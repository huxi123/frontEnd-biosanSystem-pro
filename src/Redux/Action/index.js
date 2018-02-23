import { warn ,showSuccess,showError} from '../../components/toolComponents/dialog.js';
import {Tool} from '../../config/tools.js';
import {target} from '../../config/globalData';

//获取目录
export const GET_MENULIST_START = 'GET_MENULIST_START';
export const GET_MENULIST_SUCCESS = 'GET_MENULIST_SUCCESS';

//登录
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

//开始获取目录数据
const getMenuListStart = path =>{
  return {
    type : GET_MENULIST_START,
    path
  }
}

//获取目录数据成功
const getMenuListSuccess = (path, data) => {
  return {
    type: GET_MENULIST_SUCCESS,
    path ,
    data
  }
}



//获取目录列表
export const getMenuList = () => {
  return dispatch => {
    dispatch(getMenuListStart("LOADING"));
    $.ajax({
      type : 'post',
      url : target + 'menu/list',
      contentType : "application/x-www-form-urlencoded;charset=utf-8;",
      async : true,
      success : function (data) {
        if(data.result && data.result=='success'){ 
          sessionStorage.setItem("username",JSON.stringify({username:data.data.username}));
        }else{
          showError(data.reason);
        }
        dispatch(getMenuListSuccess('LOADED',data));
      },
      error:function (xhr, status, err) {
        Tool.sessionTimeOut.logOut(xhr);
        console.log(err);
      }
  })
}
}

/**
 * 新的中间件处理异步action的方式
 */
export const login = (postData) =>{
  return {
      url:target + 'login',
      data:{"params":JSON.stringify(postData)},
      types:[LOGIN_START,LOGIN_SUCCESS,null]
    }
}




