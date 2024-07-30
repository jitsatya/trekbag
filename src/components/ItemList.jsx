import { useMemo, useState } from "react";
import { sortingOptions } from "../lib/constants";
import EmptyView from "./EmptyView";
import Select from "react-select";
import useItemsContext from "../lib/customHooks/useItemscontext";

export default function ItemList() {
  const { items, handleDeleteItem, handleToggleItem } = useItemsContext();
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );
  return (
    <ul className="item-list">
      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      )}
      {items.length === 0 && <EmptyView />}
      {sortedItems.map((item) => {
        return (
          <Item
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
