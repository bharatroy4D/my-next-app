import Link from 'next/link';
import React from 'react';

const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

const PostPage = async () => {
    const postData = await getPost();

    return (
        <div className="px-5 md:px-16 py-8">
            <h1 className='text-center py-4 text-amber-500 text-4xl font-bold tracking-wide'>
                All POST DATA
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    postData?.slice(0, 20)?.map((post) => (
                        <div
                            key={post.id}
                            className='border rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white p-5 cursor-pointer flex flex-col justify-between'
                        >
                            <h1 className='text-xl font-semibold text-gray-800 mb-2 line-clamp-2'>
                                {post.title}
                            </h1>

                            <p className='text-gray-600 text-sm leading-6 line-clamp-4 flex-grow'>
                                {post.body}
                            </p>

                            <Link href={`/post/${post.id}`}>
                                <button className='mt-4 bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-2 rounded-md transition-all'>
                                    Read More
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default PostPage;
