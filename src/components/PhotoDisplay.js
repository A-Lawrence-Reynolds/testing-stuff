import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

const BackGround = styled.div`
  background-img: url("./sw-bg.jpg");
`;
// adding a photo to back ground
const Photo = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const PhotoDisplay = props => {
  return(
  <BackGround>
    <Photo src={props.photo} />;
  </BackGround>
  )
};

export default PhotoDisplay;
