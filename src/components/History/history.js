import React from 'react';
import './history.css';
import { mapHistory } from './Utils';
const History = () => {
  const list = [{ date: 'today', sessionLength: '150sec' }];
  return (
    <div className="historyContainer">
      <div className="historyHeader">
        <span>Your sessions</span>
      </div>
      <table className="historyContent">{mapHistory(list)}</table>
    </div>
  );
};

export default History;
