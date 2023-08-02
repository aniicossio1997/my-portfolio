import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Spacer,
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
          <Form noValidate ref={form} >
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

            <Flex justifyContent={"space-between"}>
              <Button
                colorScheme={"gray"}
                borderWidth={1}
                borderColor={"gray.300"}
                variant="solid"
                onClick={handleReset}
                width={{base:"60px",sm:'70px',md:'80px',lg:'100px'}}
                fontSize={{ base: "0.8rem", sm:"1.2rem",md: 20 }}
                rounded="lg"
              >
                {t("btn_title.reset")}
              </Button>
              <Button
                backgroundColor={"var(--bg-link)"}
                color={"var(--text-link)"}
                variant="solid"
                type={"submit"}
                width={{base:"60px",sm:'70px',md:'80px',lg:'100px'}}
                fontSize={{ base: "0.8rem",sm:"1.2rem", md: 20 }}
                rounded="12px"
                borderWidth={1}
                borderColor={"whiteAlpha.400"}
                _hover={{
                  boxShadow:"dark-lg"
                }}
              >
                {t("btn_title.send")}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormContact;
