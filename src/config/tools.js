import {Map ,is ,List} from 'immutable';
import {showError,showSuccess,warningMessage} from '../components/toolComponents/dialog.js';

import {Select} from 'monkeyui';
const Option = Select.Option;

export const Tool= Tool || {};

//分页大小
Tool.pageSize=50;

/**
 * 组串
 */
Tool.combineObj = (sourceObj,obj) =>{
    let keys = Object.keys(obj);

    if(!keys || keys.length==0)
      return sourceObj;

    for(let i=0;i<keys.length;i++){
      let key = keys[i];
      sourceObj[key] = obj[key];
    }

    return sourceObj;
}

//截取字符串位数
Tool.subStr=(str,length)=>{
	if(!str)
      return str;
    if(str.length>length)
      return str.substring(0,length)+"...";
    else
      return str;
}

//当天日期
Tool.getToday=()=>{
	let myDate = new Date();
    let year=myDate.getFullYear();
    let month=(myDate.getMonth()+1)<10?"0"+(myDate.getMonth()+1):(1+myDate.getMonth());
    let date=myDate.getDate()<10?"0"+myDate.getDate():myDate.getDate();
    return year+"-"+month+"-"+date;
}
Tool.getTime=()=>{
  let myDate = new Date();
  let year=myDate.getFullYear();
  let month=(myDate.getMonth()+1)<10?"0"+(myDate.getMonth()+1):(1+myDate.getMonth());
  let date=myDate.getDate()<10?"0"+myDate.getDate():myDate.getDate();
  let hour=myDate.getHours()<10?"0"+myDate.getHours():myDate.getHours();
  let minute=myDate.getMinutes()<10?"0"+myDate.getMinutes():myDate.getMinutes();
  let second=myDate.getSeconds()<10?"0"+myDate.getSeconds():myDate.getSeconds();
  return year+"-"+month+"-"+date+' '+hour+':'+minute+':'+second;
}

//去掉字符串空格
Tool.trim=(str)=>{
  if(!str || typeof str == 'object')
    return '';
  let  reg=new RegExp(" ","g");
  return str.replace(reg,"");
}

//比较日期大小
Tool.compareDate=(current,now)=>{
   let d1 = new Date(current.replace(/\-/g, "\/"));  
   let d2 = new Date(now.replace(/\-/g, "\/"));
   let flag=d1>d2?false:true;
   return flag;
}

//当前日期减去或加上days
Tool.reduceDay=(days)=>{
  let date=new Date();
  let _date=date.getTime()-days*24*60*60*1000;
  let newDate=new Date(_date);
  let year=newDate.getFullYear();
  let month=newDate.getMonth()+1;
  month=month<10?"0"+month:month;
  let _day=newDate.getDate()<10?"0"+newDate.getDate():newDate.getDate();
  let dateStr=year+"-"+month+"-"+_day;
  return dateStr;
}

//日期处理
Tool.handleDate = {
  /**
   * 根据病例详情.md 计算规则 计算年龄 有问题请咨询刘梦娇 电话 18668420316
   * 她是产品经理，怼她！
   */
  countAge:function(birthDate,preDate,type){
    if(null == birthDate || null == preDate|| !birthDate || !preDate)
      return "";
    var pre = new Date(preDate);
    var birth = new Date(birthDate);
    if(type){
      if(!this.compareDate(birthDate,preDate))
        return '0天';
    }else{
      if(!this.compareDate(birthDate,preDate)){
        return "未出生";
      }else if(birthDate==preDate){
        return "今日出生";
      }
    }
    
    var age = 0;
    var mon = 0;
    var day = 0;
    var preMon = pre.getMonth(); // 0-11
    var birthMon = birth.getMonth();
    var preDay = pre.getDate();
    var birthDay = birth.getDate();

    age = pre.getFullYear() - birth.getFullYear();
    day = preDay - birthDay;
    mon = preMon - birthMon;
    if(0 > day){
      mon --;
      // if(1 == preMon||0 == preMon){
      //   day += this.dayOfMon(12,pre.getFullYear() - 1);
      // }
      // else if(2 == preMon)
      //   day += this.dayOfMon(preMon - 1, pre.getFullYear());
      // else
      //   day += this.dayOfMon(preMon - 1, pre.getFullYear());
      day += this.dayOfMon(preMon + 1, pre.getFullYear());
    }
    if(0 > mon){
      age --;
      mon += 12;
    }
    if(2 <age || age==2){
      return (age + "岁");
    } 
    else if(1 < age || age==1)
      return (0 == mon ? (age + "岁") : (age + "岁" + mon + "个月"));
    else
      return (0 == mon ? (day + "天"):(day == 0 ? (mon + "月") : (mon + "月" + day + "天")));
  },
  dayOfMon:function(month,year){
    var result = 0;
    if(2 == month){
      if(this.isLeapYear(year))
        month = 13;
    }
    switch (month) {
      case 1:
        result = 31;
        break;
      case 2:
        result = 28;
        break;
      case 3:
        result = 31;
        break;
      case 4:
        result = 30;
        break;
      case 5:
        result = 31;
        break;
      case 6:
        result = 30;
        break;
      case 7:
        result = 31;
        break;
      case 8:
        result = 31;
        break;
      case 9:
        result = 30;
        break;
      case 10:
        result = 31;
        break;
      case 11:
        result = 30;
        break;
      case 13:
        result = 29;
        break;
      case 12:
        result = 31;
        break;
      default:
        break;
    }

    return result;
  },
  isLeapYear:function(year){
    var isLeapYear = false;
    if (year % 4 == 0 && year % 100 != 0) {
        isLeapYear = true;
    } else if (year % 400 == 0) {
      isLeapYear = true;
    }
    return isLeapYear;
  },
  compareDate:function(current,now){
    let d1 = new Date(current.replace(/\-/g, "\/"));  
    let d2 = new Date(now.replace(/\-/g, "\/"));
    let flag=d1>d2?false:true;
    return flag;
  },
  getToday:function(){
      let myDate = new Date();
      let year=myDate.getFullYear();
      let month=(myDate.getMonth()+1)<10?"0"+(myDate.getMonth()+1):(1+myDate.getMonth());
      let date=myDate.getDate()<10?"0"+myDate.getDate():myDate.getDate();
      return year+"-"+month+"-"+date;
  }
}

