import React from 'react';
import YouTube from 'react-youtube';
import { useState } from 'react';

const Video = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // YouTube video options
  const opts = {
    height: '350',
    width: '600',
    playerVars: {
      autoplay: 0,
    },
  };

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  // YouTube video ID
  const videoId = 'h98KQ_Cuk4M'; // Replace with the actual YouTube video ID

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      {isVideoPlaying ? (
        <YouTube videoId={videoId} opts={opts} />
      ) : (
        <div style={{ position: 'relative' }}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`} // Fetches default video thumbnail
            alt="Video Thumbnail"
            style={{ cursor: 'pointer', width: '100%', maxWidth: '560px' }}
            onClick={playVideo}
          />
        </div>
      )}
    </div>
  );
};

export default Video;
