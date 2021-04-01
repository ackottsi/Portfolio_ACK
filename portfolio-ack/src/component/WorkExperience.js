import React from 'react';
import '../WorkExperience.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


function WorkExperience (props){


        return(  
            <div className="work-experience-container">
                    
            <h2>Professional Experience</h2>
            <div>
            <h4 className="company_name">John Deere Electronic Solutions, Fargo, ND</h4>
            <div className="content">
                <p className="company_desc">JDES provides techonolgy systems, solutions, and services to
                agricultural and construction vehicle manufacturers</p>
                <p className="position_title">Program Manager, Product Delivery Process (PDP) [2017-2020]</p>
                <ul class="job_details">
                    <li>Managed project budgets ranging from $50K to $1M in scope</li>
                    <li>Facilitated cross-function meetings with Software/Hardware/Systems/Test/Manufacturing engineers, 
                        supply chain integrator, accountants, and Marketing Managers to drive program progress. 
                    </li>

                </ul>
            </div>
                            
                    </div>
            </div>
        )

}


export default (WorkExperience);