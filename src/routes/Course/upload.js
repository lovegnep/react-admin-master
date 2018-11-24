import React from 'react'
import {Card, Icon, Form, Select, Input, Button, message, BackTop, Upload} from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index'
import API from '../../api/api'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js';

import {ErrorNo} from "../../api/constants";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css'

const FormItem = Form.Item
const Option = Select.Option

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
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

@Form.create()
class FormDemo1 extends React.Component {
  state = {
    text: '获取验证码',
    disabled: false,
      editorState: EditorState.createEmpty(),
      contentState:content
  }
    timer = 0
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
        const content = convertToRaw(__self.state.editorState.getCurrentContent())
          const data = {...values,imgs:__self.imgs,imgb:__self.imgb,content}
        let res = await API.uploadCourse(data);
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
      const { editorState,contentState } = this.state;
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: 86,
    })(
      <Select style={{width: 70}}>
        <Option value={86}>+86</Option>
        <Option value={87}>+87</Option>
      </Select>
    );
    const cardContent = '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景'
    return (
      <div>
        <CustomBreadcrumb arr={['输入', '表单', '基础表单']}/>
        <Card bordered={false} title='基础表单'>
          <Form layout='horizontal' style={{width: '70%', margin: '0 auto'}} onSubmit={this.handleSubmit}>
            <FormItem label='文章名称' {...formItemLayout}>
              {
                getFieldDecorator('title', {
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
                      <Button>
                          <Icon type="upload" /> Click to upload
                      </Button>
                  </Upload>
              }
            </FormItem>
            <FormItem label='文章标题图' {...formItemLayout}>
              {
                  <Upload name="file" data={{type:4}} onChange={this.handleImgsUpload} action="http://localhost:3000/gm/upload" listType="picture" withCredentials={true}>
                      <Button>
                          <Icon type="upload" /> Click to upload
                      </Button>
                  </Upload>
              }
            </FormItem>
            <FormItem label='详情' {...formItemLayout}>
              {
                  getFieldDecorator('content', {

                  })(
                      <Card bordered={false} className='card-item'>
                          <Editor
                              editorState={editorState}
                              onEditorStateChange={this.onEditorStateChange}
                              onContentStateChange={this.onContentStateChange}
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