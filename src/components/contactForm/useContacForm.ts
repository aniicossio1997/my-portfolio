import emailjs from "@emailjs/browser";
import { FormikState } from "formik";
import { ContactSchema, initialValues, Values } from "./validateForm";
import { DataKeyEmail } from "../../data/DataKeyEmail";
import { useState } from "react";

type STATUS_SEND = "pedding" | "filled" | "success" | "failed" | "none";

const useContacForm = () => {
  emailjs.init(DataKeyEmail.user_id);
  const [isLoading, setIsLoading] = useState<STATUS_SEND>("none");

  const sendEmail = (
    value: Values,
    resetForm: (nextState?: Partial<FormikState<Values>> | undefined) => void
  ) => {
    setIsLoading("pedding");

    emailjs
      .send(
        DataKeyEmail.service_id,
        DataKeyEmail.template_id,
        {
          from_name: value.name,
          message: value.menssage,
          from_email: value.email,
          subject: value.subject,
        },
        DataKeyEmail.user_id
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
          setIsLoading("success");
        },
        (error) => {
          setIsLoading("failed");
          console.log(error.text);
        }
      )
      .catch((e) => {
        setIsLoading("failed");
        console.log(e);
      });
  };
  return { sendEmail, isLoading };
};

export default useContacForm;
