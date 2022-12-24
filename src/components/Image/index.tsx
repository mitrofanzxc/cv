import { FC, useState, useEffect } from 'react';
import { IImage } from '../../constants/interface';
import './style.scss';

const Image: FC<IImage> = ({ src, srcSmall, alt, className }) => {
  const [imageSrc, setImageSrc] = useState<string>(srcSmall);

  useEffect(() => {
    const IMG = new window.Image();
    IMG.src = src;
    IMG.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <img
      className={`${className} ${imageSrc === srcSmall ? 'image_loading' : 'image_onload'}`}
      src={imageSrc}
      alt={alt}
    />
  );
};

export { Image };
