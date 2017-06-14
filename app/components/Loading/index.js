import React from 'react';
import s from './styles.scss';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';

const timelineItem = {
  margin: " 0 auto",
  position: "absolute",
  top: "calc(50% - 40px)",
  left: "calc(50% - 40px)",
}

const Loading = () => (
  <div className={s.timelineWraper}>
    <CircularProgress size={80} thickness={5} style={timelineItem}/>
  </div>
);

export default Loading;
