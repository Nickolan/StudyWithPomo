import { useSelector } from "react-redux";
import { effectSound } from "../audios/sound";
import { useEffect } from "react";

export const VideoTimer =() => {
  const {selected} = useSelector((state) => state)

    return (
        <div id="VideoTimer">
            <video autoPlay muted loop>
              <source src={selected.video} type="video/mp4" /> 
            </video>
        </div>
      );
}