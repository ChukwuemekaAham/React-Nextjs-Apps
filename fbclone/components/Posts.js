import React from "react";
import Post from "./Post";

const realtimePosts = [
  {
    id: "6",
    name: "Aham Chukwuemeka",
    message: "Hello. I'm Aham Chukwuemeka",
    email: "ahamchukwuemeka1@gmail.com",
    timestamp: "15/05/2021 22:06:33",
    image: "https://links.papareact.com/l4v",
  },
  {
    id: "1",
    name: "Aham Chukwuemeka",
    message: "Tailwindcss is simply fanstatic",
    email: "ahamchukwuemeka1@gmail.com",
    timestamp: "15/05/2021 22:15:04",
    postImage: "https://links.papareact.com/zof",
    image: "https://links.papareact.com/l4v",
  },
  {
    id: "2",
    name: "Elon Musk",
    message: "Hello. I'm Elon Musk",
    email: "ElonMusk@gmail.com",
    timestamp: "15/05/2021 22:18:02",
    postImage: "https://links.papareact.com/4zn",
    image: "https://links.papareact.com/kxk",
  },
  {
    id: "3",
    name: "Jeff Bezoz",
    message: "Hello. I'm Jeff Bezoz",
    email: "JeffBezoz@gmail.com",
    timestamp: "16/05/2021 17:15:03",
    postImage: "https://links.papareact.com/k2j",
    image: "https://links.papareact.com/f0p",
  },
  {
    id: "4",
    name: "Mark Zuckerberg",
    message: "Hello. I'm Mark Zuckerberg",
    email: "MarkZuckerberg@gmail.com",
    timestamp: "19/05/2021 22:15:04",
    postImage: "https://links.papareact.com/xql",
    image: "https://links.papareact.com/snf",
  },
  {
    id: "5",
    name: "Bill Gates",
    message: "Hello. I'm Bill Gates",
    email: "BillGates@gmail.com",
    timestamp: "19/05/2021 09:11:25",
    postImage: "https://links.papareact.com/4u4",
    image: "https://links.papareact.com/zvy",
  },
];

function Posts() {
  return (
    <div>
      {realtimePosts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          email={post.email}
          timestamp={post.timestamp}
          image={post.image}
          postImage={post.postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
