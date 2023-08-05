import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  IconButton,
  Flex,
  Button,
  useMediaQuery,
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
import { AiOutlineClear, AiOutlineSend } from "react-icons/ai";
import { BtnIconCustom } from "./BtnCustom";
const FormContact = () => {
  emailjs.init(DataKeyEmail.user_id);
  const form = useRef<any>(""); // MutableRefObject<null>
  const { sendEmail, isLoading } = useContacForm();
  const { t } = useTranslation("contact");
  const [isLargerThan] = useMediaQuery("(min-width: 850px)");
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
            {isLoading === "failed" && (
              <Alert status="error">
                <AlertIcon />
                <Box>
                  <AlertTitle>{t("msj_error")}</AlertTitle>
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
              <BtnIconCustom
                colorScheme={"gray"}
                borderColor={"gray.300"}
                onClick={handleReset}
                icon={<AiOutlineClear />}
                aria-label={t("btn_title.reset")}
              />
              <BtnIconCustom
                aria-label={t("btn_title.send")}
                backgroundColor={"var(--bg-link)"}
                color={"var(--text-link)"}
                type={"submit"}
                borderColor={"whiteAlpha.400"}
                _hover={{
                  boxShadow: "dark-lg",
                }}
                icon={<AiOutlineSend />}
              />
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormContact;
