import React from "react";
import { create } from "react-test-renderer";
import LandingPage from "./LandingPage.js";
import { BrowserRouter } from "react-router-dom";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

import Paragraph from "../../components/paragraph/paragraph.js";
import Login from "../../components/login/login.js";
import NewsTile from "../../components/newsTile/newsTile.js";
import NewsTileGroup from "../../components/newsTileGroup/newsTileGroup.js";
import ImageBlock from "../../components/imageBlock/imageBlock.js";

import { ParagraphHeading, DarkText, NewListItem, LinkText, MediumSpace, SmallSpace } from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

describe("<LandingPage> ", () => {
    const text = {
        landingFirstParaHeading: "What is the Innovation Gateway",
        landingFirstPara:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        landingSecondParaHeading: "Guidelines for using the Innovation Gateway",
        landingSecondPara:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        landingThirdParaHeading: "Help using the Innovation Gateway",
        landingThirdPara: "There are several ways to get help using the Innovation Gateway",
        firstBullet: "Lorem ipsum",
        secondBullet: "Lorem ipsum",
        thirdBullet: "Lorem ipsum",
        firstLink: "Frequently asked questions",
        secondLink: "Forum",
        thirdLink: "Get in touch with HDR UK",
        newsGroupHeading: "HDR News"
    };

    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <BrowserRouter>
                    <LandingPage />
                </BrowserRouter>
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should test the LandingPage Snapshot", () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should check the correct components are displayed", () => {
        const paragraphs = renderedOutput.findAllByType(Paragraph);
        const login = renderedOutput.findAllByType(Login);
        const newsTileGroup = renderedOutput.findAllByType(NewsTileGroup);
        const imageBlock = renderedOutput.findAllByType(ImageBlock);
        const paragraphHeadings = renderedOutput.findAllByType(ParagraphHeading);
        const paragraphBullets = renderedOutput.findAllByType(ParagraphBullets);
        const darkTexts = renderedOutput.findAllByType(DarkText);
        const smallSpaces = renderedOutput.findAllByType(SmallSpace);
        const mediumSpaces = renderedOutput.findAllByType(MediumSpace);

        expect(paragraphs).toHaveLength(3);
        expect(login).toHaveLength(1);

        expect(newsTileGroup).toHaveLength(1);
        const newsTiles = newsTileGroup[0].findAllByType(NewsTile);
        expect(newsTiles).toHaveLength(3);
        expect(newsTiles[0].props.identifier).toEqual("newsItemOne");
        expect(newsTiles[1].props.identifier).toEqual("newsItemTwo");
        expect(newsTiles[2].props.identifier).toEqual("newsItemThree");

        expect(imageBlock).toHaveLength(1);
        expect(paragraphHeadings).toHaveLength(4);
        expect(paragraphHeadings[1].props.children).toEqual(text.newsGroupHeading);

        expect(paragraphBullets).toHaveLength(2);
        const newListItems = paragraphBullets[1].findAllByType(NewListItem);
        expect(newListItems).toHaveLength(3);
        expect(newListItems[0].findByType(LinkText).props.children).toEqual(text.firstLink);
        expect(newListItems[1].findByType(LinkText).props.children).toEqual(text.secondLink);
        expect(newListItems[2].findByType(LinkText).props.children).toEqual(text.thirdLink);

        // First dark text section
        expect(darkTexts).toHaveLength(6);
        expect(darkTexts[1].props.children[0].props.children).toEqual(text.landingFirstParaHeading);
        expect(darkTexts[1].findAllByType(SmallSpace)).toHaveLength(1);
        expect(darkTexts[1].props.children[2].props.children).toEqual(text.landingFirstPara);

        // Second dark text section
        const darkText2ParagraphHeadings = darkTexts[3].findAllByType(ParagraphHeading);
        expect(darkText2ParagraphHeadings[0].props.children).toEqual(text.landingSecondParaHeading);
        expect(darkText2ParagraphHeadings[1].props.children).toEqual(text.landingThirdParaHeading);
        const darkText2Paragraphs = darkTexts[3].findAllByType(Paragraph);
        expect(darkText2Paragraphs[0].props.children).toEqual(text.landingSecondPara);
        expect(darkText2Paragraphs[1].props.children).toEqual(text.landingThirdPara);
        const darkText2Bullets = darkTexts[3].findByType(ParagraphBullets);
        const darkText2BulletsItems = darkText2Bullets.findAllByType(NewListItem);
        expect(darkText2BulletsItems[0].props.children).toEqual(text.firstBullet);
        expect(darkText2BulletsItems[1].props.children).toEqual(text.secondBullet);
        expect(darkText2BulletsItems[2].props.children).toEqual(text.thirdBullet);

        expect(smallSpaces).toHaveLength(8);
        expect(mediumSpaces).toHaveLength(3);
    });
});
