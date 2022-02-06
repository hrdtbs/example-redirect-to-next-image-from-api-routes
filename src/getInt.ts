export const getInt = (x: unknown): number | undefined => {
  if (typeof x === "number") {
    return x;
  }
  if (typeof x === "string") {
    return parseInt(x, 10);
  }
  return undefined;
};
