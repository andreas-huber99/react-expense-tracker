import { useFormControl } from "@material-ui/core";
import React from "react";
import { Form, useForm } from "../base/useForm";
import Controls from "../base/controls/Controls";
interface Props {}

const initialValues = {
  id: "",
  name: "",
  description: "",
};

function AccountForm(props: Props) {
  const {} = props;
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialValues, () => validate());

  const validate = () => {
    let tempErrors = { ...errors };
    tempErrors.name = values.name ? "" : "This field is required";
    setErrors({
      ...tempErrors,
    });
    return Object.values(tempErrors).every((x) => x == "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("Success");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Controls.Input
        name="name"
        label="Name of the account"
        value={values.name}
        onChange={handleInputChange}
        error={errors.name}
      />
      <Controls.Input
        name="description"
        label="Here you can provide a description"
        value={values.description}
        onChange={handleInputChange}
        error={errors.description}
      />
      <Controls.Button type="submit" text="Submit" />
    </Form>
  );
}

export default AccountForm;
