import { Formik, Form, FormikHelpers, FormikState } from "formik";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { InputText } from "./InputText";
import { ContactSchema, initialValues, Values } from "./validateForm";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DataKeyEmail } from "../../data/DataKeyEmail";
import Loading from "../common/loading/Loading";
import { DataInputList } from "./DataInputList";
import useContacForm from "./useContacForm";
import { Trans, useTranslation } from "react-i18next";
interface InputI {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
}
//index.ts, line 80
interface RefObject<T> {
  readonly current: T | null | undefined;
}
type STATUS_SEND = "pedding" | "filled" | "success" | "failed" | "none";
type STATUS_FORM = "RESET" | "SEND";
const FormContact = () => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  emailjs.init(DataKeyEmail.user_id);
  const form = useRef<any>(""); // MutableRefObject<null>
  const { sendEmail, isLoading } = useContacForm();
  const { t } = useTranslation("contact");

  return (
    <>
      {isLoading === "pedding" && <Loading />}
      <Formik
        initialValues={initialValues}
        onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
          sendEmail(values, resetForm);
        }}
        validationSchema={ContactSchema}
      >
        {({ handleReset, errors }) => (
          <Form noValidate ref={form}>
            {isLoading === "success" && (
              <Alert status="success">
                <AlertIcon />
                <Box>
                  <AlertTitle>Se envio el correo con exito!</AlertTitle>
                </Box>
              </Alert>
            )}

            {DataInputList.map((dataInput) => (
              <InputText
                key={dataInput.label}
                label={t(dataInput.label)}
                name={dataInput.name}
                Component={dataInput.Component}
              />
            ))}

            <Stack direction={"column"} spacing={4} mt={5}>
              <Button
                colorScheme="pink"
                variant="solid"
                type={"submit"}
                width={"fullWidth"}
              >
                {t("btn_title.send")}
              </Button>
              <Button
                colorScheme={"gray"}
                borderWidth={1}
                borderColor={"gray.300"}
                variant="solid"
                onClick={handleReset}
                width={"fullWidth"}
              >
                {t("btn_title.reset")}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormContact;
