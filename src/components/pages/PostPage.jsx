import React from 'react';
const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data;
}

const PostPage = async () => {
    const postData = await getPost();
    return (
        <div >
            <h1 className='text-center py-4 text-amber-400 text-4xl font-semibold'>All POST DATA</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 px-10 mx-auto'>
                {
                    postData?.map((post) => (
                        <div key={post.id} className='border-2 rounded p-3 '>
                            <h1 className='text-2xl font-semibold'>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;