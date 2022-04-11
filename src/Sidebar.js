import React from 'react';
import { Link } from 'react-router-dom';


import { SidebarData } from "./Sidebardata";

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='sidebarlist'>
                {SidebarData.map((val, key) => {
                    return (
                        <Link to={val.link} key={key}><li className='row' >
                            <div>{val.icon}</div>
                        </li></Link>
                    )
                })}
            </ul>
        </div>
    )
            }
    export default Sidebar;
