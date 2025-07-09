// src/components/ChatbotMessenger.tsx
import React, { useEffect, useRef } from 'react';

// Global flag to ensure the Dialogflow Messenger script is loaded only once
let isMessengerScriptLoaded = false;

interface ChatbotMessengerProps {
  agentId: string;
  chatTitle?: string;
  languageCode?: string;
}

const ChatbotMessenger: React.FC<ChatbotMessengerProps> = ({
  agentId,
  chatTitle = 'Get your answers!', // Your default chat title
  languageCode = 'en',
}) => {
  const dfMessengerInstanceRef = useRef<any>(null);

  useEffect(() => {
    const scriptId = 'df-messenger-script';

    // Function to create and append the df-messenger element
    const createAndAppendMessenger = () => {
      // Only create if it hasn't been created yet globally
      if (
        !dfMessengerInstanceRef.current &&
        !document.querySelector('df-messenger[agent-id="' + agentId + '"]')
      ) {
        const dfMessenger = document.createElement('df-messenger') as any;
        dfMessenger.setAttribute('agent-id', agentId);
        dfMessenger.setAttribute('language-code', languageCode);
        dfMessenger.setAttribute('chat-title', chatTitle);
        dfMessenger.setAttribute('intent', 'WELCOME'); // <--- ADDED THIS LINE: Explicitly trigger WELCOME intent

        // Apply any desired styling using CSS variables for the chat window and bubble
        dfMessenger.style.setProperty('--df-messenger-chat-background', '#f8fafc'); // Light background
        dfMessenger.style.setProperty('--df-messenger-message-user-background', '#a78bfa'); // User message bubble
        dfMessenger.style.setProperty('--df-messenger-message-user-font-color', '#ffffff');
        dfMessenger.style.setProperty('--df-messenger-message-bot-background', '#e2e8f0'); // Bot message bubble
        dfMessenger.style.setProperty('--df-messenger-message-bot-font-color', '#333333');

        dfMessenger.style.setProperty('--df-messenger-bubble-button-background-color', '#9333ea'); // Floating bubble background
        dfMessenger.style.setProperty('--df-messenger-bubble-button-icon-color', '#ffffff'); // Floating bubble icon color
        dfMessenger.style.setProperty('--df-messenger-titlebar-font-color', '#ffffff'); // Title bar font color

        dfMessenger.style.setProperty('--df-messenger-input-box-background', '#f1f5f9');
        dfMessenger.style.setProperty('--df-messenger-send-icon', '#9333ea');
        dfMessenger.style.setProperty('--df-messenger-button-titlebar-color', '#9333ea'); // Title bar background

        // Append directly to the body
        document.body.appendChild(dfMessenger);
        dfMessengerInstanceRef.current = dfMessenger; // Store the reference
      }
    };

    // Load the script only once
    if (!isMessengerScriptLoaded && !document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        isMessengerScriptLoaded = true;
        createAndAppendMessenger();
      };
    } else if (isMessengerScriptLoaded || document.getElementById(scriptId)) {
      // If script is already loaded, ensure flag is set and messenger element is created.
      isMessengerScriptLoaded = true;
      createAndAppendMessenger();
    }

    const titlebarElement = document.getElementById('dfTitlebar');
    if (titlebarElement) {
      titlebarElement.textContent = 'knotbot';
    }

    // Cleanup: Remove the df-messenger element from the body when the component unmounts.
    // The script itself remains loaded globally.
    return () => {
      if (
        dfMessengerInstanceRef.current &&
        document.body.contains(dfMessengerInstanceRef.current)
      ) {
        document.body.removeChild(dfMessengerInstanceRef.current);
        dfMessengerInstanceRef.current = null; // Clear the reference
      }
    };
  }, [agentId, chatTitle, languageCode]); // Re-run effect if these props change

  // This component now renders nothing itself, as it directly manipulates the body
  return null;
};

export default ChatbotMessenger;
