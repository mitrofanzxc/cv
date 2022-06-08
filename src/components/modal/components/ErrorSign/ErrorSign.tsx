import { FC } from 'react';
import { ErrorProps } from '../../../../shared/interface';

import './ErrorSign.scss';

const ErrorSign: FC<ErrorProps> = ({ errorMsg }) => {
  return (
    <div className="error-modal">
      <h3 className="error-modal__title">Error</h3>
      <div>{errorMsg}</div>
    </div>
  );
};

export { ErrorSign };
