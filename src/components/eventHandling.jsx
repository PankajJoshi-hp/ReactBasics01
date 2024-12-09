// import { useState } from "react";

const MyButton = ({ onClick, count }) => {
  return (
    <div>
      <button onClick={onClick}>Clicked {count} times</button>
    </div>
  );
};

export default MyButton;
