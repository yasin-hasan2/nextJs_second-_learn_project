import { getPosts } from "@/services/postApi";
import Link from "next/link";
import React from "react";

const PostPage = async () => {
  const postsData = await getPosts();
  //   console.log(postsData);
  return (
    <div>
      <h2>All posts : {postsData.length}</h2>
      <div className=" lg:grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map(({ title, body, id }) => (
          <div key={id} className="border-2 p-6">
            <h3>Title : {title}</h3>
            <p> Description: {body}</p>
            <button className="btn mt-6">
              <Link href={`/posts/${id}`}>see details</Link>{" "}
            </button>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default PostPage;
