import React from "react";
import styled from "styled-components";
// import { Route } from "react-router-dom";
import {Image,Container,Popover, Button, OverlayTrigger} from 'react-bootstrap'

const BackGround = styled.div`

`

// adding a photo to background
const Photo = styled.img`
  max-width: 90%;
  max-height: 90%;
`
const Name = styled.h1`

`

const PhotoDisplay = props => {
  console.log('photo takers name',props.info)
  
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.info?.user?.name}</Popover.Title>
      <Popover.Content>
        <div>
        <h2>Total of {props.info?.user?.total_photos} photos</h2>
        <h2>find them {props.info?.user?.portfolio_url} </h2>
          </div>
        
      </Popover.Content>
    </Popover>
  );
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="outline-info"><i class="fas fa-info-circle fa-2x"></i></Button>
    </OverlayTrigger>
  );
  
 
  return(
  <Container className='container-div'>
    <Image src={props.photo} fluid/>
    <Name>
      {props.info?.description}
    </Name>
    <Example/>
  </Container>
  )
};

export default PhotoDisplay;
