import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {showSuccess,showError} from '../../components/toolComponents/dialog';
/**
 * merge to Reducers
 * not only one files!
 */
import * as indexReducer from '../Reducer/index.js';

/**
 * handle async action middleware
 */
import thunk from 'redux-thunk';
import silplify from 'simplify-action-middleware';

import {Tool} from '../../config/tools';
import {persistStore, autoRehydrate} from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages';

/**
 * Logger Middleware
 * import {createLogger} from 'redux-logger';
 * const logger = createLogger();
 */


 /**
  * combine application Reducers to a Big Reducer
    support many reducers mapping different reducer files
  */
const reducers=Tool.redux.combineReducer(indexReducer);

var store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk,silplify({successAlert:showSuccess,errorAlert:showError,sessionTimeOut:Tool.sessionTimeOut.logOut})),autoRehydrate())
);

/**
 * synchronize to local
 * 
 * set Storage Engines and whitelist
 */

persistStore(store,{whitelist:['sendApplyConsulationData','linkBarData','patiendIdData','level2ListData','searchArchivesData'],storage: asyncSessionStorage}, () => {
  // console.log('sendApplyConsulationData&linkBarData  has persist !');
});

export default store;