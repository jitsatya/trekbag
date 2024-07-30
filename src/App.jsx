import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import AddItemForm from "./components/AddItemForm";
import ButtonGroup from "./components/ButtonGroup";
import useItemOperations from "./lib/customHooks/useItemOperations";

function App() {
  const {
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
  } = useItemOperations();
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          itemCount={itemCount}
          numberOfItemsChecked={numberOfItemsChecked}
        />
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
