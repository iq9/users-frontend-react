import React, { Component } from "react";
// import { CheckCircleTwoTone } from '@ant-design/icons';
import Layout from "../../layouts/default";
import Listable from "../../components/Listable";
import ModalForm from "./Form";

class View extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { users, create, update, remove } = this.props;

    return (
      <Layout>
        <h2>Users</h2>
        <Listable
          columns={[

            {
              title: 'Name',
              dataIndex: 'name',
              defaultSortOrder: 'ascend',
              sortDirections: ['descend', 'ascend'],
              sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 1,
              },
            },

            {
              title: 'E-Mail',
              dataIndex: 'email',
              sorter: {
                compare: (a, b) => a.email - b.email,
              },
            },

            {
              title: 'Title',
              dataIndex: 'title',
              key: 'title'
            },

            {
              title: 'Phone',
              dataIndex: 'phone',
              key: 'phone'
            },

            {
              title: 'Status',
              dataIndex: 'status',
              key: 'status',
              render: (status) => (
                <span style={{color: (status) ? '#0c0' : '#c00' }}>
                  { (status) ? 'active' : 'inactive' }
                </span>
              ),
            },

          ]}
          data={users}
          Form={ModalForm}
          handleCreate={data => create(data)}
          handleEdit={data => update(data)}
          handleRemove={id => remove(id)}
        />
      </Layout>
    );
  }
}

export default View;
