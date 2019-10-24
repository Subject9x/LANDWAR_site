import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import NavHeader from '../main/NavHeader.js';
/*
LANDWAR website
Page: FAQ
*/

class PageFAQ extends Component{
  render(){
    return(
    <Container>
      <NavHeader />
      <Row className="justify-content-md-center">
        <Col md={{size:10}}>
          <div >
            <div><b><h4>Frequently Asked Questions:</h4></b></div>
            <FAQRowItem question="What models should I use?" answer={<p><i>LANDWAR</i> works best with 6mm and 15mm models. With slight adjustment, it can match almost any scale, such as 28mm.</p>} />
            <FAQRowItem question="What is the playing area size I'll need?" answer="Standard playing area is 36'' x 36'' or 91cm x 91cm. " />
            <FAQRowItem question="How long does a typical game take?" answer="A standard game should take about 1 hour as average, with newer players taking up to 2 hours." />
            <FAQRowItem question="Where do I find the rules?" answer="You can find the rules -HERE- and also in the Downloads section." />
            <FAQRowItem question="Where do I find the standard scenarios?" answer="You can find the scenario book -HERE- and also in the Downloads section." />
            <FAQRowItem question={<>Is <i>LANDWAR</i> really free?</>} answer={<p>Yes, <i>LANDWAR</i> is free to use and modify under the -License-</p>} />
            <FAQRowItem question={<>What are the essential items I need to play the game?</>} answer={<p>To play the most basic version of <i>LANDWAR</i>, you will need the core rulebook, some miniatures from any of your collections, and some unit stats for those miniatures.</p>} />
            <FAQRowItem question={<>I've assembled my miniatures, what stats?</>} answer={<p><i>LANDWAR</i> has a unit design tool that will help you generate stats for your miniatures found -here-</p>} />
          </div>
        </Col>
      </Row>
    </Container>
    );
  }
}
/*
Q: are there preconstructed scenarios I can use
*/
const FAQRowItem =(props)=>{
  return(
    <div>
      <div><b><h4>{props.question}</h4></b></div>
      <div><ul><li>{props.answer}</li></ul></div>
    </div>
  );
}

export default PageFAQ;