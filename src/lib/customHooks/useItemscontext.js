import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContextProvider";

export default function useItemsContext() {
  const context = useContext(ItemsContext);
  return context;
}
