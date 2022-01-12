import React from "react";
import { PlayerSdk } from '@api.video/player-sdk' 
import { useRef } from "react";
import { useEffect } from "react";

let Player = ({video}) => {
    let player = useRef(null);
    console.log(player)
    useEffect(()=>{
        if(!player.current){
            player.current = new PlayerSdk(`#appPlayer-${video.id}`);
            player.current.mute();
            player.current.play();
        }
    },[video.id])
    return(
    <iframe src={`https://embed.api.video/vod/${video.remoteVideoId}#autoplay;loop;hideControls`} 
    width="100%" 
    height="100%"
    id={`appPlayer-${video.id}`} 
    frameBorder="0" 
    scrolling="no" 
    allowFullScreen={true}>
    </iframe>
    )
}

export default Player;