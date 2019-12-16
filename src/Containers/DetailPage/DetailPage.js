import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CenterLoading, NewStyledButton } from "../../styles/carbonComponents";
import { StyledHeading, SmallSpace, StyledSmallText, DarkText, TinySpace, StyledCard } from "../../styles/styles";
import PropTypes from "prop-types";

import { RESULT_DETAIL } from "../../queries/queries.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { withRouter } from "react-router-dom";
import InfoDetailGrid from "../../components/infoDetailGrid/infoDetailGrid";

const DetailPage = props => {
    const appContext = useContext(AppContext);
    props.match.params.id !== appContext.state.searchResultId && appContext.setSearchResultId(props.match.params.id);
    const { loading, error, data } = useQuery(RESULT_DETAIL, {
        variables: { ID: appContext.state.searchResultId },
        skip: appContext.state.searchResultId === null
    });
    if (loading) return <CenterLoading withOverlay={false} />;
    if (error) return <div>Error :(</div>;

    let detailData = {};

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

    return (
        <React.Fragment>
            {data && (detailData = data.hdrDataModelID.data) && (
                <SmallSpace>
                    <DarkText>
                        <StyledHeading>{detailData.title || "Title Unknown"}</StyledHeading>
                        <TinySpace />
                        <NewStyledButton>Request Access</NewStyledButton>
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
                        <StyledSmallText>{detailData.abstract || "Not specified"}</StyledSmallText>
                        <TinySpace />
                        <StyledHeading>Data Access</StyledHeading>
                        <TinySpace />
                        <StyledCard>
                            <InfoDetailGrid
                                contents={createGridArray([
                                    {
                                        title: "Access request cost",
                                        content: detailData.accessRequestCost,
                                        required: true
                                    },
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