//新增申请
import React from 'react';
import UploadPic from '../toolComponents/UploadPic/index.js';//图片上传组件
import PreviewPic from '../toolComponents/previewPic/picContainer.js';//图片预览组件
import template from '../common/pureToContainer.js';
import {Link,hashHistory} from 'react-router';
import Loading from '../toolComponents/loading.js';//加载组件
import {showSuccess,showError,errorMessage} from '../toolComponents/dialog.js';
import {Tool} from '../../config/tools.js';

import {Modal,Menu,Icon,Select,Button,Row,Col,Input} from 'monkeyui';
const Option=Select.Option;
const noop=()=>{}

const SetPicClass=function(){
  this.downloadUrl=downloadUrl;
}

SetPicClass.prototype={
    removeByValue:function(arr,val){
        for(let i=0; i<arr.length; i++) {
          if(arr[i] == val) {
            arr.splice(i, 1);
            break;
          }
        }
        return arr;
    },
    removeByUid:function(arr,val){
      for(let i=0;i<arr.length;i++){
        if(arr[i].fileId==val){
          arr.splice(i,1);
          break;
        }
      }
      return arr;
    },
    setShowObj(fileData){
      let obj={};
      let fileId=fileData.file_id||fileData.fileId;
      obj.fileId=fileId
      obj.name="";
      obj.status="done";
      obj.thumbUrl=this.downloadUrl+"getSmallImage.action?id="+fileId;
      obj.url=this.downloadUrl+"getImage.action?id="+fileId;

      return obj;
    },
    initPicShowJson(arr){
      let piclist=[];
      let picObj={};
      for(let i=0;i<arr.length;i++){
        picObj['H'+arr[i].type_code]=[];
      }
      for(let i=0;i<arr.length;i++){
        if(picObj['H'+arr[i].type_code].length==0)
          picObj['H'+arr[i].type_code]=[];
        picObj['H'+arr[i].type_code].push(this.setShowObj(arr[i]));
      }
      return picObj;
    },
    setShowPicType(imgList,obj){
      imgList.map((item)=>{
          let children=item.children;
          children.map((ch)=>{
            obj['H'+ch.code]=[];
          })
        })
      return obj;
    }
}

const getInsList=(data)=>{
    if(!data||data.length==0)
      return null;
    return data.map((item)=>{
      return <Option key={item.institution_id} value={item.institution_id}>{item.institution_name}</Option>
    })
}
//////////////////////////////////////////////


class SetCheckList{
  constructor(){
      this.checkPicList=[],
      this.checkList=[
          {
            type:'patient_name',
            require:false,
            errorMessage:'病源姓名不能为空'
          },
          {
            type:'patient_birthday',
            require:false,
            errorMessage:'出生日期为空或非法'
          },
          {
            type:'patient_lmp',
            require:false,
            errorMessage:'末次月经为空或非法'
          },
          {
            type:'age_birth',
            require:false,
            errorMessage:'预产年龄不能为空'
          },
          {
            type:'t21',
            require:false,
            errorMessage:'t21风险值不能为空'
          },
          {
            type:'t18',
            require:false,
            errorMessage:'t18风险值不能为空'
          },
          {
            type:'ntd',
            require:false,
            errorMessage:'ntd风险值不能为空'
          },
          {
            type:'screening_conclusion',
            require:false,
            errorMessage:'筛查结论不能为空'
          },
          {
            type:'institution_id',
            require:false,
            errorMessage:'递送医院不能为空'
          }
      ]
  }
  initCheckList(){
    let list=this.checkList;
    for(let i=0;i<list.length;i++){
      list[i].require=true;
    }
  }
  judgeUploadList(uploadList,code){
    for(let i=0;i<uploadList.length;i++){
      if(uploadList[i].type_code==code)
        return true;
    }
    return false;
  }
  checkValue(uploadList){
    let piclist=this.checkPicList;
    for(let i=0;i<piclist.length;i++){
      let children=piclist[i].children;
      let flag=false;
      let index=0;
      for(let j=0;j<children.length;j++){
        flag=this.judgeUploadList(uploadList,children[j].code);
        if(flag==true)
          index++; 
      }
      if(index==0){
        errorMessage(piclist[i].errorMessage);
        return false;
      }
    }
    return true;
  }
  initPicTypeAndSetErrorMessage(piclist){
    let list=Tool.deepCopy(piclist);
    for(let i=0;i<list.length;i++){
      list[i].errorMessage=list[i].name+'下的图片不能为空';
    }
    this.checkPicList=list;
  }
  checkPicType(fileList){

  }
  setCheckValue(value,type){
    let checkList=this.checkList;
    checkList.map((item)=>{
        if(item.type && item.type==type){
          if(value=='')
            item.require=false;
          else
            item.require=true;
        }
    })
    return checkList;
  }
  checkUploadValues(){
    let checkList=this.checkList;
    for(let i=0;i<checkList.length;i++){
      if(checkList[i].require==false){
          errorMessage(checkList[i].errorMessage);
          return false;
      }
    }
    return true;
  }
}
//////////////////////////////////////////////
var objInstance=null;
var checkListInstance=null;

