"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
    const PathName = usePathname();
    const router = useRouter();
    const handler = () =>{
        router.push("/login")
    }
    const NavLink = [
        { "name": "Home", "link": "/home" },
        { "name": "About", "link": "/about" },
        { "name": "Contact", "link": "/contact" },
        { "name": "Blogs", "link": "/blogs" },
    ]
    if(PathName.includes("dashboard")) return <div className='bg-yellow-200 py-3'>Dashboard layout</div>
    return (
        <div className='bg-sky-700'>
            <div className='flex items-center justify-between py-3 px-10 mx-auto'>
                <h1 className='text-3xl font-bold text-white'>Logo</h1>
                <ul className='flex items-center gap-10 text-lg text-white'>
                    {
                        NavLink.map(nav => (
                            <div key={nav.link}>
                                <Link className={`${PathName == nav.link && "text-yellow-400"}`} href={nav.link}>{nav.name}</Link>
                            </div>
                        ))
                    }
                    <button onClick={handler} className='bg-amber-200 rounded px-4 py-1 text-gray-600'>Login</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;