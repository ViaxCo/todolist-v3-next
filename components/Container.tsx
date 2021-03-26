import { Box } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <Box position="relative" overflow="hidden" minH={{ base: "100vh", md: "1000px" }}>
      <motion.div
        initial={{ y: -20, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
        }}
      >
        {children}
      </motion.div>
      <Footer />
    </Box>
  );
};

export default Container;
