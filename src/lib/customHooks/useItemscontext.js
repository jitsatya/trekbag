import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContextProvider";

export default function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemContext must be used within an ItemsContextProvider"
    );
  }
  return context;
}
