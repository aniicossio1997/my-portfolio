import * as Yup from "yup";

export interface Values {
  name: string;
  message: string;
  email: string;
  subject: string;
}
export const initialValues: Values = {
  name: "",
  message: "",
  email: "",
  subject: "",
};
export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "validation_inputs.min")
    .max(80, "validation_inputs.max")
    .required("validation_inputs.name"),
  subject: Yup.string()
    .min(2, "validation_inputs.min")
    .max(100, "validation_inputs.max")
    .required("validation_inputs.subject"),
  message: Yup.string()
    .min(2, "validation_inputs.min")
    .required("validation_inputs.message"),
  email: Yup.string()
    .email("validation_inputs.email.invalid")
    .required("validation_inputs.email.required"),
});
