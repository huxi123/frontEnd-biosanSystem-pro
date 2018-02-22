//
export const sex=[
    {
        descp:'',
        value:''
    },
    {
        descp:'男',
        value:'男'
    },
    {
        descp:'女',
        value:'女'
    },
    {
        descp:'未知',
        value:'未知'
    }
]

export const nationType = [
    "","汉族","蒙古族","回族","藏族","维吾尔族","苗族","彝族","壮族","布依族","朝鲜族","满族","侗族","瑶族","白族","土家族","哈尼族","哈萨克族","傣族","黎族","傈僳族","佤族","畲族","高山族","拉祜族","水族","东乡族","纳西族","景颇族","柯尔克孜族","土族","达斡尔族","仫佬族","羌族","布朗族","撒拉族","毛南族","仡佬族","锡伯族","阿昌族","普米族","塔吉克族","怒族","乌孜别克族","俄罗斯族","鄂温克族","德昂族","保安族","裕固族","京族","塔塔尔族","独龙族","鄂伦春族","赫哲族","门巴族","珞巴族","基诺族"
];

export const credentialsType = [
    {
        descp:'身份证',
        value:'1'
    },
    {
        descp:'出生证',
        value:'2'
    },
    {
        descp:'护照',
        value:'3'
    },
    {
        descp:'军官证',
        value:'4'
    }
]

export const houseType = [
    {
        descp:'',
        value:''
    },
    {
        descp:'农业户口',
        value:'1'
    },
    {
        descp:'非农业户口',
        value:'0'
    },
    {
        descp:'省外',
        value:'2'
    }
]

export const initLevel2NavListType1=[
              {
                  menu_name:'病情概况',
                  menu_link:'illnessSituation',
                  del_flag:false,
                  active:true
              },
              {
                  menu_name:'病程列表',
                  menu_link:'dCourseList',
                  del_flag:false,
                  active:false
              },
              {
                  menu_name:'汇总图表',
                  menu_link:'collectCharts',
                  del_flag:false,
                  active:false
              },
              {
                  menu_name:'基础信息',
                  menu_link:'baseInfo',
                  del_flag:false,
                  active:false
              }
]

export const initLevel2NavListType2=[
              {
                  menu_name:'病情概况',
                  menu_link:'illnessSituation',
                  del_flag:false,
                  active:false
              },
              {
                  menu_name:'病程列表',
                  menu_link:'dCourseList',
                  del_flag:false,
                  active:false
              },
              {
                  menu_name:'汇总图表',
                  menu_link:'collectCharts',
                  del_flag:false,
                  active:false
              },
              {
                  menu_name:'基础信息',
                  menu_link:'baseInfo',
                  del_flag:false,
                  active:true
              }
]

/**
 * 用药记录 全局数据
 * 
 * */
export const drugMethod = ['','口服','静脉注射','皮下注射'];

export const drugItems = ['','优甲乐（左甲状腺素钠片）','氢化可的松','氟氢可的松','氨基酸及微量元素','左卡尼汀','甲硝唑','粘菌素','左旋肉碱','中链三酰甘油','亚叶酸钙','甜菜碱',"叶酸",'维生素B1','维生素B2','维生素B6','维生素B12'];

export const unitDW = ['','mg','ml','IU','L','g','μg','ng'];

export const rateUnitD = ['','次/天','次/每4小时','次/每6小时','次/每8小时','次/周','次/月'];

export const treatState = ['','待治疗','首次用药','持续服药','减少用药','更换药品','停药观察','结束用药']

/**
 * 就诊类型
 */
//  var recordType=["0-复诊","11-诊断依据","1-首诊","2-入院","3-出院","10-定时随访","4-手术","5-影像","6-化验"," 7-体征","8-病历","9-处方医嘱"]; 

export const recordType = [
    {
        id:'',
        descp:''
    },
    {
        id:'0',
        descp:'复诊'
    },
    {
        id:'10',
        descp:'定时随访'
    },
    {
        id:'1',
        descp:'首诊'
    }
]
/**
 * 生长曲线默认配置
 */
