import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

const useLoadMore = (fetchData, uploadData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData(fetchData.nextFrom);
  }, []);

  const getData = async nextFrom => {
    await uploadData(nextFrom);
  };

  useEffect(() => {
    if (!fetchData.isFetching) {
      setData(data.concat(fetchData.newsData));
      setIsLoading(false);
    }
  }, [fetchData]);

  const handleLoadMore = () => {
    setIsLoading(true);
    getData(fetchData.nextFrom);
  };

  return {data, handleLoadMore, isLoading};
};

export default useLoadMore;
