import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import AddItemForm from "./components/AddItemForm";
import ButtonGroup from "./components/ButtonGroup";
import ItemsContextProvider from "./contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <SideBar>
            <AddItemForm />
            <ButtonGroup />
          </SideBar>
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
