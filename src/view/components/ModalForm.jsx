import React, { PureComponent } from 'react';
import { Icon, Modal, Form, Button } from 'antd';

class FormModal extends PureComponent {
  handleOnSubmit = () => {
    const { handleOk, form } = this.props;

    form.validateFields((err, values) => {
      console.log('*** validateFields');
      console.log(err);
      console.log(values);

      if (err) {
        console.log('*******');
        console.log(err);

        return;
      }

      form.resetFields();

      if (handleOk) {
        handleOk(values);
      }
    });
  };

  render() {
    const { title, visible, handleCancel, form, children } = this.props;

    return (
      <Modal
        visible={visible}
        title={title}
        onOk={this.handleOnSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            <Icon type="close-circle" theme="filled" />
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOnSubmit}>
            <Icon type="save" />
            Save
          </Button>,
        ]}
      >
        {React.cloneElement(children, { form })}
      </Modal>
    );
  }
}

export default Form.create()(FormModal);
