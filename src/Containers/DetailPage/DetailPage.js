import React, { useContext, useState } from "react";
import { CenterLoading, NewStyledButton, StyledModal } from "../../styles/carbonComponents";
import {
    StyledHeading,
    SmallSpace,
    StyledSmallText,
    DarkText,
    TinySpace,
    StyledCard,
    StyledSmallBoldText,
    LinkNoDecoration,
    ParagraphText
} from "../../styles/styles";
import PropTypes from "prop-types";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { withRouter } from "react-router-dom";
import InfoDetailGrid from "../../components/infoDetailGrid/infoDetailGrid";

const textItems = {
    login: "Login via OpenAthens",
    buttonText: "Make enquiry",
    cancel: "Cancel",
    modalTitle: "Access request for",
    modalGuidelineText:
        "You must be logged in to request access to this dataset. We currently only support log in via OpenAthens, if you do not have access to an OpenAthens login, you can contact the Data Custodian directly.",
    contactHeading: "Contact details for Data custodian",
    modalGuidelineNoEmailText:
        "This dataset does not currently support Access Request Enquiries directly through the Gateway. Details of how to request access are given below:"
};

const DetailPage = props => {
    const appContext = useContext(AppContext);

    const [modalOpen, setModalOpen] = useState(false);

    const createGridArray = fields => {
        let returnArray = [];
        fields.map(field => {
            field.content
                ? returnArray.push({ title: field.title, content: field.content })
                : field.required && returnArray.push({ title: field.title, content: "Not specified" });
            return returnArray;
        });
        return returnArray;
    };

    appContext.useDetailData(props.match.params.id);

    const detailData = appContext.detailData.data;
    if (appContext.detailData.status === "loading") {
        return <CenterLoading withOverlay={false} />;
    } else if (appContext.detailData.status === "error") {
        return <div>Unable to load</div>;
    }

    const searchResultId = appContext.setSearchResultId;

    return (
        <React.Fragment>
            {detailData !== {} && (
                <SmallSpace>
                    <DarkText>
                        <StyledHeading>{detailData.title || "Title Unknown"}</StyledHeading>
                        <TinySpace />
                        {appContext.authenticated &&
                        (detailData.contactPoint && detailData.contactPoint.indexOf("@") !== -1) ? (
                            <LinkNoDecoration
                                to={`/request-access/${detailData.id}`}
                                onClick={() => searchResultId(detailData.id)}
                            >
                                <NewStyledButton kind="primary">{textItems.buttonText}</NewStyledButton>
                            </LinkNoDecoration>
                        ) : (
                            <NewStyledButton kind="primary" onClick={() => setModalOpen(true)}>
                                {textItems.buttonText}
                            </NewStyledButton>
                        )}

                        <StyledModal
                            id="access-request-modal"
                            open={modalOpen}
                            onRequestSubmit={() => {
                                window.location.href = "/login";
                            }}
                            onSecondarySubmit={() => setModalOpen(false)}
                            onRequestClose={() => setModalOpen(false)}
                            modalHeading={textItems.modalTitle}
                            primaryButtonText={textItems.login}
                            secondaryButtonText={textItems.cancel}
                            primaryButtonDisabled={
                                detailData.contactPoint && detailData.contactPoint.indexOf("@") === -1
                            }
                        >
                            <StyledHeading>{detailData.title || "Title Unknown"}</StyledHeading>
                            <StyledSmallText>
                                {detailData.contactPoint && detailData.contactPoint.indexOf("@") === -1
                                    ? textItems.modalGuidelineNoEmailText
                                    : textItems.modalGuidelineText}
                            </StyledSmallText>
                            <TinySpace />
                            <StyledSmallBoldText>{textItems.contactHeading}</StyledSmallBoldText>

                            <StyledSmallText>
                                {detailData.contactPoint && detailData.contactPoint.indexOf("@") === -1 ? (
                                    <a href={detailData.contactPoint} target="_blank" rel="noopener noreferrer">
                                        {detailData.contactPoint}
                                    </a>
                                ) : detailData.contactPoint && detailData.contactPoint.indexOf("@") !== -1 ? (
                                    <a href={`mailto:${detailData.contactPoint}`}>{detailData.contactPoint}</a>
                                ) : (
                                    "No contact information available"
                                )}
                            </StyledSmallText>
                        </StyledModal>
                        <TinySpace />
                        <InfoDetailGrid
                            contents={[
                                { title: "Date released", content: detailData.releaseDate || "Not specified" },
                                { title: "Publisher", content: detailData.publisher || "Not specified" },
                                { title: "License", content: detailData.license || "Not specified" },
                                { title: "Request time", content: detailData.accessRequestDuration || "Not specified" },
                                { title: "Standard", content: detailData.conformsTo || "Not specified" }
                            ]}
                        ></InfoDetailGrid>
                        <TinySpace />
                        <ParagraphText>{detailData.abstract || "Not specified"}</ParagraphText>
                        <TinySpace />
                        <StyledHeading>Data Access</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            <InfoDetailGrid
                                contents={createGridArray([
                                    {
                                        title: "Data controller",
                                        content: detailData.dataController,
                                        required: false
                                    },
                                    { title: "Data processor", content: detailData.dataProcessor, required: false },
                                    { title: "Access rights", content: detailData.accessRights, required: false }
                                ])}
                            ></InfoDetailGrid>
                        </StyledCard>
                        <StyledHeading>Coverage</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            <InfoDetailGrid
                                contents={createGridArray([
                                    {
                                        title: "Jurisdiction",
                                        content: detailData.jurisdiction,
                                        required: true
                                    },
                                    {
                                        title: "Geographic coverage",
                                        content: detailData.geographicCoverage,
                                        required: true
                                    },
                                    {
                                        title: "Dataset start date",
                                        content: detailData.datasetStartDate,
                                        required: true
                                    },
                                    {
                                        title: "Dataset end date",
                                        content: detailData.datasetEndDate,
                                        required: true
                                    },
                                    { title: "Periodicity", content: detailData.periodicity, required: false }
                                ])}
                            ></InfoDetailGrid>
                        </StyledCard>
                        <StyledHeading>Demographics</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            <InfoDetailGrid
                                contents={[
                                    {
                                        title: "Statistical population",
                                        content: detailData.statisticalPopulation || "Not specified"
                                    },
                                    { title: "Age band", content: detailData.ageBand || "Not specified" }
                                ]}
                            ></InfoDetailGrid>
                        </StyledCard>
                        <StyledHeading>Related Resources</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            <InfoDetailGrid
                                contents={[
                                    {
                                        title: "Physical sample availability",
                                        content: detailData.physicalSampleAvailability || "Not specified"
                                    }
                                ]}
                            ></InfoDetailGrid>
                        </StyledCard>
                        {(detailData.group || detailData.linkedDataset || detailData.derivedDatasets) && (
                            <React.Fragment>
                                <StyledHeading>Related Datasets</StyledHeading>
                                <TinySpace />
                                <StyledCard>
                                    <InfoDetailGrid
                                        contents={createGridArray([
                                            { title: "Group", content: detailData.group, required: false },
                                            {
                                                title: "Linked datasets",
                                                content: detailData.linkedDataset,
                                                required: false
                                            },
                                            {
                                                title: "Derived datasets",
                                                content: detailData.derivedDatasets,
                                                required: false
                                            }
                                        ])}
                                    ></InfoDetailGrid>
                                </StyledCard>
                            </React.Fragment>
                        )}
                        {(detailData.creator || detailData.citations) && (
                            <React.Fragment>
                                <StyledHeading>Attributions</StyledHeading>
                                <TinySpace />
                                <StyledCard>
                                    <InfoDetailGrid
                                        contents={createGridArray([
                                            { title: "Creator", content: detailData.creator, required: false },
                                            {
                                                title: "Citations",
                                                content: detailData.citations,
                                                required: false
                                            }
                                        ])}
                                    ></InfoDetailGrid>
                                </StyledCard>
                            </React.Fragment>
                        )}
                        {appContext.authenticated ? (
                            <LinkNoDecoration
                                to={`/request-access/${detailData.id}`}
                                onClick={() => searchResultId(detailData.id)}
                            >
                                <NewStyledButton kind="primary">{textItems.buttonText}</NewStyledButton>
                            </LinkNoDecoration>
                        ) : (
                            <NewStyledButton kind="primary" onClick={() => setModalOpen(true)}>
                                {textItems.buttonText}
                            </NewStyledButton>
                        )}
                    </DarkText>
                </SmallSpace>
            )}
        </React.Fragment>
    );
};

DetailPage.propTypes = {
    match: PropTypes.object
};

export default withRouter(DetailPage);
