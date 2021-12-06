import './Aside.css';

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { DefaultRouteConfig } from '../../../app/common/models/Common';
import { defaultRouteConfig } from '../../../app/routing/PublicRoutes';


const Aside: FC = () => {
    const menuItem: DefaultRouteConfig[] = defaultRouteConfig();
    return (
        <div className="aside aside-fixed">
            <div className="relative ">
                <div className="absolute inset-y-0 left-0 ">
                    <div className="aside-logo">
                        <h2>Last Minute Prep</h2>
                    </div>
                    <div className="aside-menu hover-scroll-overlay-y">
                        <div className="menu menu-column ">

                            {
                                menuItem.map(item => {
                                    return <div key={`${item.id}`} className="menu-item">
                                        {/* <Link to="/home" activeStyle={{textDecoration:"underline" , color:"red"}}> Dashboard </Link> */}
                                        <Link className="menu-link" to={`${item.link}`}>
                                            <span>{item.label}</span>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Aside }