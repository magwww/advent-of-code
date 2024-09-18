import { data, comparisonObject } from "./data";

//compare objects and see if any value exceeds ones in comparisonObject
const compareObject = (
  obj: Record<string, number>,
  comparisonObj: Record<string, number>
) => {
  for (let key in obj) {
    return obj[key] > comparisonObj[key] ? false : true;
  }
};

const findValidIndexes = (
  arr: Array<Array<Record<string, number>>>,
  comparisonObj: Record<string, number>
) => {
  return arr.reduce((validIndexes: number[], subArray, index) => {
    const allObjectsValid = subArray.every((obj) =>
      compareObject(obj, comparisonObj)
    );

    if (allObjectsValid) {
      validIndexes.push(index + 1);
    }

    return validIndexes;
  }, []);
};

const sum = findValidIndexes(data, comparisonObject).reduce(
  (acc, value) => acc + value,
  0
);

console.log("sum", sum);
