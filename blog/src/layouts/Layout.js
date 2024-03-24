import React from "react";
import Header from './Header';
import Footer from './Footer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <Header /> {/* Header 추가 */}
            <Container>
                <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="인기">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="profile" title="카테고리">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="make" title="문제 만들기">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="contact" title="공지">
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </Container>
            <Footer /> {/* Footer 추가 */}
        </>
    );
}

export default Layout;
