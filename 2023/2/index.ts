import { data, comparisonObject } from "./data";

//PART 1

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

//PART 2

type CubesColors = "red" | "blue" | "green";

const findMinimumSetOfCubes = (
  arr: Array<Array<Record<string, number>>>
): Array<Array<number>> => {
  return arr.map((subArray) => {
    const maxValues = { green: 0, blue: 0, red: 0 };

    subArray.forEach((obj) => {
      for (let key in obj) {
        if (obj[key] > maxValues[key as CubesColors]) {
          maxValues[key as CubesColors] = obj[key];
        }
      }
    });

    return Object.values(maxValues);
  });
};

const leastNumberOfCubes = findMinimumSetOfCubes(data);

const power = leastNumberOfCubes.map((subArray) =>
  subArray.reduce((acc, num) => acc * num, 1)
);

const sumOfPowers = power.reduce((acc, value) => acc + value, 0);

console.log("sumOfPowers", sumOfPowers);
