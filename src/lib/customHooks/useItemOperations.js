import { useState } from "react";
import { initialItems } from "../constants";

export default function useItemOperations() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    const newItems = [...items, newItem];

    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => {
      item.id !== id;
    });

    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };
  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };
  return {
    items,
    handleAddItem,
    handleDeleteItem,
    handleToggleItem,
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
  };
}
