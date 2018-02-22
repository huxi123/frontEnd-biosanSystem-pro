/**
 * title
 * arrow
 * body
 * footer
 */

 import React, { Component } from 'react';
 import './index.less';

import {Button,Row,Col} from 'monkeyui';

 class Footer extends Component {
     render() {
         let {onCancle,onOk} = this.props;
         return (
             <Row>
                 <Col span={11}>
                 </Col>
                 <Col span={6}>
                    <Button size="small" onClick={()=>onCancle()}>取消</Button>
                 </Col>
                 <Col span={5}>
                    <Button type="primary" size="small" onClick={()=>onOk()}>继续</Button>
                 </Col>
             </Row>
         );
     }
 }
 

 class Modal extends Component {
     constructor(props, context) {
         super(props, context);
         this.state={

         }
     }
     
     render() {
         let {footer,title,width,left,visible,onCancle,onOk} = this.props;
         return (
             <Row className="y-modal-title-container" style={{width:width?width:'210px',left:left?left:'-178px',display:visible?'block':'none'}}>
                 <Row className="y-modal-arrow">
                     <div className="arrow-up"></div>
                 </Row>
                 <Row className="y-modal-title">
                     <Col span={24}>
                        <img src="./Layout/page/images/errorIcon.png" className="y-modal-errorIcon"/>
                        {title}
                     </Col>
                 </Row>
                 <Row className="y-modal-content">
                     {
                        this.props.children
                     }
                 </Row>
                 <Row className="y-modal-footer">
                    {
                        footer ? footer : <Footer onCancle={onCancle} onOk={onOk}/>
                    }
                 </Row>
                 <div className="y-modal-cover"></div>
             </Row>
         );
     }
 }
 
 export default Modal;