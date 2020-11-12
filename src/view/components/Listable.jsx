import React, { PureComponent } from 'react'
import { Icon, Input, Table, Button, Divider, Popconfirm, message } from 'antd'
import ModalForm from './ModalForm'

class Listable extends PureComponent {
  static ACTIONS = {
    CREATING: 'creating',
    EDITING: 'editing',
  }

  state = {
    currentAction: null,
    formFields: {},
  }

  openModal = (type, index) => {
    const { data } = this.props

    this.setState({
      currentAction: type,
      formFields: index != null ? data[index] : {},
    })
  }

  closeModal = () => {
    this.setState({ currentAction: null, formFields: {} })
  }

  closeModalAndSave = newFormFields => {
    const { currentAction, formFields } = this.state

    if (currentAction === Listable.ACTIONS.EDITING) {
      this.onEdit({ ...formFields, ...newFormFields })
    } else {
      this.onCreate(newFormFields)
    }

    this.closeModal()
  }

  onCreate = data => {
    const { handleCreate } = this.props

    handleCreate(data).then(res => {
      message.success('User successfully created.')
    }).catch(err => {
      if (err.status === 422) {
        message.error('ERROR: Email address already exists.')
      }
    })
  }

  onEdit = data => {
    const { handleEdit } = this.props

    handleEdit(data).then(res => {
      message.success('User successfully edited.')
    }).catch(err => {
      if (err.status === 422) {
        message.error('ERROR: Email address already exists.')
      }
    })
  }

  onRemove = id => {
    const { handleRemove } = this.props

    handleRemove(id)

    message.success('User successfully deleted.')
  }

  getColumns = () => {
    const { columns } = this.props

    return [
      ...columns,
      {
        title: 'Actions',
        key: 'action',
        render: (text, record, index) => (
          <span key={record.id}>
            <Button
              size="small"
              title="edit"
              alt="edit"
              onClick={() => this.openModal(Listable.ACTIONS.EDITING, index)}
            >
              <Icon type="edit" />
            </Button>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => this.onRemove(record.id)}
              cancelText="No"
              okText="Yes"
            >
              <Button type="danger" size="small" title="delete" alt="delete">
                <Icon type="delete" />
              </Button>
            </Popconfirm>
          </span>
        ),
      },
    ]
  }

  getModalTitle = () => {
    const { CREATING } = Listable.ACTIONS
    const { currentAction } = this.state

    return currentAction === CREATING ? 'Create' : 'Edit'
  }

  search = keyword => {
    const { data } = this.props
    if (keyword.includes(' ')) keyword = keyword.split(' ')[0]
    // Ignore multi-keyword searches for now. Not in spec.

    const filterTable = data.filter(users =>
      Object.keys(users).some(key =>
        String(users[key])
          .toLowerCase()
          .includes(keyword.toLowerCase())
      )
    )

    this.setState({ filterTable })
  }

  render() {
    const { currentAction, formFields, filterTable } = this.state
    const { data, Form } = this.props

    return (
      <React.Fragment>
        <Table
          rowKey={record => record.id}
          columns={this.getColumns()}
          dataSource={filterTable == null ? data : filterTable}
          pagination={{ pageSize: 25 }}
          title={() => (
            <div>
              <Button
                type="primary"
                onClick={() => this.openModal(Listable.ACTIONS.CREATING)}
                title="Create user"
                alt="create"
              >
                <Icon type="user-add" />
                Create
              </Button>
              <Input.Search
                placeholder="Search..."
                enterButton
                onSearch={this.search}
                style={{ margin: "0 0 10px 0", float: "right", width: "300px" }}
              />
            </div>
          )}
        />
        <ModalForm
          title={this.getModalTitle()}
          visible={!!currentAction}
          handleCancel={this.closeModal}
          handleOk={this.closeModalAndSave}
        >
          <Form fields={formFields} />
        </ModalForm>
      </React.Fragment>
    )
  }
}

export default Listable
