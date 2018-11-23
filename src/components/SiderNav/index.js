import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '老师管理',
    icon: 'laptop',
    key: '/home/general',
    subs: [
      {key: '/home/general/button', title: '基本信息', icon: '',},
      {key: '/home/general/icon', title: '开课信息', icon: '',},
      {key: '/home/general/icon', title: '历史课程', icon: '',},
    ]
  },
  {
    title: '教材管理',
    icon: 'bars',
    key: '/home/navigation',
    subs: [
      {key: '/home/navigation/dropdown', title: '添加', icon: ''},
      {key: '/home/navigation/menu', title: '编辑', icon: ''},
      {key: '/home/navigation/steps', title: '标签管理', icon: ''},
    ]
  },
  {
    title: '开课管理',
    icon: 'edit',
    key: '/home/entry',
    subs: [
      {
        key: '/home/entry/form',
        title: '表单',
        icon: '',
        subs: [
          {key: '/home/entry/form/basic-form', title: '开课信息', icon: ''},
          {key: '/home/entry/form/step-form', title: '历史课程', icon: ''}
        ]
      },
      {key: '/home/entry/upload', title: '上传', icon: ''},
    ]
  },
  {
    title: '学生管理',
    icon: 'desktop',
    key: '/home/display',
    subs: [
      {key: '/home/display/carousel', title: '学生总表', icon: ''},
      {key: '/home/display/collapse', title: '浏览用户', icon: ''},
      {key: '/home/display/list', title: '列表', icon: ''},
      {key: '/home/display/table', title: '表格', icon: ''},
      {key: '/home/display/tabs', title: '标签页', icon: '',},
    ]
  },
  {
    title: '商品管理',
    icon: 'message',
    key: '/home/feedback',
    subs: [
      {key: '/home/feedback/modal', title: '对话框', icon: '',},
      {key: '/home/feedback/notification', title: '通知提醒框', icon: ''},
      {key: '/home/feedback/spin', title: '加载中', icon: '',}
    ]
  },
  {
    title: '教师',
    icon: 'bulb',
    key: '/home/other',
    subs:[
      {key: '/home/other/animation', title: '开课信息', icon: '',},
      {key: '/home/other/gallery', title: '约课信息', icon: '',},
      {key:'/home/other/draft',title:'历史课程',icon:''},
      {key:'/home/other/chart',title:'数据结算',icon:''},
      {key:'/home/other/loading',title:'个人信息',icon:''},
      {key:'/home/other/404',title:'404',icon:''},
      {key:'/home/other/springText',title:'弹性文字',icon:''},
    ]
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav