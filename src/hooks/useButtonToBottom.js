import React, {useState, useRef} from 'react';

const useButtonToBottom = () => {
  const [showButtonBottom, setShowButtonBottom] = useState(true);
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  const EndButtonHandler = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };
  const scrollViewRef = useRef();

  const isShowButton = nativeEvent => {
    if (isCloseToBottom(nativeEvent)) {
      setShowButtonBottom(false);
    } else {
      setShowButtonBottom(true);
    }
  };

  return {showButtonBottom, scrollViewRef, EndButtonHandler, isShowButton};
};

export default useButtonToBottom;
