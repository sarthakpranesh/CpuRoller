import React from 'react'
import ProgressBar from "../ProgressBar/index";

// importing styles and constants
import "./styles.css";
import {ProgressBarCons} from '../../config/Constants'

const CircularUsage = ({percentage=66, title="title", subContent="subs"}) => {

  return (
    <div className="CircularUsageWrapper">
      <div className="CircularUsageInfoContainer">
        <h1 className="PrimaryText CircularUsageTitle">{title}</h1>
        <p className="SecondaryText CircularUsageSubContent">{subContent}</p>
      </div>
      <ProgressBar
        progress={percentage}
        strokeWidth={ProgressBarCons.strokeWidth}
        strokeColor={ProgressBarCons.strokeColor}
        trackStrokeWidth={ProgressBarCons.trackStrokeWidth}
        trackStrokeColor={ProgressBarCons.trackStrokeColor}
      />
    </div>
  );
}

export default CircularUsage;
