import { useState } from "react";

function init() {
  console.log("Init was excuted");
  return Math.random();
}

export default function Counter() {
  //   let count = 0;
  //   function incCount() {
  //     count += 1;
  //     console.log(count);
  //   }

  let [count, setCount] = useState(init);
  console.log("Component was re-render");
  let incCount = () => {
    // setCount(count + 2);
    // console.log(count);

    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });

    // setCount(55);
  };

  return (
    <div>
      {/* <h3>Count = {count}</h3>
      <button onClick={incCount}> Increase Count</button> */}

      <h3>Count={count} </h3>
      <button onClick={incCount}> Increase Count</button>
    </div>
  );
}
