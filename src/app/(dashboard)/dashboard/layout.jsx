import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h1 className='bg-amber-200 py-2 text-center'>Dashboard navbar</h1>
            {children}
            <h1 className='bg-gray-400 py-2 text-center'>Dashboard footer</h1>
        </div>
    );
};

export default layout;