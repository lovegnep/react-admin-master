import React from 'react'
import {HashRouter, withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(()=>import('../../routes/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分


// 教材管理
const CourseList = LoadableComponent(()=>import('../../routes/Course/list'))
const CourseEdit = LoadableComponent(()=>import('../../routes/Course/edit'))
const CourseUpload = LoadableComponent(()=>import('../../routes/Course/upload'))

//关于
const About = LoadableComponent(()=>import('../../routes/About/index'))

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>

          <PrivateRoute exact path='/home/course/list' component={CourseList}/>
          <PrivateRoute exact path='/home/course/edit' component={CourseEdit}/>
          <PrivateRoute exact path='/home/course/upload' component={CourseUpload}/>

          <PrivateRoute exact path='/home/about' component={About}/>

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain