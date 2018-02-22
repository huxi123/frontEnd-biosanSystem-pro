import React, {Component, PropTypes} from 'react';
import Navs from '../navs.js'; //导航
import Loyout from './logout.js';//设置
//global laoding
import GlobalLoading from './globalLoading.js';
import {Row,Col} from 'monkeyui';

const Home = (props) =>{
  return (
      <div style={{height:'100%'}} className="forms">
          <Row style={{height:'100%'}}>
            <Col className="homeLeft">
                <Navs />
            </Col>
            <Col className="homeRight">
                <Loyout/>
                <GlobalLoading/>
                {props.children}
            </Col>
          </Row>
      </div>
  );
}

export default Home;