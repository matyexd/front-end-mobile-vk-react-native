import React, {useState, useRef} from 'react';

const useButtonToBottom = () => {
  const [showButtonBottom, setShowButtonBottom] = useState(true);

  const EndButtonHandler = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };
  const scrollViewRef = useRef();

  const toggleShowButton = state => {
    setShowButtonBottom(state);
  };

  return {showButtonBottom, scrollViewRef, EndButtonHandler, toggleShowButton};
};

export default useButtonToBottom;
