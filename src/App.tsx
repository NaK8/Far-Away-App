import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";
import { ListType } from "./GlobalTypes";

function App() {
  const [list, setList] = useState<ListType[]>([]);

  function getListFromForm(e: ListType) {
    setList((list) => [...list, e]);
  }

  function getDeletedItem(id: number) {
    setList((list) => list.filter((each) => each.id !== id));
  }

  function getPackedItem(id: number) {
    setList((list) =>
      list.map((each) =>
        each.id === id ? { ...each, packed: !each.packed } : each
      )
    );
  }

  function getClear() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    confirm && setList([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form getList={getListFromForm} />
      <PackingList
        ListItem={list}
        deletedItem={getDeletedItem}
        packedItem={getPackedItem}
        clear={getClear}
      />
      <Footer listItem={list} />
    </div>
  );
}

export default App;
