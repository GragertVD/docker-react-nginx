import { Background, CardContainer } from './style';
import { ReactNode, useState } from 'react';

interface Popup {
  children?: ReactNode;
}

export const usePopup = (popupClose?: Function) => {

  const [openPopup, setOpenPopup] = useState(false);

  const popupOpen = () => {
    setOpenPopup(true);
  }


  const PopupWrapper: React.FC<Popup> = (props) => {

    const closeCardFromKey = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        popupClose && popupClose();
        document.removeEventListener('keydown', closeCardFromKey);
        setOpenPopup(false);
      }
    };

    const closeCardFromClick = (e: MouseEvent) => {
      // if(openPopup){

      const elCardContainer = document.querySelector(".card_container");
      const target = (e.target as Node);
      console.log("click");

      if (!elCardContainer?.contains(target)) {
        popupClose && popupClose();
        document.removeEventListener('click', closeCardFromClick);
        setOpenPopup(false);
      }
      // }
    };

    if (openPopup) {
      document.addEventListener('keydown', closeCardFromKey);
      document.addEventListener('click', closeCardFromClick);
    }

    return (
      <Background openCard={openPopup}
      // onClick={() => { popupClose && popupClose(); setOpenPopup(false)}}
      >
        <CardContainer className='card_container' openCard={openPopup}
        // onClick={(e) => e.stopPropagation()}
        >
          {
            openPopup
              ?
              props.children
              :
              <></>
          }
        </CardContainer>
      </Background>
    )
  };

  return { popupOpen, PopupWrapper }

};



