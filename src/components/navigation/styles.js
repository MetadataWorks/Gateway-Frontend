import styled from "styled-components";
import { HeaderNavigation } from "carbon-components-react";

export const NavigationWrapper = styled.div`
    width: 100%;
    height: 3.125rem;
    border-bottom: 0.0625rem solid ${p => p.theme.colors.border};
`;

export const NavigationHeader = styled(HeaderNavigation)`
    :before {
        content: unset;
    }
`;

export const NavigationItem = styled.div`
    height: 100%;
    min-height: 2.875rem;
    padding: 1rem;
    line-height: 0.875rem;
    text-decoration: none;
    color: ${p => p.theme.text.primary};

    :hover,
    :active {
        border-bottom: 0.25rem solid ${p => p.theme.colors.primarySolid};
    }
`;