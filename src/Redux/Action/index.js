import { warn ,showSuccess,showError} from '../../components/toolComponents/dialog.js';
import {Tool} from '../../config/tools.js';
// import 'whatwg-fetch'
/*登出*/
export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LINKBAR_SUCCESS = 'LINKBAR_SUCCESS'

/*获取目录*/
export const GET_MENULIST_START = 'GET_MENULIST_START'
export const GET_MENULIST_SUCCESS = 'GET_MENULIST_SUCCESS'

/*获取递送机构*/
export const GET_INS_START = 'GET_INS_START'
export const GET_INS_SUCCESS = 'GET_INS_SUCCESS'

/*获取图片类型*/
export const GET_IMGTYPE_START = 'GET_IMGTYPE_START'
export const GET_IMGTYPE_SUCCESS = 'GET_IMGTYPE_SUCCESS'

/*提交申请会诊*/
export const GET_APPLY_START = 'GET_APPLY_START'
export const GET_APPLY_SUCCESS = 'GET_APPLY_SUCCESS'

/*发出的会诊申请*/
export const GET_SENDAPPLY_START = 'GET_SENDAPPLY_START'
export const GET_SENDAPPLY_SUCCESS = 'GET_SENDAPPLY_SUCCESS'

/*撤回申请*/
export const GET_RECALL_START = 'GET_RECALL_START'
export const GET_RECALL_SUCCESS = 'GET_RECALL_SUCCESS'

/*申请详细情况*/
export const GET_APPLICATION_DETAIL_START = 'GET_APPLICATION_DETAIL_START'
export const GET_APPLICATION_DETAIL_SUCCESS = 'GET_APPLICATION_DETAIL_SUCCESS'

/*撤回原因*/
export const GET_REVOKEREASON_START = 'GET_REVOKEREASON_START'
export const GET_REVOKEREASON_SUCCESS = 'GET_REVOKEREASON_SUCCESS'

/*收到的申请*/
export const GET_RECEIVEAPPLY_START = 'GET_RECEIVEAPPLY_START'
export const GET_RECEIVEAPPLY_SUCCESS = 'GET_RECEIVEAPPLY_SUCCESS'

/*近一年发出申请总数*/
export const GET_APPLICATIONCOUNT_START = 'GET_APPLICATIONCOUNT_START'
export const GET_APPLICATIONCOUNT_SUCCESS = 'GET_APPLICATIONCOUNT_SUCCESS'

/*初审申请*/
export const GET_FIRSTTRIALCATIONCOUNT_START = 'GET_FIRSTTRIALCATIONCOUNT_START'
export const GET_FIRSTTRIALCATIONCOUNT_SUCCESS = 'GET_FIRSTTRIALCATIONCOUNT_SUCCESS'

/*申请进度*/
export const GET_APPLYFLOW_START = 'GET_APPLYFLOW_START'
export const GET_APPLYFLOW_SUCCESS = 'GET_APPLYFLOW_SUCCESS'

/*录入结论*/
export const GET_INPUTCONCLUSION_START = 'GET_INPUTCONCLUSION_START'
export const GET_INPUTCONCLUSION_SUCCESS = 'GET_INPUTCONCLUSION_SUCCESS'

/*收到申请总数*/
export const GET_CONSULTIONCOUNT_SUCCESS = 'GET_CONSULTIONCOUNT_SUCCESS'
export const GET_CONSULTIONCOUNT_START = 'GET_CONSULTIONCOUNT_START'

/*收到申请总数*/
export const GETNS_START = 'GETNS_START'
export const GETNS_SUCCESS = 'GETNS_SUCCESS'


//开始获取导出列表数据
const getDataStart = path => {
  return {
    type: LOGOUT_START,
    path
  }
}

//获取数据成功
const getDataSuccess = (path, data) => {
  return {
    type: LOGOUT_SUCCESS,
    path ,
    data
  }
}

//
const getLinkBarSuccess = (data) => {
  return {
    type: LINKBAR_SUCCESS,
    data
  }
}

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

//获取递送机构开始
const getInsStart = path =>{
  return {
    type : GET_INS_START,
    path
  }
}

//获取递送机构成功
const getInsSuccess = (path, data) => {
  return {
    type: GET_INS_SUCCESS,
    path ,
    data
  }
}

//获取图片类型开始
const getImgTypeStart  = path =>{
  return {
    type : GET_IMGTYPE_START,
    path
  }
}

//获取图片类型成功
const getImgTypeSuccess = (path, data) => {
  return {
    type: GET_IMGTYPE_SUCCESS,
    path ,
    data
  }
}

//申请会诊开始
const getApplyStart= path =>{
  return {
    type : GET_APPLY_START,
    path
  }
}

