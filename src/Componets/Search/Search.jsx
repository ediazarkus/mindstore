import React, { useState } from 'react';
import {
  MicroIcon,
  Microphone,
  NavbarSearch,
  SearchContainer,
} from './SearchStyles';

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Search = ({ onInputChange }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [inputText, setInputText] = useState('');

  const handleToggleListen = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      if (transcript.trim() === '') {
        onInputChange('');
        setInputText('');
      } else {
        const combinedText = inputText + '' + transcript;
        setInputText(combinedText);
        onInputChange(combinedText);
      }
    } else {
      resetTranscript();
      onInputChange('');
      setInputText('');
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleInputChange = (event) => {
    const term = event.target.value;
    onInputChange(term);
    setInputText(term);
  };

  return (
    <SearchContainer>
      <NavbarSearch
        type="text"
        value={inputText}
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <Microphone listening={listening} onClick={handleToggleListen}>
        <MicroIcon src={require('../../assets/mic.png')} />
      </Microphone>
    </SearchContainer>
  );
};

export default Search;
