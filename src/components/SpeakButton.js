import React from 'react';
const SpeakButton = ({ text }) => {
  const handleSpeak = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  return (
    <button className="speak-button" onClick={handleSpeak}>
      Speak Translated Text
    </button>
  );
};
export default SpeakButton;
