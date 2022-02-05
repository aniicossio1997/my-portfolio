import * as Yup from "yup";
export interface Values {
  name: string;
  menssage: string;
  email: string;
  subject: string;
}
export const initialValues: Values = {
  name: "",
  menssage: "",
  email: "",
  subject: "",
};
export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(80, "Too Long!")
    .required("Name is required"),
  subject: Yup.string()
    .min(2, "Too short")
    .max(100, "Sorry, Too Long")
    .required("Subject is required"),
  menssage: Yup.string().min(2, "Too Short!").required("Menssage is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
