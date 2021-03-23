import { useSelector } from "react-redux";
import { State } from "../redux/store";
import ListCard from "./ListCard";
import ListItemCard from "./ListItemCard";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  customListName?: string;
};

const ListCards = ({ customListName }: Props) => {
  const { lists } = useSelector((state: State) => state.lists);
  const { items } = useSelector((state: State) => state.items);

  const { pathname } = useRouter();

  return pathname === "/" ? (
    <AnimatePresence>
      {lists.map((list, i) => (
        <ListCard key={list._id} list={list} i={i} />
      ))}
    </AnimatePresence>
  ) : (
    <AnimatePresence>
      {items.map((item, i) => (
        <ListItemCard key={item._id} item={item} i={i} customListName={customListName} />
      ))}
    </AnimatePresence>
  );
};

export default ListCards;
