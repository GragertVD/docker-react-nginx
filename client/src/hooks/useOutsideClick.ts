import { Dispatch, SetStateAction, useEffect } from 'react';

interface IuseOutsideClick {
  element: React.RefObject<HTMLElement>;
  setStateOutsideClick: Dispatch<SetStateAction<boolean>>;
}

export const useOutsideClick = ({ element, setStateOutsideClick }: IuseOutsideClick) => {
  useEffect(() => {
    const closeCardFromKey = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setStateOutsideClick(false);
      }
    };

    const closeCardFromClick = (e: MouseEvent) => {
      const target = e.target;

      if (!(target instanceof Node))
        return
      if (!element.current)
        return

        //document.getElementById("menu-")  --- чтобы не закрывалось при клике на список статуса
      if (!element.current.contains(target) && document.getElementById("menu-") === null) {
        setStateOutsideClick(false);
      }
    };

    setTimeout(() => {
      document.addEventListener('keydown', closeCardFromKey);
      document.addEventListener('click', closeCardFromClick);
    }, 0);

    return () => {
      document.removeEventListener('click', closeCardFromClick);
      document.removeEventListener('keydown', closeCardFromKey);
    }
  }, [element, setStateOutsideClick]);
}