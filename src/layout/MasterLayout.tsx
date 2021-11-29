import React from "react";
import { Aside } from "./components/aside/Aside";
import { Content } from "./components/content/content";
import { Header } from "./components/header/Header";

import './MasterLayout.css'


const MasterLayout: React.FC = ({ children }) => {
    return (
        <>
            <div className="app-wrapper">
                <Aside />
                <div className="wrapper">
                    <Header />
                    <Content> {children} </Content>
                </div>
            </div>
        </>
    )
}

export { MasterLayout }

