import React from "react";

export const Nav=()=>{
    return (
        <ul className="flex flex-row gap-7 m-5 justify-between">
        <div className="flex flex-row gap-6">
        <li>portfolio</li>
        <li>about me</li>
        <li>my blog</li>
        <li>reviews</li>
        <li>contact me</li>
        </div>
        <li>
            <p>schedule a call</p>
        </li>
        </ul>
    )
}