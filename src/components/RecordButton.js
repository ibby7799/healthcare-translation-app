import React from 'react';
const RecordButton = ({ onClick }) => {
  return (
    <button className="record-button" onClick={onClick}>
      Record / Stop
    </button>
  );
};
export default RecordButton;
