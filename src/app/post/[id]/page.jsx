import React from 'react';

const getDetailsPage = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // cache: "no-store", 
  });
  return res.json();
};

const Page = async ({ params }) => {
  const { id } = await params; // ✅ unwrap params first
  const post = await getDetailsPage(id);

  return (
   <div className="p-10 m-10 h-screen w-3xl mx-auto bg-white rounded-xl shadow-md border border-gray-600 hover:shadow-lg transition-all duration-300">
  <h1 className="text-4xl font-semibold text-gray-800 mb-4 leading-tight capitalize">
    {post.title}
  </h1>
  <p className="text-lg text-gray-600 leading-relaxed tracking-wide">
    {post.body}
  </p>
</div>

  );
}
export default Page;