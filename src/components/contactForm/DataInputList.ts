import { Input, Textarea } from "@chakra-ui/react";
import { ComponentWithAs } from "@chakra-ui/react";

interface IDataInput {
  label: string;
  name: string;
  type: string;
  Component: ComponentWithAs<any, any>;
}
export const DataInputList: IDataInput[] = [
  { label: "email", name: "email", type: "email", Component: Input },
  {
    label: "subject",
    name: "subject",
    type: "text",
    Component: Input,
  },
  {
    label: "name",
    name: "name",
    type: "text",
    Component: Input,
  },
  {
    label: "message",
    name: "message",
    type: "textarea",
    Component: Textarea,
  },
];
