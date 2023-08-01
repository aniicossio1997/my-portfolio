import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { Form, Formik, FormikHelpers } from "formik";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { DataKeyEmail } from "../../data/DataKeyEmail";
import Loading from "../common/loading/Loading";
import { DataInputList } from "./DataInputList";
import { InputText } from "./InputText";
import useContacForm from "./useContacForm";
import { ContactSchema, initialValues, Values } from "./validateForm";


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
      {isLoading === "pedding" && (
        <Loading title={t("loading_title")} ifShowPoints={true} />
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={(values: Values, { resetForm }: FormikHelpers<Values>) => {
          sendEmail(values, resetForm);
        }}
        validationSchema={ContactSchema}
      >
        {({ handleReset }) => (
          <Form noValidate ref={form}>
            {isLoading === "success" && (
              <Alert status="success">
                <AlertIcon />
                <Box>
                  <AlertTitle>{t("msj_response")}</AlertTitle>
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
                fontSize={{ base: 18, md: 20 }}
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
                fontSize={{ base: 17, md: 20 }}
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
