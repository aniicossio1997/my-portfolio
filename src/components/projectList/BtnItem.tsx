import { motion } from "framer-motion";
import BtnAnimation from "../common/BtnAnimation";

const BtnItem = ({ ...rest }: any) => {
  return (
    <BtnAnimation
      size="md"
      height="50px"
      width="50%"
      as={motion.a}
      whileHover={{ scale: 0.9 }}
      target="_blank"
      {...rest}
    />
  );
};

export default BtnItem;
