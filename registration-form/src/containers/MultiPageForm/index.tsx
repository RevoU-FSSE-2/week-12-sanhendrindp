import { useState } from "react";
import { Steps } from "antd";
import {
  UserOutlined,
  FormOutlined,
  LoginOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import {
  PersonalForm,
  AddressForm,
  AccountForm,
  FinishForm,
} from "../../components";

interface PersonalFormDetails {
  fullName: string;
  emailAddress: string;
  date: string;
}

interface AddressFormDetails {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: number;
}

interface AccountFormDetails {
  username: string;
  password: string;
}

interface MultiPageFormProps {}

const MultiPageForm: React.FC<MultiPageFormProps> = () => {
  const [current, setCurrent] = useState<number>(0);
  const [personalDetails, setPersonalDetails] =
    useState<PersonalFormDetails | null>(null);
  const [addressDetails, setAddressDetails] =
    useState<AddressFormDetails | null>(null);
  const [accountDetails, setAccountDetails] =
    useState<AccountFormDetails | null>(null);

  const personalDetailsHandle = (values: PersonalFormDetails) => {
    setPersonalDetails(values);
    setCurrent(1);
  };

  const addressDetailsHandle = (values: AddressFormDetails) => {
    setAddressDetails(values);
    setCurrent(2);
  };

  const accountDetailsHandle = (values: AccountFormDetails) => {
    setAccountDetails(values);
    setCurrent(3);
  };

  const forms = [
    <PersonalForm onFinish={personalDetailsHandle} />,
    <AddressForm onFinish={addressDetailsHandle} />,
    <AccountForm onFinish={accountDetailsHandle} />,
    <FinishForm />,
  ];

  const isStepDisable = (stepNumber: number) => {
    if (stepNumber === 0) {
      return false;
    }
    if (stepNumber === 1) {
      return personalDetails === null;
    }
    if (stepNumber === 2) {
      return personalDetails === null || addressDetails === null;
    }
    if (stepNumber === 3) {
      return (
        personalDetails === null ||
        addressDetails === null ||
        accountDetails === null
      );
    }
  };

  return (
    <div className="App">
      <Steps
        style={{ padding: "32px 16px" }}
        onChange={setCurrent}
        current={current}
      >
        <Steps.Step
          disabled={isStepDisable(0)}
          title="Personal Information"
          icon={<UserOutlined />}
        />
        <Steps.Step
          disabled={isStepDisable(1)}
          title="Address Information"
          icon={<FormOutlined />}
        />
        <Steps.Step
          disabled={isStepDisable(2)}
          title="Account Information"
          icon={<LoginOutlined />}
        />
        <Steps.Step
          disabled={isStepDisable(3)}
          title="Finish"
          icon={<CheckCircleOutlined />}
        />
      </Steps>
      {forms[current]}
    </div>
  );
};

export default MultiPageForm;
