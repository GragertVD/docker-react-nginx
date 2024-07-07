import React, { Dispatch, SetStateAction, useRef } from 'react'
import { DropMenuConteiner, DropMenuList } from './style';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

export interface IMenuItem {
  text: string;
  action: () => void;
}

export interface IDropMenu {
  listItem: IMenuItem | IMenuItem[];
  close: Dispatch<SetStateAction<boolean>>;
}

const DropMenu: React.FC<IDropMenu> = (props) => {

  const refDropMenu = useRef(null);
  useOutsideClick({ element: refDropMenu, setStateOutsideClick: props.close })


  return (
    <DropMenuConteiner ref={refDropMenu}>
      <DropMenuList>
        {
          Array.isArray(props.listItem)
            ?
            props.listItem.map((item, index) => <li key={index} onClick={item.action}>{item.text}</li>)
            :
            <li onClick={props.listItem.action}>{props.listItem.text}</li>
        }
      </DropMenuList>
    </DropMenuConteiner>
  )
}






export default DropMenu;