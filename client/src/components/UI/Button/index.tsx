import React from 'react'
import { StyledButton } from './style';


interface IPropsButton {
  onClick?: () => void;
  colorBG?: string;
  color?: string;
  text: string;
  height?: string;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<IPropsButton> = ({ colorBG, text, onClick, height = "48px", width, color, type = "button" }) =>
  <StyledButton type={type} onClick={onClick} colorBG={colorBG} color={color} height={height} width={width}>{text}</StyledButton>

export default Button;