import React from "react";

import {
    ThinHeading,
    ParagraphHeading,
    DarkText,
    SmallSpace,
    ParagraphText,
    NewListItem
} from "../../styles/styles.js";
import { ParagraphBullets } from "../../styles/carbonComponents.js";

const textItems = {
    mainHeading: "Frequently Asked Questions",
    sec1p1:
        "This section provides answers to some questions you may have about health data and how it is used. The Innovation Gateway does not store, hold or process any patient or health data, so this section relates to the work of the data custodians. Much of the content on this page has been informed by the work of Understanding Patient Data. Find out more here: ",
    sec1p1link1: "https://understandingpatientdata.org.uk/what-you-need-know",
    sec1p1link1text: "https://understandingpatientdata.org.uk/what-you-need-know",
    sec1p2: "You can find additional questions and answers on  ",
    sec1p2link1: "https://www.hdruk.ac.uk/health-data-science/",
    sec1p2link1text: "Health Data Research UK’s website here. ",
    sec2Heading1: "What is health data?",
    sec2p1:
        "Whenever we go to a doctor or a hospital, they collect data about us, our health and our lifestyle. This is recorded and stored in our patient record. It may include our height and weight, whether we smoke, how much we drink, detail of any allergies, what aches, pains or infections we’ve got, and what medications we are taking. It may also include the results of blood tests, images from MRI scans, and any procedures we’ve had, together with contact information, date of birth, and next of kin information. ",
    sec2p2:
        "Other specialists we see, for example dentists, physiotherapists and psychologists, will also create records.",
    sec2p3:
        "The NHS uses this information to help provide the best clinical care for us. Because a patient record contains sensitive information about our health, it must be handled very carefully and accessed safely and securely, to protect confidentiality.",
    sec2p4:
        "Other types of health data include information collected during clinical trials and cohort studies or data generated by you; for example, health apps, fitness trackers or patient surveys.",

    sec3Heading1: "Why is health data needed for research and innovation?",
    sec3p1:
        "If data from many patients are linked up and pooled, researchers and doctors can look for patterns in the data, helping them develop new ways of predicting or diagnosing illness, and identify ways to improve clinical care. The information from health data is really valuable to help understand more about disease, to develop new treatments, to monitor safety, to plan services and to evaluate NHS policy.",
    sec3p2:
        "Before a researcher is granted access, their study is usually assessed by an independent review committee or other decision-making group, who check that the reason for using the data is appropriate. Wherever possible, identifying information will be removed from that data, and researchers should only be given the minimum amount necessary to answer a question. Data must be stored securely, and a legal contract must be signed before data can be transferred or accessed.",
    sec3p3:
        "Often a study will need to use data about an individual that is held in more than one dataset. When this happens, a trusted third party, usually NHS Digital, links the data using a unique identifier (such as NHS number which is then removed) to make sure the researcher cannot re-identify individuals.",
    sec4Heading1: "What are the risks?",
    sec4p1:
        "Currently, most of the ‘data breaches’ in the health sector occur when information is accidentally posted, faxed or emailed to the wrong person. Surveys suggest that there are three main things people are concerned about:",
    sec4bullet1: "invasion of privacy, or information about medical history being revealed to others;",
    sec4bullet2: "loss of control if data is passed outside the NHS;",
    sec4bullet3: "the possibility of cyber attacks or hacking.",
    sec4p2:
        "Providing access to health data will never be totally risk-free, but there must be appropriate measures in place to make any risks as low as reasonably possible. Data is anonymised wherever possible, although it is extremely difficult to guarantee individuals could not potentially be identified if data is linked to other sources. There are audit processes to check who is accessing data, and robust penalties can be issued where data is misused.",

    sec5Heading1: "What if I don’t want my health data to be used?",
    sec5p1:
        "It is usually possible to opt out of sharing health data held in personal records about you. To do this, contact the organisation that holds the record (such as your GP practice or hospital). If you live in England you can opt out of your data being used for research via the NHS Digital website ",
    sec5p1link1: "https://digital.nhs.uk/services/national-data-opt-out",
    sec5p1link1text: "https://digital.nhs.uk/services/national-data-opt-out",

    sec6Heading1: "Is the data identifiable?",
    sec6p1: "There is no identifiable patient data in the Innovation Gateway itself.",
    sec7Heading1: "Why do some datasets not have much information available?",
    sec7p1:
        "The Innovation Gateway is a work in progress, and uses metadata from across the Health Data Research Alliance and Health Data Research Hubs. A full set of metadata is not yet available for all datasets, and more metadata will be added as the tool is developed."
};

const FAQPage = () => {
    return (
        <DarkText>
            <ThinHeading>{textItems.mainHeading}</ThinHeading>
            <SmallSpace />
            <ParagraphText>
                {textItems.sec1p1}
                <a href={textItems.sec1p1link1} target="_blank" rel="noopener noreferrer">
                    {textItems.sec1p1link1text}
                </a>
            </ParagraphText>
            <SmallSpace />
            <ParagraphText>
                {textItems.sec1p2}
                <a href={textItems.sec1p2link1} target="_blank" rel="noopener noreferrer">
                    {textItems.sec1p2link1text}
                </a>
            </ParagraphText>
            <SmallSpace />
            <ParagraphHeading>{textItems.sec2Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>{textItems.sec2p1}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.sec2p2}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.sec2p3}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.sec2p4}</ParagraphText>
            <SmallSpace />
            <ParagraphHeading>{textItems.sec3Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>{textItems.sec3p1}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.sec3p2}</ParagraphText>
            <SmallSpace />
            <ParagraphText>{textItems.sec3p3}</ParagraphText>
            <SmallSpace />
            <ParagraphHeading>{textItems.sec4Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>{textItems.sec4p1}</ParagraphText>
            <SmallSpace />
            <ParagraphBullets>
                <NewListItem>{textItems.sec4bullet1}</NewListItem>
                <NewListItem>{textItems.sec4bullet2}</NewListItem>
                <NewListItem>{textItems.sec4bullet3}</NewListItem>
            </ParagraphBullets>
            <SmallSpace />
            <ParagraphText>{textItems.sec4p2}</ParagraphText>
            <SmallSpace />
            <ParagraphHeading>{textItems.sec5Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>
                {textItems.sec5p1}
                <a href={textItems.sec5p1link1} target="_blank" rel="noopener noreferrer">
                    {textItems.sec5p1link1text}
                </a>
            </ParagraphText>
            <SmallSpace />
            <ParagraphHeading>{textItems.sec6Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>{textItems.sec6p1}</ParagraphText>
            <SmallSpace />
            <ParagraphHeading>{textItems.sec7Heading1}</ParagraphHeading>
            <SmallSpace />
            <ParagraphText>{textItems.sec7p1}</ParagraphText>
            <SmallSpace />
        </DarkText>
    );
};

export default FAQPage;
