/**
 * 整个应用只有一个loading组件
 * 也在应用的顶层
 * 可接受provide中的sotre以此为根据设计全局loading组件
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tool} from '../../config/tools';

import {Loading} from 'monkeyui';

const loadingData = [
    {
        type:'treatCasesData'
    },
    {
        type:'archeCasesData'
    },
    {
        type:'importCasesData'
    },
    {
        type:'getImportData'
    },
    {
        type:'baseInfoData',
        text:'加载中'
    },
    {
        type:'addCasesDataNew',
        text:'保存中'
    },
    {
        type:'queryPhysicalExData'
    },
    {
        type:'queryPatientCourseData'
    },
    {
        type:'addcourseData',
        text:'保存中'
    },
    {
        type:'saveRecordData',
        text:'保存中'
    },
    {
        type:'queryLaborExportData',
        text:'查询中'
    },
    {
        type:'growthCurveData',
        text:'成长曲线查询中...'
    },
    {
        type:'queryFirstPageNavData',
        text:'加载中'
    },
    {
        type:'menuListData',
        text:'加载中'
    },
    {
        type:'searchArchivesData',
        text:'加载中'
    },
    {
        type:'querycourseData',
        text:'加载中'
    },
    {
        type:'doctorListData',
        text:'加载中'
    },
    {
        type:'areaTreeData',
        text:'加载中'
    },
    {
        type:'hospitalsData',
        text:'加载中'
    },
    {
        type:'diseaseListData',
        text:'加载中'
    },
    {
        type:'diseaseTypeListData',
        text:'加载中'
    },
    {
        type:'getAccountData',
        text:'加载中'
    }
]
//GlobalLoading
class GlobalLoading extends Component {
    constructor(props, context) {
            super(props, context);
            this.state = {
                loading:'hide',
                text:'查询中'
            }
        }
        
    componentWillReceiveProps(nextProps){
        //dossier list 
        this.loading(nextProps);
    }
    setLoading(nextProps,reduceData,text){
        //when the application @types init ,the reducers return {}
        if((!this.props[reduceData] && nextProps[reduceData].path=='LOADING') || this.props[reduceData].path != nextProps[reduceData].path && nextProps[reduceData].path=='LOADING')
            this.setState({loading:'show',text:text ? text : '查询中'});
        else if(this.props[reduceData].path != nextProps[reduceData].path && nextProps[reduceData].path=='LOADED')
            this.setState({loading:'hide'});
    }
    loading(nextProps){
        loadingData.map((item)=>{
            this.setLoading(nextProps,item.type,item.text);
        })
    }
    render() {
        let {loading,text} = this.state;

        let loading_props = {
            text:text,
            loading:loading
        }
        return <Loading {...loading_props}/>
    }
}

export default connect(state=>{
    let {treatCasesData,archeCasesData,importCasesData,getImportData,baseInfoData,addCasesDataNew,
        queryPhysicalExData,queryPatientCourseData,saveRecordData,queryLaborExportData,addcourseData,
        growthCurveData,queryFirstPageNavData,menuListData,searchArchivesData,querycourseData,
        doctorListData,areaTreeData,hospitalsData,diseaseListData,diseaseTypeListData,getAccountData} = state;
    return {
        treatCasesData,
        archeCasesData,
        importCasesData,
        getImportData,
        baseInfoData,
        addCasesDataNew,
        queryPhysicalExData,
        queryPatientCourseData,
        saveRecordData,
        queryLaborExportData,
        addcourseData,
        growthCurveData,
        queryFirstPageNavData,
        menuListData,
        searchArchivesData,
        querycourseData,
        doctorListData,
        areaTreeData,
        hospitalsData,
        diseaseListData,
        diseaseTypeListData,
        getAccountData
    }
},{})(GlobalLoading) 