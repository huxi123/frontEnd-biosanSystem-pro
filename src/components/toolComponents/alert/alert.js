/**
 * 
 * arrowUp //向上箭头
 * arrowDown //向下箭头
 * 
 */
import React, { Component } from 'react';

import './index.less';

import {Row,Col} from 'monkeyui';

const alertArrowUp = () =>{
    return <Row className="y-alert-arrow">
                     <div className="y-alert-arrow-up"></div>
                 </Row>
}

const alertArrowDown = () =>{
    return <Row className="y-alert-arrow">
                     <div className="y-alert-arrow-down"></div>
                 </Row>
}

class Alert extends Component {
    render() {
        let {content,visible,arrowUp,left,top,type} = this.props;
        return (
            <Row className="y-alert-container" style={{display:visible?'block':'none',left:left?left:'',top:top?top:''}}>
                 {
                    arrowUp ? alertArrowUp() : null
                 }
                 <Row className="y-alert-content">
                     <Col>
                        { type == 'require' ? null : <span className="y-alert-tips">!</span>}
                        { content }
                    </Col>
                 </Row>


                 
                 {
                    arrowUp ?  null : alertArrowDown()
                 }
            </Row>
        );
    }
}

export default Alert;