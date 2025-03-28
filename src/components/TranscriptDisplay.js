import React from 'react';
const TranscriptDisplay = ({ originalTranscript, translatedTranscript }) => {
  return (
    <div className="transcript-display">
      <div className="transcript-panel">
        <h2>Original Transcript</h2>
        <p>{originalTranscript || 'Your speech will appear here...'}</p>
      </div>
      <div className="transcript-panel">
        <h2>Translated Transcript</h2>
        <p>{translatedTranscript || 'Translated text will appear here...'}</p>
      </div>
    </div>
  );
};
export default TranscriptDisplay;
