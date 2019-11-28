import styled from "styled-components";
import { colorTheme } from "../../styles/styles.js";
import { Button, InlineLoading } from "carbon-components-react";

export const SaveSearchButton = styled(Button)`
    width: 90%;
    margin: 0.5rem auto 0;
    padding: 0 1rem 0 1rem;
    background-color: unset;
    border: 0.0625rem solid ${colorTheme.blueText};
    color: ${colorTheme.blueText};

    :disabled {
        background-color: ${colorTheme.darkBlue};
        border-color: ${colorTheme.darkBlue};
        color: ${colorTheme.white};

        :hover {
            background-color: ${colorTheme.darkBlue};
            border-color: ${colorTheme.darkBlue};
            color: ${colorTheme.white};
            outline-color: ${colorTheme.darkBlue};
        }
    }

    :hover {
        background-color: ${colorTheme.blueText};
    }
`;

export const RightSmallInlineLoading = styled(InlineLoading)`
    width: unset;
    float: right;
    font-size: 0.5rem;
`;

export const NavErrorText = styled.div`
    padding: 0.25rem 1rem;
    font-size: 0.75rem;
    color: ${colorTheme.error};
`;
