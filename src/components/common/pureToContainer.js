import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import * as action from '../../Redux/Action/index.js';


const Main = mySeting => {
    let seting = {
        id: '', //应用唯一id表示
        url: '', //请求地址
        data: {}, //发送给服务器的数据
        component: <div></div>, //数据回调给的组件
    };

    for (let key in mySeting) {
        seting[key] = mySeting[key];
    }

    class Index extends Component {
        // static defaultProps = { seting }

        constructor(props,context) {
            super(props,context);
        }

        render() {
            return <this.props.seting.component {...this.props} />;
        }

        componentWillMount() {//获取数据

        }
        componentDidMount() {//获取数据

        }
        componentWillReceiveProps(nextProps) {
            
        }
    }
    Index.defaultProps={seting}
    //mapStateToProps and mapDispatchToProps
    // args.. (state,ownProps)=>{}
    //mapStateToProps = (state)=>{return {count:state.count}};
    return connect(state => { 
        let {logoutData,linkBarData,menuListData,insData,imgTypeData,
            applyConsulationData,sendApplyConsulationData,
            recallApplicationData,applicationDetailsData,revokeReasonData,
            receiveApplyConsulationData,applicationCountData,applicationFlowData,
            firstTrialApplicationData,inputConclusionSaveData,getConsultionCountData,addCasesDataNew} = state;
        
        return { 
            logoutData,
            linkBarData,
            menuListData,
            insData,
            imgTypeData,
            applyConsulationData,
            sendApplyConsulationData,
            recallApplicationData,
            applicationDetailsData,
            revokeReasonData,
            receiveApplyConsulationData,
            applicationCountData,
            applicationFlowData,
            firstTrialApplicationData,
            inputConclusionSaveData,
            getConsultionCountData,
            addCasesDataNew
        }
        //绑定state上的指定值到props 
    }, action)(Index); 
}


export default Main;