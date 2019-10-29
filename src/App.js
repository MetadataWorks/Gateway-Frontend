import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Apollo from "./HOC/Apollo/Apollo.js";
import AppContext from "./HOC/AppContext/AppContext.js";
import LandingPage from "./Containers/LandingPage/LandingPage.js";
import AboutPage from "./Containers/AboutPage/AboutPage.js";
import SearchPage from "./Containers/SearchPage/SearchPage.js";
import AppSideNav from "./components/appSideNav/appSideNav.js";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import { SideStripeLeft, SideStripeRight, ContentWrapper } from "./styles/styles.js";

import GlobalStyle from "./styles/globalStyles.js";

import hdr_logo_white from "./assets/hdruk_logo_white.png";

class App extends React.Component {
    render() {
        return (
            <Apollo>
                <AppContext>
                    <AppWrapper>
                        <BrowserRouter>
                            <GlobalStyle />
                            <Header image={hdr_logo_white} />
                            <Switch>
                                <Route exact path="/">
                                    <Content>
                                        <LandingPage />
                                    </Content>
                                </Route>
                                <Route path="/search">
                                    <Content nav>
                                        <SearchPage />
                                    </Content>
                                </Route>
                                <Route path="/my-searches">
                                    <Content nav>
                                        <div>/my-searches</div>
                                    </Content>
                                </Route>
                                <Route path="/browse">
                                    <Content nav>
                                        <div>/browse</div>
                                    </Content>
                                </Route>
                                <Route path="/about">
                                    <Content nav>
                                        <AboutPage />
                                    </Content>
                                </Route>
                                <Route path="/help">
                                    <Content nav>
                                        <div>/help</div>
                                    </Content>
                                </Route>
                            </Switch>
                            <Footer image={hdr_logo_white} />
                        </BrowserRouter>
                    </AppWrapper>
                </AppContext>
            </Apollo>
        );
    }
}

const AppWrapper = styled.div`
    width: 66rem;
    margin: 0 auto 0;
`;

const PageWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const Content = props => (
    <PageWrapper>
        {props.nav && <AppSideNav />}
        <ContentWrapper nav={props.nav}>
            <SideStripeLeft />
            <SideStripeRight />
            {props.children}
        </ContentWrapper>
    </PageWrapper>
);

Content.propTypes = {
    nav: PropTypes.bool,
    children: PropTypes.node
};

export default App;
