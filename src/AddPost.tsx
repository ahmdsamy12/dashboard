import { useState } from "react";

export default function AddPost(props: any) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addPost(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <div className="add-post my-8 mx-auto w-fit border p-5 shadow-xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center font-black">Add new Post</h2>
        <div className="input-container">
          <label htmlFor="title" className="mr-2">
            Title
          </label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border resize-none my-4"
          />
        </div>
        <div className="input-container">
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border resize-none my-4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-submit bg-green-700 text-white py-1 px-7 rounded-lg mt-3"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
