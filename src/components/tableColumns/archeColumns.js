//归档列表
import React from	'react';
import {Tool} from '../../config/tools.js';
const getArcheColumns=(func)=>{
	return [
          {
            title: '病源姓名',
            dataIndex: 'patient_name',
            key: 'patient_name',
            width:200,
            render:(text,row,index)=>{
              row.patient_name=Tool.subStr(row.patient_name,4);
              return row.patient_name;
            }
          },{
            title: '病历号',
            dataIndex: 'medicalrecord_num',
            key: 'medicalrecord_num',
            width:200,
            render:(text,row,index)=>{
              row.medicalrecord_num=Tool.subStr(row.medicalrecord_num,15);
              return row.medicalrecord_num;
            }
          },{
            title: '出生日期',
            dataIndex: 'patient_birthday',
            key: 'patient_birthday',
            width:200

          },{
            title: '诊断状态',
            dataIndex: 'diagnosis_state',
            key: 'diagnosis_state',
            width:200,
            render:(text, row, index)=>{
                switch (text) {
                  case 1:
                    return '待确诊';
                    break;
                  case 2:
                    return '疑似';
                    break;
                  case 3:
                    return '排除';
                    break;
                  case 4:
                    return '确诊';
                    break;
                  case 5:
                    return '失联';
                    break;
                  case 6:
                    return '康复';
                    break;
                  case 7:
                    return '死亡';
                    break;
                  default:
                    break;
                }
            }
          },{
            title: '疾病名称',
            dataIndex: 'disease_name',
            key: 'disease_name',
            width:250,
            render:(text,row,index)=>{
              row.disease_name=Tool.subStr(row.disease_name,15);
              return row.disease_name;
            }
          },{
            title: '母亲姓名',
            dataIndex: 'mother_name',
            key: 'mother_name',
            width:200,
            render:(text,row,index)=>{
              row.mother_name=Tool.subStr(row.mother_name,4);
              return row.mother_name;
            }
          },{
            title: '联系手机',
            dataIndex: 'patient_mobile',
            key: 'patient_mobile'
          }
        ];
} 

module.exports=getArcheColumns;