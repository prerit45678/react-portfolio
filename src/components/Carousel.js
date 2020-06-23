import React from 'react';
import Card from '../components/Card.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import code from '../images/code.jpg';
import me from '../images/me.jpg';
import github from '../images/github.png';


class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id:0,
                    title:'Developer',
                    subTitle:'Best in the field',
                    imgSrc:code,
                    link:'http://www.twitter.com/prerit45678/',
                    selected:false

                },
                {
                    id:1,
                    title:'Prerit Munjal',
                    subTitle:'You know me',
                    imgSrc:me,
                    link:'https://www.instagram.com/prerit_19/',
                    selected:false

                },
                {
                    id:2,
                    title:'github',
                    subTitle:'My account',
                    imgSrc:github,
                    link:'https://github.com/prerit45678',
                    selected:false

                },
            ]

        }

    }
    handleCardClick=(id,card)=>{
        let items =[...this.state.items];
        items[id].selected=items[id].selected?false:true;
        items.forEach(item =>{
            if(items.id !==id){
                item.selected=false;
            }
        });
        this.setState({
            items
        });
    }
    makeItems= (items) => {
        return items.map(item => {
            return <Card item ={item} click={(e=> this.handleCardClick(item.id,e))} key={item.id}/>
        })
    }
    render(){
        return(
           <Container fluid={true}>
               <Row className="justify-content-around">
                   {this.makeItems(this.state.items)}

               </Row>


           </Container>
        );
    }

}
export default Carousel;