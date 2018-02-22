//自定义菜单导航
/*
  [{
    menu_name:'',
    menu_link:'',
    del_flag:'',
    active:''
  }]
  菜单数据结构
*/
import React from 'react';
import LogLifeCyle from 'react-log-lifecycle';
import {Link ,hashHistory} from 'react-router';
import template from './pureToContainer.js';
import { connect } from 'react-redux';
import * as action from '../../Redux/Action/index.js';
import * as patientDetailsActions from '../../Redux/Action/patientDetailsPageActions.js';
import * as doctorDetailsActions from '../../Redux/Action/bgAction/accountManageAction';
import {Tool} from '../../config/tools.js';
import {initLevel2NavListType1,initLevel2NavListType2} from '../../config/globalData';

import {Modal,Menu,Icon} from 'monkeyui'//=MonkeyUi;

const SubMenu = Menu.SubMenu;

const removeItem= (menulist,menu_link) => {
    let index=null;
    for(let i=0;i<menulist.length;i++){
      if(menulist[i].menu_link==menu_link){
          index=i;
          break;
      }
    }
    if(!index && index==null)
      return ;
    menulist.splice(index, 1);
    return menulist;
}

const _changeActive = (menulist,menu_link) => {
    for(let i=0;i<menulist.length;i++){
      menulist[i].active=menulist[i].menu_link==menu_link?true:false;
    }

    return menulist;
}

const flags = {
  // If logType is set to keys then the props of the object being logged 
  // will be written out instead of the whole object. Remove logType or  
  // set it to anything except keys to have the full object logged. 
  logType: 'keys',
  // A list of the param "types" to be logged. 
  // The example below has all the types. 
  names: ['props', 'nextProps', 'nextState', 'prevProps', 'prevState']
};



