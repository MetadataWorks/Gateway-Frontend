import React from "react";
import { SideNavLink } from "carbon-components-react";
import { NavHeading, NavText, MenuLine, LinkNoDecoration } from "../../styles/styles.js";
import { MainSideNav, NavItems } from "../../styles/carbonComponents";
import Filter from "../filter/filter.js";

const text = {
    search: "Search",
    mySearches: "My searches",
    browse: "Browse",
    about: "About",
    help: "Help",
    username: "Nicola Blackwood",
    company: "UK Government"
};

const routes = [
    {
        path: "/search",
        text: text.search
    },
    {
        path: "/my-searches",
        text: text.mySearches
    },
    {
        path: "/browse",
        text: text.browse
    },
    {
        path: "/about",
        text: text.about
    },
    {
        path: "/help",
        text: text.help
    }
];

const AppSideNav = () => (
    <MainSideNav expanded={true} isChildOfHeader={false} aria-label="Side navigation">
        <NavHeading>{text.username}</NavHeading>
        <NavText>{text.company}</NavText>
        <MenuLine />
        <NavItems>
            {routes.map(route => (
                <LinkNoDecoration to={route.path} key={`route${route.path}`}>
                    <SideNavLink>{route.text}</SideNavLink>
                </LinkNoDecoration>
            ))}
        </NavItems>
        <Filter></Filter>
    </MainSideNav>
);

export default AppSideNav;
