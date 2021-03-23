import { useSelector } from "react-redux";
import { State } from "../redux/store";
import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const { today } = useSelector((state: State) => state.lists);
  const { listTitle } = useSelector((state: State) => state.items);

  const { pathname } = useRouter();

  return (
    <Box
      boxShadow="3px 3px 5px 0px rgba(4,16,68,0.5)"
      bg="main.blue"
      textAlign="center"
      className="box"
    >
      <Heading as="h1" color="white" p="10px">
        {pathname === "/" ? today : listTitle}
      </Heading>
    </Box>
  );
};

export default Header;
