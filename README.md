# Healthcare Translation Web App

A web-based prototype that provides real-time, multilingual translation for healthcare settings. This app converts spoken input into text, displays a live transcript, translates it into a target language using Groq's AI API, and provides audio playback of the translated text—all wrapped in a mobile-first, medical-themed UI.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)
- [Security Considerations](#security-considerations)
- [Limitations & Future Improvements](#limitations--future-improvements)
- [License](#license)
- [Contact](#contact)

---

## Overview

This project is a **Healthcare Translation Web App** that aims to facilitate multilingual communication between patients and healthcare providers. The app leverages speech recognition to convert spoken language into text, utilizes the Groq API to translate the transcribed text in real-time, and offers text-to-speech functionality for the translated output.

---

## Features

- **Voice-to-Text Transcription:**  
  Uses the Web Speech API to capture spoken input and display it in real-time.

- **Real-Time Translation:**  
  Integrates with the Groq SDK to translate the captured medical text from one language to another.

- **Audio Playback:**  
  Provides a “Speak” button that plays the translated text using the browser’s text-to-speech engine.

- **Mobile-First Responsive Design:**  
  A clean and attractive user interface optimized for both mobile and desktop devices with a medical theme.

- **Language Selection:**  
  Allows users to select input and output languages via intuitive dropdown menus.

- **Data Privacy:**  
  The application is built with data privacy in mind—no personal data is stored, and all API calls are secured over HTTPS.

---

## Technologies Used

- **Frontend:**  
  - React.js (with Create React App)
  - HTML5, CSS3 (mobile-first responsive design)
  - JavaScript (ES6+)

- **APIs & SDKs:**  
  - Web Speech API for speech recognition and text-to-speech.
  - [Groq SDK](https://www.npmjs.com/package/groq-sdk) for AI-powered translation.

- **Deployment:**  
  - Vercel for hosting the live application.

---

## Project Structure

```
/healthcare-translation-app
├── .env
├── package.json
├── README.md
├── public
│   └── index.html
└── src
    ├── index.js
    ├── App.js
    ├── styles
    │   └── App.css
    ├── components
    │   ├── TranscriptDisplay.js
    │   ├── LanguageSelector.js
    │   ├── RecordButton.js
    │   └── SpeakButton.js
    └── services
        └── translationService.js
```

- **public/index.html:**  
  The main HTML file that contains the mounting `<div id="root"></div>`.

- **src/index.js:**  
  The entry point that bootstraps the React application.

- **src/App.js:**  
  Contains the core application logic, state management, and integration of components.

- **src/styles/App.css:**  
  Defines the mobile-first, medical-themed styles for the application.

- **src/components/:**  
  Reusable UI components:
  - **TranscriptDisplay.js:** Dual transcript panels for original and translated text.
  - **LanguageSelector.js:** Dropdown for language selection.
  - **RecordButton.js:** Button to start/stop speech recognition.
  - **SpeakButton.js:** Button to trigger text-to-speech playback.

- **src/services/translationService.js:**  
  Contains the integration with the Groq SDK for performing translations.

---

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/healthcare-translation-app.git
   cd healthcare-translation-app
   ```

2. **Install Dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a **.env** file in the root directory with the following content:

   ```env
   REACT_APP_GROK_API_KEY=your_valid_grok_api_key_here
   ```

   > **Note:** The API key is exposed on the client side using `dangerouslyAllowBrowser: true` for development purposes only. For production, consider using a backend proxy to protect your API key.

4. **Start the Development Server:**

   ```bash
   npm start
   ```

   The app will run at [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

- **REACT_APP_GROK_API_KEY:**  
  Your API key for accessing the Groq API.  
  **Example:** `REACT_APP_GROK_API_KEY=your_valid_grok_api_key_here`

Ensure that environment variables follow the `REACT_APP_` naming convention, as required by Create React App.

---

## Usage

1. **Speak:**  
   Click the "Record / Stop" button to begin capturing your speech. The spoken language will appear in the "Original Transcript" panel.

2. **Translate:**  
   Once the transcription appears, the Groq API is called to translate the text into the target language. The result will be displayed in the "Translated Transcript" panel.

3. **Playback:**  
   Click the "Speak Translated Text" button to hear the translation via the browser’s text-to-speech engine.

4. **Language Selection:**  
   Use the dropdown menus to choose the input and output languages.

---

## Deployment

The application is deployed on [Vercel](https://vercel.com). To deploy your own version:

1. **Push Your Code to GitHub:**  
   Make sure your repository is public or connected to your Vercel account.

2. **Connect Repository to Vercel:**  
   Log into Vercel and import your GitHub repository.

3. **Set Environment Variables on Vercel:**  
   In the Vercel dashboard, add your environment variables (e.g., `REACT_APP_GROK_API_KEY`).

4. **Deploy:**  
   Vercel will automatically build and deploy your application. Visit your deployed URL to test.

---

## Security Considerations

- **API Key Exposure:**  
  Using `dangerouslyAllowBrowser: true` in the Groq SDK exposes your API key on the client. **This is acceptable for development only.**  
  For production, implement a secure backend proxy to protect sensitive credentials.

- **Data Transmission:**  
  All data is transmitted over HTTPS, ensuring encrypted communication between the client and external APIs.

- **No Persistent Data Storage:**  
  The application does not store any personal or sensitive user data; all processing is done in-memory.

---

## Limitations & Future Improvements

- **Backend Integration:**  
  Future versions should include a secure backend to handle API calls and hide API keys from the client.

- **Enhanced Error Handling:**  
  Improve error reporting and fallback mechanisms for speech recognition and translation failures.

- **User Interface Enhancements:**  
  Refine the UI/UX further with additional styling and accessibility improvements.

- **Language Support:**  
  Expand the list of supported languages and incorporate user feedback for better translation accuracy.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

For questions, issues, or contributions, please contact [muhammadibby7799@gmail.com](mailto:your-email@example.com).

---
