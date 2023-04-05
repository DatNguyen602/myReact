import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const [post, setPosts] = useState([]);
  const [count, setCount] = useState(1);

  const handleUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=0&limit=${count * 8}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [count]);

  return (
    <div>
      <div className="flex-s">
        {post.length &&
          post.map((postIT, index) => {
            // const style ;

            return (
              <div key={postIT.id}>
                {console.log(postIT.download_url)}
                <img src={postIT.download_url} className="s-img" alt="Anh" />
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
