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
      {key: '/home/general/button1', title: '基本信息', icon: '',},
      {key: '/home/general/icon1', title: '开课信息', icon: '',},
      {key: '/home/general/icon12', title: '历史课程', icon: '',},
    ]
  },
  {
    title: '教材管理',
    icon: 'bars',
    key: '/home/navigation',
    subs: [
      {key: '/home/course/list', title: '查看', icon: ''},
      {key: '/home/course/upload', title: '添加', icon: ''},
      //{key: '/home/course/edit', title: '编辑', icon: ''},
      {key: '/home/navigation/step2', title: '标签管理', icon: ''},
    ]
  },
  {
    title: '开课管理',
    icon: 'edit',
    key: '/home/entry',
    subs: [
        {key: '/home/entry/form/basic-for1m', title: '开课信息', icon: ''},
        {key: '/home/entry/form/step-fo1rm', title: '历史课程', icon: ''}
    ]
  },
  {
    title: '学生管理',
    icon: 'desktop',
    key: '/home/display',
    subs: [
      {key: '/home/display/caro1usel', title: '学生总表', icon: ''},
      {key: '/home/display/coll1apse', title: '浏览用户', icon: ''},
    ]
  },
  {
    title: '商品管理',
    icon: 'message',
    key: '/home/feedback',
    subs: [
      {key: '/home/feedback/mo1dal', title: '商品管理', icon: '',},
    ]
  },
  {
    title: '教师',
    icon: 'bulb',
    key: '/home/other',
    subs:[
      {key: '/home/other/animat1ion', title: '开课信息', icon: '',},
      {key: '/home/other/gal1lery', title: '约课信息', icon: '',},
      {key:'/home/other/dra1ft',title:'历史课程',icon:''},
      {key:'/home/other/cha1rt',title:'数据结算',icon:''},
      {key:'/home/other/loa1ding',title:'个人信息',icon:''},
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