import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between items-center px-5 py-4 bg-primary relative z-20">
            {/* Logo */}
            <a className="font-bold text-white text-xl" href="#">Hinduja B</a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex gap-6 text-white font-medium">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setToggleMenu(!toggleMenu)} 
                className="block md:hidden focus:outline-none"
                aria-label="Toggle mobile menu"
            >
                <Bars3Icon className="text-white h-6 w-6" />
            </button>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <nav className="absolute top-full left-0 w-full bg-primary shadow-md md:hidden">
                    <ul 
                        onClick={() => setToggleMenu(false)} 
                        className="flex flex-col text-white text-center py-4 gap-4"
                    >
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
