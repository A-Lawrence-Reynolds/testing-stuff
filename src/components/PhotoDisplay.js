import React from "react";
import styled from "styled-components";
// import { Route } from "react-router-dom";
import {Image,Popover, Button, OverlayTrigger} from 'react-bootstrap'



// adding a photo to background

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
        <h2>find them <a href={props.info?.user?.portfolio_url} target="_">here</a> </h2>
        <h2>Likes on the picture are : {props.info?.user?.total_likes}</h2>
          </div>
        
      </Popover.Content>
    </Popover>
  );
  const Example = () => (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
      <Button variant="outline-info"><i class="fas fa-info-circle fa-2x"></i></Button>
    </OverlayTrigger>
  );
  
  const popoverSecond = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Equipment Used</Popover.Title>
      <Popover.Content>
        <div>
        <h2>Camera make : {props.info?.exif?.make} photos</h2>
        <h2>Model : {props.info?.exif?.model}</h2>
        <h2>Exposure Time : {props.info?.exif?.exposure_time}</h2>
        <h2>Aperture : {props.info?.exif?.aperture}</h2>
        <h2>Focal Length :{props.info?.exif?.focal_length}</h2>
        <h2>ISO :{props.info?.exif?.iso}</h2>
          </div>
        
      </Popover.Content>
    </Popover>
  );
  const ExampleSecond = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popoverSecond}>
      <Button variant="outline-info"><i class="fas fa-camera fa-2x"></i></Button>
    </OverlayTrigger>
  );
  
  return(
    <div className="parent">

    
  
    <Image src={props.photo} fluid/>
    
    <Name>
      {props.info?.alt_description}
    </Name>
    <div className="popover-div">
      <Example/>
    <ExampleSecond/> 
    </div>
   
  </div>
  )
};

export default PhotoDisplay;
