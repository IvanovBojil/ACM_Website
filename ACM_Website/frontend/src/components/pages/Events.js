import React from 'react';
import { Button } from '../Button';
import '../HeroSection.css';
import './SignUp.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';


function Events(){
    
    // useEffect(() => {
    //  window.location.href = "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YWNtLnV0YUBnbWFpbC5jb20&src=b2Nya2lldWJiY3FjaHZtdDdmajZnZWE4cDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73&color=%237986CB";
    //  }, []);
      
return (
    <div className="eventspage">
           <h1>
                Welcome to Events at ACM. 
        

            </h1>
                
            <h3>
                ACM@UTA offers a variety of events. Most of the events are open to all the students.
                However, we encourage students to be a member of the ACM to benefit from all the exclusive events.
                Please click the link below to see current events of ACM.
             </h3>
        <h3>
            <a target="_blank" href="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=YWNtLnV0YUBnbWFpbC5jb20&src=b2Nya2lldWJiY3FjaHZtdDdmajZnZWE4cDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73&color=%237986CB">Events at ACM</a>
        </h3>
        </div>
        
        
       
);
}
export default Events;


