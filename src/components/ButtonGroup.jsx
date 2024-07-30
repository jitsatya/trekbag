import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleRemoveAllItems,
    handleResetToInitial,
  } = useContext(ItemsContext);
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => {
        return (
          <Button key={text + onClick.toString()} onClick={onClick}>
            {text}
          </Button>
        );
      })}
    </section>
  );
}
