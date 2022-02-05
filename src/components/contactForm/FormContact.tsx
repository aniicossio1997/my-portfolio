import { Formik, Form, FormikHelpers } from "formik";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { InputText } from "./InputText";
import { ContactSchema, initialValues, Values } from "./dataForm";
import { useRef, MutableRefObject, useEffect } from "react";
import emailjs, { init } from "@emailjs/browser";
import { DataKeyEmail } from "../../data/DataKeyEmail";
interface InputI {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
}
//index.ts, line 80
interface RefObject<T> {
  readonly current: T | null | undefined;
}

const FormContact = () => {
  emailjs.init(DataKeyEmail.user_id);
  const form = useRef<any>(""); // MutableRefObject<null>
  const sendEmail = (value: Values) => {
    emailjs
      .send(DataKeyEmail.service_id, DataKeyEmail.template_id, {
        name: value.name,
        subject: value.subject,
        message: value.menssage,
        email: value.email,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dataEmail),
    // })
    //   .then((res) => console.log(res))
    //   .catch((error: any) => console.log(error));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
        sendEmail(values);
        resetForm();
      }}
      validationSchema={ContactSchema}
    >
      {({ handleReset, errors }) => (
        <Form noValidate ref={form}>
          <InputText
            label={"Email"}
            name={"email"}
            type="email"
            Component={Input}
          />
          <InputText
            label={"Subject"}
            name={"subject"}
            type="text"
            Component={Input}
          />
          <InputText
            label={"Name"}
            name={"name"}
            type="text"
            Component={Input}
          />
          <InputText
            label={"Menssage"}
            name={"menssage"}
            type="textarea"
            Component={Textarea}
          />

          <Stack direction={"column"} spacing={4} mt={5}>
            <Button
              colorScheme="pink"
              variant="solid"
              type={"submit"}
              width={"fullWidth"}
            >
              Send
            </Button>
            <Button
              colorScheme={"gray"}
              borderWidth={1}
              borderColor={"gray.300"}
              variant="solid"
              onClick={handleReset}
              width={"fullWidth"}
            >
              reset
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
