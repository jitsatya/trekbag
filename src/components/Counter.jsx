import useItemsContext from "../lib/customHooks/useItemscontext";

export default function Counter() {
  const { numberOfItemsChecked, itemCount } = useItemsContext();
  return (
    <p>
      <b>{numberOfItemsChecked}</b>/{itemCount} items packed
    </p>
  );
}
