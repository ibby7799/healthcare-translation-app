import React, { useState, useEffect, useRef } from 'react';
import TranscriptDisplay from './components/TranscriptDisplay';
import LanguageSelector from './components/LanguageSelector';
import RecordButton from './components/RecordButton';
import SpeakButton from './components/SpeakButton';
import { translateText } from './services/translationService';

function App() {
  // State for original and translated transcripts, language selections, and error messages.
  const [originalTranscript, setOriginalTranscript] = useState('');
  const [translatedTranscript, setTranslatedTranscript] = useState('');
  const [inputLanguage, setInputLanguage] = useState('en-US'); // Default input language
  const [outputLanguage, setOutputLanguage] = useState('es');   // Default output language (Spanish)
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition API
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError('Your browser does not support speech recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = inputLanguage;
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = async (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      setOriginalTranscript(transcript);

      // Call translation API
      try {
        const translated = await translateText(transcript, inputLanguage, outputLanguage);
        setTranslatedTranscript(translated);
      } catch (err) {
        console.error(err);
        setError('Translation failed. Please try again.');
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setError('Speech recognition error. Please try again.');
    };

    recognitionRef.current = recognition;
  }, [inputLanguage, outputLanguage]);

  // Function to toggle recording on/off
  const toggleRecording = () => {
    if (!recognitionRef.current) return;
    if (recognitionRef.current.recognizing) {
      recognitionRef.current.stop();
      recognitionRef.current.recognizing = false;
    } else {
      setOriginalTranscript('');
      setTranslatedTranscript('');
      recognitionRef.current.start();
      recognitionRef.current.recognizing = true;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Healthcare Translation App</h1>
        <p>Your real-time multilingual medical translation assistant</p>
      </header>

      {/* Language selection components */}
      <div className="language-selectors">
        <LanguageSelector
          label="Input Language"
          selectedLanguage={inputLanguage}
          onChange={setInputLanguage}
          options={[
            { value: 'en-US', label: 'English (US)' },
            { value: 'es-ES', label: 'Spanish' },
            { value: 'fr-FR', label: 'French' },
            { value: 'de-DE', label: 'German' }
          ]}
        />
        <LanguageSelector
          label="Output Language"
          selectedLanguage={outputLanguage}
          onChange={setOutputLanguage}
          options={[
            { value: 'es', label: 'Spanish' },
            { value: 'en', label: 'English' },
            { value: 'fr', label: 'French' },
            { value: 'de', label: 'German' }
          ]}
        />
      </div>

      {/* Transcript display panels */}
      <TranscriptDisplay
        originalTranscript={originalTranscript}
        translatedTranscript={translatedTranscript}
      />

      {/* Record and Speak buttons */}
      <div className="controls">
        <RecordButton onClick={toggleRecording} />
        <SpeakButton text={translatedTranscript} />
      </div>

      {error && <div className="error-message">{error}</div>}

      <footer className="app-footer">
        <small>Note: API keys and data transmissions are secured via HTTPS. No personal data is stored.</small>
        <small><br></br>Made by Muhammad Ibrahim.</small>
      </footer>
    </div>
  );
}

export default App;
