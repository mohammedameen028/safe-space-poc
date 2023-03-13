import React from "react";
import './../App.css'

const YoutubeEmbed = ({ embedId }) => (
  <div>
    <iframe
      width="500"
      height="400"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);


export default YoutubeEmbed;