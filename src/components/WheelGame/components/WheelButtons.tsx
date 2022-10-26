import React from 'react';
import styled, { css } from 'styled-components';
import { IWheelButton } from '../../../interface/components-ts/wheel-ts/IWheel';

const Button:any = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93px;
  margin-bottom: 24px;
  text-transform: uppercase;
  padding: 8px 30px;
  border-radius: 100px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: #FFFFFF;
  cursor: pointer;
  
  ${({ type }:any) => type === 'purple' && css`
    background: linear-gradient(88.23deg, #6F39CC 1.5%, #8740FF 98.5%);
    
    &:hover {
      background: linear-gradient(88.23deg, #6F39CC 1.5%, #8740FF 98.5%);
      border: 2px solid #8B59DE;
      box-shadow: 0 2px 12px 2px rgba(148, 99, 233, 0.64);
      padding: 6px 30px;
    }
    
    &:active {
      background: #561DB8;
      box-shadow: none;
      border: none;
      padding: 8px 30px;
    }
  `}
  
  ${({ type }:any) => type === 'pink' && css`
    background: linear-gradient(88.22deg, #C918C3 1.52%, #FF50F9 98.49%);

    &:hover {
      background: linear-gradient(88.22deg, #C918C3 1.52%, #FF50F9 98.49%);
      border: 2px solid #E864E4;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 2px rgba(232, 100, 228, 0.64);
      padding: 6px 30px;
    }
    
    &:active {
      background: #B81DB2;
      border: none;
      box-shadow: none;
      padding: 8px 30px;
    }
  `}
  
  ${({ type }:any) => type === 'lightblue' && css`
    background: linear-gradient(88.22deg, #1871C9 1.51%, #61B0FF 98.49%);

    &:hover {
      background: linear-gradient(88.22deg, #1871C9 1.51%, #61B0FF 98.49%);
      border: 2px solid #64A6E8;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 2px rgba(100, 166, 232, 0.64);
      padding: 6px 30px;
    }

    &:active {
      background: #1D6AB8;
      border: none;
      box-shadow: none;
      padding: 8px 30px;
    }
    
  `}
  
  ${({ type }:any) => type === 'orange' && css`
    background: linear-gradient(88.22deg, #FC7307 1.51%, #FF8B33 98.49%);

    &:hover {
      background: linear-gradient(88.22deg, #FC7307 1.51%, #FF8B33 98.49%);
      border: 2px solid #E89D64;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 2px rgba(232, 157, 100, 0.64);
      padding: 6px 30px;
    }

    &:active {
      background: #B8570B;
      border: none;
      box-shadow: none;
      padding: 8px 30px;
    }
    
  `}
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media(max-width: 586px) {
    margin: 0 0 0 0;
    width: 72px;
    padding: 8px 20px;
    font-family: Noto Sans,serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.3px;
    color: #FFFFFF;
  }
`;

const WheelButton = ({ type, item, onClick, children }:IWheelButton) => (
    // eslint-disable-next-line react/no-children-prop
    <Button type={type} item={item} onClick={onClick} children={children}/>
);

export default WheelButton;