import { FC, useState, useEffect } from 'react';
import { IImage } from '../../constants/interface';
import './Image.scss';

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
      className={`${className} ${imageSrc === srcSmall ? 'list__img_loading' : 'list__img_onload'}`}
      src={imageSrc}
      alt={alt}
    />
  );
};

export { Image };
