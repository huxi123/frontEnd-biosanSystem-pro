import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory,hashHistory} from 'react-router';
import {Tool} from '../config/tools.js';
/**
 * 整体结构
 */
import Home from '../components/common/home.js';

const history = process.env.NODE_ENV !== 'production' ? hashHistory : browserHistory;

const dossier = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/dossier.js').default)
    },'dossier')
}

const addPatient = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/addPatient/addPatient.js').default)
    },'addPatient')
}

const sendApplication = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/consultationCenter/sendApplication.js').default)
    },'sendApplication')
}

const receiveApplication = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/consultationCenter/receiveApplication.js').default)
    },'receiveApplication')
}
const addApplication = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/consultationCenter/addApplication.js').default)
    },'addApplication')
}

const patientDetails = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/consultationCenter/patientDetails.js').default)
    },'patientDetails')
}

//导入病历
const importCases = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/importCases/importCases.js').default)
    },'importCases')
}

//导航台
const nsc = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/navigationStationComponents/nsc.js').default)
    },'nsc')
}

//病情详情页
const patientDetailsPage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/patientDetailPage/patientDetailPage.js').default)
    },'patientDetailsPage')
}

//基础信息
const baseInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/patientDetailPage/baseInfo/index.js').default)
    },'baseInfo')
}

//图表汇总
const collectCharts = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/patientDetailPage/collectCharts/index.js').default)
    },'collectCharts')
}

//病程列表
const dCourseList = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/patientDetailPage/diseaseCourseList/index.js').default)
    },'dCourseList')
}

//病情概况
const illnessSituation = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/patientDetailPage/illnessSituation/index.js').default)
    },'illnessSituation')
}
// 病程详情
const dCourseListDetails = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/patientDetailPage/diseaseCourseListDetails/index.js').default)
    },'dCourseListDetails')
}
//建档
const creactRecord = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/patientDetailPage/createRecord/index.js').default)
    },'creactRecord')
}

//消息记录
const informationRecord = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/dossierComponents/patientDetailPage/informationRecord/index.js').default)
    },'creactRecord')
}


/**
 * 后台管理
*/

//账号管理
const accountInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/accountManageComponents/accountManager.js').default)
    },'accountInfo')
}

//新增医生账号
const addDoctor = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/accountManageComponents/addDoctor/addDoctor.js').default)
    },'addDoctor')
}

//医生账号详情页
const doctorDetailsPage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/accountManageComponents/doctorDetailPage/index.js').default)
    },'doctorDetailsPage')
}
//角色管理
const roleManager = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/accountManageComponents/roleManager/index.js').default)
    },'roleManager')
}
//地区管理
const areaManager = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/areaManageComponents/index.js').default)
    },'areaManager')
}
//医院管理
const hospitalManager = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/hospitalManageComponents/hospitalManage').default)
    },'hospitalManager')
}
//医院详情
const hospitalDetailPage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/hospitalManageComponents/hospitalDetailPage/HospitalDetailPageWarp').default)
    },'hospitalDetailPage')
}
//疾病列表
const diseaseInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/diseaseListCompoents/diseaseListManage').default)
    },'diseaseInfo')
}
//疾病类型
const diseaseType = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/backgroundManageComponents/diseaseListCompoents/diseaseTypeComponents/diseaseTypeManage').default)
    },'diseaseType')
}


/**
 * 任务管理模块
 */

//转诊任务
const transferTreatment = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/TaskManageComponents/transferTreatment').default)
    },'transferTreatment')
}





const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRoute getComponent={nsc}/>
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;