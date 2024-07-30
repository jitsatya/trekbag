export default function Counter({ itemCount, numberOfItemsChecked }) {
  return (
    <p>
      <b>{numberOfItemsChecked}</b>/{itemCount} items packed
    </p>
  );
}
