import React from 'react'
// import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import ProgressBar from "../ProgressBar/index.js";

// importing styles and constants
import "./styles.css";
import {ProgressBarCons} from '../../config/Constants.js'

const CircularUsage = ({percentage=66, title="title", subContent="subs"}) => {

  return (
    <div className="CircularUsageWrapper">
      <ProgressBar
        progress={percentage}
        strokeWidth={ProgressBarCons.strokeWidth}
        strokeColor={ProgressBarCons.strokeColor}
        trackStrokeWidth={ProgressBarCons.trackStrokeWidth}
        trackStrokeColor={ProgressBarCons.trackStrokeColor}
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
