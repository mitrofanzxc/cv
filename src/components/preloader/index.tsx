import { FC, Suspense } from 'react';
import { PreloaderSuspenseProps } from '../../shared/interface';

import { Preloader } from './Preloader';

const PreloaderSuspense: FC<PreloaderSuspenseProps> = ({ children }) => {
  return <Suspense fallback={<Preloader />}>{children}</Suspense>;
};

export { PreloaderSuspense };
