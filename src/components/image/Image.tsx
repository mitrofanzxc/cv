import { FC, useState, useEffect } from 'react';
import { IImage } from '../../constants/interface';

import './Image.scss';

const Image: FC<IImage> = ({ src, srcSmall, alt, className }) => {
  const [imageSrc, setImageSrc] = useState<string>(srcSmall);

  const CLASSNAME = `${className} ${
    imageSrc === srcSmall ? 'list-item__img-loading' : 'list-item__img-onload'
  }`;

  useEffect(() => {
    const IMG = new window.Image();
    IMG.src = src;
    IMG.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return <img className={CLASSNAME} src={imageSrc} alt={alt} />;
};

export { Image };
