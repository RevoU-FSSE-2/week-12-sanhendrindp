import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import "./AddressForm.css";

interface AddressFormProps {
  onFinish: (values: AddressFormData) => void;
  initialValues: AddressFormData;
}

interface AddressFormData {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

const AddressForm: React.FC<AddressFormProps> = ({
  onFinish,
  initialValues,
}) => {
  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Please enter your street address"),
    city: Yup.string().required("Please enter your city"),
    state: Yup.string().required("Please enter your state"),
    zipCode: Yup.string().required("Please enter your zip code"),
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
            <label htmlFor="streetAddress">
              <span className="star">*</span> Street Address
            </label>
            <Field
              as={Input}
              type="text"
              name="streetAddress"
              id="streetAddress"
              className="form-control"
            />
            <ErrorMessage
              name="streetAddress"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">
              <span className="star">*</span> City
            </label>
            <Field
              as={Input}
              type="text"
              name="city"
              id="city"
              className="form-control"
            />
            <ErrorMessage
              name="city"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">
              <span className="star">*</span> State
            </label>
            <Field
              as={Input}
              type="text"
              name="state"
              id="state"
              className="form-control"
            />
            <ErrorMessage
              name="state"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">
              <span className="star">*</span> Zip Code
            </label>
            <Field
              as={Input}
              type="text"
              name="zipCode"
              id="zipCode"
              className="form-control"
            />
            <ErrorMessage
              name="zipCode"
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

export default AddressForm;
