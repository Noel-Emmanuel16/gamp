import React, { useState } from 'react'
import Logo from './logo'

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between py-3 mb-3">
                <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Logo />
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {navbarOpen ? "Close" : "Open"}
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    Repair
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    Business
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="border-2 border-[#49A05C] p-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    Protect Device
                                </a>
                            </li>
                            <div className="flex items-center text-sm text-bold leading-snug uppercase ml-2">
                                <div className="w-[40px] h-[40px] rounded-full bg-green-300 mr-2"></div>
                                <span>Hi, I'm Omotayo</span>
                                <ul className="dropdown">
                                    <li></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav

// return (
//     <nav className="w-full flex justify-center p-4">
//         <div className="container flex justify-between items-center">
//             <Logo />
//             <ul className="w-5/12 lg:flex hidden justify-between items-center">
//                 <li>
//                     <a href="" className="navlinks">
//                         Repair
//                     </a>
//                 </li>
//                 <li>
//                     <a href="" className="navlinks">
//                         Business
//                     </a>
//                 </li>
//                 <li>
//                     <a href="" className="border-2 border-[#49A05C] p-2">
//                         Protect Device
//                     </a>
//                 </li>
                // <div className="flex items-center">
                //     <div className="w-[40px] h-[40px] rounded-full bg-green-300 mr-2"></div>
                //     <span>Hi, I'm Omotayo</span>
                //     <ul className="dropdown">
                //         <li></li>
                //     </ul>
                // </div>
//             </ul>
//         </div>
//     </nav>
// )