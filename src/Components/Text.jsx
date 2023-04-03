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

  useEffect(() => {
    console.log("Use State");
    return () => {
      console.log("Unmount Text");
    };
  }, [toggle]);

  const Test = () => {
    
    return <h1>Hello World!</h1>;
  };

  return (
    <div>
      <button className="toggle" onClick={handleClick}>
        Click Me
      </button>
      {toggle && <Test/>}
      <br />
      <button onClick={handleUp}>Up Count</button>
      <p>{count}</p>
      
    </div>
  );
};

export default Text;
