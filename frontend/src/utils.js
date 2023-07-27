import _ from 'lodash';

export const getOptions = (valuesArray) => {
  return _.reduce(
    valuesArray,
    (acc, curr) => {
      acc.push({
        value: curr.Key,
        label: curr.LocalizedName,
      });
      return acc;
    },
    []
  );
};

export const fetchLocations = async (debouncedValue, callback) => {
  if (_.size(debouncedValue) > 1) {
    const response = await fetch(`/api/locations/${debouncedValue}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();
    return callback(jsonData);
  }
};
