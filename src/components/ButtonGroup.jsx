import { useItemsStore } from "../stores/itemStore";
import Button from "./Button";
// import useItemsContext from "../lib/customHooks/useItemscontext";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitials = useItemsStore((state) => state.resetToInitials);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitials,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
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
