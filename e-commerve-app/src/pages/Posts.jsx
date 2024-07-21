import { useEffect, useState } from "react";
import LottieAnimation1 from "../animations/LottieAnimation1";


function Posts() {
  const [postsList, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
            {postsList.length === 0 ? (
              <LottieAnimation1 />
            ) : (
              postsList.map((post) => {
                return (
                  <div className="col-sm-6" key={post.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <h6 className="card-test">{post.body}</h6>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row"></div>
      </div>
    </main>
  );
}

export default Posts;
