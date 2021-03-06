import React, { useContext } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";

import { Heading, CenterBlock, TinySpace, SmallSpace, LinkNoDecoration, LinkText } from "../../styles/styles.js";
import { StyledButton, CloudButton } from "../../styles/carbonComponents.js";
import { LoginWrapper } from "./styles";

const heading = number => {
    if (number) {
        return {
            headingText: `Explore & Discover our ${number} health datasets from across the UK.`
        };
    }
    return {
        headingText: `Explore & Discover our health datasets from across the UK.`
    };
};

const textItems = {
    loginButton: "Login via OpenAthens",
    logoutButton: "Logout",
    continueButton: "Continue as a guest",
    loggedInContinueButton: "Continue",
    description:
        "Search and explore information about these datasets. If you have an OpenAthens account, you can log in to enquire about access to these datasets for research and innovation."
};

const Login = () => {
    const appContext = useContext(AppContext);
    appContext.useDatasetCount();
    const datasetCount = appContext.state.datasetCount;

    return (
        <CenterBlock>
            <LoginWrapper>
                <Heading>{heading(datasetCount).headingText}</Heading>
                <TinySpace />
                <CenterBlock>
                    <p>{textItems.description}</p>
                </CenterBlock>
                <TinySpace />
                <CenterBlock>
                    <LinkNoDecoration to="/innovation">
                        <CloudButton center="true" kind="secondary">
                            {appContext.authenticated ? textItems.loggedInContinueButton : textItems.continueButton}
                        </CloudButton>
                    </LinkNoDecoration>
                    <SmallSpace />
                    {appContext.authenticated ? (
                        <LinkText
                            href="/logout"
                            onClick={() => {
                                window.open("https://login.openathens.net/signout");
                            }}
                        >
                            <StyledButton center="true" kind="primary">
                                {textItems.logoutButton}
                            </StyledButton>
                        </LinkText>
                    ) : (
                        <LinkText href="/login">
                            <StyledButton center="true" kind="primary">
                                {textItems.loginButton}
                            </StyledButton>
                        </LinkText>
                    )}
                </CenterBlock>
            </LoginWrapper>
        </CenterBlock>
    );
};

export default Login;