//设置menuNav
Tool.setMenuList = (propsData,menuObj) => {
    let deepCopy_propsData=Tool.deepCopy(propsData);
    let exit=Tool.checkList(deepCopy_propsData,menuObj.menu_link);
    //已存在
    let result=[];
    if(exit && exit===true){
        result = Tool.setExitMenuObj(deepCopy_propsData,menuObj.menu_link);
    }else{
      let normal=Tool.setMenuNormal(deepCopy_propsData);
      result=Tool.pushMenuLink(normal,menuObj)
    }
    return result;
}

Tool.setExitMenuObj = (menuList,menu_link) => {
    for(let i=0;i<menuList.length;i++){
      if(menuList[i].menu_link==menu_link)
        menuList[i].active=true;
      else
        menuList[i].active=false;
    }
    return menuList;
}
//设置menu 
Tool.pushMenuLink = (menuList,menuObj) => {
  for(let i=0;i<menuList.length;i++){
    menuList[i].active=false;
  }
  menuList.push(menuObj);
  return menuList;
}

//检查当前list中有没有将要推入的obj
Tool.checkList = (menuList,menu_link) => {
  for(let i=0;i<menuList.length;i++){
    if(menuList[i].menu_link==menu_link)
      return true;
  }
  return false;
}
//删除menu
Tool.resetNavLink=(menuList,menu_link) => {
  let menu_list=Tool.setMenuNormal(menuList);
  for(let i=0;i<menu_list.length;i++){
    if(menu_list[i].menu_link==menu_link){
      // menuList.splice(i,1);
      menu_link[i].active=true;
      break;
    }
  }
  return menu_link;
}

Tool.setMenuNormal = (menuList) => {
  var arr=[];
  for(let i=0;i<menuList.length;i++){
    // menuList[i].active=false;
    let obj=Object.assign({},menuList[i]);
    obj.active=false;
    arr.push(obj);
  }
  return arr;
}

//深拷贝
//@1
Tool.deepCopy_1 = (obj) => {
  return JSON.parse(JOSN.strigify(obj));
}

//@2
Tool.deepCopy = (obj) => {
  if(typeof obj!=='object')
    return;
  var newObj=obj instanceof Array ?[]:{};
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key]=typeof obj[key]=='object' && obj[key]!==null?Tool.deepCopy(obj[key]):obj[key];
    }
  }
  return newObj;
}

/**
 * 获取下拉数据
 */
Tool.getSelectOptions = (list,value,name) => {
  let options=[];
  if(!list  || list.length==0)
    return null;
  options=list.map((item)=>{
    return <Option key={item[value]} value={item[value]}>{item[name]}</Option>
  })
  return options;
}

Tool.getSelectOptionsFromArray = (list) =>{
  let options = [];
  if(!list  || list.length==0)
  return null;
  options=list.map((item)=>{
    return <Option key={item} value={item}>{item}</Option>
  })
  return options;
}

Tool.getNavList = () => {
  let navlist=sessionStorage.getItem('navList');
  if(navlist){
    return navlist=JSON.parse(navlist).menu;
  }
  return null;
}

Tool.setNavList = (menuList) =>{
  sessionStorage.setItem('navList',JSON.stringify(menuList));
}

//set table height
Tool.setTableHeight=()=>{
    let clientWidth=document.body.clientWidth;
    let height=300;
    if(clientWidth<1366||clientWidth==1366){
        height=350;
    }else if(clientWidth>1366){
        height=520;
    }
    return height;
}

/**
 * redux相关操作工具方法
 */


