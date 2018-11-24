import React from 'react'
import {Avatar,Card, Cascader, Tooltip, Icon, Form, Checkbox, Select, Input, Button, Col, Row, message, BackTop, Upload} from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index'
import API from '../../api/api'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import {ErrorNo} from "../../api/constants";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css'

const FormItem = Form.Item
const Option = Select.Option
const ApiHead = "http://localhost:3000/static/"

const options = [
  {
    label: '湖北',
    value: 'hubei',
    children: [
      {
        label: '武汉',
        value: 'wuhang',
        children: [
          {
            label: '蔡甸区',
            value: 'caidian'
          },
          {
            label: '江夏',
            value: 'jiangxia'
          }
        ]
      },
      {
        label: '宜昌',
        value: 'yichang',
        children: [
          {
            label: '伍家岗',
            value: 'wujiagang'
          },
          {
            label: '夷陵区',
            value: 'yilingqu'
          },
          {
            label: '江南',
            value: 'jiangnan'
          },
          {
            label: '开发区',
            value: 'kaifaqu'
          },
          {
            label: 'CBD',
            value: 'CBD'
          }
        ]
      }
    ]
  }
]
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

@Form.create()
class FormDemo1 extends React.Component {
  state = {
    text: '获取验证码',
    disabled: false,
    contentState:this.props.location.query ? JSON.parse(this.props.location.query.record.content) :content,
      editorState: EditorState.createEmpty(),
  }
  initRecord = this.props.location.query ? this.props.location.query.record : {}
  imgs=""
  imgb = ""
  countdown = (e) => {
    let time = 60
    this.setState({
      text: --time + 's',
      disabled: true
    })
    this.timer = setInterval(() => {
      if (time > 0) {
        this.setState({
          text: --time + 's',
          disabled: true
        })
      } else {
        this.setState({
          text: '获取验证码',
          disabled: false
        })
      }
    }, 1000)
  }
  handleSubmit = (e) => {
    let __self = this;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (err) {
        message.warning('请先填写正确的表单')
      } else {
        const content =convertToRaw(__self.state.editorState.getCurrentContent())
          const data = {...values,imgs:__self.imgs,imgb:__self.imgb,content,_id:this.initRecord._id}
          console.log(data)
        let res = await API.editCourse(data);
        if(res.status === ErrorNo.Success){
            message.success('提交成功')
        }else{
            console.log(res,data)
        }
      }
    });
  }
  handleImgbUpload = (e) => {
      console.log(e)
    if(e.file.status === "done"){
        if(e.file.response.status !== ErrorNo.Success){
          console.log(e.file.response.status)
        }else {
            this.imgb = e.file.response.data.path;
        }
    }
  }
  handleImgsUpload = (e) => {
      console.log(e)
      if(e.file.status === "done"){
          if(e.file.response.status !== ErrorNo.Success){
              console.log(e.file.response.status)
          }else {
              this.imgs = e.file.response.data.path;
          }
      }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  componentDidMount(){
    console.log(this.props.location)
    if(this.initRecord.content){
      const data = JSON.parse(this.initRecord.content)
        console.log(data)
        this.setState({contentState:data})
    }

  }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    onContentStateChange =  (contentState) => {
        this.setState({
            contentState,
        });
    };

    uploadImageCallBack = ()=>{

    }
  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 12,
          offset: 4,
        },
      },
    }
    return (
      <div>
        <Card bordered={false} title='基础表单'>
          <Form layout='horizontal' style={{width: '70%', margin: '0 auto'}} onSubmit={this.handleSubmit}>
            <FormItem label='文章名称' {...formItemLayout}>
              {
                getFieldDecorator('title', {
                  initialValue:this.initRecord.title,
                  rules: [
                    {
                      type: 'string',
                      message: '请输入正确的标题'
                    },
                    {
                      required: true,
                      message: '请填写标题'
                    }
                  ]
                })(
                  <Input/>
                )
              }
            </FormItem>
            <FormItem label='难度' {...formItemLayout}>
              {
                getFieldDecorator('level', {
                    initialValue:this.initRecord.level,
                  rules: [
                    {
                      required: true,
                      message: '请选择难度'
                    }
                  ]
                })(
                    <Select placeholder="请选择">
                        <Option value="0">初级</Option>
                        <Option value="1">中级</Option>
                        <Option value="2">高级</Option>
                    </Select>
                )
              }
            </FormItem>
            <FormItem label='类别' {...formItemLayout}>
              {
                getFieldDecorator('type', {
                    initialValue:this.initRecord.type,
                  rules: [
                    {
                      required: true,
                      message: '请选择类别'
                    }
                  ]
                })(
                    <Select placeholder="请选择">
                        <Option value="0">体育</Option>
                        <Option value="1">财经</Option>
                        <Option value="2">国际</Option>
                    </Select>
                )
              }
            </FormItem>
            <FormItem label='国别' {...formItemLayout}>
              {
                getFieldDecorator('country', {
                    initialValue:this.initRecord.country,
                  rules: [
                    {
                      required: true,
                      message: '请选择国别'
                    }
                  ]
                })(
                    <Select placeholder="请选择">
                        <Option value="0">美国</Option>
                        <Option value="1">英国</Option>
                        <Option value="2">国际</Option>
                    </Select>
                )
              }
            </FormItem>
            <FormItem label='焦点大图' {...formItemLayout}>
              {
                  <Upload name="file" data={{type:4}} onChange={this.handleImgbUpload} action="http://localhost:3000/gm/upload" listType="picture" withCredentials={true}>
                      { this.initRecord.imgb ? <Avatar shape="square" size={64} src={ApiHead+this.initRecord.imgb} /> :
                          <Button>
                              <Icon type="upload" /> Click to upload
                          </Button>}

                  </Upload>
              }
            </FormItem>
            <FormItem label='文章标题图' {...formItemLayout}>
              {
                  <Upload name="file" data={{type:4}} onChange={this.handleImgsUpload} action="http://localhost:3000/gm/upload" listType="picture" withCredentials={true}>
                      {this.initRecord.imgs ? <Avatar shape="square" size={64} src={ApiHead+this.initRecord.imgs} /> :
                          <Button>
                              <Icon type="upload" /> Click to upload
                          </Button>}
                  </Upload>
              }
            </FormItem>
            <FormItem label='详情' {...formItemLayout}>
              {
                  getFieldDecorator('content', {

                  })(
                      <Card bordered={false} className='card-item'>
                          <Editor
                              initialContentState={this.state.contentState}
                              onContentStateChange={this.onContentStateChange}
                              onEditorStateChange={this.onEditorStateChange}
                              wrapperClassName="wrapper-class"
                              editorClassName="editor-class"
                              toolbarClassName="toolbar-class"
                              localization={{ locale: 'zh'}}
                              toolbar={{
                                  image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true }},
                              }}
                          />
                      </Card>
                  )

              }
            </FormItem>
              <FormItem style={{textAlign: 'center'}} {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">提交</Button>
            </FormItem>
          </Form>

        </Card>

        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

export default FormDemo1