import { data } from "./data";

const numberMappings = {
  one: "o1e",
  two: "t2o",
  three: "t3e",
  four: "f4r",
  five: "f5e",
  six: "s6x",
  seven: "s7n",
  eight: "e8t",
  nine: "n9e",
};

const findFirstAndLastDigit = (line: string): number => {
  for (let num of Object.keys(numberMappings)) {
    line = line.replaceAll(
      num,
      numberMappings[num as keyof typeof numberMappings]
    );
  }

  const firstMatch = line.match(/\d/);
  const lastMatch = line.match(/\d(?!.*\d)/);

  if (!firstMatch || !lastMatch) {
    throw new Error("Input must contain at least two digits.");
  }

  const calibrationValue = firstMatch[0] + lastMatch[0];

  return Number(calibrationValue);
};

const getCalibrationValuesSummed = (arrayOfLines: string[]) => {
  const calibrationValues: number[] = arrayOfLines.map(findFirstAndLastDigit);

  const sum = calibrationValues.reduce((acc, value) => acc + value, 0);
  return sum;
};

const result = getCalibrationValuesSummed(data);
console.log("result", result);
