import { NextApiRequest, NextApiResponse } from "next";
import config from "../next.config";
import { getImageSrc } from "./getImageSrc";
import { getInt } from "./getInt";
import { getWidth } from "./getWidth";
import { loader } from "./loader";

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const src = getImageSrc({
    brand: req.query.brand,
    id: req.query.id,
  });

  const width = getWidth({
    width: getInt(req.query.width),
    sizes: config.images.deviceSizes,
  });

  const quality = getInt(req.query.q);

  const url = loader({
    root: config.images.path,
    src,
    width,
    quality,
  });

  res.redirect(url);
};
