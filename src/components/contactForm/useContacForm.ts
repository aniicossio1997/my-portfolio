import emailjs from "@emailjs/browser";
import { FormikState } from "formik";
import { Values } from "./validateForm";
import { checkEmptyAttributes, DataKeyEmail } from "../../data/DataKeyEmail";
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
    
    if (!checkEmptyAttributes(DataKeyEmail)) {
      setIsLoading("failed");
    }
    emailjs
      .send(
        DataKeyEmail.service_id,
        DataKeyEmail.template_id,
        {
         
          message: value.message,
          from_email: value.email,
          subject: value.subject,
        },
        DataKeyEmail.user_id
      )
      .then(
        (result) => {
          resetForm();
          setIsLoading("success");
        },
        (error) => {
          setIsLoading("failed");
        }
      )
      .catch((e) => {
        setIsLoading("failed");
      });
  };
  return { sendEmail, isLoading };
};

export default useContacForm;
