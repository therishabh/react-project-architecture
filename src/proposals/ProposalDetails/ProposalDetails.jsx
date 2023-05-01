import React from "react";

import DetailsSection from "../DetailsSection";

import "./ProposalDetails.css";

const ProposalDetails = ({ talk }) => {
    const { speaker, description, category } = talk;
    return (
        <div data-testid="proposal-details" className="ProposalDetails">
            <DetailsSection
                className="ProposalDetails__speaker"
                name="Speaker"
            >
                <span className="ProposalDetails__speaker__value">
                    {speaker}
                </span>
            </DetailsSection>
            <DetailsSection
                className="ProposalDetails__category"
                name="Category"
            >
                <div className="ProposalDetails__category__value">
                    {category}
                </div>
            </DetailsSection>
            <DetailsSection
                className="ProposalDetails__description"
                name="Description"
            >
                <div className="ProposalDetails__description__value">
                    {description}
                </div>
            </DetailsSection>
        </div>
    );
};

export default ProposalDetails;
