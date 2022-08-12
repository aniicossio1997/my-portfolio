import { EmailIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonProps,
  ComponentWithAs,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import React, { createContext, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons/lib";
import {
  IBtnAnimationContextProps,
  BtnAnimationProps,
} from "../../ts/interfaces/IBtn";
type JSXComponent = () => JSX.Element;
type IconButtonProps = React.ComponentProps<typeof Icon>;

export const BtnAnimationContext = createContext(
  {} as IBtnAnimationContextProps
);
const { Provider } = BtnAnimationContext;

interface IBtnAnimate {
  title?: string;
  children?: any;
  IconBtn?: JSX.Element | string;
  [x: string]: any;
}
const BtnAnimation = ({
  title,
  children,
  IconBtn = "see",
  btnAnimation,
  ...rest
}: IBtnAnimate) => {
  const [elementContext, setElementContext] = useState<any>(title);
  return (
    <Button
      onMouseEnter={() => setElementContext(IconBtn)}
      onMouseLeave={() => setElementContext(title)}
      {...rest}
    >
      {elementContext ? elementContext : children}
    </Button>
  );
};

// interface IBtnAnimate {
//   title: any;
//   IconBtn?: JSX.Element | string;
//   [x: string]: any;
// }
// const BtnAnimation = ({ title, IconBtn = "See", ...x }: IBtnAnimate) => {
//   const { t } = useTranslation(["home"]);
//   const localI18n = localStorage.getItem("localI18n");
//   const [elementContext, setElementContext] = useState<any>(title);
//   useEffect(() => {
//     console.log(localStorage.getItem("localI18n"));
//   }, []);
//   return (
//     <>
//       <Button
//         onMouseEnter={() => setElementContext(IconBtn)}
//         onMouseLeave={() => setElementContext(title)}
//         {...x}
//       >
//         {elementContext}
//       </Button>
//     </>
//   );
// };

// export const ProductCard = ({ children, product }: ProductCardProps ) => {

//   const { counter, increaseBy } = useProduct();

//   return (
//       <Provider value={{
//           counter,
//           increaseBy,
//           product
//       }}>
//           <div className={ styles.productCard }>
//               { children }
//           </div>
//       </Provider>
//   )
// }

export default BtnAnimation;
