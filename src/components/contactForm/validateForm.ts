import * as Yup from "yup";
import i18n from "i18next";

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
    .min(2, i18n.t("contact:validation_inputs.min"))
    .max(80, "Sorry, Too Long!")
    .required("Name is required"),
  subject: Yup.string()
    .min(2, "Too short")
    .max(100, "Sorry, Too Long")
    .required("Subject is required"),
  message: Yup.string().min(2, "Too Short!").required("Message is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
