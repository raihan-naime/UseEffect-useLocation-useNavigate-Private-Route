import React, { useEffect, useState } from "react";

const Test = () => {
  const [date, setDate] = useState(new Date());
  // const [data, setData] = useState('')
  // jotobar rerender hobe totobar trigger hobe
  useEffect(() => {
    console.log("useEffect with no dependency");
  });

  // ekbar e dhukbe
  useEffect(() => {
    console.log("useEffect with empty array");
    setInterval(() => {
        setDate(new Date())
    }, 1000);
  }, []);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0)
  const [lol, setLol] = useState(true)

  useEffect(() => {
    setLol(!lol)
    setLoading(true)
    // Fetch data from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
        
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, [count]);
  return (
    <div>
      {date.toLocaleTimeString()}
      <button
        className="btn"
        onClick={() => {
          setDate(new Date());
        }}
      >
        Update Time
      </button>
        <button
        className="btn"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Re Fetch {count}
      </button>
      
        {loading ? 
           'loading'  : <div className="grid grid-cols-3 gap-5 p-5">
          {posts.slice(0, 10).map((post) => (
            <div className="bg-purple-500 rounded-lg p-5" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        }
      
    </div>
  );
};

export default Test;
