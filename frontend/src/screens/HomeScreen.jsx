import React, { useEffect } from 'react';
import _ from 'lodash';
import useFetch from '../hooks/useFetch';

function HomeScreen() {
  const response = useFetch('/api/cityWeather/328328');
  console.log({ response });
  return <div>HomeScreen</div>;
}

export default HomeScreen;
