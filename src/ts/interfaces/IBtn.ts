import { ReactElement } from "react";

export interface BtnAnimationProps {
  btnAnimation: IBtnAnimation;
  children?: ReactElement | ReactElement[];
  [x: string]: any;
}

export interface IBtnAnimation {
  title: string;
  IconBtn?: JSX.Element | string;
  [x: string]: any;
}

export interface IBtnAnimationContextProps {
  product: IBtnAnimation;
}
