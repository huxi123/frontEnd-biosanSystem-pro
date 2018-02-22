/**
 * 2018/02/01 yyx
 * react components connect to store common method
 * UI component to Container component!
 */
import { showError } from '../../components/toolComponents/dialog';
import { connect } from 'react-redux';
import { Tool,ReduxTool } from '../../config/tools';

/**
 * action files
 * tips:not only one files!
 */

import * as IndexActions from '../Action/index';


//解构stateList
function deconstruct(state,waitInjectionStateList,UiComponent){
    let injectionState = {};
    if(!waitInjectionStateList || !Array.isArray(waitInjectionStateList) || waitInjectionStateList.length==0)
        return {};
    waitInjectionStateList.forEach((value,index)=>{
        injectionState[value] = state[value];
    });
    return injectionState;
}

/**
 * connect to store
 * @param {*} waitInjectionActionList 
 * @param {*} waitInjectionStateList 
 * @param {*} UiComponent 
 */
export default function connectToStore(waitInjectionActionList,waitInjectionStateList,UiComponent){
    
    let injectionAction = Tool.redux.filterAction(waitInjectionActionList,IndexActions,dossierActions,patientDetailsPageActions,patientDetailsPageActionsV2,taskManageActions);



    return connect(state => { 

                    return deconstruct(state,waitInjectionStateList,UiComponent);
        
                },injectionAction)(UiComponent);
}