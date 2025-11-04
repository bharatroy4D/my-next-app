import Link from 'next/link';
import React from 'react';

const Header = () => {
    const NavLink = [
        {"name": "Home", "link":"/home"},
        {"name": "About", "link":"/about"},
        {"name": "Contact", "link":"/contact"},
        {"name": "Blogs", "link":"/blogs"},
    ]
    return (
        <div className='bg-sky-700'>
            <div className='flex items-center justify-between py-3 px-10 mx-auto'>
                <h1 className='text-3xl font-bold text-gray-900'>Logo</h1>
                <ul className='flex items-center gap-10 text-lg text-gray-900'>
                {
                    NavLink.map(nav => (
                        <div key={nav.link}>
                            <Link href={nav.link}>{nav.name}</Link>
                        </div>
                    ))
                }
                </ul>
            </div>
        </div>
    );
};

export default Header;