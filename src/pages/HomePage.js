import React from 'react';
import Prerit from '../components/Prerit.js';
import Carousel from '../components/Carousel.js';

function HomePage(props){
    return (
        <div>
            
            <Prerit title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel/>

        </div>
        
    );


}
export default HomePage;