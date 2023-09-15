import React from "react";
import { Form, Input, Button } from "antd";

interface AccountFormProps {
  onFinish: (values: AccountFormData) => void;
}

interface AccountFormData {
  username: string;
  password: string;
}

const AccountForm: React.FC<AccountFormProps> = ({ onFinish }) => {
  return (
    <Form<AccountFormData> onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please enter your username" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
};

export default AccountForm;
