import React, { Component } from 'react';
// import { CheckCircleTwoTone } from '@ant-design/icons';
import Layout from '../../layouts/default';
import Listable from '../../components/Listable';
import Sorter from '../../../utils/sorter';
import ModalForm from './Form';

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
                compare: Sorter.DEFAULT,
                multiple: 1,
              },
            },

            {
              title: 'E-Mail',
              dataIndex: 'email',
              sorter: {
                compare: Sorter.DEFAULT,
                multiple: 2,
              },
            },

            {
              title: 'Title',
              dataIndex: 'title',
              sorter: {
                compare: Sorter.DEFAULT,
                multiple: 3,
              },
            },

            {
              title: 'Phone',
              dataIndex: 'phone',
              sorter: {
                compare: Sorter.DEFAULT,
                multiple: 4,
              },
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
