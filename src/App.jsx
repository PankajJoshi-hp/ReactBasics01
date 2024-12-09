import { useState } from "react";
import MyButton from "./components/eventHandling";

const heros = [
  {
    title: "SuperMan",
    isSuperHero: true,
    id: 1,
  },
  {
    title: "BatMan",
    isSuperHero: false,
    id: 2,
  },
];

const App = () => {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count + 1);
  };

  const listItems = heros.map((hero) => (
    <li
      key={hero.id}
      style={{ color: hero.isSuperHero ? "magenta" : "darkgreen" }}
    >
      {hero.title}
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
      <MyButton count={count} onClick={handleOnClick} />
      <MyButton count={count} onClick={handleOnClick} />
    </div>
  );
};

export default App;
