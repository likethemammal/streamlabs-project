import { useEffect, useState, useMemo } from "react";
import _ from "lodash";

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

export default function useItemsWithImages({ items, setItems }) {
  const srcs = items.map(({ src }) => src).filter((exists) => exists);

  const [images, setImages] = useState({});
  const loaded = !_.isEmpty(images);

  // load images and create object keyed by their src
  useEffect(() => {
    const call = async () => {
      let bySrc = {};

      await Promise.all(
        srcs.map(async (src) => {
          const loadedImage = await loadImage(src);

          bySrc[src] = loadedImage;
        })
      );

      setImages(bySrc);
    };

    call();
  }, [srcs.length]);

  // when images are loaded, attach to items
  useEffect(() => {
    if (!loaded) {
      return;
    }

    const itemsWithImages = items.map(({ ...item }, i) => {
      const { src, width: shapeWidth } = item;

      if (!src) {
        return item;
      }

      const image = images[src];

      // reset item height to image aspect ratio
      const { width, height } = image;
      const aspectRatio = height / width;
      const newHeight = shapeWidth * aspectRatio;

      return {
        ...item,
        image,
        height: newHeight
      };
    });

    setItems(itemsWithImages);
  }, [loaded]);
}
