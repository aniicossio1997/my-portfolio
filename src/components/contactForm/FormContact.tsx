import { Formik, Form, FormikHelpers } from "formik";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  CloseButton,
  Heading,
  Icon,
  Input,
  Spinner,
  Stack,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { InputText } from "./InputText";
import { ContactSchema, initialValues, Values } from "./dataForm";
import { useRef, MutableRefObject, useEffect, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { DataKeyEmail } from "../../data/DataKeyEmail";
import { CloseIcon } from "@chakra-ui/icons";
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
  const [isLoading, setIsLoading] = useState<STATUS_SEND>("none");
  const sendEmail = (value: Values) => {
    console.log("enviando mensaje.....");
    console.log(JSON.stringify(DataKeyEmail));
    setIsLoading("pedding");
    emailjs
      .send(
        DataKeyEmail.service_id,
        DataKeyEmail.template_id,
        {
          name: value.name,
          subject: value.subject,
          message: value.menssage,
          email: value.email,
        },
        DataKeyEmail.user_id
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading("success");
        },
        (error) => {
          setIsLoading("failed");
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
    <>
      {isLoading === "pedding" ? (
        <Center>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h6" size="xs" display={"flex"}>
                Enviando...
              </Heading>
            </Box>
            <Box>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
          </VStack>
        </Center>
      ) : (
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
              {isLoading === "success" && (
                <Alert status="success">
                  <AlertIcon />
                  <Box>
                    <AlertTitle>Se envio el correo con exito!</AlertTitle>
                  </Box>
                </Alert>
              )}
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
      )}
    </>
  );
};

export default FormContact;
