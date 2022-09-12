import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { Field } from "formik";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  label: string | ReactNode;
  name: string;
  type?: "text" | "email" | "textarea" | undefined;
  [x: string]: any;
}

export const InputText = ({ label, name, ...props }: Props) => {
  const { t } = useTranslation(["contact"]);

  return (
    <>
      <Box mb={5}>
        <Field name={name} key={name}>
          {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }: any) => (
            <FormControl isInvalid={meta.touched && meta.error}>
              <FormLabel htmlFor={name} fontSize={{ base: 16, md: 19 }}>
                {label}
              </FormLabel>
              <Field
                {...field}
                id={name}
                placeholder={props.placeholder}
                as={props.Component}
              />

              <FormErrorMessage> {t(meta.error)}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      </Box>
    </>
  );
};
