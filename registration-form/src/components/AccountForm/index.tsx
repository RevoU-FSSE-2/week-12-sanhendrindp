import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import "./AccountForm.css";

interface AccountFormProps {
  onFinish: (values: AccountFormData) => void;
  initialValues: AccountFormData;
}

interface AccountFormData {
  username: string;
  password: string;
}

const AccountForm: React.FC<AccountFormProps> = ({
  onFinish,
  initialValues,
}) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Use at least 8 characters, one uppercase letter, one lowercase letter, and one number"
      ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onFinish(values);
      }}
    >
      {() => (
        <Form>
          <div className="form-group">
            <label htmlFor="username">
              <span className="star">*</span> Username
            </label>
            <Field
              as={Input}
              type="text"
              name="username"
              id="username"
              className="form-control"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="star">*</span> Password
            </label>
            <Field
              as={Input.Password}
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AccountForm;
