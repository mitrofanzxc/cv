import { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';

const useModalOpen = () => {
  const isModalOpen = useAppSelector(({ modal: { value } }) => value);

  useEffect(() => {
    const BODY = document.querySelector('.body') as HTMLBodyElement;

    if (isModalOpen) {
      BODY.classList.add('body__overflow');
    } else {
      BODY.classList.remove('body__overflow');
    }
  }, [isModalOpen]);
};

export { useModalOpen };