class AddApplyDetails extends React.Component {
  constructor(props){
    super(props);
    //实例化图片相关操作类
    objInstance=new SetPicClass();
    //字段类型检查
    checkListInstance=new SetCheckList();
      this.state={
        insData:[],
        imgTypeData:[],
        jsonData:{
          consultation_bill_id:'',
          images:[]
        },
        showPicJson:{},
        loading:'hide',
        previewPicVisible:false,//预览图片组件
        previewPicName:"",//预览图片名字
        previewPicList:""//预览图片列表
      }
    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.insData.data && this.props.insData!=nextProps.insData){
      this.setState({insData:nextProps.insData.data.data});
    }
    if(nextProps.imgTypeData.data && this.props.imgTypeData!=nextProps.imgTypeData){
      /*设置显示图片类型*/
      let imgList=nextProps.imgTypeData.data.data;
      //图片检查初始化
      checkListInstance.initPicTypeAndSetErrorMessage(imgList);
      let showPicJson={};
      if(this.props.applicationDetailsData.data && !this.props.newApply)
        showPicJson=this.state.showPicJson;
      else
        showPicJson=objInstance.setShowPicType(imgList,this.state.showPicJson)
      // let obj=
      this.setState({imgTypeData:nextProps.imgTypeData.data.data,showPicJson:showPicJson});
    }
    if(nextProps.applyConsulationData.data &&this.props.applyConsulationData!=nextProps.applyConsulationData){
        let data=nextProps.applyConsulationData;
        if(data.data.result=='success'){
          showSuccess('提交成功！');
          this.props.getApplicationDetails(data.data.data);
        }
        this.setState({loading:'hide'});
    }
    if(nextProps.applicationDetailsData.data && !this.props.newApply){
      let {data_source,flag_code,images,consultation_bill_id,patient_name,
        patient_birthday,patient_lmp,age_birth,
        t21,t18,ntd,screening_conclusion,remark,
        institution_id,institution_name}=nextProps.applicationDetailsData.data.data;
        let picObj=objInstance.initPicShowJson(images);
        //检查标记重置
        checkListInstance.initCheckList();
        let stateObj={
          jsonData:{
            consultation_bill_id,
            patient_name,
            patient_birthday,
            patient_lmp,
            age_birth,
            t21,
            t18,
            ntd,
            screening_conclusion,
            remark,
            institution_id,
            institution_name,
            images
          },
          showPicJson:picObj,
          loading:'hide',
          data_source,
          flag_code
        }
        this.setState(stateObj);
    }
  }
  componentWillMount(){
    //取递送机构
    this.props.getIns();
    //取图片类型
    this.props.getImgType();
    
  }
  componentWillUnmount() {
    objInstance=null;
    checkListInstance=null;
  }
  componentDidMount() {
      
  }
  cancle(){
    hashHistory.push("sendApplication");
  }
  onPreview(file,picName,picType){
      this.setState({previewPicVisible:true,previewPicName:picName,previewPicList:this.state.showPicJson['H'+picType]});
  }
  closePreviewModal(){
    this.setState({previewPicVisible:false})
  }
  handleValues(e,type){
    let jsonData=Tool.deepCopy(this.state.jsonData);
    if(!e.target){
      jsonData.institution_id=e.key;
      jsonData.institution_name=e.label;
      checkListInstance.setCheckValue(e.key,'institution_id');
    }else{
      if(e.target.validationMessage && e.target.validationMessage!=""){
        errorMessage(e.target.validationMessage);
        return ;
      }
      jsonData[type]=e.target.value;
      checkListInstance.setCheckValue(e.target.value,type);
    }
    this.setState({jsonData:jsonData});
  }
  onSuccess(response,file,code){
    // 设置上传list
    let upObj={fileId:file.file_id,type_code:code};
    this.state.jsonData.images.push(upObj);
    // 设置显示list
    let showObj=objInstance.setShowObj(file);
    this.state.showPicJson['H'+code].push(showObj);

    this.setState(this.state);
  }
  removePic(file,code){
    let upArr=objInstance.removeByUid(this.state.jsonData.images,file.fileId);
    let showArr=objInstance.removeByUid(this.state.showPicJson['H'+code],file.fileId);
    this.setState(this.state);
  }
  setImgType(){
    const props={
        uploadUrl:uploadUrl,
        multiple:true
    }
    let {showPicJson,imgTypeData}=this.state;
    let domArr=[];
    if(!imgTypeData || imgTypeData.length==0)
      return null;
    imgTypeData.map((item)=>{
      let children=item.children;
      let root=(<Row className="r-padding r-p-l" key={item.code}>
                  <Col span={24} key={item.code+"1"}><span className="startColor">*</span>{item.name}</Col>
                </Row>);
      ///////////////////////////////////////
      domArr.push(root);
      if(children && children.length!=0){
          children.map((ch)=>{
            domArr.push(<Row className="r-padding r-p-l" key={ch.code}>
                        <Col span={24} key={ch.code+"1"}>{ch.name}
                          <UploadPic {...props}
                                  fileList={this.state.showPicJson['H'+ch.code]}
                                  onSuccess={(response, file)=>{this.onSuccess(response, file,ch.code)}}
                                  removePic={(file)=>this.removePic(file,ch.code)}
                                  preivewPic={(file)=>this.onPreview(file,ch.name,ch.code)}/>
                        </Col>
                    </Row>)
          })
        }
    })
      return domArr;
  }
  /////////////////
  submit(){
    
    let valueFlag=checkListInstance.checkUploadValues();
    if(!valueFlag)
      return;
    let picFlag=checkListInstance.checkValue(this.state.jsonData.images);
    if(!picFlag)
      return;
    this.setState({loading:'show'});
    this.props.applyConsultation(this.state.jsonData);
  }
  getPrivilege(newApply,data_source,flag_code){
    let privilege='';
    if(newApply && newApply=='yes')
      return true;
    if(data_source=='APPLY' && (flag_code=='TRAIL_RETURN'||flag_code=='CONSULTATION_RETURN'))
      return true;
    else
      return false;
  }
  ///////////////////
  render(){
    let {patient_name,patient_birthday,patient_lmp,age_birth,t21,t18,ntd,screening_conclusion,remark,institution_id,institution_name}=this.state.jsonData;
    let {insData,imgTypeData,loading,data_source,flag_code}=this.state;
    let newApply=this.props.newApply?this.props.newApply:'';
    let visible=this.props.visible?this.props.visible:false;
    let insList=getInsList(insData);
    let imgTypeList=imgTypeData;
    
    const previewProps={
      visible:this.state.previewPicVisible,
      title:this.state.previewPicName,
      fileList:this.state.previewPicList,
      close:this.closePreviewModal.bind(this),
      top:'20px',
      delFlag:'none'
    }

    let privilege=this.getPrivilege(newApply,data_source,flag_code);
    
    return (
      <div style={{height:'100%'}}>
          <PreviewPic {...previewProps}/>
          <Loading text="提交中..." loading={loading}/>
          <Row className="addad_but_con" style={{display:privilege?'block':'none'}}>
              <Button className="addp f-r" onClick={()=>this.submit()}>提交</Button>
              <Button className="f-r" style={{display:visible?'block':'none'}} onClick={()=>this.cancle()}>取消</Button>
          </Row>
          
          <Row style={{marginTop:'10px','height':'100%'}}>
              <Col span={18} style={{height:'100%'}}>
                <div style={{height: '100%',overflowY:'scroll'}}>
                  <Row className="r-padding">
                      <Col span={2} className="addad_step_title">基本信息</Col>
                  </Row>
                  <Row className="r-padding">
                      <Col span={3} className="t-r"><span className="startColor">*</span>病源姓名：</Col>
                      <Col span={6}>
                          <Input 
                              value={patient_name}
                              onChange={(e)=>this.handleValues(e,'patient_name')}/>
                      </Col>
                      <Col span={3} className="t-r"><span className="startColor">*</span>出生日期：</Col>
                      <Col span={6}>
                          <Input style={{width:'100%'}}
                                  type="date"
                                  value={patient_birthday}
                                  max="3000-01-01"
                                  onChange={(e)=>this.handleValues(e,'patient_birthday')}/>
                      </Col>
                  </Row>
                  <Row className="r-padding">
                      <Col span={3} className="t-r"><span className="startColor">*</span>末次月经：</Col>
                      <Col span={6}>
                          <Input style={{width:'100%'}}
                                  type="date"
                                  max="3000-01-01"
                                  value={patient_lmp}
                                  onChange={(e)=>this.handleValues(e,'patient_lmp')}/>
                      </Col>
                      <Col span={3} className="t-r"><span className="startColor">*</span>预产年龄：</Col>
                      <Col span={6}>
                          <Input style={{width:'100%'}}
                                  value={age_birth}
                                  onChange={(e)=>this.handleValues(e,'age_birth')}/>
                      </Col>
                  </Row>
                  <Row className="r-padding">
                      <Col span={2} className="addad_step_title">产筛结果</Col>
                  </Row>
                  <Row className="r-padding">
                      <Col span={3} className="t-r"><span className="startColor">*</span>T21风险值：</Col>
                      <Col span={6}>
                          <Input style={{width:'100%'}}
                                  value={t21}
                                  onChange={(e)=>this.handleValues(e,'t21')}/>
                      </Col>
                      <Col span={3} className="t-r"><span className="startColor">*</span>T18风险值：</Col>
                      <Col span={6}>
                          <Input style={{width:'100%'}}
                                  value={t18}
                                  onChange={(e)=>this.handleValues(e,'t18')}/>
                      </Col>
                  </Row>
                  <Row className="r-padding">
                      <Col span={3} className="t-r"><span className="startColor">*</span>NTD风险值：</Col>
                      <Col span={6}>
                          <Input style={{width:'100%'}}
                                  value={ntd}
                                  onChange={(e)=>this.handleValues(e,'ntd')}/>
                      </Col>
                      <Col span={3} className="t-r"><span className="startColor">*</span>筛查结论：</Col>
                      <Col span={6}>
                            <Input style={{width:'100%'}}
                                  value={screening_conclusion}
                                  onChange={(e)=>this.handleValues(e,'screening_conclusion')}/>
                      </Col>
                  </Row>
                  <Row className="r-padding">
                      <Col span={2} className="addad_step_title">图片资料</Col>
                  </Row>
                  {
                    this.setImgType()
                  }
                </div>
              </Col>
              <Col span={6} style={{paddingRight: '20px'}}>
                  <div style={{display:newApply=='yes'?'block':'none'}}>
                    <Row className="r-padding">
                        <Col span={8} className="addad_step_title">选择医院</Col>
                    </Row>
                    <Row className="r-padding">
                        <Col span={24}>
                            <Select style={{width:'100%'}}
                                    labelInValue={1?true:false}
                                    value={{key:institution_id,label:institution_name}}
                                    onChange={(value)=>this.handleValues(value)}>
                                  {insList}
                            </Select>
                        </Col>
                    </Row>
                  </div>
                  <Row className="r-padding">
                      <Col span={8} className="addad_step_title">备注</Col>
                  </Row>
                  <Row>
                      <Input type="textarea" 
                              value={remark}
                              placeholder="关于这个病患，申请会诊的一些情况说明，可以记录在这里。。。"
                              onChange={(e)=>this.handleValues(e,'remark')}
                              rows={20}/>
                  </Row>
              </Col>
          </Row>
      </div>
    )
  } 
};

export default template({
    id: 'AddApplyDetails',  
    component: AddApplyDetails,
    url: 'AddApplyDetails'
})