export const  defaultOption = {
    //多折线图--无阴影
    title: {
        show:false,
        text: '折线图堆叠'
    },
    //提示框，鼠标悬浮交互时的信息提示  
    tooltip: {
        show:false,
        //trigger为触发类型，有item和axis两种。当trigger为’item’时只会显示该点的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
        trigger: 'axis',
        //position为提示的位置
        position: function (pt) {
            return [pt[0], '50%'];
        }
    },
    //legend的data: 用于设置图例，data内的字符串数组需要与sereis数组内每一个series的name值对应
    legend: {
        show:false,
        data:[]
    },
    //整体坐标位置
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    //工具箱，如放大、缩小、保存图
    toolbox: {
        feature: {
            restore:{},
            dataView:{},
            dataZoom:{
                show:true
            },
            // magicType:{},
            // brush:{},
            saveAsImage: {}
        }
    },
    //X轴坐标
    xAxis: {
        //坐标轴类型，横轴默认为类目型'category' 
        type: 'value',
        name:'',
        nameGap:20,
        nameLocation:'center',
        //初始值与Y轴是否有空隙
        boundaryGap: false,
        min:0,
        max:60,
        interval:6
        //类目型坐标轴文本标签数组
        // data: [0,12,24,36,48,60]
    },
    //Y轴坐标
    yAxis: {
        //坐标轴类型，纵轴默认为数值型'value' 
        type: 'value',
        name:'',
        nameGap:20,
        nameLocation:'center',
        min:0,
        max:40,
        interval:10
        // data: [0,10,20,30,40]
    },
    //sereis的数据: 用于设置图表数据之用。
    series: [
        {
            //系列名称，如果启用legend，该值将被legend.data索引相关  
            name:'',
            //图表类型，必要参数！line,bar,pie，scatter
            type:'line',
            smooth:true,
            // stack: '总量',
            showSymbol:false,
            lineStyle:{
                // normal:{
                //     color:'red',
                //     type:'dashed'
                // }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            smooth:true,
            // stack: '总量',
            showSymbol:false,
            lineStyle:{
                // normal:{
                //     color:'gray',
                //     type:'dashed'
                // }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            smooth:true,
            showSymbol:false,
            // stack: '总量',
            data:[]
        },
        {
            name:'',
            type:'line',
            smooth:true,
            showSymbol:false,
            // stack: '总量',
            data:[]
        },
        {
            name:'',
            type:'line',
            showSymbol:false,
            smooth:true,
            // stack: '总量',
            data:[]
        },
        {
            name:'',
            type:'line',
            showSymbol:false,
            smooth:true,
            // stack: '总量',
            data:[]
        },
        {
            name:'',
            type:'line',
            showSymbol:false,
            smooth:true,
            // stack: '总量',
            data:[]
        },
        {
            name:'',
            type:'line',
            showSymbol:true,
            symbol:'circle',
            symbolSize:4,
            // stack: '总量',
            lineStyle:{
                normal:{
                    color:'red',
                    type:'solid',
                    width:2
                }
            },
            data:[]
        }
    ]
};

/**
 * 成长曲线 type和对应配置项
 */
export const type_name_map= [
    {
        type:'awlist-1',
        x_name:'age(month)',
        y_name:'weight(kg)',
        x_min:0,
        x_max:36,
        x_interval:6,
        y_min:0,
        y_max:25,
        y_interval:5
    },
    {
        type:'ahlist-1',
        x_name:'age(month)',
        y_name:'height(cm)',
        x_min:0,
        x_max:36,
        x_interval:3,
        y_min:40,
        // y_max:140,
        y_max:110,
        y_interval:5
    },
    {
        type:'aslist-1',
        x_name:'age(month)',
        y_name:'head circumference(cm)',
        x_min:0,
        x_max:36,
        x_interval:6,
        y_min:28,
        y_max:60,
        y_interval:2
    },
    {
        type:'whlist-1',
        y_name:'weight(kg)',
        x_name:'height(cm)',
        y_min:0,
        y_max:22,
        y_interval:1,
        x_min:45,
        x_max:105,
        x_interval:10
    },
    {
        type:'bmilist-2',
        x_name:'age(year)',
        y_name:'bmi',
        x_min:2,
        x_max:20,
        x_interval:1,
        y_min:10,
        y_max:50,
        y_interval:10
    },
    {
        type:'whlist-2',
        y_name:'weight(kg)',
        x_name:'height(cm)',
        y_min:8,
        y_max:120,
        y_interval:10,
        x_min:60,
        x_max:220,
        x_interval:10
    },
    {
        type:'ahlist-2',
        x_name:'age(year)',
        y_name:'height(cm)',
        x_min:2,
        x_max:20,
        x_interval:1,
        y_min:60,
        y_max:190,
        y_interval:10
    },
    {
        type:'awlist-2',
        x_name:'age(year)',
        y_name:'weight(kg)',
        x_min:2,
        x_max:20,
        x_interval:1,
        y_min:8,
        y_max:100,
        y_interval:10
    }
]

/**
 * 新增转诊数据
 */
export const transferData = {
    data:{
        name:'',
        sex:'1',
        birthday:'',
        phone1:'',
        phone2:'',
        area:'',
        hospital:'',
        department:'',
        remark:''
    }
}
/**
 * 转诊Modal状态
 */
export const visibleData = {
    data:{
        registVisible:false,
        selectVisible:false,
        transferVisible:false
    }
}