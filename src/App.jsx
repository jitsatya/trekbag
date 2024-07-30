import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import AddItemForm from "./components/AddItemForm";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <SideBar>
          <AddItemForm />
          <ButtonGroup />
        </SideBar>
      </main>
      <Footer />
    </>
  );
}

export default App;
