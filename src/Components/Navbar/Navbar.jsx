import { NavLink } from "react-router";
import navLogo from '../../../public/2.png'
import { useEffect, useState } from "react";

const Navbar = () => {

    const Links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>About US</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className=" ">
            <div className={`navbar fixed top-0 z-10 w-full py-5 lg:px-24 md:px-16 sm:px-5 transition-all duration-300 ${isScrolled ? "bg-[#3a3131]/80 border-b-[#4b4141]" : "bg-transparent"
                } text-white`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-outline border-none text-xl"><img src={navLogo} className="w-[50px] h-[50px]" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;