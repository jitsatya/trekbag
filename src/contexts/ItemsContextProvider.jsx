import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

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
      return item.id !== id;
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

  const itemCount = items.length;

  const numberOfItemsChecked = items.filter((item) => {
    return item.packed;
  }).length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <ItemsContext.Provider
      value={{
        items,
        itemCount,
        numberOfItemsChecked,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
