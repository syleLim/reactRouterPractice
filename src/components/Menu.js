import React from "react"
import { Link, NavLink } from "react-router-dom"

const style = {
    color : "green"
}

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/" activeStyle={style}>Home</NavLink></li>
                <li><NavLink to="/about" activeStyle={style}>About</NavLink></li>
                <li><NavLink to="/about/param" activeStyle={style}>Param</NavLink></li>
                <li><NavLink to="/about/?color=query" activeStyle={style}>Qeury</NavLink></li>
                <li><NavLink to="/posts" activeStyle={style}>Posts</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;