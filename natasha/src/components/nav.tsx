import React from "react";
import {FaTwitter, FaDribbble, FaBehance, FaVimeo, FaLinkedin, FaBars} from 'react-icons/fa'

const Nav=()=>{
    return (
        <header className="px-8 flex flex-row justify-between items-center">
            <h3 className="text-xl font-bold">Natasha.</h3>
            <div className="md:flex gap-7 hidden">
                <p>portfolio</p>
                <p>about me</p>
                <p>my blog</p>
                <p>reviews</p>
                <p>contact me</p>
            </div>
            <div className="md:flex gap-5 hidden">
                <FaTwitter />
                <FaDribbble />
                <FaBehance />
                <FaVimeo />
                <FaLinkedin />
            </div>
            <FaBars className="md:hidden flex"/>
        </header>
    )
}

export default Nav;