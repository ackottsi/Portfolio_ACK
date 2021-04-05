import React from 'react';
import '../WorkExperience.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


function WorkExperience (props){


        return(  
    

<Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="12/2020 – Present"
    style={{ color: '#e86971' }}
    bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
  >
 <h3 className='position-title'>Software Engineer</h3>
 <h4  className='company-title'>John Deere</h4> 
    <h4 className='company-desc'></h4> 

    &nbsp;
    <p>
      Completed immersive software training course.  Course was focused on 
      learning software tools and building skill set.  React.js, javascript, 
      Node.js Express, PostgreSQL, and Python.  Basic computer science concepts covered.
      Concepts included but not limited to: Big-O notation, Sorting Algorithms, accessibility
      design, recursion.
    </p>
    
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="05/2017 – 11/2020"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 className='position-title'>Program Manager, Product Delivery Process (PDP)</h3>
    <h4  className='company-title'>John Deere ISG-Fargo</h4> 
    <h4  className='company-desc'>ISG-Fargo provides information technology 
    systems, solutions, and services to agricultural and construction vehicle manufacturers</h4> 
    &nbsp;

    <p>
     Lead project teams of 5-20 individual contributors.  Team members could be located in different physical locations.
     Project budgets varied from $50k to $1.5M in scope.  Managed risk activities and led plans to mitigate identified
     risks.  Created and managed project schedules.  Lead project proposal teams during quoting process activities.
    </p>
    <p>
    Extensive expereince in working across different platforms and working with different cross-function areas.
    Teams typically comprised of Software/Hardware/Systems/Test/Manufacturing engineers, supply chain integrators,
    accountants, and marketing.
    </p>

    <p>
    Experience reporting and presenting project updates to leadership team.  Solid foundational
    understanding of when issues should be escalted to leadership vs. solving 
    it the team level.
    </p>

  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="04/2013 – 5/2017"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
   <h3 className='position-title'>Program Manager Order Fullfillment Process</h3>
    <h4  className='company-title'>John Deere-ISG Fargo</h4> 

    &nbsp;
    <p>
      Led project product project teams to pursue team goals.  Team goals 
      typically included cost reduction, quality improvement, delivery improvement,
      and component obsolscence.  Regulary worked with customers to address on-going work activites 
      and to collaborate strategic initiatives.
    </p>



  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="05/2011 – 04/2013"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
 <h3 className='position-title' >Electronic Design Engineer</h3>
    <h4  className='company-title'>John Deere ISG-Fargo</h4> 
  
    &nbsp;
    <p>
      Designed robust circuit card assemblies for rugged agricultural
      and construction vehicles.  Followed product development cycle from prototype phase
      to product production lauch.  Worked with Mentor Graphics schematic capture and PCB layout tools.
      Demonstrated ability to analzye designs and implement design concepts in to product solution.
    </p>
   
  </TimelineItem>


  <TimelineItem
    key="004"
    dateText="05/2011 – 04/2013"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
 <h3 className='position-title' >Electronic Design Engineer</h3>
    <h4  className='company-title'>Collins Aerospace-Cedar Rapids, IA</h4> 
    <h4  className='company-desc'>Collins Aerospace provides aviation and information technology systems, solutions, and services to governmental agencies and aircraft manufacturers</h4> 
    &nbsp;
    <p>
      Designed robust circuit card assemblies for rugged agricultural
      and construction vehicles.  Followed product development cycle from prototype phase
      to product production lauch.  Worked with Mentor Graphics schematic capture and PCB layout tools.
      Demonstrated ability to analzye designs and implement design concepts in to product solution.
    </p>
   
  </TimelineItem>
</Timeline>
          
          
        )

}


export default (WorkExperience);

