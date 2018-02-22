import {Link } from 'react-router';
import template from './common/pureToContainer.js';
import connectToStore from '../Redux/Store/connectToStore';
import {Modal,Menu,Icon,Spin} from 'monkeyui';
const SubMenu = Menu.SubMenu;

const hos_title={
  color:'#fff',
  padding:'10px',
  fontSize:'13px',
  textAlign:'left',
  paddingLeft:'30px'
}

const doc_name={
  color:'#fff',
  padding:'10px',
  fontSize:'17px',
  textAlign:'left',
  paddingLeft:'30px'
}

const _icon={
  width:'25px',
  height:'25px',
  position: 'relative',
  top: '6px',
  marginRight: '5px'
}

const iconStyle={
  width:'18px',
  height:'18px',
  position:'relative',
  top:'3px',
  left:'-4px'
}


const getMenuCode = (data,name) =>{
  for(let i=0;i<data.length;i++){
    if(data[i].menu_name==name)
      return data[i].menu_code;
  }
  return '';
}


class LeftPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuList:[],
      current:"",
      openKeys: ['000'],
      theme:'dark'
    }
  }
  handleClick(e) {
    this.setState({current:key});
  }
  onOpenChange(openKeys) {
    console.log(openKeys)
    const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));
    this.setState({ openKeys: this.getKeyPath(latestOpenKey) });
  }
  getKeyPath(key) {
    const map = {
      sub1: ['sub1'],
      sub2: ['sub2'],
      sub3: ['sub3']
    };
    return map[key] || [];
  }
  componentWillReceiveProps(nextProps){
  }
  componentWillMount(){
    //获取菜单列表
    // this.props.getMenuList();
  }
  componentWillUnmount() {
      
  }
  componentDidMount() {
  }
  /**
   * 递归构造菜单列表，支持多级，深层
   * @param {*Array} list 
   * @param {*Boolean} type 
   */
  setMenuList(list,type = false){
    let that = this;
    let menuList=list?list.map(function(item,index){
      let children=item.children;
      if(children&&children.length!=0){
        return <SubMenu key={item.menu_code} title={<span>{!type ? <img style={iconStyle} src={"./Layout/index/Images/"+item.menu_link+".png"}/>:null}<span>{item.menu_name}</span></span>}>
            { 
              children.map(function(e,i){
                let level2_children = e.children;
                let temp;
                if(level2_children && level2_children.length!=0)
                  //构造结构便于递归
                  temp = that.setMenuList([e],true);
                else
                  temp = <Menu.Item key={e.menu_code}><Link to={"/"+e.menu_link}>{e.menu_name}</Link></Menu.Item>;
                return temp;
              })
            }
      </SubMenu>
      }else{
        if(item.menu_link=='/'){
          return <Menu.Item key={item.menu_code} title=""><Link to={"/"+item.menu_link?item.menu_link:""}><span><img style={iconStyle} src={"./Layout/index/Images/u8.png"}/></span>{item.menu_name}</Link></Menu.Item>
        }
        return <Menu.Item key={item.menu_code} title="">
                  <Link to={"/"+item.menu_link?item.menu_link:""}>
                    {item.menu_link?<span><img style={iconStyle} src={"./Layout/index/Images/"+item.menu_link+".png"}/></span>:<span><Icon type='home'/></span>}  
                    {item.menu_name}
                  </Link>
                </Menu.Item>
      }
    }):<span>无菜单列表</span>
    return menuList;
  }

  render(){
    let systemName=sessionStorage.getItem("systemName");
    let {current,menuList,openKeys,theme} = this.state;
    let loading=this.props.menuListData.path=='LOADED'?false:true;
    systemName = systemName?systemName:"BioSan System Pro";
    document.title=systemName;
    return (
      <div>
          <div style={{width:'50%',margin:'0 auto',marginTop:'20px'}}>
              <img src="./Layout/index/Images/bslogo.png" style={{width:'100%'}} alt="浙江博圣"/>
          </div>
          <div className="title_sys">{systemName}</div>
          
          <Menu
            theme={theme}
            onClick={(e)=>this.handleClick(e)}
            defaultOpenKeys={openKeys}
            selectedKeys={[current]}
            mode="inline">
            {
              this.setMenuList(menuList)
            }
          </Menu>
          <Spin size='yyx-large' spinning={loading}/>
      </div>
    )
  } 
};

export default connectToStore(['getMenuList'],['menuListData'],LeftPage);
