// src/services/translationService.js
import Groq from "groq-sdk";

// Create a Groq instance with the dangerouslyAllowBrowser option enabled.
const groq = new Groq({
  apiKey: process.env.REACT_APP_GROK_API_KEY,
  dangerouslyAllowBrowser: true,
});

/**
 * Translates the given medical text using the Groq chat completion API.
 *
 * @param {string} text - The medical text to translate.
 * @param {string} inputLanguage - The source language (e.g., "en-US").
 * @param {string} outputLanguage - The target language (e.g., "es").
 * @returns {Promise<string>} - The translated text.
 */
export const translateText = async (text, inputLanguage, outputLanguage) => {
  // Updated prompt instructs the assistant to output only the translated text.
  const prompt = `Translate the following medical text from ${inputLanguage} to ${outputLanguage} and only return the translation without any additional explanation: "${text}"`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a medical translation assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      max_completion_tokens: 1024,
      top_p: 1,
      stop: null,
      stream: false,
    });

    console.log("ChatCompletion response:", chatCompletion);

    const translatedText = chatCompletion.choices[0]?.message?.content?.trim() || "";
    if (!translatedText) {
      throw new Error("Empty translation response from Groq API.");
    }
    return translatedText;
  } catch (error) {
    console.error("Error in translateText:", error);
    throw error;
  }
};
