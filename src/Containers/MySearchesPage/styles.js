import styled from "styled-components";
import { ResultsWrapper } from "../../styles/styles.js";

export const SavedSearchesWrapper = styled(ResultsWrapper)`
    min-height: 36rem;
    height: ${p => (p.visible ? "calc(100vh - 14rem)" : "calc(100vh - 27rem)")};
    ${p => p.visible && "max-height: calc(100vh - 14rem);"};
`;
