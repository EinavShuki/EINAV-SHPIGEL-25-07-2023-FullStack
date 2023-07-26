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
