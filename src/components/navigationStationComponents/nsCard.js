
import React, { Component } from 'react';

const NsCard = (props) =>{
    let {navList} = props;
    let cards = navList.length!=0?navList.map((item,index)=>{
        return  <a  className="nscard" href={'#/'+item.menu_link}>
                    <div>
                        <img src={'Layout/page/images/'+item.icon+'.png'} style={{width:'50px',height:'50px',float:'left'}}/>
                        <span>{item.title}</span>
                    </div>
                    <div>{item.descption}</div>
                </a> 
    }):<a>暂无导航菜单，请选择左侧导航</a>
    return <div>{cards}</div>;
}

export default NsCard;
