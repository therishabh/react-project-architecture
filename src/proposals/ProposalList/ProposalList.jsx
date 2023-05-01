import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import ProposalRow from "../ProposalRow";

import "./ProposalList.css";

import {getTalks, getCallForPapers} from './../../api/httpApi';

const ProposalList = ({proposals}) => {

    return (
        <ul data-testid="proposal-list" className="ProposalList">
            {proposals && proposals.map((proposal) => (
                <li
                    key={proposal.id}
                    className="ProposalList__item"
                >
                    <Link
                        key={proposal.id}
                        className="ProposalList__item__link"
                        to={`/proposals/${proposal.id}`}
                    >
                        <ProposalRow
                            proposal={proposal}
                            onStatusUpdate={() => {}}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}


export default ProposalList;
