import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import ProposalRow from "../ProposalRow";

import "./ProposalList.css";

import {getTalks} from './../../api/httpApi';

const ProposalList = () => {
    
    const [propList, setPropList] = useState([]);

    useEffect(() => {
        getAllProposals()
    },[])

    const getAllProposals = async () => {
        let data = await getTalks().then((data) => {
            setPropList(data);
        })
    }

    return (
        <ul data-testid="proposal-list" className="ProposalList">
            {propList && propList.map((proposal) => (
                <li
                    key={proposal.id}
                    className="ProposalList__item"
                >
                    <Link
                        key={proposal.id}
                        className="ProposalList__item__link"
                        to={`/proposals`}
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
