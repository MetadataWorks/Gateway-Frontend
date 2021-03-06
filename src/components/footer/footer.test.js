import React from "react";
import { create } from "react-test-renderer";
import Footer from "./footer.js";

import StyleWrapper from "../../HOC/StyleWrapper/StyleWrapper.js";
import { LogoTwitter32, LogoLinkedin32 } from "@carbon/icons-react";
import { FooterWrapper, FooterBlock, FooterText, FooterImage } from "./styles.js";
import { SocialMediaLogo, TinyText } from "../../styles/styles.js";

const footerTextContent = {
    followUs: "Follow us on social media",
    visitHDRWebsite: "Visit the HDR UK Site",
    contactUs: "Contact us",
    privacyPolicy: "Privacy Policy",
    termsAndConditions: "Terms and conditions",
    copyright: "©HDR UK 2020. All rights reserved."
};

const links = {
    twitter: "https://twitter.com/HDR_UK",
    linkedIn: "https://www.linkedin.com/company/healthdataresearchuk/",
    hdr: "https://www.hdruk.ac.uk/",
    contact: "support@healthdatagateway.org",
    terms: "https://www.hdruk.ac.uk/infrastructure/gateway/terms-and-conditions/",
    privacy: "https://www.hdruk.ac.uk/infrastructure/gateway/privacy-policy/"
};

describe("<Footer> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <StyleWrapper>
                <Footer />
            </StyleWrapper>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should render footer components", () => {
        const footerWrapper = renderedOutput.findByType(FooterWrapper);
        const footerBlocks = footerWrapper.findAllByType(FooterBlock);

        expect(footerBlocks).toHaveLength(3);
        expect(footerBlocks[0].findAllByType(FooterImage)).toHaveLength(1);

        const block2Content = {
            footerText: footerBlocks[1].findByType(FooterText),
            socialMediaLogos: footerBlocks[1].findAllByType(SocialMediaLogo)
        };
        expect(block2Content.footerText.props.children).toEqual(footerTextContent.followUs);
        const twitterLink = block2Content.socialMediaLogos[0].findByType("a");
        expect(twitterLink.props.href).toEqual(links.twitter);
        expect(twitterLink.props.target).toEqual("_blank");
        expect(twitterLink.props.rel).toEqual("noopener noreferrer");
        block2Content.socialMediaLogos[0].findByType(LogoTwitter32);
        const linkedInLink = block2Content.socialMediaLogos[1].findByType("a");
        expect(linkedInLink.props.href).toEqual(links.linkedIn);
        expect(linkedInLink.props.target).toEqual("_blank");
        expect(linkedInLink.props.rel).toEqual("noopener noreferrer");
        block2Content.socialMediaLogos[1].findByType(LogoLinkedin32);

        const block3Texts = footerBlocks[2].findAllByType(FooterText);
        expect(block3Texts).toHaveLength(4);
        expect(block3Texts[0].props.children).toEqual(footerTextContent.visitHDRWebsite);
        expect(block3Texts[1].props.children).toEqual(footerTextContent.contactUs);
        expect(block3Texts[2].props.children).toEqual(footerTextContent.termsAndConditions);
        expect(block3Texts[3].props.children).toEqual(footerTextContent.privacyPolicy);

        const tinyText = footerWrapper.findAllByType(TinyText);
        expect(tinyText).toHaveLength(1);
        expect(tinyText[0].props.children).toEqual(footerTextContent.copyright);
    });
});
