import React from 'react'
import * as Faicons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Journey',
        path: '/journey',
        icon: <Faicons.FaCar/>,
        cName: 'nav-text'
    },
    {
        title: 'Tech Stack',
        path: '/techstack',
        icon: <Faicons.FaLaptopCode/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <GrIcons.GrProjects />,
        cName: 'nav-text'
    }
]

export default SidebarData