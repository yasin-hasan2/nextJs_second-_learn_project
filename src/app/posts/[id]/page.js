import React from "react";

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id);
  console.log(params);
  return (
    <div>
      <h1> Post Details of {params.id}</h1>
      <h6>Title : {title} </h6>
      <p> Description: {body} </p>
    </div>
  );
};

export default PostDetailsPage;
