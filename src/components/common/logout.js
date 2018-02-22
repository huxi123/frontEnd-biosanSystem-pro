//登出 修改密码
import React from 'react';
import connectToStore from '../../Redux/Store/connectToStore';
import {Tool} from '../../config/tools.js';
import {Link ,hashHistory} from 'react-router';
import {Modal,Menu,Button,Icon,Row,Col,Dropdown} from 'monkeyui';
const confirm = Modal.confirm;


class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      mobile:""
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props.menuListData!=nextProps.menuListData){
      this.setState({username:nextProps.menuListData.data.data.username,mobile:nextProps.menuListData.data.data.mobile});
    }
  }
  componentWillMount(){

  }
  componentWillUnmount() {
  
  }
  componentDidMount() {
      
  }
  showConfirm(){
    let that=this;
    confirm({
      title: '确定要退出吗？',
      onOk() {
        that.loyout();
      },
      onCancel() {
      },
    });
  }
  loyout(){
    var sessionId=sessionStorage.getItem("sessionId");
    $.ajax({
          type : 'get',
          url : '../employee/logout',
          async : true,
          success : function (data) {
            sessionStorage.removeItem('sessionId');
            sessionStorage.removeItem('navList');
            // sessionStorage.removeItem('menuList');
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('systemName');
            
            window.location.href = BIOSANCONFIG.returnIndex;
          },
          error:function (xhr, status, err) {
          }
      })
  }
  changePass(){
    let {mobile}=this.state;
    window.open(`./changePass.html?mobile=${mobile}`);
  }
  setMenu(){
    let menu=<Menu>
              <Menu.Item>
                <a rel="noopener noreferrer" onClick={()=>{this.changePass()}}>修改密码</a>
              </Menu.Item>
            </Menu>
    return menu;
  } 
  render(){
    return (
      <div className="loy_c" id='toolH'>
        <Row style={{height:'100%'}}>
          <Col span={18}></Col>
          <Col span={2} className="loyout top_border">{this.state.username}</Col>
          <Col span={2} className="loyout top_border_r"><Icon type="setting" className="iconStyle"/>
             <Dropdown overlay={this.setMenu()} trigger='click'><span>设置</span></Dropdown>
          </Col>
          <Col span={2} className="loyout " onClick={()=>this.showConfirm()}><Icon type="logout" className="iconStyle"/>退出</Col>
        </Row>
      </div>
    )
  } 
};



export default connectToStore([],['menuListData'],Layout);
