import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const [getData, setGetData] = useState([]);
  const [getMore, setGetMore] = useState(1);

  const handleUp = () => {
    setGetMore(getMore + 1);
  };

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=0&limit=${getMore * 8}`)
      .then((res) => res.json())
      .then((getDatas) => {
        setGetData(getDatas);
      });
  }, [getMore]);

  return (
    <div>
      <div className="flex-s">
        {getData.length &&
          getData.map((data) => {
            // const style ;

            return (
              <div key={data.id}>
                {console.log(data.download_url)}
                <img src={data.download_url} className="s-img" alt="Anh" />
              </div>
            );
          })}
      </div>

      <button className="btn" onClick={handleUp}>
        Load More
      </button>
    </div>
  );
};

export default UseEffect;