//申请会诊结束
const getApplySuccess = (path, data) => {
  return {
    type: GET_APPLY_SUCCESS,
    path ,
    data
  }
}

//发出的会诊申请开始
const getSendApplyStart= path =>{
  return {
    type : GET_SENDAPPLY_START,
    path
  }
}

//发出的会诊申请成功
const getSendApplySuccess = (path, data) => {
  return {
    type: GET_SENDAPPLY_SUCCESS,
    path ,
    data
  }
}

//撤回申请开始
const getRecallStart = path =>{
  return {
    type : GET_RECALL_START,
    path
  }
}

//撤回申请成功
const getRecallSuccess = (path, data) => {
  return {
    type: GET_RECALL_SUCCESS,
    path ,
    data
  }
}

//查看申请详情开始
const getApplicationDetailsStart = path =>{
  return {
    type : GET_APPLICATION_DETAIL_START,
    path
  }
}

//查看申请详情成功
const getApplicationDetailsSuccess = (path, data) => {
  return {
    type: GET_APPLICATION_DETAIL_SUCCESS,
    path ,
    data
  }
}

//获取拒绝原因开始
const getRevokeReasonStart = path =>{
  return {
    type : GET_REVOKEREASON_START,
    path
  }
}

//获取拒绝原因成功
const getRevokeReasonSuccess = (path, data) => {
  return {
    type: GET_REVOKEREASON_SUCCESS,
    path ,
    data
  }
}

//收到的会诊申请开始
const getReceiveApplyStart= path =>{
  return {
    type : GET_RECEIVEAPPLY_START,
    path
  }
}

//收到的会诊申请成功
const getReceiveApplySuccess = (path, data) => {
  return {
    type: GET_RECEIVEAPPLY_SUCCESS,
    path ,
    data
  }
}

//发出申请总数开始
const getApplicationCountStart = path =>{
  return {
    type : GET_APPLICATIONCOUNT_START,
    path
  }
}

//发出申请总数成功
const getConsultionCountSuccess = (path, data) => {
  return {
    type: GET_CONSULTIONCOUNT_SUCCESS,
    path ,
    data
  }
}
//收到申请总数开始
const getConsultionCountStart = path =>{
  return {
    type : GET_CONSULTIONCOUNT_START,
    path
  }
}

//收到申请总数成功
const getApplicationCountSuccess = (path, data) => {
  return {
    type: GET_APPLICATIONCOUNT_SUCCESS,
    path ,
    data
  }
}
//初审申请开始
const getFirstTrialStart = path =>{
  return {
    type : GET_FIRSTTRIALCATIONCOUNT_START,
    path
  }
}

//初审申请结束
const getFirstTrialSuccess = (path, data) => {
  return {
    type: GET_FIRSTTRIALCATIONCOUNT_SUCCESS,
    path ,
    data
  }
}

//获取申请进度开始
const getApplicationFlowStart = path =>{
  return {
    type : GET_APPLYFLOW_START,
    path
  }
}

//获取申请进度成功
const getApplicationFlowSuccess = (path, data) => {
  return {
    type: GET_APPLYFLOW_SUCCESS,
    path ,
    data
  }
}
//开始录入结果
const getInputConclusionStart= path =>{
  return {
    type : GET_INPUTCONCLUSION_START,
    path
  }
}

//结束录入结果
const getInputConclusionSuccess = (path, data) => {
  return {
    type: GET_INPUTCONCLUSION_SUCCESS,
    path ,
    data
  }
}

//获取导航台目录开始
const getNsStart= path =>{
  return {
    type : GETNS_START,
    path
  }
}
//获取导航台目录成功
const getNsSuccess = (path, data) => {
  return {
    type: GETNS_SUCCESS,
    path ,
    data
  }
}


//获取导航台目录
export const getNs = (postData) =>{
  return dispatch => {
    dispatch(getNsStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '',//待填
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getNsSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.out(xhr);
              console.log(err);
            }
        })
  }
}

export const getLogin = (path, postData) => {
    let url = target + path; 
    let data=Tool.formData(postData);      
    return dispatch => {
        dispatch(getDataStart(postData))
        return fetch(url,{
          method: "POST",
          mode: "cors",
          body:data
        })
        .then(function(e){
            return e.json();
        })
        .then(function(json){
           if(json.result&&json.result=="success"){
          }
          return dispatch(getDataSuccess(path,json));
        })
        .catch(error => {console.log(error);Tool.sessionTimeOut.logOut({status:900});})
    }
}


export const getLinkBar = (linkList) => {
  //本地存储
  sessionStorage.setItem("navList",JSON.stringify(linkList));

  return dispatch => {
    dispatch(getLinkBarSuccess(linkList));
  }
}

