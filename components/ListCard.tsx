import { useDispatch } from "react-redux";
import { deleteList, List } from "../redux/features/lists/listsSlice";
import { setListIsLoading } from "../redux/features/items/itemsSlice";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HTMLChakraProps,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HTMLMotionProps, motion } from "framer-motion";

type Props = {
  list: List;
  i: number;
};

// type Merge<P, T> = Omit<P, keyof T> & T;
// type MotionFlexProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
// export const MotionFlex: React.FC<MotionFlexProps> = motion(Flex);
export const MotionFlex = motion(Flex);

const ListCard = ({ list, i }: Props) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
      }}
    >
      <MotionFlex
        align="center"
        minH="70px"
        borderBottom="1px solid"
        borderColor={useColorModeValue("#f1f1f1", "viaxco.400")}
        // Mount and exit animations of each card
        opacity="0"
        variants={{
          hidden: (i: number) => ({ opacity: 0, y: -50 * i }),
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.025,
            },
          }),
          exit: {
            opacity: 0,
            x: -50,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={i}
      >
        <Box w={{ base: "82%", md: "83%" }} cursor="pointer" display="flex" alignItems="center">
          {/* Combine react-router-dom Link and @chakra-ui Link props together */}
          <NextLink href={{ pathname: `/${list.name}` }}>
            <Link
              flex="1"
              textAlign="center"
              borderRadius="5px"
              onClick={() => dispatch(setListIsLoading(true))}
            >
              <Text
                p="20px"
                fontSize="1.2rem"
                fontWeight={400}
                color={useColorModeValue("main.blue", "white")}
              >
                {list.name}
              </Text>
            </Link>
          </NextLink>
        </Box>
        <IconButton
          m="auto"
          aria-label="Delete List"
          variant="ghost"
          size={useBreakpointValue({ base: "sm", md: "md" })}
          colorScheme="red"
          onClick={() => list._id && dispatch(deleteList(list._id))}
          icon={<DeleteIcon />}
        />
      </MotionFlex>
    </motion.div>
  );
};

export default ListCard;
