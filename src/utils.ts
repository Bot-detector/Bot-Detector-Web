export const replaceUnderscoreWithSpace = (input: String): String => input.replace(/_/g, " ");
export const toPercentage = (input: number): String => `${(input * 100).toFixed(2)}%`