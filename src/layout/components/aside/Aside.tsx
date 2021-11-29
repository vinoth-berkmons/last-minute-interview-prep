import React, { FC } from "react";
import { Link } from "react-router-dom";
import './Aside.css';


const Aside: FC = () => {
    return (
        <div className="aside aside-fixed">
            <div className="relative ">
                <div className="absolute inset-y-0 left-0 ">
                    <div className="aside-logo">
                        <h2>Last Minute Prep</h2>
                    </div>
                    <div className="aside-menu hover-scroll-overlay-y">
                        <div className="menu menu-column ">
                            <div className="menu-item">
                            {/* <Link to="/home" activeStyle={{textDecoration:"underline" , color:"red"}}> Dashboard </Link> */}
                                <Link className="menu-link" to="/dashboard">
                                    <span>Dashboard</span>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link className="menu-link" to="/topics">
                                    <span>Topics</span>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link">
                                    <span>Interviews</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link">
                                    <span>Assignments</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Aside }