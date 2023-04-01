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
    setCount(count + 1);
  };

  const Text = () => {
    useEffect(() => {
      console.log("Use State");
      return () => {
        console.log("Unmount Text");
      };
    }, [toggle]);
    
    return <h1>Hello World!</h1>;
  };

  return (
    <div>
      <button className="toggle" onClick={handleClick}>
        Click Me
      </button>
      {toggle && <Text/>}
      <br />
      <button onClick={handleUp}>Up Count</button>
      <p>{count}</p>
      <p>{toggle ? "true" : "false"}</p>
    </div>
  );
};

export default Text;
