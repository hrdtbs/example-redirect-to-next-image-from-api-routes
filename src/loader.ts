interface LoaderProps {
  root: string;
  src?: string;
  width?: number;
  quality?: number;
}

export const loader = ({ root, src, width, quality }: LoaderProps) => {
  const missingValues = [];

  if (!src) missingValues.push("src");
  if (!width) missingValues.push("width");

  if (missingValues.length > 0) {
    throw new Error(`MissingValues: ${missingValues.join(", ")}`);
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
};
