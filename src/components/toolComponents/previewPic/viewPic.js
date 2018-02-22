//预览
import React from 'react';
import {Row,Col,Icon} from 'monkeyui';
class ViewPic extends React.Component {
  constructor(props){
    super(props);
    let height=document.body.clientHeight-131;
    this.state={
      fileList:this.changeActive(this.props.fileList),
      rightUrl:this.props.fileList.length==0?"":this.props.fileList[0].url,
      bgWord:'none',
      height:height
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({fileList:this.changeActive(nextProps.fileList),rightUrl:nextProps.fileList[0].url})
  }
  componentWillMount(){

  }
  componentWillUnmount() {
    console.log(111);
    let scale_B=document.getElementById("scale_B");
    scale_B.onclick=null;
  }
  componentDidMount() {
      var deg=0;
      var scale=1;
      // var scale_S=1;
      /*
        图片旋转transform-origin
      */
      let bigImg=this.refs._bigImg;
      let scale_B=this.refs._scale_B;
      let big_hov=this.refs._big_hov;
      let retweet=this.refs._retweet;
      let rotate_hov=this.refs._rotate_hov;
      let scale_S=this.refs._scale_S;
      let small_hov=this.refs._small_hov;
      

      retweet.onclick=function(){
        deg+=90;
        bigImg.style['transform-origin']='center center';
        bigImg.style.transform = "rotate(" + deg + "deg) scale(" + scale +")";
      }
      /*
        图片放大
      */
      scale_B.onclick=function(){
        scale+=0.2;
        bigImg.style['transform-origin']='left top';
        bigImg.style.transform = "scale(" + scale +")";
      }
      /*
        图片缩小
      */
      scale_S.onclick=function(){
        scale-=0.2;
        scale=scale<0.2?0.2:scale;
        bigImg.style['transform-origin']='left top';
        bigImg.style.transform = "scale(" + scale +")";
        document.getElementsByClassName("bgWord")[0].style.display='none';
      }

      /*样式*/
      
      //放大
      scale_B.onmouseover = function (){
        big_hov.style.background="url('./Layout/index/Images/large_white.png') no-repeat center center";
        big_hov.style.backgroundSize="100% 100%";
      }
      scale_B.onmouseout = function (){
        big_hov.style.background="url('./Layout/index/Images/large_hover.png') no-repeat center center";
        big_hov.style.backgroundSize="100% 100%";
      }
      //旋转
      retweet.onmouseover = function (){
        rotate_hov.style.background="url('./Layout/index/Images/rotate_white.png') no-repeat center center";
        rotate_hov.style.backgroundSize="100% 100%";
      }
      retweet.onmouseout = function (){
        rotate_hov.style.background="url('./Layout/index/Images/rotate_hover.png') no-repeat center center";
        rotate_hov.style.backgroundSize="100% 100%";
      }
      //缩小
      scale_S.onmouseover = function (){
        small_hov.style.background="url('./Layout/index/Images/small_white.png') no-repeat center center";
        small_hov.style.backgroundSize="100% 100%";
      }
      scale_S.onmouseout = function (){
        small_hov.style.background="url('./Layout/index/Images/small_hover.png') no-repeat center center";
        small_hov.style.backgroundSize="100% 100%";
      }
  }
  changeActive(arr){
    for(let i=0;i<arr.length;i++){
      if(i==0)
        arr[i].active=true;
      else
        arr[i].active=false;
    }
    return arr;
  }
  changeUrl(id){
    //大图状态初始化
    document.getElementById("bigImg").style.transform = "rotate(0deg)";
    document.getElementById("bigImg").style.transform = "scale(1)";
    document.getElementsByClassName("bgWord")[0].style.display='block';

    this.setState({rightUrl:"./Layout/index/Images/lucency.png"});//去掉之前展示的图片
    //0.5秒后下载大图
    setTimeout(()=>{this.setState({rightUrl:this.leftToRight(id)})},500);
    
  }
  leftToRight(id){
    let fileList=this.state.fileList;
    let _id="";
    for(let i=0;i<fileList.length;i++){
      if(fileList[i].fileId==id){
        fileList[i].active=true;
        _id=fileList[i].url;
      }else
        fileList[i].active=false;
    }
    this.setState({fileList:this.state.fileList})
    return _id;
  }
  imgError(){
    let url=document.getElementById("bigImg").src;
    window.open(url);
  }
  render(){
    let fileList=this.state.fileList;
    let delFlag=this.props.delFlag||'block';
    return (
      <Row>
          <Col span={4}>
              <div style={{height:this.state.height,overflowY:'scroll'}} className="leftNav">
                <ul style={{height:'100%',overflowY:'auto'}} className="leftPicList">
                  {
                    fileList.length!=0?(this.state.fileList.map((item,index)=>{
                      return  <li key={item.fileId} onClick={()=>this.changeUrl(item.fileId)}>
                                  <img
                                      style={{border:item.active?"2px solid red":"2px solid #108ee9"}} 
                                      src={item.thumbUrl}/>
                                  <span style={{display:delFlag}}  
                                        onClick={(e)=>this.props.del(e,item.fileId)}>×</span>
                              </li> 
                    })):null
                  }
                </ul>
              </div>
          </Col>
          <Col span={20} style={{height:this.state.height,overflow:'scroll'}}>
              <div className="picContainer">
                  <div id="rotate">
                        <span className="icon_m icon_h" id="scale_B" ref="_scale_B"><span className="icon_bg big_hov" id="big_hov" ref="_big_hov"></span>放大</span>
                        <span className="icon_m icon_h" id="retweet" ref="_retweet"><span className="icon_bg rotate_hov" id="rotate_hov" ref="_rotate_hov"></span>旋转</span>
                        <span className="icon_m icon_h" id="scale_S" ref="_scale_S"><span className="icon_bg small_hov" id="small_hov" ref="_small_hov"></span>缩小</span>
                  </div>
                  <img src={this.state.rightUrl} 
                       id="bigImg"
                       ref="_bigImg"
                       onError={()=>this.imgError()}/>
                  <span className="bgWord">图片正在下载中...</span>
              </div>
          </Col>
      </Row>
    )
  } 
};

module.exports = ViewPic;