class LinkBar extends React.Component {
  constructor(props){
    super(props,flags);
    let linkData=this.props.linkBarData;
    if(linkData.data && linkData.data.menu){
      this.state={
        menuList:linkData.data.menu
      }
    }else{
      this.state={
        menuList:[]
    } 
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props.linkBarData && this.props.linkBarData.data!=nextProps.linkBarData.data){
      let data=nextProps.linkBarData.data.menu;
      //not re-render，combine state
      this.setState({menuList:data});
    }
    if(nextProps.applicationDetailsData.data &&  this.props.applicationDetailsData.data!=nextProps.applicationDetailsData.data){
        let {patient_name,consultation_bill_id}=nextProps.applicationDetailsData.data.data;
        
        let menuObj={
          menu_name:patient_name,
          menu_link:'patientDetails/'+consultation_bill_id,
          del_flag:true,
          active:true,
          ids:consultation_bill_id
        }
       
        let navList=this.props.linkBarData.data.menu;
        let menuList=Tool.setMenuList(navList,menuObj);
        this.props.getLinkBar({menu:menuList,type:''});
        // Tool.setNavList({menu:menuList,type:''});
        hashHistory.push(menuObj.menu_link);
      }
      if(nextProps.addCasesDataNew.data && this.props.addCasesDataNew!=nextProps.addCasesDataNew){
        let {data} = nextProps.addCasesDataNew.data;
        data = data ? data : {};
        let {patient_name,patient_id,case_id,list,emptys} = data;
          if(!list && !emptys){
            let menuObj={
                menu_name:patient_name,
                menu_link:'patientDetailsPage/'+patient_id,
                del_flag:true,
                active:true,
                case_id:case_id
            }

            let navList=this.props.linkBarData.data.menu;
            let menuList=Tool.setMenuList(navList,menuObj);
            //同步一级导航数据至store
            this.props.getLinkBar({menu:menuList,type:''});
            //初始化二级导航内容
            this.props.saveLevel2Content('newType');
            //初始化二级导航list
            this.props.saveLevel2List(Tool.deepCopy(initLevel2NavListType2));

            hashHistory.push(menuObj.menu_link);
          }
      }
  }
  componentWillMount(){

  }
  componentWillUnmount() {
  
  }
  componentDidMount() {
      
  }
  changeActive(resp){
    let link=resp.menu_link;
    if(resp.active && resp.active == true)
       return;
    Tool.controlRoute.setter('CONTROL','OUT');
    //辅助标志位
    let type = Tool.controlRoute.getFlag(BIOSANCONFIG.routerTypes,link) ? 'IN' : 'OUT';
    Tool.controlRoute.setter('CLICKINITROUTER',type);
    
    let arr=_changeActive(this.state.menuList,link); 
    this.props.getLinkBar({menu:arr,type:''});
    let flag=link.indexOf("patientDetails/");
    let patientDetailsPageFlag=link.indexOf("patientDetailsPage/");
    if(flag>0||flag==0){
      let id=link.split("patientDetails/")[1];
      this.props.getApplicationDetails(id);
      return ;
    }
    let patientReg = /(^patientDetailsPage\/)([0-9]+$)/.exec(link);
    // if(patientDetailsPageFlag >0 || patientDetailsPageFlag==0){
    if(patientReg){
      let id=link.split("patientDetailsPage/")[1];
      //一级导航切换需要查询基础信息 -》title
      this.props.savePatientId({patient_id:id,case_id:resp.case_id,patient_name:resp.patient_name,patient_mobile:resp.patient_mobile});
      //初始化二级导航加载组件
      this.props.saveLevel2Content('changeType');
      //初始化二级导航navList
      this.props.saveLevel2List(Tool.deepCopy(initLevel2NavListType1));
      // return ;
    }
    let doctorReg = /(^doctorDetailsPage\/)([0-9]+$)/.exec(link);
    if(doctorReg){
      // let id=link.split("doctorDetailsPage/")[1];
      //一级导航切换需要查询基础信息 -》title
      this.props.saveDoctorId({employeeid:resp.menu_id,employeename:resp.menu_name});
    }
    hashHistory.push(link);
  }
  delMenuItem(resp,e){
    e.stopPropagation();
    Tool.controlRoute.setter('CONTROL','OUT');
    let arr=removeItem(this.state.menuList,resp.menu_link);
    let link=location.href.split("#/")[1];
    if(resp.active){
      arr[0].active=true;
      // this.props.getLinkBar({menu:arr,type:''});
      hashHistory.push(arr[0].menu_link);
    }
    this.props.getLinkBar({menu:arr,type:''});
  }
  setLinkBar(){
    let list=this.state.menuList;
    if(list.length==0)
      return null;
    let menulist=list.map((item)=>{
      return <span 
                   onClick={this.changeActive.bind(this,item)} 
                   key={item.menu_link}
                   style={{position:'relative'}}
                   className={item.active?'ac_color links':'nor_color links'}>
                {item.menu_name}
                <div className={item.active?'sj':'sj_nor'}></div>
                <span
                    onClick={this.delMenuItem.bind(this,item)} 
                    style={{display:item.del_flag?'inline-block':'none',paddingLeft:'5px',fontSize:'18px',height:'100%'}}>×</span>
             </span>
    });
    return menulist;
  }
  render(){
    return (
      <div className="linkBar_c" id='linkBarH'>
        {
          this.setLinkBar()
        }
      </div>
    )
  } 
}


let actions = Tool.redux.filterAction(['getApplicationDetails','getLinkBar','queryBaseInfo','getAccountInfo','savePatientId','saveLevel2Content',
              'saveLevel2List','searchArchives','saveDoctorId','getHospitals'],action,patientDetailsActions,doctorDetailsActions);

export default connect(state => { 
    let {
        applicationDetailsData,
        addCasesDataNew,
        linkBarData,
        newDoctorAccountData
      } = state;

    return {
        applicationDetailsData,
        addCasesDataNew,
        linkBarData,
        newDoctorAccountData,
    }
},actions)(LinkBar)
