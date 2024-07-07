import React, { useState } from 'react'
import { ReactComponent as IconDarkTheme } from "../../../img/icon-dark-theme.svg";
import { ReactComponent as IconLightTheme } from "../../../img/icon-light-theme.svg";
import Toggle from '../../UI/Toggle';
import { ChangeThemeContainer } from './style';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';


const ChageTheme: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ChangeThemeContainer>
      <IconLightTheme onClick={() => { theme === 'dark' && setTheme('light') }} />
      <Toggle state={['light', 'dark']} currentState={theme} setState={setTheme} />
      <IconDarkTheme onClick={() => { theme === 'light' && setTheme('dark') }} />
    </ChangeThemeContainer>
  )
}

export default ChageTheme;