Tool.redux = {
    combineReducer : function(...objectList){
      // let objectList = Array.prototype.slice.apply(arguments,[0]);
      let length = objectList.length;
      let reducerObject = {};
      if(length === 1){
        return objectList[0];
      }
        
      
      for(let i=1;i<length;i++){
        reducerObject = objectList[0];
        for(let item in objectList[i]){
          if(objectList[i].hasOwnProperty(item))
            reducerObject[item] = objectList[i][item];
        }
      }
      return reducerObject;
      
    },
    filterAction : function(types,...originActions){
      let originActionsObj = this.combineReducer(...originActions);
      let newActions = {};
      let typeLength = types.length;
      let originActionsLength = originActions.length;
      
      
      for(let i=0;i<typeLength;i++){
        for(let item in originActionsObj){
          if(types[i]==item && originActionsObj.hasOwnProperty(types[i]))
            newActions[item] = originActionsObj[item];
        }
      }
      return newActions;
    }
}

/**
 * 控制路由跳转
 */
Tool.controlRoute={
    setter:(type,value)=>{
        sessionStorage.setItem(type,value);
    },
    getter:(type)=>{
        return sessionStorage.getItem(type);
    },
    getFlag:(types,type)=>{
      for(let i=0;i<types.length;i++){
        if(types[i]==type)
          return true;
        return false;
      }
    }
}

/**
 * 正则类型校验
 */
//身份证格式校验
Tool.checkReg=(type,str)=>{
            var card=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            var phone=/^1[34578]\d{9}$/;
            // if(reg.test(str))
            //     return true;
            // else
            //     return false;
            switch(type){
              case "card" :
                  return card.test(str)?true:false;
              case "phone" :
                  return phone.test(str)?true:false;
              default :
            }
}

/**
 * 新增病例校验方法
 */

 
Tool.newCasesCheck={
  compareDate:function(current,pre,descp1,descp2){
        if(!current || typeof current=='object' || !pre || typeof pre=='object')
            return true;
        if(!Tool.handleDate.compareDate(current,pre)){
          if(descp1=='出生日期' && descp2=='当前日期'){
            showError('该病患尚未出生，无法创建新生儿病历');
            return false;
          }
          showError(descp2+'不能早于'+descp1);
          return false;
        }
        return true;
    },
  lengthJudge:function(string,descp,length){
        if(!string || typeof string == 'object')
            return true;
        if(Tool.trim(string).length>length){
          showError(descp+"长度不能超过"+length);
          return false;
        }
        return true;
    },
  checkID:function(type,str,descp){
        if((!str || typeof str=='object')&&type!='1'){
            return true;
        }
        if((!str || typeof str=='object')&&type=='1'){
            str='';
        }
        if(type=="1"){
            if(!Tool.checkReg('card',str)){
                showError(descp+'格式不正确！');
                return false;
            }
        }
        return true;
    },
  checkPhone:function(str,type){
        if(!str || typeof str=='object')
            return true;
        if(!Tool.checkReg('phone',str)){
            showError(type+'格式不正确！');
            return false;
        }
        return true;
    }
}

Tool.archivesCheck={
  lengthJudge:function(string,descp,length){
        if(!string || typeof string == 'object')
            return true;
        if(Tool.trim(string).length>length){
          showError(descp+"长度不能超过"+length);
          return false;
        }
        return true;
    }
}

//计算容器高度
Tool.computeHeight={
  computeH:function(offset,...arg){
    let height=document.body.clientHeight;
    for(let id in arg){
      if(arg.hasOwnProperty(id)){
        let idHeight=document.getElementById(arg[id]).offsetHeight;
        height-=idHeight;
      }
    }
    return height-offset;
  }
}

//判断新旧props是否相等
Tool.equals={
  map:function(next,now){
    let map1=Map(next);
    let map2=Map(now);
    let flag = is(map1,map2);
    return flag;
  },
  list:function(next,now){
    let List1=List(next);
    let List2=List(now);
    let flag = is(List1,List2);
    return flag;
  }
}

//判断超时
Tool.sessionTimeOut= {
  logOut:function(xhr){
    if(!xhr || !xhr.status || xhr.status!=900)
      return;
    if(xhr.status == 900){
      let times = sessionStorage.getItem('sessionOutTimes');
      if(!times){
        alert("已超时退出，请重新登录。");
        sessionStorage.setItem('sessionOutTimes',1);
      }
      window.location.href = BIOSANCONFIG.returnIndex;
    }
  }
}

//Object.keys 顺序获取
Tool.Obejct={
  keys:function(object){
    let temp=[];
    
    if(!object)
      return temp;

    let map = new Map(object);

    for (let key of map.keys()) {
      temp.push(key);
    }

    return temp;
  }
}
//给组件类绑定成员方法
Tool.bind = (instace,methodList) =>{
  if(!methodList || methodList.length==0)
    return;
  methodList.map((item)=>{
    let reference=instace[item];
    if(!reference)
      return;
    instace[item]=reference.bind(instace);
  })
}
Tool.getType=(e)=>{
    let type=Object.prototype.toString.call(e);
    if(type=='[object Array]'){
        return false;
    }
    if(type=='[object Object]'){
        return true;
    }
}
