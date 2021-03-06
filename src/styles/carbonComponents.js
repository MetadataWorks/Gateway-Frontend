import {
    Button,
    UnorderedList,
    Header,
    SideNavLinkText,
    Search,
    SideNav,
    Dropdown,
    Accordion,
    AccordionItem,
    SideNavItems,
    Checkbox,
    DatePicker,
    DatePickerInput,
    Loading,
    InlineLoading,
    Modal,
    Form,
    TextInput,
    FormGroup,
    FormLabel,
    TextArea,
    Tag,
    Tabs,
    Tab
} from "carbon-components-react";
import styled, { css } from "styled-components";

// HDR Imported carbon components ..
export const HDRTab = Tab;

// Styled carbon components
export const HDRTabs = styled(Tabs)`
    text-align: center;
`;

export const StyledButton = styled(Button)`
    padding: 15px;
    width: 215px;
    height: 54px;
    font-weight: 700;

    ${p => p.center === "true" && "justify-content: center;"}
`;

export const CloudButton = styled(StyledButton)`
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.text.heading};
    :hover {
        background-color: ${p => p.theme.colors.border};
        color: ${p => p.theme.text.heading};
    }
`;

export const FilterButton = styled(Button)`
    width: calc(100% + 4.6rem);
    margin-left: -1rem;
    min-height: 1rem;
    height: 2rem;
    padding: 0px 0px 0px 0.635rem;
    bottom: -1.75rem;
    margin-top: -1rem;
    font-weight: 700;
`;

export const GhostNavigationButton = styled(Button)`
    width: 100%;
    height: 100%;
    color: ${p => p.theme.text.primary};
    line-height: 1.125rem;
    font-weight: inherit;
    padding: 0;

    :hover {
        color: ${p => p.theme.text.primary};
    }
`;

export const ParagraphBullets = styled(UnorderedList)`
    padding-top: 5px;
`;

export const AccordionBlock = styled(Accordion)`
    width: 90%;
    align-self: center;
    margin: 1rem 0;
    padding-bottom: 1rem;
`;

export const AccordionElement = styled(AccordionItem)`
    position: relative;
    border-top: none;
    border-bottom: 0.0675rem solid ${p => p.theme.colors.border};
    ${props =>
        props.modal === "true" &&
        props.open &&
        css`
            > div {
                padding: 0 !important;
            }
            * svg {
                transform: rotate(0deg) !important;
            }
        `}
`;

export const HeaderWrapper = styled(Header)`
    height: ${p => p.theme.sizes.header}rem;
    max-width: 100%;
    position: unset;
    background: linear-gradient(135deg, ${p => p.theme.colors.primary}, ${p => p.theme.colors.secondary});
    border-bottom: 0;
    padding: 0 2rem;
    color: white;
`;

export const SideNavText = styled(SideNavLinkText)`
    font-size: 1.2rem !important;
`;

export const NavItems = styled(SideNavItems)`
    flex: inherit;
    overflow: visible !important;
`;

export const CheckboxItem = styled(Checkbox)`
    margin: 5px 10px 0px 0px;

    :before {
        border-radius: 0.125rem;
    }
`;

export const SearchBar = styled(Search)`
    border-bottom-color: ${p => p.theme.colors.border};
    && input {
        height: 5rem;
        font-size: 1.2rem;
    }
`;

export const DropdownFilter = styled(Dropdown)`
    min-width: 15.625rem;
`;

export const DateSelector = styled(DatePicker)`
    flex-direction: column;
    width: 100%;
    .bx--date-picker-input__wrapper {
        > input {
            width: 100%;
            max-width: none;
        }
    }
`;

export const DateInput = styled(DatePickerInput)``;

export const MainSideNav = styled(SideNav)`
    display: inline-flex;
    position: absolute;
    background-color: ${p => p.theme.colors.white};
    border-right: 0.0625rem solid ${p => p.theme.colors.border};
    font-size: 1.2rem;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
`;

export const CenterLoading = styled(Loading)`
    margin: 0 auto 0;
`;

export const RightSmallInlineLoading = styled(InlineLoading)`
    width: unset;
    float: right;
    font-size: 0.5rem;
`;

export const SaveSearchButton = styled(Button)`
    width: 90%;
    margin: 0.5rem auto 0;
    padding: 0 1rem 0 1rem;

    :disabled {
        background-color: ${p => p.theme.colors.darkBlue};
        border-color: ${p => p.theme.colors.darkBlue};
        color: ${p => p.theme.colors.white};

        :hover {
            background-color: ${p => p.theme.colors.darkBlue};
            border-color: ${p => p.theme.colors.darkBlue};
            color: ${p => p.theme.colors.white};
            outline-color: ${p => p.theme.colors.darkBlue};
        }
    }
`;

export const CustomTag = styled(Tag)`
    height: unset;
    min-height: 1.5rem;
    background-color: #d0e2ff;
    color: #0043ce;
    word-break: break-word;

    > svg {
        min-width: 1rem;
        min-height: 1rem;
        width: 1rem;
        height: 1rem;
        fill: #0043ce;
        :hover {
            background-color: #0043ce;
            fill: #ffffff;
        }
    }
`;

//NEW STYLES
export const NewStyledButton = styled(Button)`
    height: 2rem;
    padding: calc(0.875rem - 3px) 30px calc(0.875rem - 3px) 30px;
    background-color: ${p => p.theme.colors.primaryButton};
    :hover {
        background-color: ${p => p.theme.colors.primaryHover};
    }
`;

export const StyledForm = styled(Form)``;
export const StyledTextInput = styled(TextInput)`
    border: none;
`;
export const StyledTextArea = styled(TextArea)`
    border: none;
    :disabled {
        color: #c6c6c6;
    }
`;

export const StyledModal = styled(Modal)`
    .bx--modal-container {
        @media (min-width: 60rem) {
            width: 35%;
            max-width: 768px;
            max-height: 90%;
            height: auto;
            border-radius: 0.2rem;
        }
    }
    .bx--btn--primary {
        background-color: #2fbb93;
        right: 0;
        :hover {
            background-color: #249172;
        }
    }
    .bx--btn--secondary {
        background-color: #f4f4f4;
        border-color: #2fbb93;
        border-width: 1px;
        color: #2fbb93;
        :hover {
            border-color: #249172;
            color: #249172;
        }
    }
    .bx--modal-footer {
        background-color: transparent;
    }
    .bx--modal-footer button.bx--btn {
        height: 0.6rem;
        padding: 0rem 1rem 0rem 1rem;
        font-weight: 700;
        position: absolute;
        flex: 0;
        margin-left: 2rem;
        margin-right: 2rem;
    }
`;

export const StyledFormGroup = styled(FormGroup)``;

export const StyledFormLabel = styled(FormLabel)``;
