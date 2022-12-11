import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import InsmechAmblem from "../../assets/insmech-amblem.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
              navbar.classList.add('bg-secondary');
              navbar.classList.remove('bg-transparent');
            } else {
              navbar.classList.add('bg-transparent');
              navbar.classList.remove('bg-secondary');
            }
          });
          
    })
    return (
        <header>
            <nav className="bg-transparent w-full h-20 fixed z-50 top-0 transition ease-in-out delay-150" id="navbar">
                <div className="w-full h-full px-4 md:px-16">
                    <div className="flex items-center justify-between h-full">
                        <div>
                            <Link
                                to="/"
                                className="text-lg font-bold text-black no-underline"
                            >
                                <img src={InsmechAmblem} width="151px" height="23px" alt="Insmech Logo"/>
                            </Link>
                        </div>
                        <div className="md:flex text-right hidden">
                            <Link
                                to="/"
                                className="no-underline text-white font-bold ml-[30px] transition ease-in-out delay-150 hover:text-primary focus:text-primary active:text-primary"
                            >
                                Ana Sayfa
                            </Link>
                            <a
                                href="#"
                                className="no-underline text-white font-bold ml-[30px] transition ease-in-out delay-150 hover:text-primary focus:text-primary active:text-primary"
                            >
                                Hakkımızda
                            </a>
                            <a
                                href="#"
                                className="no-underline text-white font-bold ml-[30px] transition ease-in-out delay-150 hover:text-primary focus:text-primary active:text-primary"
                            >
                                Projelerimiz
                            </a>
                            <a
                                href="#"
                                className="no-underline text-white font-bold ml-[30px] transition ease-in-out delay-150 hover:text-primary focus:text-primary active:text-primary"
                            >
                                Referanslarımız
                            </a>
                            <a
                                href="#"
                                className="no-underline text-white font-bold ml-[30px] transition ease-in-out delay-150 hover:text-primary focus:text-primary active:text-primary"
                            >
                                İletişim
                            </a>
                        </div>
                        <div className="md:hidden" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <img src={menuIcon} className="w-6 h-6"/>
                        </div>
                        <div className={isNavOpen ? "block absolute w-screen h-screen top-0 left-0 md:hidden" : "hidden md:hidden"}>
                            <div className="absolute top-0 left-0 w-screen h-screen bg-black z-[51] opacity-60">
                            </div>
                            <div className="bg-white absolute top-0 right-0 w-screen z-[52] flex flex-col items-center justify-between gap-y-8 p-8">
                                <div className="w-full flex flex-col items-center justify-center gap-y-4">
                                    <Link
                                        to="/"
                                        className="bg-slate-50 w-full flex items-center justify-center gap-x-3 py-4 rounded-lg text-secondary font-bold focus:bg-slate-200"
                                    >
                                        Ana Sayfa
                                    </Link>
                                    <a
                                        href="#"
                                        className="bg-slate-50 w-full flex items-center justify-center gap-x-3 py-4 rounded-lg text-secondary font-bold focus:bg-slate-200"
                                    >
                                        Hakkımızda
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-slate-50 w-full flex items-center justify-center gap-x-3 py-4 rounded-lg text-secondary font-bold focus:bg-slate-200"
                                    >
                                        Projelerimiz
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-slate-50 w-full flex items-center justify-center gap-x-3 py-4 rounded-lg text-secondary font-bold focus:bg-slate-200"
                                    >
                                        Referanslarımız
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-slate-50 w-full flex items-center justify-center gap-x-3 py-4 rounded-lg text-secondary font-bold focus:bg-slate-200"
                                    >
                                        İletişim
                                    </a>
                                </div>
                                <div className="w-full">
                                    <button className="bg-primary w-full flex items-center justify-center gap-x-3 py-4 rounded-lg" onClick={() => setIsNavOpen(false)}>
                                        <img src={closeIcon} className="w-4 h-4"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
