import { useRef, useState } from "react";
import Button from "./Button";
import useItemsContext from "../lib/customHooks/useItemscontext";

export default function AddItemForm() {
  const { handleAddItem } = useItemsContext();
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    handleAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        type="text"
        autoFocus
        ref={inputRef}
      />
      <Button> Add to List </Button>
    </form>
  );
}
