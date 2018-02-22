import {LOGOUT_START,LOGOUT_SUCCESS} from '../Action/index.js';
import {LINKBAR_SUCCESS} from '../Action/index.js';
import {GET_MENULIST_START,GET_MENULIST_SUCCESS} from '../Action/index.js';
import {GET_INS_START,GET_INS_SUCCESS}	from '../Action/index.js';
import {GET_IMGTYPE_START,GET_IMGTYPE_SUCCESS} from '../Action/index.js';
import {GET_APPLY_START,GET_APPLY_SUCCESS} from '../Action/index.js';
import {GET_SENDAPPLY_START,GET_SENDAPPLY_SUCCESS}  from '../Action/index.js';
import {GET_RECALL_START,GET_RECALL_SUCCESS}   from '../Action/index.js';
import {GET_APPLICATION_DETAIL_START,GET_APPLICATION_DETAIL_SUCCESS}   from '../Action/index.js';
import {GET_REVOKEREASON_START,GET_REVOKEREASON_SUCCESS} from '../Action/index.js';
import {GET_RECEIVEAPPLY_START,GET_RECEIVEAPPLY_SUCCESS} from '../Action/index.js';
import {GET_APPLICATIONCOUNT_START,GET_APPLICATIONCOUNT_SUCCESS} from '../Action/index.js';
import {GET_FIRSTTRIALCATIONCOUNT_START,GET_FIRSTTRIALCATIONCOUNT_SUCCESS} from '../Action/index.js';
import {GET_APPLYFLOW_START,GET_APPLYFLOW_SUCCESS}  from '../Action/index.js';
import {GET_INPUTCONCLUSION_START,GET_INPUTCONCLUSION_SUCCESS} from '../Action/index.js';
import {GET_CONSULTIONCOUNT_START,GET_CONSULTIONCOUNT_SUCCESS} from '../Action/index.js';
import {GETNS_START,GETNS_SUCCESS} from '../Action/index.js';
import {REHYDRATE} from 'redux-persist/constants';
//登出
export const logoutData = (state = {}, action = {}) => {
    switch(action.type){
        case LOGOUT_SUCCESS:
            return Object.assign({},state,action);
        case LOGOUT_START:
            return state;            
        default:
            return state;
    }
}

//linkBar 
export const linkBarData = (state = {}, action = {}) => {
    switch(action.type){
        case LINKBAR_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//获取导航台目录
export const getNsData = (state = {}, action = {}) => {
    switch(action.type){
    	case GETNS_START:
    		return state;
        case GETNS_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//获取目录列表
export const menuListData = (state = {}, action = {}) => {
    switch(action.type){
    	case GET_MENULIST_START:
    		return state;
        case GET_MENULIST_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//获取递送机构
export	const insData = (state = {}, action = {}) => {
    switch(action.type){
    	case GET_INS_START:
    		return action;
        case GET_INS_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//获取图片类型
export const imgTypeData = (state = {}, action = {}) => {
    switch(action.type){
    	case GET_IMGTYPE_START:
    		return action;
        case GET_IMGTYPE_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//申请会诊
export const applyConsulationData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_APPLY_START:
            return action;
        case GET_APPLY_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//发出的会诊申请
export const sendApplyConsulationData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_SENDAPPLY_START:
            return action;
        case GET_SENDAPPLY_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//撤回申请
export const recallApplicationData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_RECALL_START:
            return action;
        case GET_RECALL_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//查看申请详情
export const applicationDetailsData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_APPLICATION_DETAIL_START:
            return action;
        case GET_APPLICATION_DETAIL_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//获取拒绝理由
export const revokeReasonData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_REVOKEREASON_START:
            return action;
        case GET_REVOKEREASON_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}
//收到的会诊申请
export const receiveApplyConsulationData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_RECEIVEAPPLY_START:
            return action;
        case GET_RECEIVEAPPLY_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//近一年发出申请总数
export const applicationCountData= (state = {}, action = {}) => {
    switch(action.type){
        case GET_APPLICATIONCOUNT_START:
            return action;
        case GET_APPLICATIONCOUNT_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//初审申请
export const firstTrialApplicationData= (state = {}, action = {}) => {
    switch(action.type){
        case GET_FIRSTTRIALCATIONCOUNT_START:
            return action;
        case GET_FIRSTTRIALCATIONCOUNT_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}

//申请进度
export const applicationFlowData= (state = {}, action = {}) => {
    switch(action.type){
        case GET_APPLYFLOW_START:
            return action;
        case GET_APPLYFLOW_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}
//录入结果
export const inputConclusionSaveData= (state = {}, action = {}) => {
    switch(action.type){
        case GET_INPUTCONCLUSION_START:
            return action;
        case GET_INPUTCONCLUSION_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}
//收到申请总数
export const getConsultionCountData= (state = {}, action = {}) => {
    switch(action.type){
        case GET_CONSULTIONCOUNT_START:
            return action;
        case GET_CONSULTIONCOUNT_SUCCESS:
            return Object.assign({},state,action);          
        default:
            return state;
    }
}