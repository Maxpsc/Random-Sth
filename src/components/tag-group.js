import React, { Component } from 'react'
import { Tag, Input, Tooltip, Icon, Button, Popconfirm, message } from 'antd'

function noop () {}
export default class TagGroup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVisible: false,
      inputValue: ''
    }
    this.textInput = React.createRef()
  }
  handleRemove = (tag) => {
    const tags = this.props.data
    this.props.handleChange(tags.filter(item => item !== tag))
  }
  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }
  handleInputConfirm = () => {
    let inputValue = this.state.inputValue
    let tags = this.props.data.slice(0)
    if (!inputValue) {
      return false
    }
    if (tags.indexOf(inputValue) > -1) {
      message.warning('这条已存在了~')
      return false
    }
    tags = [...tags, inputValue]
    this.props.handleChange(tags)
    this.setState({
      inputValue: '',
      inputVisible: false
    })
  }
  showInput = () => {
    this.setState({ inputVisible: true }, () => {
      this.textInput.current.focus()
    })
  }
  handleClear = () => {
    this.props.handleChange([])
    this.props.statusChange(0)
    message.success('清空成功')
  }
  render() {
    const { inputVisible, inputValue } = this.state
    const tags = this.props.data || []
    return (
      <div className="tag-group">
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 8
          const tagElem = (
            <Tag key={tag} closable afterClose={() => this.handleRemove(tag)}>
              {isLongTag ? `${tag.slice(0, 8)}...` : tag}
            </Tag>
          )
          return isLongTag ? <Tooltip title={tag} key={index}>{tagElem}</Tooltip> : tagElem
        })}
        {inputVisible && (
          <Input
            ref={this.textInput}
            type="text"
            style={{width: 78}}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            className="add-btn"
            onClick={this.showInput}
          >
            <Icon type="plus" />
          </Tag>
        )}
        <Popconfirm
          title="确定要清空吗？"
          okText="确定"
          cancelText="取消"
          placement="bottom"
          onConfirm={this.handleClear}
          onCancel={noop}
        >
          <Button className="clear-btn" shape="circle" size="small" icon="delete" />
        </Popconfirm>
      </div>
    )
  }
}
