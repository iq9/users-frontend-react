import React from "react";
import { Form, Input, Checkbox } from "antd";

// More field types: https://ant.design/components/form

const ModalForm = ({ form, fields }) => {
  const { getFieldDecorator } = form;

  return (
    <Form>

      <Form.Item label="Name">
        {getFieldDecorator('name', {
          initialValue: fields.name,
          rules: [{ required: true }],
        })(<Input placeholder="Name" />)}
      </Form.Item>

      <Form.Item label="E-Mail">
        {getFieldDecorator('email', {
          initialValue: fields.email,
          rules: [{ required: true }],
        })(<Input placeholder="E-Mail" />)}
      </Form.Item>

      <Form.Item label="Title">
        {getFieldDecorator('title', {
          initialValue: fields.title,
          rules: [{ required: true }],
        })(<Input placeholder="Title" />)}
      </Form.Item>

      <Form.Item label="Phone">
        {getFieldDecorator('phone', {
          initialValue: fields.phone,
          rules: [{ required: true }],
        })(<Input placeholder="Phone" />)}
      </Form.Item>

      <Form.Item label="Status">
        {getFieldDecorator('status', {
          valuePropName: 'checked',
          setFieldsValue: fields.status,
          initialValue: fields.status,
          rules: [{ required: false }],
        })(<Checkbox placeholder="Status" />)}
      </Form.Item>

    </Form>
  );
};

export default ModalForm;
