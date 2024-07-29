import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import ButtonGroup from "./components/ButtonGroup";
import { initialItems } from "./lib/constants";
// import useItemOperations from "./lib/customHooks/useItemOperations";

function App() {
  const [items, setItems] = useState(initialItems);

  // const {
  //   items,
  //   handleAddItem,
  //   handleDeleteItem,
  //   handleToggleItem,
  //   handleRemoveAllItems,
  //   handleResetToInitial,
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsIncomplete,
  // } = useItemOperations();

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
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <SideBar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup
            handleRemoveAllItems={handleRemoveAllItems}
            handleResetToInitial={handleResetToInitial}
            handleMarkAllAsComplete={handleMarkAllAsComplete}
            handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          />
        </SideBar>
      </main>
      <Footer />
    </>
  );
}

export default App;
