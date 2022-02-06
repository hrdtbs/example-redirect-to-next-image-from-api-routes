export const getImageSrc = ({
  brand,
  id,
}: {
  brand: unknown;
  id: unknown;
}): string | undefined => {
  if (typeof brand === "string" && typeof id === "string") {
    return `/static/${brand}/${id}.png`;
  }
  return undefined;
};
