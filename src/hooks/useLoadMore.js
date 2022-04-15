import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

const useLoadMore = (fetchData, uploadData) => {
  const [data, setData] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    uploadData(fetchData.nextFrom);
  }, []);

  useEffect(() => {
    if (!fetchData.isFetching) {
      setData(data.concat(fetchData.newsData));
      setIsLoading(false);
    }
  }, [fetchData.isFetching]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setPageCurrent(pageCurrent + 1);
    console.log(pageCurrent);
    uploadData(fetchData.nextFrom);
  };

  return {data, handleLoadMore, isLoading};
};

export default useLoadMore;