//获取目录列表
export const getMenuList = () => {
  return dispatch => {
    dispatch(getMenuListStart("LOADING"));
    $.ajax({
      type : 'post',
      url : '../menu/list',
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
  //   return (new Promise((resolve,reject)=>{
  //       $.ajax({
  //           type : 'post',
  //           url : '../menu/list',
  //           contentType : "application/x-www-form-urlencoded;charset=utf-8;",
  //           async : true,
  //           success : function (data) {
  //             if(data.result && data.result=='success'){ 
                
  //               sessionStorage.setItem("username",JSON.stringify({username:data.data.username}));
  //               resolve(data);
  //             }else{
  //               reject(data);
  //               showError(data.reason);
  //             }
  //           },
  //           error:function (xhr, status, err) {
  //             Tool.sessionTimeOut.logOut(xhr);
  //             console.log(err);
  //           }
  //       })
  //   })).then((data)=>{
  //       return dispatch(getMenuListSuccess('LOADED',data));
  //   }).catch((error)=>{
  //       console.log(error);
  //       Tool.sessionTimeOut.logOut({status:900});
  //     })
  // }
}
}

//获取递送机构
export const getIns = () =>{
  return dispatch => {
    dispatch(getInsStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/getIns',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                // resolve(data);
                return dispatch(getInsSuccess('LOADED',data));
              }else{
                // reject(data);
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}

//获取图片类型
export const getImgType = () =>{
  return dispatch => {
    dispatch(getImgTypeStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/imagetypelist',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getImgTypeSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}

//申请会诊
export const applyConsultation = (postData) =>{
  return dispatch => {
    dispatch(getApplyStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/applied',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            data:{"params":JSON.stringify(postData)},
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getApplySuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}

//发出的会诊申请

export const sendApplyConsultation = (postData) =>{
  return dispatch => {
    dispatch(getSendApplyStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/myappliedlist',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            data:{"params":JSON.stringify(postData)},
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getSendApplySuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}


//撤回申请
export const recallApplication = (postData) =>{
  return dispatch => {
    dispatch(getRecallStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/revoke',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            data:{"params":JSON.stringify(postData)},
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getRecallSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}

//查看申请详情
export const getApplicationDetails = (postData) =>{
  return dispatch => {
    dispatch(getApplicationDetailsStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/info',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            data:{consultation_bill_id:postData},
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getApplicationDetailsSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}

//获取拒绝原因
export const getRevokeReason = (postData) =>{
  return dispatch => {
    dispatch(getRevokeReasonStart("LOADING"));
    
    BIOSAN.postData({
        url:'consultation/getRevokeReason',
        data:{"params":JSON.stringify(postData)},
        success: function(data) {
            data=JSON.parse(data);
            if(data.result && data.result=='success'){
                return dispatch(getRevokeReasonSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
        error: function(xhr, status, err) {
            Tool.sessionTimeOut.logOut(xhr);
            console.log(err);
            }
        })

  }
}

//收到的会诊申请

export const receiveApplyConsultation = (postData) =>{
  return dispatch => {
    dispatch(getReceiveApplyStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/consultationlist',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            data:{"params":JSON.stringify(postData)},
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getReceiveApplySuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}

//一年发出申请总数
export const getApplicationCount = () =>{
  return dispatch => {
    dispatch(getApplicationCountStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/myappliedcount',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getApplicationCountSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}

//初审申请
export const firstTrialApplication = (postData) =>{
  return dispatch => {
    dispatch(getFirstTrialStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/trail',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            data:{"params":JSON.stringify(postData)},
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getFirstTrialSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}
//录入结果
export const inputConclusionSave = (postData) =>{
  return dispatch => {
    dispatch(getInputConclusionStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/consultation',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            data:{"params":JSON.stringify(postData)},
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getInputConclusionSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}
//申请进度
export const getApplicationFlow = (postData) =>{
  return dispatch => {
    dispatch(getApplicationFlowStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/flow',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            data:{consultation_bill_id:postData},
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getApplicationFlowSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}

//收到申请总数
export const getConsultionCount = () =>{
  return dispatch => {
    dispatch(getConsultionCountStart("LOADING"));
    $.ajax({
            type : 'post',
            url : '../consultation/consultationcount',
            contentType : "application/x-www-form-urlencoded;charset=utf-8;",
            async : true,
            success : function (data) {
              if(data.result && data.result=='success'){
                return dispatch(getConsultionCountSuccess('LOADED',data));
              }else{
                showError(data.reason);
              }
            },
            error:function (xhr, status, err) {
              Tool.sessionTimeOut.logOut(xhr);
              console.log(err);
            }
        })
  }
}