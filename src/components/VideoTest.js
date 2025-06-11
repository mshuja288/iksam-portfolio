import React from 'react';
import crmVideo from '../assets/FrontEnd/Reactjs/crm/crm.mp4';

const VideoTest = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Video Test</h1>
      <video 
        width="640" 
        height="360" 
        controls
        src={crmVideo}
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoTest; 