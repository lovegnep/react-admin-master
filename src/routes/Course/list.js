import React from 'react'
import { Table, Divider, Tag } from 'antd';


import API from '../../api/api'
import {ErrorNo,CourseOperate} from "../../api/constants";

class CourseList extends React.Component {
  state = {
    data:[]
  }
  columns = [
      {
        title:"标题",
          dataIndex:"title",
          key:"title",
      },
      {
        title:"难度",
          dataIndex:"level",
          key:"level",
      },
      {
        title:"类别",
          dataIndex:"type",
          key:"type",
      },
      {
        title:"国别",
          dataIndex:"country",
          key:"country",
      },
      {
          title:"浏览量",
          dataIndex:"views",
          key:"views",
          render:(text, record)=>(text || 0)
      },
      {
          title:"状态",
          dataIndex:"status",
          key:"status",
          render: (text,record)=>{
              return text === 0 ? "已上架" :"已下架"
          }
      },
      {
          title:"操作",
          dataIndex:"opt",
          key:"opt",
          render:(text,record) =>{
              return record.status === 0 ? <a onClick={()=>{this.handle(CourseOperate.off,record._id)}}>下架</a>:
                  <a onClick={()=>{this.handle(CourseOperate.on,record._id)}}>上架</a>
          }
      },
      {
          title:"编辑",
          dataIndex:"action",
          key:"action",
          render:(text,record) =>{
              return  <a onClick={()=>{this.handleEdit(record)}}>编辑</a>
          }
      },
  ]
    handleEdit = (record)=>{
        this.props.history.push({ pathname : '/home/course/edit',query:{record}})
    }
    handle = async (operate,_id)=>{
      console.log(operate, _id);
      let res = await API.operateCourse({_id,opt:operate});
      if(res.status === ErrorNo.Success){
          console.log("操作成功")
          let newdata= [...this.state.data]
          let index= newdata.findIndex((item)=>item._id === _id);
          if(index !== -1){
              newdata[index].status = operate-1
              this.setState({data:newdata});
          }
      }else{
          console.log("操作失败")
      }
    }
  componentWillUnmount() {

  }
  initData = async()=>{
      let res = await API.listCourse();
      if(res.status === ErrorNo.Success){
          this.setState({data:res.data.list})
      }else{
          console.log(res);
      }

  }
    componentDidMount(){
        this.initData()
    }
  render() {
    return (
      <div>
        <Table columns={this.columns} dataSource={this.state.data} />
      </div>
    )
  }
}

export default CourseList