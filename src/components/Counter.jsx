import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function Counter() {
  const { numberOfItemsChecked, itemCount } = useContext(ItemsContext);
  return (
    <p>
      <b>{numberOfItemsChecked}</b>/{itemCount} items packed
    </p>
  );
}
