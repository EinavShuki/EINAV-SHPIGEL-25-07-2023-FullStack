import _ from 'lodash';

export const getOptions = (valuesArray, key) => {
  return _.reduce(
    valuesArray,
    (acc, curr) => {
      acc.push({
        value: curr.Key,
        label: curr.LocalizedName,
        key,
      });
      return acc;
    },
    []
  );
};
