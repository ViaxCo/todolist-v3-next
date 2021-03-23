import { useDispatch } from "react-redux";
import { setHomeIsLoading } from "../redux/features/lists/listsSlice";
import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  return (
    <Box
      as="footer"
      className="box"
      boxShadow="5px 5px 15px -5px rgba(0, 0, 0, 0.3)"
      bg="main.blue"
      color="white"
      w="fit-content"
      textAlign="center"
      mt={{ md: "150px" }}
      p="10px"
    >
      &copy; Created by{" "}
      {pathname === "/about" ? (
        <NextLink href="/">
          <Link textDecoration="underline">ViaxCo</Link>
        </NextLink>
      ) : (
        <NextLink href="/about">
          <Link textDecor="underline" onClick={() => dispatch(setHomeIsLoading(true))}>
            ViaxCo
          </Link>
        </NextLink>
      )}
    </Box>
  );
};

export default Footer;
