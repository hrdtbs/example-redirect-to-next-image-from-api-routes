export const getWidth = ({
  width,
  sizes,
}: {
  width?: number;
  sizes: number[];
}) => {
  if (width === undefined) {
    return undefined;
  }
  return sizes.find((size) => size >= width) || sizes[sizes.length - 1];
};
