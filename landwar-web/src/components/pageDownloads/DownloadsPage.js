import React, {Component} from 'react';
import {Container, Col, Row, Card, CardTitle, CardBody} from 'reactstrap';

import NavHeader from '../main/NavHeader.js';
/*
  LANDWAR website

  Download Page
    Core Rules
    Quickplay Sheet
    Tokens Doc
    FAQ Sheet
    Past Rulebooks
*/

class PageDownloads extends Component{

  render(){
    return(
    <Container>
      <NavHeader />
      <Row>
        &nbsp;
      </Row>
      <Row>
        &nbsp;
      </Row>
      <Row className="justify-content-md-center">
        <DownloadItem colSize={4} url="TODO-link" title="TODO-link" cardText={<p>Everything you need to begin playing games of <i>LANDWAR</i>. The core rules </p>}/>
        <DownloadItem colSize={4} url="TODO-link" title="TODO-link" cardText={<p>TAG Compendium is a small expansion of the main rulebook. TAGs are special rules that you can use on game units
          to give these units more flavor and uniqueness.
        </p>}/>
      </Row>
    </Container>
    );
  }
}

/**
 * simple wrapper for <Card> to auto-style it into a downloads panel
 * @param {*} props 
 * @param .colSize - column size, {X}
 * @param .url - url of download link
 * @param .title - display name of url link.
 * @param .cardText - description of download, can be {} jsx object
 */
const DownloadItem =(props)=>{
  return(
  <Col md={{size:props.colSize}}>
    <Card>
      <CardTitle><b><h4><a href={props.url}>{props.title}</a></h4></b></CardTitle>
      <CardBody>
        {props.cardText}
      </CardBody>
    </Card>
  </Col>
  );
}

export default PageDownloads;