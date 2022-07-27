export const replaceUnderscoreWithSpace = (input: string): string =>
  input.replace(/_/g, " ");
export const toPercentage = (input: number): string =>
  `${(input * 100).toFixed(2)}%`;
