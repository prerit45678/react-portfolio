import React from 'react';
import Prerit from '../components/Prerit';
import Content from "../components/Content";



function AboutPage(props){
    return (
       <div>
           <Prerit title={props.title}/>
           <Content>
               <p>
                   Hello,my name is Prerit.I have expeerience in 
                   C,Python,JavaScript,React and IOT.
               </p>
               <p>
                   My dream is to become an Entrepreneur.
               </p>
               <p>
                   Eager in learning new things,play Badminton as stress reliever.
                   Working smart on increasing the efficiency in various fields.
                   Currently practising App development.
               </p>
               
           </Content>

       </div>
    );


}
export default AboutPage;