import { Input, Textarea } from "@chakra-ui/react";
import { ComponentWithAs } from "@chakra-ui/react";

interface IDataInput {
  label: string;
  name: string;
  type: string;
  Component: ComponentWithAs<any, any>;
}
export const DataInputList: IDataInput[] = [
  { label: "Email", name: "email", type: "email", Component: Input },
  {
    label: "Subject",
    name: "subject",
    type: "text",
    Component: Input,
  },
  {
    label: "Name",
    name: "name",
    type: "text",
    Component: Input,
  },
  {
    label: "Menssage",
    name: "menssage",
    type: "textarea",
    Component: Textarea,
  },
];
