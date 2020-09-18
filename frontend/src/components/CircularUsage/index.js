import React from 'react'
// import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import ProgressBar from "../ProgressBar/index.js";

// importing styles
import "./styles.css";

const CircularUsage = ({percentage=66, title="title", subContent="subs"}) => {

  return (
    <div className="CircularUsageWrapper">
      <ProgressBar
        progress={percentage}
        strokeWidth={10}
        strokeColor='#f0a500'
        strokeLinecap='round'
        transition='0.3s ease'
        trackStrokeWidth={10}
        trackStrokeColor='#f4f4f4'
        trackStrokeLinecap='butt'
      >
        <div>
          <h1 className="PrimaryText CircularUsageTitle">{title}</h1>
          <p className="SecondaryText CircularUsageSubContent">{subContent}</p>
        </div>
      </ProgressBar>
    </div>
  );
}

export default CircularUsage;
