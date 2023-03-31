import React from "react";
import { useState, useEffect } from "react";
import "./cssText.scss";

const Text = () => {
  const [count, setCount] = useState(0);
  const [toggle, settoggle] = useState(false);

  const handleClick = () => {
    settoggle(!toggle);
  };
  const handleUp = () => {
    setCount((count) => ++count);
  };

  const Text = () => {
    useEffect(() => {
      console.log("Use State");
      return () => {
        console.log("Unmount Text");
      };
    }, [count]);

    // useEffect(() => {
    //   console.log("ReRender");
    // });

    return <h1>Hello World! {count}</h1>;
  };

  return (
    <div>
      <button className="toggle" onClick={handleClick}>
        Click Me
      </button>
      {toggle && <Text />}
      <br/><button onClick={handleUp}>Up Count</button>
    </div>
  );
};

export default Text;
