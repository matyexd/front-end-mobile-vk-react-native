import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

const useLoadMore = (fetchData, uploadData, dataForRequest, fetching) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData([]);
    getData(dataForRequest);
  }, []);

  const getData = async dataForRequest => {
    await uploadData(dataForRequest);
  };

  useEffect(() => {
    if (!fetching) {
      setData(fetchData);
      console.log('сучка:');
      setIsLoading(false);
    }
  }, [fetchData]);

  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    getData(dataForRequest);
  };

  return {data, handleLoadMore, isLoading};
};

export default useLoadMore;
