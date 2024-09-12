import { data } from "./data";

const findFirstAndLastDigit = (line: string): number => {
  const firstMatch = line.match(/\d/);
  const lastMatch = line.match(/\d(?!.*\d)/);

  if (!firstMatch || !lastMatch) {
    throw new Error("Input must contain at least two digits.");
  }

  const result = firstMatch[0] + lastMatch[0];
  return Number(result);
};

const getCalibrationValuesSummed = (arrayOfLines) => {
  const twoDigitsValues: number[] = arrayOfLines.map(findFirstAndLastDigit);

  const sum = twoDigitsValues.reduce((acc, value) => acc + value, 0);
  return sum;
};

const result = getCalibrationValuesSummed(data);
