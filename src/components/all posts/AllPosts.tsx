import { useEffect, useState } from "react";

import { client } from "../../api/Posts";
import AddPost from "../../AddPost";

interface post {
  id: number;
  title: string;
  body: string;
  price: number;
}

function AllPosts() {
  const [posts, setPosts] = useState<post[]>([]);

  const deletePost = (id: number) => {
    client.delete(`${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  const addPosts = (title: string, body: string, price: number): any => {
    client
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
        price: price,
      })
      .then((response) => {
        console.log(response.data);

        setPosts([response.data, ...posts]);
      });
    // setTitle("");
    // setBody("");
  };

  useEffect(() => {
    client.get("?_limit=20").then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="app">
      <AddPost addPost={addPosts} />
      <div className="all-content grid grid-cols-main gap-5 mt-10 bg-gray-300 p-4">
        {posts.map((post: post) => (
          <div className="post bg-white p-4 rounded-lg" key={post.id}>
            <h2 className=" font-black mb-2">{post.title}</h2>
            <p className=" text-stone-500 mb-2">{post.body}</p>
            <p>{post.price}</p>
            <div className="btn-del">
              <button
                className="post-del bg-red-700 text-white px-10 py-2 rounded-lg"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
