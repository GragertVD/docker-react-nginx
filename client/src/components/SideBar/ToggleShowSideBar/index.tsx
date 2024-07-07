import React from 'react'
import { ReactComponent as IconHiden } from "../../../img/icon-hide-sidebar.svg";
import { ReactComponent as IconShow } from "../../../img/icon-show-sidebar.svg";
import { IPropsToggleShowSideBar } from '../../../interface';
import { Item, ItemHiden } from './style';


export const ToggleShowSideBar: React.FC<IPropsToggleShowSideBar> = ({ StateShowSideBar, setStateShowSideBar }) => {

  const ToggleVisibleSideBar = () => {
    StateShowSideBar === 'show'
      ? setStateShowSideBar('hiden')
      : setStateShowSideBar('show');
  };

  if (StateShowSideBar === 'show') {
    return (
      <Item
        onClick={ToggleVisibleSideBar}
      >
        <IconHiden />Hide Sidebar
      </Item>
    )
  } else if (StateShowSideBar === 'hiden') {
    return (
      <ItemHiden
        onClick={ToggleVisibleSideBar}
      >
        <IconShow />
      </ItemHiden>
    )
  }
  return (<div>load</div>)    //костыль, надо исправить
}

