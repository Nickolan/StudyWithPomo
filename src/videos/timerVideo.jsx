import video from "./rain.mp4";

export const VideoTimer =() => {
    return (
        <div id="VideoTimer">
            <video autoPlay muted loop>
              <source src={video} type="video/mp4" /> 
            </video>
        </div>
      );
}