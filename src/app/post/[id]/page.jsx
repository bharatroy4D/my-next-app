import React from 'react';

const getDetailsPage = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store", // 🚀 dynamic fresh data
  });
  return res.json();
};

export default async function Page({ params }) {
  const { id } = await params; // ✅ unwrap params first
  const post = await getDetailsPage(id);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-3">Post Title: {post.title}</h1>
      <p className="text-lg text-gray-600">Post Description: {post.body}</p>
    </div>
  );
}
