import React from 'react';
import { ProgressBar} from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';

const ProgressBarStep = ({percent}) => {
  return (
    <div>
      <ProgressBar
        percent={percent}
        height='50px'
        max={50}
        filledBackground="linear-gradient(to right,#31f0ed, #fefb72, #f0bb31)"
      >
      </ProgressBar>
    </div>
  );
};

export default ProgressBarStep;