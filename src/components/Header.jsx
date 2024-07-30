import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ itemCount, numberOfItemsChecked }) {
  return (
    <header>
      <Logo />
      <Counter
        itemCount={itemCount}
        numberOfItemsChecked={numberOfItemsChecked}
      />
    </header>
  );
}
