import { useItemsStore } from "../stores/itemStore";

export default function Counter() {
  const items = useItemsStore((state) => state.items);
  return (
    <p>
      <b>{items.filter((item) => item.packed).length}</b>/{items.length} items
      packed
    </p>
  );
}
