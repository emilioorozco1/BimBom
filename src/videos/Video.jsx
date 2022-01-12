import React from 'react';
import styled from 'styled-components';
import Player from './Player';


let VideoContainer = styled.div`
  position:relative;
  padding-bottom:177%;
  margin-bottom:${({ theme }) => theme.dims.margin.normal};
  background-color: ${({ theme }) => theme.colors.black};
  & iframe{
    z-index:1;
  }
`;

let Video = ({index, video}) => {
  return(
    <VideoContainer key={index}>
      
      <div className="info">

        <div className="user-info">
          <h2>{video.title}</h2>
        </div>
      </div>
      <Player video={video}></Player>
      
    </VideoContainer>
  )
}

export default Video;